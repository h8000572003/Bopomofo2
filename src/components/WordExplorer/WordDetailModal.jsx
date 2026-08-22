import React, { useState } from 'react';
import { X, Volume2, Mic, Sparkles, Star, ChevronRight, Check } from 'lucide-react';
import BopomofoRuby from '../Common/BopomofoRuby';
import AudioButton from '../Common/AudioButton';
import MicRecorder from '../Common/MicRecorder';
import { soundEffects } from '../../utils/soundEffects';
import { useSpeech } from '../../hooks/useSpeech';
import { BOPOMOFO_COLORS } from '../../utils/bopomofoHelper';

export default function WordDetailModal({
  word,
  isOpen,
  onClose,
  isCompleted = false,
  onMarkLearned,
  bopomofoScale = 'large'
}) {
  const {
    isPlaying,
    isListening,
    speechResult,
    transcript,
    errorMsg,
    speakText,
    startRecording,
    stopRecording
  } = useSpeech();

  const [selectedCharIdx, setSelectedCharIdx] = useState(0);

  if (!isOpen || !word) return null;

  const activeChar = word.characters[selectedCharIdx] || word.characters[0];

  const handleMicComplete = (evalResult) => {
    if (evalResult.score >= 50) {
      onMarkLearned(word.id, evalResult.stars);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-popIn">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl border-4 border-amber-200">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition z-10"
        >
          <X size={24} />
        </button>

        {/* 頂部大 Emoji 與單字大標 */}
        <div className="flex flex-col items-center justify-center text-center mt-2">
          <div className="text-7xl mb-2 animate-bounceSmall">{word.emoji}</div>

          {/* 完整單字注音排版 */}
          <div className="flex items-center justify-center gap-3 my-2 bg-amber-50/70 px-6 py-3 rounded-2xl border border-amber-100">
            {word.characters.map((charObj, idx) => (
              <BopomofoRuby
                key={idx}
                char={charObj.char}
                bopomofo={charObj.bopomofo}
                size="lg"
                annotationScale={bopomofoScale}
                highlight={idx === selectedCharIdx}
              />
            ))}
          </div>

          <p className="text-sm font-bold text-rose-500 mt-1 tracking-wider">
            {word.bpmfFull || word.characters.map(c => c.bopomofo).join(' ')} <span className="text-gray-400 font-normal">|</span> <span className="text-gray-600 font-semibold">{word.meaning}</span>
          </p>
        </div>

        {/* 發音控制列 */}
        <div className="flex flex-wrap items-center justify-center gap-3 my-4">
          <AudioButton
            label="標準發音"
            isPlaying={isPlaying}
            onClick={() => speakText(word.hanzi, { rate: 0.85 })}
            color="bg-bubble-pink hover:bg-pink-600"
          />
          <AudioButton
            label="慢速聽讀"
            isPlaying={isPlaying}
            onClick={() => speakText(word.hanzi, { rate: 0.6 })}
            color="bg-amber-500 hover:bg-amber-600"
            subLabel="0.6x"
          />
        </div>

        {/* 🔠 逐字與注音拆解學習區 */}
        <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-black text-gray-700 flex items-center gap-1.5">
              <span>🧩 注音聲韻拆解練習</span>
            </h4>
            {/* 字元切換籤 */}
            {word.characters.length > 1 && (
              <div className="flex gap-1.5">
                {word.characters.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      soundEffects.playBubble();
                      setSelectedCharIdx(i);
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                      selectedCharIdx === i
                        ? 'bg-bubble-purple text-white shadow-sm'
                        : 'bg-white text-gray-600 border hover:bg-gray-100'
                    }`}
                  >
                    第 {i + 1} 字：「{c.char}」
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 拆解細節按鈕：點擊個別發音 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            {/* 聲母 */}
            <div
              onClick={() => activeChar.initial && speakText(activeChar.initial, { rate: 0.7 })}
              className={`p-2.5 rounded-xl border-2 transition transform active:scale-95 cursor-pointer ${
                activeChar.initial
                  ? 'bg-rose-50 border-rose-200 hover:border-rose-400'
                  : 'bg-gray-50 border-gray-200 opacity-50'
              }`}
            >
              <span className="text-[11px] font-bold text-rose-500 block">聲母</span>
              <span className="text-2xl font-black text-rose-600">
                {activeChar.initial || '無'}
              </span>
            </div>

            {/* 介音 */}
            <div
              onClick={() => activeChar.medial && speakText(activeChar.medial, { rate: 0.7 })}
              className={`p-2.5 rounded-xl border-2 transition transform active:scale-95 cursor-pointer ${
                activeChar.medial
                  ? 'bg-emerald-50 border-emerald-200 hover:border-emerald-400'
                  : 'bg-gray-50 border-gray-200 opacity-50'
              }`}
            >
              <span className="text-[11px] font-bold text-emerald-500 block">介音</span>
              <span className="text-2xl font-black text-emerald-600">
                {activeChar.medial || '無'}
              </span>
            </div>

            {/* 韻母 */}
            <div
              onClick={() => activeChar.final && speakText(activeChar.final, { rate: 0.7 })}
              className={`p-2.5 rounded-xl border-2 transition transform active:scale-95 cursor-pointer ${
                activeChar.final
                  ? 'bg-sky-50 border-sky-200 hover:border-sky-400'
                  : 'bg-gray-50 border-gray-200 opacity-50'
              }`}
            >
              <span className="text-[11px] font-bold text-sky-500 block">韻母</span>
              <span className="text-2xl font-black text-sky-600">
                {activeChar.final || '無'}
              </span>
            </div>

            {/* 聲調 */}
            <div
              onClick={() => speakText(activeChar.char, { rate: 0.7 })}
              className="p-2.5 rounded-xl border-2 bg-amber-50 border-amber-200 hover:border-amber-400 transition transform active:scale-95 cursor-pointer"
            >
              <span className="text-[11px] font-bold text-amber-500 block">聲調</span>
              <span className="text-2xl font-black text-amber-600">
                {activeChar.toneMark || '一聲 (平)'}
              </span>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 text-center mt-2">
            💡 點擊上方色塊可聆聽個別注音發音喔！
          </p>
        </div>

        {/* 🎤 麥克風跟讀練習 */}
        <div className="my-4 p-4 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 flex flex-col items-center justify-center">
          <h4 className="text-sm font-black text-teal-800 mb-2 flex items-center gap-1.5">
            <Mic size={16} className="text-teal-600" />
            <span>跟讀大聲唸出「{word.hanzi}」！</span>
          </h4>
          <MicRecorder
            isListening={isListening}
            onStart={() => startRecording(word.hanzi, handleMicComplete)}
            onStop={stopRecording}
            transcript={transcript}
            speechResult={speechResult}
            errorMsg={errorMsg}
            label="點擊麥克風大聲唸出來"
          />
        </div>

        {/* 📖 例句展示 */}
        {word.exampleSentence && (
          <div className="mt-4 p-3 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between gap-2">
            <div className="flex-1">
              <span className="text-[11px] font-black text-purple-600 block">例句觀摩：</span>
              <p className="text-sm font-bold text-gray-800">{word.exampleSentence}</p>
            </div>
            <button
              onClick={() => speakText(word.exampleSentence, { rate: 0.8 })}
              className="p-2 rounded-xl bg-white shadow-sm text-purple-600 hover:bg-purple-100 transition"
              title="朗讀例句"
            >
              <Volume2 size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
