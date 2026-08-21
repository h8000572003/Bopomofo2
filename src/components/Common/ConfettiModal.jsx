import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, Star, X } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export default function ConfettiModal({
  isOpen,
  onClose,
  title = '恭喜過關！',
  badge = null,
  starsEarned = 0,
  message = '太厲害了！繼續保持喔！'
}) {
  useEffect(() => {
    if (isOpen) {
      soundEffects.playFanfare();

      // 發射彩帶煙火
      const count = 200;
      const defaults = {
        origin: { y: 0.7 }
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-popIn">
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-6 text-center shadow-2xl border-4 border-bubble-yellow">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
        >
          <X size={20} />
        </button>

        {/* 頂部圖示或徽章 */}
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-amber-200 via-yellow-300 to-orange-300 shadow-inner ring-4 ring-yellow-100 animate-bounceSmall">
          {badge ? (
            <span className="text-5xl">{badge.icon}</span>
          ) : (
            <Trophy size={48} className="text-amber-600" />
          )}
        </div>

        {/* 標題 */}
        <h3 className="text-2xl font-black text-gray-800 flex items-center justify-center gap-2">
          <Sparkles className="text-bubble-yellow" />
          {badge ? `解鎖新成就：${badge.name}` : title}
        </h3>

        {/* 星星獎勵 */}
        {starsEarned > 0 && (
          <div className="my-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 border border-amber-200">
            <Star className="text-amber-400 fill-amber-400 animate-spin" size={20} />
            <span className="font-extrabold text-amber-900 text-lg">+{starsEarned} 顆星星！</span>
          </div>
        )}

        {/* 說明文案 */}
        <p className="mt-2 text-sm text-gray-600 font-medium leading-relaxed">
          {badge ? badge.cheer : message}
        </p>

        {/* 繼續按鈕 */}
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-bubble-pink to-orange-400 py-3.5 text-lg font-black text-white shadow-lg hover:opacity-95 transform active:scale-95 transition"
        >
          太棒了！繼續冒險 🚀
        </button>
      </div>
    </div>
  );
}
