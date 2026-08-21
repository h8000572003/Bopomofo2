import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Crown, Star, Sparkles, Trophy, Award } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import { speechHelper } from '../../utils/speechHelper';

export default function DailyGloryModal({
  isOpen,
  onClose,
  gloryCount = 1
}) {
  useEffect(() => {
    if (isOpen) {
      soundEffects.playVictoryFanfare();
      speechHelper.speakText('太棒了！恭喜你完成了今日所有的冒險任務，榮獲今日榮耀王冠！', { rate: 0.9 });

      // 發射兩側全螢幕金色與彩色彩帶
      const duration = 2.5 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FFD700', '#FFA500', '#FF69B4', '#00CED1']
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FFD700', '#FFA500', '#FF69B4', '#00CED1']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-popIn">
      <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-amber-50 via-white to-amber-100 p-6 sm:p-8 text-center shadow-2xl border-4 border-amber-300">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        {/* 金色光暈王冠 */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-400 flex items-center justify-center shadow-xl animate-bounceSmall border-4 border-white">
            <span className="text-6xl animate-pulse">👑</span>
          </div>
          <Sparkles className="absolute -top-2 -right-2 text-amber-500 animate-spin" size={32} />
          <Star className="absolute -bottom-2 -left-2 text-yellow-500 fill-yellow-400" size={28} />
        </div>

        {/* 大標題 */}
        <h3 className="text-2xl sm:text-3xl font-black text-amber-950 mb-1">
          榮獲今日榮耀王冠！
        </h3>
        <p className="text-xs sm:text-sm font-bold text-amber-800 mb-6">
          太厲害了！你完成了今天的 4 大冒險任務！
        </p>

        {/* 榮耀獎勵大卡片 */}
        <div className="p-4 bg-white/90 rounded-2xl border-2 border-amber-200 shadow-sm mb-6 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <span className="text-xs font-black text-gray-600 flex items-center gap-1">
              <GiftIcon /> 榮耀寶箱獎勵
            </span>
            <span className="flex items-center gap-1 text-base font-black text-amber-600">
              <Star size={18} className="fill-amber-500 text-amber-500" />
              <span>+10 顆星星 ⭐</span>
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-gray-600 flex items-center gap-1">
              <Trophy size={16} className="text-amber-500" /> 累積榮耀次數
            </span>
            <span className="text-sm font-black text-purple-700 bg-purple-100 px-3 py-0.5 rounded-full">
              第 {gloryCount} 座榮耀王冠 👑
            </span>
          </div>
        </div>

        {/* 確定領取按鈕 */}
        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-amber-950 font-black text-base shadow-lg hover:scale-102 transition transform active:scale-95 flex items-center justify-center gap-2"
        >
          <Award size={20} />
          <span>開心收下每日榮耀！✨</span>
        </button>
      </div>
    </div>
  );
}

function GiftIcon() {
  return <span className="text-base">🎁</span>;
}
