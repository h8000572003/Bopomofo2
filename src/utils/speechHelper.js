// Web Speech API 語音朗讀 (TTS) 與 台灣教育部官方注音音檔核心引擎

// 台灣教育部標準 37 個注音符號與 5 聲調之呼讀音對應表 (備援 TTS 使用)
export const BOPOMOFO_HU_DU_MAP = {
  // 聲母 (21個)
  'ㄅ': '玻',
  'ㄆ': '坡',
  'ㄇ': '摸',
  'ㄈ': '佛',
  'ㄉ': '得',
  'ㄊ': '特',
  'ㄋ': '訥',
  'ㄌ': '勒',
  'ㄍ': '哥',
  'ㄎ': '科',
  'ㄏ': '喝',
  'ㄐ': '基',
  'ㄑ': '欺',
  'ㄒ': '希',
  'ㄓ': '知',
  'ㄔ': '吃',
  'ㄕ': '詩',
  'ㄖ': '日',
  'ㄗ': '資',
  'ㄘ': '雌',
  'ㄙ': '思',
  // 介音 (3個)
  'ㄧ': '衣',
  'ㄨ': '烏',
  'ㄩ': '迂',
  // 韻母 (13個)
  'ㄚ': '啊',
  'ㄛ': '喔',
  'ㄜ': '婀',
  'ㄝ': '誒',
  'ㄞ': '哀',
  'ㄟ': '欸',
  'ㄠ': '熬',
  'ㄡ': '歐',
  'ㄢ': '安',
  'ㄣ': '恩',
  'ㄤ': '骯',
  'ㄥ': '亨',
  'ㄦ': '兒',
  // 聲調
  'ˊ': '第二聲',
  'ˇ': '第三聲',
  'ˋ': '第四聲',
  '˙': '輕聲',
  'ˉ': '第一聲',
};

export const BOPOMOFO_SYMBOLS_SET = new Set([
  'ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄗ','ㄘ','ㄙ',
  'ㄚ','ㄛ','ㄜ','ㄝ','ㄞ','ㄟ','ㄠ','ㄡ','ㄢ','ㄣ','ㄤ','ㄥ','ㄦ',
  'ㄧ','ㄨ','ㄩ'
]);

/**
 * 將文字中獨立或連續的注音符號轉換為台灣教育部標準呼讀音
 * @param {string} text 包含注音符號的文字或口訣
 * @returns {string} 轉換為標準發音漢字後的文字
 */
export function convertBopomofoToHuDu(text) {
  if (!text) return '';
  if (BOPOMOFO_HU_DU_MAP[text]) {
    return BOPOMOFO_HU_DU_MAP[text];
  }
  return text.replace(/[ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦˊˇˋ˙ˉ]/g, (match) => {
    return BOPOMOFO_HU_DU_MAP[match] || match;
  });
}

class SpeechHelper {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.twVoice = null;
    this.recognition = null;
    this.isListening = false;
    this.currentKaraokeTimer = null;
    this.currentAudio = null;

    if (this.synth) {
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    // 優先選取台灣繁體中文語音 (zh-TW)，若無則選取繁體或中文語音
    this.twVoice = 
      this.voices.find(v => v.lang === 'zh-TW' || v.lang === 'cmn-Hant-TW') ||
      this.voices.find(v => v.lang.includes('TW') || v.lang.includes('tw')) ||
      this.voices.find(v => v.lang.startsWith('zh')) ||
      null;
  }

  getAvailableVoices() {
    if (!this.synth) return [];
    return this.synth.getVoices().filter(v => v.lang.startsWith('zh'));
  }

