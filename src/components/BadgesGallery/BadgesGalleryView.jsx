import React, { useState, useMemo } from 'react';
import { getBadgesForDifficulty, DIFFICULTY_CONFIG } from '../../data/badgesData';
import { Trophy, Star, Sparkles, Lock, CheckCircle2, Volume2, Shield } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import { speechHelper } from '../../utils/speechHelper';

export default function BadgesGalleryView({
  unlockedBadges = [],
  stars = 0,
  completedWords = [],
  completedSentences = [],
  spellingWinCount = 0,
  quizCount = 0,
  difficulty = 'easy'
}) {
  const [selectedBadge, setSelectedBadge] = useState(null);

  // 依據當前難度取得目標與描述
  const badgesList = useMemo(() => {
    return getBadgesForDifficulty(difficulty);
  }, [difficulty]);

  const currentDiffConfig = DIFFICULTY_CONFIG[difficulty] || DIFFICULTY_CONFIG.easy;

  const handleBadgeClick = (badge, isUnlocked) => {
    soundEffects.playBubble();
    setSelectedBadge(badge);
    if (isUnlocked && badge.cheer) {
      speechHelper.speakText(badge.cheer, { rate: 0.9 });
    }
  };

  const unlockedCount = unlockedBadges.length;
  const totalBadges = badgesList.length;
  const progressPercent = Math.round((unlockedCount / totalBadges) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部收集進度橫幅 */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white shadow-lg mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-5xl p-2 bg-white/20 rounded-2xl">🏆</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl md:text-3xl font-black">冒險榮譽圖鑑</h2>
                {/* 難度標籤膠囊 */}
                <span className="bg-white/20 text-yellow-200 border border-white/30 text-xs px-2.5 py-0.5 rounded-full font-black flex items-center gap-1">
                  <Shield size={12} /> 難度：{currentDiffConfig.label}
                </span>
              </div>
              <p className="text-white/90 text-xs font-semibold mt-1">
                完成學習任務，解鎖專屬可愛成就與榮譽徽章！
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/20 px-4 py-3 rounded-2xl backdrop-blur-sm self-start sm:self-auto">
            <Star size={24} className="text-yellow-300 fill-yellow-300 animate-bounceSmall" />
            <div>
              <span className="text-xs text-white/80 font-bold block">目前星星</span>
              <span className="text-xl font-black">{stars} 顆</span>
            </div>
          </div>
        </div>

        {/* 進度條 */}
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex justify-between text-xs font-black mb-1.5">
            <span>圖鑑收集進度</span>
            <span>{unlockedCount} / {totalBadges} ({progressPercent}%)</span>
          </div>
          <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 學習歷程數據摘要 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-amber-100 text-center">
          <span className="text-xs font-bold text-gray-500">已學會單字</span>
          <p className="text-2xl font-black text-amber-600 mt-1">{completedWords.length} 個</p>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-pink-100 text-center">
          <span className="text-xs font-bold text-gray-500">朗讀過句子</span>
          <p className="text-2xl font-black text-pink-600 mt-1">{completedSentences.length} 句</p>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-teal-100 text-center">
          <span className="text-xs font-bold text-gray-500">拼音遊戲獲勝</span>
          <p className="text-2xl font-black text-teal-600 mt-1">{spellingWinCount} 次</p>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-indigo-100 text-center">
          <span className="text-xs font-bold text-gray-500">每日挑戰次數</span>
          <p className="text-2xl font-black text-indigo-600 mt-1">{quizCount} 次</p>
        </div>
      </div>

      {/* 徽章網格 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {badgesList.map(badge => {
          const isUnlocked = unlockedBadges.includes(badge.id);
          return (
            <div
              key={badge.id}
              onClick={() => handleBadgeClick(badge, isUnlocked)}
              className={`relative flex flex-col items-center justify-center p-5 rounded-3xl border-2 transition-all transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                isUnlocked
                  ? 'bg-white border-amber-300 shadow-md ring-2 ring-amber-100'
                  : 'bg-gray-50/80 border-dashed border-gray-300 opacity-60 hover:opacity-80'
              }`}
            >
              {/* 圖示 */}
              <div
                className={`w-18 h-18 rounded-2xl flex items-center justify-center text-4xl mb-3 shadow-inner ${
                  isUnlocked
                    ? `bg-gradient-to-tr ${badge.color} text-white`
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isUnlocked ? badge.icon : <Lock size={28} />}
              </div>

              {/* 徽章名稱 */}
              <h4 className={`text-base font-black text-center ${isUnlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                {badge.name}
              </h4>

              {/* 目標說明 */}
              <p className="text-[11px] text-gray-500 text-center font-medium mt-1 line-clamp-1">
                {badge.description}
              </p>

              {/* 狀態 */}
              <span
                className={`mt-2 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  isUnlocked
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isUnlocked ? '✨ 已解鎖' : '🔒 未解鎖'}
              </span>
            </div>
          );
        })}
      </div>

      {/* 徽章詳情彈窗 */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-popIn">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border-4 border-purple-200 text-center relative">
            <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-5xl mb-3 bg-gradient-to-tr ${selectedBadge.color} text-white shadow-lg`}>
              {unlockedBadges.includes(selectedBadge.id) ? selectedBadge.icon : <Lock size={32} />}
            </div>

            <h3 className="text-2xl font-black text-gray-800 mb-1">{selectedBadge.name}</h3>
            <p className="text-xs text-purple-600 font-bold mb-3">
              {unlockedBadges.includes(selectedBadge.id) ? '🏅 榮譽徽章' : '🔒 解鎖條件'}
            </p>

            <p className="text-sm text-gray-600 font-medium bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-4">
              {selectedBadge.description}
            </p>

            {unlockedBadges.includes(selectedBadge.id) && selectedBadge.cheer && (
              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs font-bold text-amber-800 mb-4">
                「{selectedBadge.cheer}」
              </div>
            )}

            <button
              onClick={() => setSelectedBadge(null)}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black text-base shadow-md"
            >
              了解！
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
