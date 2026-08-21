import React, { useState } from 'react';
import { Calendar as CalendarIcon, Flame, Star, Trophy, Sparkles, CheckCircle2, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export default function DailyTrackerView({
  checkInDates = [],
  streakCount = 0,
  stars = 0,
  completedWords = [],
  completedSentences = [],
  drawingPracticeCount = 0,
  flashcardMastered = [],
  onCheckInToday
}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  // 當月天數與第一天星期幾
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  // 今日日期字串
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const isCheckedInToday = checkInDates.includes(todayStr);

  const prevMonth = () => {
    soundEffects.playBubble();
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    soundEffects.playBubble();
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部打卡與連續天數 Streak 橫幅 */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-orange-400 via-rose-500 to-amber-500 text-white shadow-xl mb-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* 左側連續天數火花 */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-4xl shadow-inner animate-bounceSmall">
            🔥
          </div>
          <div>
            <span className="text-xs font-black text-yellow-200 tracking-wider block">
              DAILY PRACTICE STREAK
            </span>
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-2">
              <span>已連續學習</span>
              <span className="text-yellow-300 underline decoration-wavy decoration-yellow-400">
                {streakCount}
              </span>
              <span>天！</span>
            </h2>
            <p className="text-white/90 text-xs font-semibold mt-1">
              每天持續練習，點亮金色星星，解鎖專屬成就！
            </p>
          </div>
        </div>

        {/* 右側打卡按鈕 */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => {
              if (!isCheckedInToday) {
                onCheckInToday && onCheckInToday();
              } else {
                soundEffects.playStarWin();
              }
            }}
            className={`px-7 py-3.5 rounded-2xl font-black text-base shadow-lg transition transform active:scale-95 flex items-center gap-2 ${
              isCheckedInToday
                ? 'bg-emerald-400 text-emerald-950 ring-4 ring-emerald-200 cursor-default'
                : 'bg-white text-rose-600 hover:bg-yellow-100 hover:scale-105 animate-pulse'
            }`}
          >
            {isCheckedInToday ? (
              <>
                <CheckCircle2 size={20} className="text-emerald-900" />
                <span>今日已打卡完成 ✨</span>
              </>
            ) : (
              <>
                <Star size={20} className="text-amber-500 fill-amber-500" />
                <span>立即今日打卡 (+2⭐)</span>
              </>
            )}
          </button>
          <span className="text-[11px] text-white/80 font-bold mt-1.5">
            累計打卡：{checkInDates.length} 天
          </span>
        </div>
      </div>

      {/* 學習數據四宮格 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-amber-100 text-center">
          <span className="text-xs font-bold text-gray-500">已學會單字</span>
          <p className="text-2xl font-black text-amber-600 mt-1">{completedWords.length} 個</p>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-rose-100 text-center">
          <span className="text-xs font-bold text-gray-500">字卡已記住</span>
          <p className="text-2xl font-black text-rose-600 mt-1">{flashcardMastered.length} 張</p>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-sky-100 text-center">
          <span className="text-xs font-bold text-gray-500">手寫描紅次數</span>
          <p className="text-2xl font-black text-sky-600 mt-1">{drawingPracticeCount} 次</p>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-purple-100 text-center">
          <span className="text-xs font-bold text-gray-500">朗讀過句子</span>
          <p className="text-2xl font-black text-purple-600 mt-1">{completedSentences.length} 句</p>
        </div>
      </div>

      {/* 打卡月曆卡片 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-3 border-amber-100">
        {/* 月曆標題與切換 */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <CalendarIcon className="text-amber-500" size={24} />
            <h3 className="text-xl font-black text-gray-800">
              {year} 年 {month + 1} 月 學習打卡日曆
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevMonth}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 星期列 */}
        <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-black text-gray-400">
          <span className="text-rose-400">日</span>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span className="text-sky-400">六</span>
        </div>

        {/* 日期網格 */}
        <div className="grid grid-cols-7 gap-2">
          {/* 前方空白填補 */}
          {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
            <div key={`empty-${idx}`} className="h-14 sm:h-16 rounded-2xl bg-gray-50/50" />
          ))}

          {/* 各天日期 */}
          {Array.from({ length: totalDaysInMonth }).map((_, idx) => {
            const dayNum = idx + 1;
            const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
            const isChecked = checkInDates.includes(dateKey);
            const isToday = dateKey === todayStr;

            return (
              <div
                key={dayNum}
                className={`h-14 sm:h-16 rounded-2xl flex flex-col items-center justify-between p-1.5 border transition ${
                  isChecked
                    ? 'bg-amber-50 border-amber-300 shadow-sm ring-1 ring-amber-200'
                    : isToday
                    ? 'bg-rose-50/60 border-rose-300 ring-2 ring-rose-200'
                    : 'bg-white border-gray-100 hover:bg-gray-50'
                }`}
              >
                <div className="w-full flex justify-between items-center text-xs font-bold">
                  <span className={isToday ? 'text-rose-600 font-black' : isChecked ? 'text-amber-800' : 'text-gray-600'}>
                    {dayNum}
                  </span>
                  {isToday && (
                    <span className="text-[9px] bg-rose-500 text-white px-1 rounded-full font-black">
                      今
                    </span>
                  )}
                </div>

                {isChecked ? (
                  <div className="my-auto flex items-center justify-center animate-bounceSmall">
                    <Star size={20} className="text-amber-400 fill-amber-400" />
                  </div>
                ) : (
                  <div className="my-auto text-gray-200 text-xs font-bold">
                    •
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
