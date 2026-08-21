import React, { useState } from 'react';
import { Volume2, Mic, Play, Pause, RotateCcw, Star, Sparkles, Award } from 'lucide-react';
import BopomofoRuby from '../Common/BopomofoRuby';
import MicRecorder from '../Common/MicRecorder';
import { useSpeech } from '../../hooks/useSpeech';
import { soundEffects } from '../../utils/soundEffects';

export default function KaraokePlayer({
  sentence,
  isCompleted = false,
  onSentenceLearned,
  speechRate = 0.8
}) {
  const {
    isPlaying,
    isListening,
    highlightedIndex,
    speechResult,
    transcript,
    errorMsg,
    speakKaraoke,
    stopSpeaking,
    startRecording,
    stopRecording
  } = useSpeech(speechRate);

  const [lastStars, setLastStars] = useState(0);

  const handlePlayAudio = () => {
    if (isPlaying) {
      stopSpeaking();
    } else {
      speakKaraoke(sentence.text, { rate: speechRate, tokens: sentence.tokens });
    }
  };

  const handleMicComplete = (evalResult) => {
    setLastStars(evalResult.stars);
    if (evalResult.score >= 50) {
      onSentenceLearned && onSentenceLearned(sentence.id, evalResult.stars);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-xl border-3 border-pink-100 hover:border-pink-200 transition-all duration-300">
      {/* 頂部資訊與 Emoji */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-4xl p-2 bg-pink-50 rounded-2xl border border-pink-100">
            {sentence.emoji || '📖'}
          </span>
          <div>
            <h3 className="text-xs font-bold text-rose-500 tracking-wider">
              {sentence.tokens.filter(t => t.bopomofo).map(t => t.bopomofo).join(' ')}
            </h3>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300 mt-0.5">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                <span>已通關</span>
              </span>
            )}
          </div>
        </div>

        {/* 快速播放按鈕 */}
        <button
          onClick={handlePlayAudio}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm md:text-base text-white shadow-md transition transform active:scale-95 ${
            isPlaying
              ? 'bg-rose-500 ring-4 ring-rose-200 animate-pulse'
              : 'bg-gradient-to-r from-bubble-pink to-rose-400 hover:scale-105'
          }`}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="fill-white" />}
          <span>{isPlaying ? '暫停朗讀' : '播放卡拉OK'}</span>
        </button>
      </div>

      {/* 🌟 核心卡拉OK逐字注音發光排版區 */}
      <div className="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-50/80 via-pink-50/40 to-purple-50/60 border-2 border-amber-200/70 shadow-inner flex flex-wrap items-center justify-center gap-2 sm:gap-3 min-h-[140px]">
        {sentence.tokens.map((token, idx) => {
          const isHighlighted = highlightedIndex === idx;
          return (
            <BopomofoRuby
              key={idx}
              char={token.char}
              bopomofo={token.bopomofo}
              size="lg"
              highlight={isHighlighted}
              className={isHighlighted ? 'scale-125 transition-transform duration-150' : ''}
            />
          );
        })}
      </div>

      {/* 🎤 跟讀挑戰區 */}
      <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-emerald-50/40 p-5 rounded-2xl">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <Sparkles className="text-emerald-500" size={18} />
            <h4 className="text-base font-black text-emerald-900">
              麥克風句子朗讀大挑戰
            </h4>
          </div>
          <p className="text-xs text-gray-600 font-medium">
            點擊右邊麥克風，跟著節奏完整唸出上面這句話！唸得越準，星星越多喔！🌟
          </p>
        </div>

        <MicRecorder
          isListening={isListening}
          onStart={() => startRecording(sentence.text, handleMicComplete)}
          onStop={stopRecording}
          transcript={transcript}
          speechResult={speechResult}
          errorMsg={errorMsg}
          size="md"
          label="按我開始跟讀"
        />
      </div>
    </div>
  );
}