  // 1. 播放教育部官方標準 37 注音符號真人原聲音檔 (WAV)
  playBopomofoAudio(symbol) {
    return new Promise((resolve) => {
      this.stopSpeaking();

      if (BOPOMOFO_SYMBOLS_SET.has(symbol)) {
        try {
          const audioUrl = `./audio/bopomofo/${encodeURIComponent(symbol)}.wav`;
          const audio = new Audio(audioUrl);
          this.currentAudio = audio;

          audio.onended = () => {
            this.currentAudio = null;
            resolve();
          };

          audio.onerror = (err) => {
            console.warn(`Local audio for ${symbol} failed, falling back to TTS`, err);
            this.currentAudio = null;
            this.speakFallbackTTS(symbol).then(resolve);
          };

          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch((e) => {
              console.warn(`Audio play blocked or failed for ${symbol}`, e);
              this.speakFallbackTTS(symbol).then(resolve);
            });
          }
          return;
        } catch (e) {
          console.warn('Failed to initialize Audio', e);
        }
      }

      // 若非 37 符號（如聲調或例句）
      this.speakText(symbol).then(resolve);
    });
  }

  // 專門朗讀單一注音符號（優先使用官方標準原聲音檔）
  speakBopomofo(symbol, options = {}) {
    return this.playBopomofoAudio(symbol);
  }

  // 備援 TTS 朗讀
  speakFallbackTTS(symbol) {
    const textToSpeak = BOPOMOFO_HU_DU_MAP[symbol] || symbol;
    return this.speakText(textToSpeak, { rawText: true });
  }

  // 2. 朗讀文字 (單字、自訂文字或句子)
  speakText(text, options = {}) {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      this.stopSpeaking(); // 停止目前所有朗讀與音檔

      // 若傳入的是單一注音符號，優先播放教育部官方原聲音檔！
      if (!options.forceTTS && typeof text === 'string' && text.length === 1 && BOPOMOFO_SYMBOLS_SET.has(text)) {
        this.playBopomofoAudio(text).then(resolve);
        return;
      }

      // 如果文字包含注音符號（如口訣），轉換為標準呼讀音以利 TTS 自然發聲
      const textToSpeak = options.rawText ? text : convertBopomofoToHuDu(text);

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = options.rate || 0.85; // 稍慢適合小朋友聽清楚
      utterance.pitch = options.pitch || 1.1; // 稍微輕快活潑的音調

      if (options.voice) {
        utterance.voice = options.voice;
      } else if (this.twVoice) {
        utterance.voice = this.twVoice;
      } else {
        utterance.lang = 'zh-TW';
      }

      utterance.onend = () => resolve();
      utterance.onerror = (e) => {
        console.warn('Speech synthesis error', e);
        resolve();
      };

      this.synth.speak(utterance);
    });
  }

  // 3. 句子卡拉OK精準逐字高亮朗讀 (消除衝突亂跳，保證平滑單向推進)
  speakSentenceWithKaraoke(sentenceText, options = {}, onHighlightIndex = () => {}) {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      this.stopSpeaking();

      const utterance = new SpeechSynthesisUtterance(sentenceText);
      const rate = options.rate || 0.8;
      utterance.rate = rate;
      utterance.pitch = options.pitch || 1.05;

      if (options.voice) {
        utterance.voice = options.voice;
      } else if (this.twVoice) {
        utterance.voice = this.twVoice;
      } else {
        utterance.lang = 'zh-TW';
      }

      // 取得精準 tokens 清單
      const tokens = options.tokens || sentenceText.split('').map(c => ({ char: c }));
      const tokenCount = tokens.length;

      // 建立基於語速與標點符號停頓的精確時間軸
      const baseCharMs = Math.max(200, Math.round(220 / rate));
      const timeline = [];
      let accumulatedMs = 0;

      tokens.forEach((t, i) => {
        timeline.push({ index: i, startMs: accumulatedMs });
        if (/[，、]/.test(t.char)) {
          accumulatedMs += Math.round(baseCharMs * 0.7) + 180; // 逗號自然停頓
        } else if (/[。！？]/.test(t.char)) {
          accumulatedMs += Math.round(baseCharMs * 0.7) + 240; // 句號自然停頓
        } else {
          accumulatedMs += baseCharMs;
        }
      });

      let startTime = null;
      let animFrameId = null;
      let lastReportedIndex = -1;

      const updateKaraoke = () => {
        if (!startTime) return;
        const elapsed = performance.now() - startTime;

        // 找出目前時間點所對應的 token index
        let activeIdx = 0;
        for (let i = 0; i < timeline.length; i++) {
          if (elapsed >= timeline[i].startMs) {
            activeIdx = timeline[i].index;
          } else {
            break;
          }
        }

        // 單向遞增推進，絕不倒退或亂跳
        if (activeIdx > lastReportedIndex && activeIdx < tokenCount) {
          lastReportedIndex = activeIdx;
          onHighlightIndex(activeIdx);
        }

        if (activeIdx < tokenCount - 1) {
          animFrameId = requestAnimationFrame(updateKaraoke);
        }
      };

      this.currentKaraokeTimer = () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        startTime = null;
      };

      utterance.onstart = () => {
        startTime = performance.now();
        lastReportedIndex = 0;
        onHighlightIndex(0);
        animFrameId = requestAnimationFrame(updateKaraoke);
      };

      utterance.onend = () => {
        if (this.currentKaraokeTimer) {
          this.currentKaraokeTimer();
          this.currentKaraokeTimer = null;
        }
        onHighlightIndex(-1); // 重設高亮
        resolve();
      };

      utterance.onerror = (e) => {
        console.warn('Karaoke speech error', e);
        if (this.currentKaraokeTimer) {
          this.currentKaraokeTimer();
          this.currentKaraokeTimer = null;
        }
        onHighlightIndex(-1);
        resolve();
      };

      this.synth.speak(utterance);
    });
  }

  stopSpeaking() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (this.currentKaraokeTimer) {
      this.currentKaraokeTimer();
      this.currentKaraokeTimer = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }
  }

  // 4. 語音辨識 (STT) 支援
  isSpeechRecognitionSupported() {
    return typeof window !== 'undefined' && 
      (window.SpeechRecognition !== undefined || window.webkitSpeechRecognition !== undefined);
  }

  startListening({ onResult, onEnd, onError, lang = 'zh-TW' }) {
    const SpeechRecognitionClass = 
      typeof window !== 'undefined' 
        ? (window.SpeechRecognition || window.webkitSpeechRecognition) 
        : null;

    if (!SpeechRecognitionClass) {
      onError && onError(new Error('您的瀏覽器尚未支援麥克風語音辨識，請使用 Chrome / Edge 瀏覽器。'));
      return null;
    }

    try {
      this.stopListening();

      const recognition = new SpeechRecognitionClass();
      recognition.lang = lang;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 3;

      recognition.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        onResult && onResult({
          finalTranscript: finalTranscript.trim(),
          interimTranscript: interimTranscript.trim(),
          isFinal: finalTranscript.length > 0
        });
      };

      recognition.onerror = (event) => {
        console.warn('STT recognition error:', event.error);
        onError && onError(event.error);
      };

      recognition.onend = () => {
        this.isListening = false;
        onEnd && onEnd();
      };

      this.recognition = recognition;
      this.isListening = true;
      recognition.start();
      return recognition;
    } catch (e) {
      console.warn('Failed to start speech recognition', e);
      onError && onError(e);
      return null;
    }
  }

  stopListening() {
    if (this.recognition) {
      try {
        this.recognition.abort();
      } catch (e) {}
      this.recognition = null;
    }
    this.isListening = false;
  }

  // 5. 計算跟讀準確度與比對分數
  calculateAccuracy(expectedText, spokenText) {
    if (!spokenText || !expectedText) return { score: 0, stars: 0, matchedChars: [] };

    // 清理標點符號與空白
    const cleanExpected = expectedText.replace(/[，。！？、\s]/g, '');
    const cleanSpoken = spokenText.replace(/[，。！？、\s]/g, '');

    if (!cleanSpoken) return { score: 0, stars: 0, matchedChars: [] };

    // 計算符合的字元數
    let matchCount = 0;
    const matchedChars = [];

    for (let i = 0; i < cleanExpected.length; i++) {
      const char = cleanExpected[i];
      if (cleanSpoken.includes(char)) {
        matchCount++;
        matchedChars.push(char);
      }
    }

    const similarity = Math.min(100, Math.round((matchCount / cleanExpected.length) * 100));

    // 星星評等規則
    let stars = 1;
    if (similarity >= 85) {
      stars = 3;
    } else if (similarity >= 50) {
      stars = 2;
    } else {
      stars = 1;
    }

    return {
      score: similarity,
      stars,
      matchedChars,
      isSuperPass: stars === 3
    };
  }
}

export const speechHelper = new SpeechHelper();
