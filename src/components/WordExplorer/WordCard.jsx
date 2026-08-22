import React from 'react';
import { Star, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import BopomofoRuby from '../Common/BopomofoRuby';
import { soundEffects } from '../../utils/soundEffects';

export default function WordCard({
  word,
  isCompleted = false,
  onSelect,
  onPlayQuickAudio,
  bopomofoScale = 'large'
}) {
  return (
    <div
      onClick={() => {
        soundEffects.playBubble();
        onSelect(word);
      }}
      className={`group relative flex flex-col items-center justify-between p-4 rounded-3xl bg-white border-2 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl cursor-pointer ${
        isCompleted
          ? 'border-amber-300 ring-2 ring-amber-200/50 shadow-amber-100'
          : 'border-gray-100 hover:border-bubble-pink/50 shadow-sm'
      }`}
    >
      {/* 完成星號標記 */}
      {isCompleted && (
        <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-black border border-amber-200">
          <Star size={12} className="text-amber-500 fill-amber-500" />
          <span>已學會</span>
        </div>
      )}

      {/* Emoji 圖示 */}
      <div className="my-2 text-6xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        {word.emoji}
      </div>

      {/* 漢字 + 國小標準注音 */}
      <div className="flex items-center justify-center gap-1 my-2">
        {word.characters.map((charObj, idx) => (
          <BopomofoRuby
            key={idx}
            char={charObj.char}
            bopomofo={charObj.bopomofo}
            size="md"
            annotationScale={bopomofoScale}
          />
        ))}
      </div>

      {/* 台灣注音標音 */}
      <p className="text-xs text-rose-500 font-bold mb-3 tracking-wider">
        {word.bpmfFull || word.characters.map(c => c.bopomofo).join(' ')}
      </p>

      {/* 底部互動按鈕 */}
      <div className="w-full flex items-center justify-between gap-2 mt-auto pt-2 border-t border-gray-100">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPlayQuickAudio(word.hanzi);
          }}
          className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-bubble-pink hover:text-white px-3 py-1.5 rounded-xl transition"
        >
          <Volume2 size={14} />
          <span>聽發音</span>
        </button>

        <span className="text-xs font-extrabold text-bubble-blue group-hover:translate-x-0.5 transition">
          探索學習 →
        </span>
      </div>
    </div>
  );
}
