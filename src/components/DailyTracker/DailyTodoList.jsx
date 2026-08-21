import React from 'react';
import { CheckCircle2, Circle, ArrowRight, Sparkles, Gift, Crown, Trophy } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export default function DailyTodoList({
  dailyQuests = {},
  onNavigate,
  onClaimGlory
}) {
  const {
    drawingCount = 0,
    flashcardCount = 0,
    sentenceCount = 0,
    quizCount = 0,
    isGloryClaimed = false
  } = dailyQuests;

  const tasks = [
    {
      id: 'drawing',
      title: '筆順大師',
      desc: '完成 1 次田字格注音手寫描紅',
      icon: '🔤',
      current: Math.min(1, drawingCount),
      target: 1,
      isDone: drawingCount >= 1,
      targetTab: 'basics',
      btnLabel: '去描紅'
    },
    {
      id: 'flashcard',
      title: '記憶達人',
      desc: '練習 3 張 3D 翻轉字卡',
      icon: '🃏',
      current: Math.min(3, flashcardCount),
      target: 3,
      isDone: flashcardCount >= 3,
      targetTab: 'flashcards',
      btnLabel: '翻字卡'
    },
    {
      id: 'sentence',
      title: '朗讀之星',
      desc: '完成 1 篇句子或時事新聞朗讀跟讀',
      icon: '🎤',
      current: Math.min(1, sentenceCount),
      target: 1,
      isDone: sentenceCount >= 1,
      targetTab: 'sentence_karaoke',
      btnLabel: '去朗讀'
    },
    {
      id: 'quiz',
      title: '闖關勇者',
      desc: '完成 1 場每日 5 題趣味挑戰賽',
      icon: '⚡',
      current: Math.min(1, quizCount),
      target: 1,
      isDone: quizCount >= 1,
      targetTab: 'daily_quiz',
      btnLabel: '去挑戰'
    }
  ];

  const completedTasksCount = tasks.filter(t => t.isDone).length;
  const isAllDone = completedTasksCount === tasks.length;
  const progressPercent = Math.round((completedTasksCount / tasks.length) * 100);

  return (
    <div className={`p-6 rounded-3xl transition-all duration-300 border-3 shadow-lg ${
      isAllDone
        ? 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-amber-300 ring-2 ring-amber-200'
        : 'bg-white border-amber-100'
    }`}>
      {/* 頂部標題與總進度 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl shadow-inner">
            📜
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-800 flex items-center gap-1.5">
              <span>今日冒險待辦清單</span>
              {isAllDone && <span className="text-amber-500 animate-bounce">👑</span>}
            </h3>
            <p className="text-xs text-gray-500 font-bold">
              完成今日 4 大任務，領取「今日榮耀王冠」與「+10 榮耀星願」！
            </p>
          </div>
        </div>

        {/* 進度膠囊 */}
        <div className="flex items-center gap-2 bg-amber-100/70 border border-amber-200 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
          <Sparkles size={15} className="text-amber-600" />
          <span className="text-xs font-black text-amber-900">
            完成進度：{completedTasksCount} / {tasks.length} 達成
          </span>
        </div>
      </div>

      {/* 總進度條 */}
      <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden mb-6 p-0.5 border border-gray-200">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isAllDone
              ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400'
              : 'bg-gradient-to-r from-teal-400 to-emerald-500'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 4 大任務清單 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`p-4 rounded-2xl border-2 flex items-center justify-between gap-3 transition duration-200 ${
              task.isDone
                ? 'bg-emerald-50/80 border-emerald-300 shadow-sm'
                : 'bg-slate-50 border-gray-100 hover:border-amber-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{task.icon}</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className={`text-sm font-black ${task.isDone ? 'text-emerald-900 line-through decoration-emerald-500' : 'text-gray-800'}`}>
                    {task.title}
                  </h4>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    task.isDone ? 'bg-emerald-200 text-emerald-900' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {task.current} / {task.target}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{task.desc}</p>
              </div>
            </div>

            {/* 完成狀態或直達按鈕 */}
            <div>
              {task.isDone ? (
                <div className="flex items-center gap-1 text-xs font-black text-emerald-600 bg-white px-2.5 py-1.5 rounded-xl border border-emerald-200 shadow-xs">
                  <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-100" />
                  <span>已完成</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playBubble();
                    onNavigate && onNavigate(task.targetTab);
                  }}
                  className="flex items-center gap-1 text-xs font-black text-amber-900 bg-amber-200 hover:bg-amber-300 px-3 py-1.5 rounded-xl transition transform active:scale-95 shadow-xs"
                >
                  <span>{task.btnLabel}</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 底部領取榮耀按鈕區 */}
      {isAllDone && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 border-2 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 animate-popIn">
          <div className="flex items-center gap-3">
            <span className="text-4xl animate-bounce">👑</span>
            <div className="text-left">
              <h4 className="text-base font-black text-amber-950">今日 4 大冒險任務全通關！</h4>
              <p className="text-xs text-amber-800 font-bold">快開啟今日榮耀寶箱，奪得金冠與 +10 顆星星！</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClaimGlory}
            disabled={isGloryClaimed}
            className={`px-6 py-3 rounded-2xl font-black text-sm shadow-md transition transform active:scale-95 flex items-center gap-2 ${
              !isGloryClaimed
                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white hover:scale-105 animate-pulse'
                : 'bg-white/80 text-amber-900 cursor-default border border-amber-300'
            }`}
          >
            <Gift size={18} />
            <span>{isGloryClaimed ? '👑 今日榮耀已領取 ✨' : '🎁 開啟今日榮耀寶箱 (+10⭐)'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
