// Web Speech API 語音朗讀 (TTS) 與 語音辨識 (STT) 核心引擎

class SpeechHelper {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.twVoice = null;
    this.recognition = null;
    this.isListening = false;

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
      this.voices.find(v => v.lang === 'zh-TW') ||
      this.voices.find(v => v.lang.includes('TW') || v.lang.includes('tw')) ||
      this.voices.find(v => v.lang.startsWith('zh')) ||
      null;
  }

  getAvailableVoices() {
    if (!this.synth) return [];
    return this.synth.getVoices().filter(v => v.lang.startsWith('zh'));
  }

  // 1. 朗讀文字 (單字、注音或自訂文字)
  speakText(text, options = {}) {
    return new Promise((resolve, reject) => {
      if (!this.synth) {
        resolve();
        return;
      }

      this.synth.cancel(); // 停止目前所有朗讀

      const utterance = new SpeechSynthesisUtterance(text);
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

  // 2. 句子卡拉OK逐字高亮朗讀
  speakSentenceWithKaraoke(sentenceText, options = {}, onHighlightIndex = () => {}) {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      this.synth.cancel();

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

      let intervalId = null;
      let currentIndex = 0;
      const textLen = sentenceText.length;
      
      // 計算平均每個字的亮起時間 (毫秒)
      const msPerChar = Math.max(220, Math.floor((360 / rate)));

      utterance.onstart = () => {
        onHighlightIndex(0);
        intervalId = setInterval(() => {
          currentIndex++;
          if (currentIndex < textLen) {
            onHighlightIndex(currentIndex);
          } else {
            clearInterval(intervalId);
          }
        }, msPerChar);
      };

      // 支援原生邊界事件 (若瀏覽器支援)
      utterance.onboundary = (event) => {
        if (event.name === 'word' || event.charIndex !== undefined) {
          onHighlightIndex(event.charIndex);
        }
      };

      utterance.onend = () => {
        if (intervalId) clearInterval(intervalId);
        onHighlightIndex(-1); // 重設
        resolve();
      };

      utterance.onerror = () => {
        if (intervalId) clearInterval(intervalId);
        onHighlightIndex(-1);
        resolve();
      };

      this.synth.speak(utterance);
    });
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  // 3. 語音辨識 (STT) 支援
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

  // 4. 計算跟讀準確度與比對分數
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
