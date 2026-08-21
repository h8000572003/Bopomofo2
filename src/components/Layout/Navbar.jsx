import React from 'react';
import { Star, Award, Volume2, VolumeX, Settings, Sparkles, Crown } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export default function Navbar({
  stars = 0,
  badgeCount = 0,
  isMuted = false,
  dailyQuests = {},
  gloryCount = 0,
  onToggleMute,
  onOpenSettings,
  onOpenDailyTracker
}) {
  const {
    drawingCount = 0,
    flashcardCount = 0,
    sentenceCount = 0,
    quizCount = 0,
    isGloryClaimed = false
  } = dailyQuests;

  const doneCount = (drawingCount >= 1 ? 1 : 0) +
    (flashcardCount >= 3 ? 1 : 0) +
    (sentenceCount >= 1 ? 1 : 0) +
    (quizCount >= 1 ? 1 : 0);

  const isAllDone = doneCount === 4;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-2 border-amber-100 shadow-sm px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo & 標題 */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => soundEffects.playBubble()}>
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 flex items-center justify-center text-2xl shadow-md group-hover:rotate-6 transition-transform">
            🎒
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                注音冒險島
              </h1>
              <Sparkles size={16} className="text-amber-400 animate-spin" />
            </div>
            <p className="text-[11px] text-gray-500 font-semibold hidden sm:block">
              快樂學單字 • 大聲唸句子 • 每日任務與榮耀
            </p>
          </div>
        </div>

        {/* 右側：任務膠囊、星星數、成就數、音效與設定按鈕 */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* 每日任務進度膠囊 */}
          <button
            onClick={() => {
              soundEffects.playBubble();
              onOpenDailyTracker && onOpenDailyTracker();
            }}
            title="查看今日冒險任務與每日榮耀"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition transform active:scale-95 shadow-sm border ${
              isAllDone
                ? isGloryClaimed
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 animate-pulse ring-2 ring-amber-300'
                : 'bg-slate-100 hover:bg-amber-50 border-gray-200 text-gray-700'
            }`}
          >
            <span>{isAllDone ? (isGloryClaimed ? '👑' : '🎁') : '📜'}</span>
            <span className="hidden sm:inline">任務</span>
            <span>{doneCount}/4</span>
            {isAllDone && !isGloryClaimed && <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.2 rounded-full animate-bounce">領取</span>}
          </button>

          {/* 星星計數器 */}
          <div
            onClick={() => soundEffects.playStarWin()}
            className="flex items-center gap-1.5 bg-amber-50 border-2 border-amber-300 px-3 py-1.5 rounded-full shadow-sm hover:scale-105 transition cursor-pointer"
            title="收集的星星總數"
          >
            <Star className="text-amber-400 fill-amber-400 animate-bounceSmall" size={18} />
            <span className="font-black text-amber-900 text-sm sm:text-base">{stars}</span>
          </div>

          {/* 徽章計數器 */}
          <div
            className="hidden xs:flex items-center gap-1.5 bg-purple-50 border-2 border-purple-200 px-3 py-1.5 rounded-full shadow-sm"
            title="解鎖的徽章成就"
          >
            <Award className="text-purple-500" size={18} />
            <span className="font-black text-purple-900 text-sm sm:text-base">{badgeCount}</span>
          </div>

          {/* 音效開關 */}
          <button
            onClick={() => {
              soundEffects.playBubble();
              onToggleMute();
            }}
            title={isMuted ? '開啟音效' : '靜音'}
            className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
          >
            {isMuted ? <VolumeX size={18} className="text-rose-500" /> : <Volume2 size={18} className="text-teal-600" />}
          </button>

          {/* 設定按鈕 */}
          <button
            onClick={() => {
              soundEffects.playBubble();
              onOpenSettings();
            }}
            title="家長與系統設定"
            className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
