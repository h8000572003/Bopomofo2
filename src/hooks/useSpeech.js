import { useState, useCallback, useRef } from 'react';
import { speechHelper } from '../utils/speechHelper';
import { soundEffects } from '../utils/soundEffects';

export function useSpeech(defaultRate = 0.85) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [speechResult, setSpeechResult] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const recognitionRef = useRef(null);

  // 播放單字或注音
  const speakText = useCallback(async (text, customOptions = {}) => {
    soundEffects.playBubble();
    setIsPlaying(true);
    setErrorMsg(null);
    try {
      await speechHelper.speakText(text, {
        rate: customOptions.rate || defaultRate,
        ...customOptions
      });
    } catch (e) {
      console.warn('Speech error', e);
    } finally {
      setIsPlaying(false);
    }
  }, [defaultRate]);

  // 播放句子附帶逐字卡拉OK
  const speakKaraoke = useCallback(async (sentenceText, customOptions = {}) => {
    soundEffects.playBubble();
    setIsPlaying(true);
    setHighlightedIndex(0);
    setErrorMsg(null);
    try {
      await speechHelper.speakSentenceWithKaraoke(
        sentenceText,
        { rate: customOptions.rate || defaultRate, ...customOptions },
        (idx) => setHighlightedIndex(idx)
      );
    } catch (e) {
      console.warn('Karaoke error', e);
    } finally {
      setIsPlaying(false);
      setHighlightedIndex(-1);
    }
  }, [defaultRate]);

  // 停止播放
  const stopSpeaking = useCallback(() => {
    speechHelper.stopSpeaking();
    setIsPlaying(false);
    setHighlightedIndex(-1);
  }, []);

  // 開始麥克風跟讀練習
  const startRecording = useCallback((expectedText, onComplete) => {
    setErrorMsg(null);
    setTranscript('');
    setSpeechResult(null);

    if (!speechHelper.isSpeechRecognitionSupported()) {
      setErrorMsg('此瀏覽器尚未支援麥克風語音辨識，請使用 Google Chrome 或 Microsoft Edge 進行跟讀練習！');
      return;
    }

    soundEffects.playBubble();
    setIsListening(true);

    recognitionRef.current = speechHelper.startListening({
      onResult: ({ finalTranscript, interimTranscript, isFinal }) => {
        const currentText = finalTranscript || interimTranscript;
        setTranscript(currentText);

        if (isFinal && expectedText) {
          const evalResult = speechHelper.calculateAccuracy(expectedText, currentText);
          setSpeechResult(evalResult);
          if (evalResult.score >= 50) {
            soundEffects.playCorrect();
          } else {
            soundEffects.playWrong();
          }
          if (onComplete) {
            onComplete(evalResult, currentText);
          }
        }
      },
      onEnd: () => {
        setIsListening(false);
      },
      onError: (err) => {
        setIsListening(false);
        if (err === 'not-allowed') {
          setErrorMsg('請允許麥克風權限才能跟讀練習喔！');
        } else if (err !== 'no-speech') {
          setErrorMsg('語音辨識遇到問題，請再試一次！');
        }
      }
    });
  }, []);

  // 停止麥克風
  const stopRecording = useCallback(() => {
    speechHelper.stopListening();
    setIsListening(false);
  }, []);

  return {
    isPlaying,
    isListening,
    highlightedIndex,
    speechResult,
    transcript,
    errorMsg,
    speakText,
    speakKaraoke,
    stopSpeaking,
    startRecording,
    stopRecording,
    setSpeechResult
  };
}
