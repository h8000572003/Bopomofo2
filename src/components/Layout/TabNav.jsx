import React, { useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import ScrollableMenuBar from '../Common/ScrollableMenuBar';

const NAV_CATEGORIES = [
  {
    id: 'cat_basics',
    label: '基礎學習',
    icon: '🌱',
    color: 'from-rose-500 to-pink-500',
    activeBg: 'bg-rose-50 border-rose-200 text-rose-700',
    badge: '入門必備',
    tabs: [
      { id: 'basics', label: '注音基礎大本營', shortLabel: '注音基礎', icon: '🔤', desc: '37 符號 + 描紅畫板' },
      { id: 'flashcards', label: '3D 翻轉字卡練習', shortLabel: '3D 字卡', icon: '🃏', desc: '正反對照與複習' },
    ]
  },
  {
    id: 'cat_explore',
    label: '主題與時事',
    icon: '🗺️',
    color: 'from-emerald-500 to-teal-600',
    activeBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    badge: '豐富題庫',
    tabs: [
      { id: 'word_explorer', label: '主題單字探索', shortLabel: '單字探索', icon: '🗺️', desc: '8 大主題生活單字' },
      { id: 'sentence_karaoke', label: '情境句子朗讀', shortLabel: '句子朗讀', icon: '🎤', desc: '卡拉OK 逐字發光' },
      { id: 'news_reader', label: '每日時事新聞館', shortLabel: '新聞朗讀', icon: '📰', desc: '兒童新聞與自動標音' },
    ]
  },
  {
    id: 'cat_games',
    label: '遊戲挑戰',
    icon: '🎮',
    color: 'from-cyan-500 to-blue-600',
    activeBg: 'bg-cyan-50 border-cyan-200 text-cyan-700',
    badge: '趣味闖關',
    tabs: [
      { id: 'spelling_game', label: '注音拼拼樂遊戲', shortLabel: '注音拼拼樂', icon: '🧩', desc: '聲韻組字挑戰' },
      { id: 'daily_quiz', label: '每日挑戰賽', shortLabel: '每日挑戰', icon: '⚡', desc: '5 關連擊挑戰' },
    ]
  },
  {
    id: 'cat_records',
    label: '成就與紀錄',
    icon: '🏆',
    color: 'from-amber-500 to-orange-500',
    activeBg: 'bg-amber-50 border-amber-200 text-amber-700',
    badge: '學習歷程',
    tabs: [
      { id: 'daily_tracker', label: '每日打卡日曆', shortLabel: '打卡日曆', icon: '📅', desc: '連續學習天數 🔥' },
      { id: 'badges', label: '榮譽成就圖鑑', shortLabel: '榮譽圖鑑', icon: '🏆', desc: '15 階徽章大解鎖' },
    ]
  }
];

export default function TabNav({ activeTab, onSelectTab }) {
  // 計算目前 activeTab 所屬的 Category
  const activeCategory = useMemo(() => {
    return NAV_CATEGORIES.find(cat => cat.tabs.some(t => t.id === activeTab)) || NAV_CATEGORIES[0];
  }, [activeTab]);

  // 點選大類別時：自動選取該類別的第一個功能
  const handleSelectCategory = (cat) => {
    soundEffects.playBubble();
    if (!cat.tabs.some(t => t.id === activeTab)) {
      onSelectTab(cat.tabs[0].id);
    }
  };

  // 點選具體子功能
  const handleSelectSubTab = (tabId) => {
    soundEffects.playBubble();
    onSelectTab(tabId);
  };

  return (
    <nav className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-2 flex flex-col gap-2.5">
      {/* 🌟 第 1 層：4 大主題類別切換列 (支援左右滑動箭頭) */}
      <ScrollableMenuBar className="p-1 bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-amber-100 shadow-sm">
        {NAV_CATEGORIES.map(cat => {
          const isCatActive = activeCategory.id === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat)}
              className={`flex-1 min-w-[110px] sm:min-w-[140px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-200 ${
                isCatActive
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-md scale-102 ring-2 ring-white`
                  : 'text-gray-600 hover:text-gray-900 hover:bg-amber-50/60'
              }`}
            >
              <span className="text-base sm:text-lg">{cat.icon}</span>
              <span className="whitespace-nowrap">{cat.label}</span>
            </button>
          );
        })}
      </ScrollableMenuBar>

      {/* 🌟 第 2 層：所屬子功能大按鈕切換列 (支援左右滑動箭頭) */}
      <ScrollableMenuBar className="p-1.5 bg-amber-50/70 rounded-2xl border border-amber-200/60 animate-fadeIn">
        {activeCategory.tabs.map(tab => {
          const isSubActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleSelectSubTab(tab.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[180px] flex items-center justify-center gap-2 py-2 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                isSubActive
                  ? 'bg-white text-gray-900 border-amber-300 shadow-md ring-2 ring-amber-300/60 scale-102 font-black'
                  : 'bg-white/60 text-gray-600 border-transparent hover:bg-white hover:text-gray-800 hover:shadow-sm'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <div className="text-left flex flex-col">
                <span className="leading-tight whitespace-nowrap">{tab.shortLabel}</span>
                <span className="text-[10px] text-gray-400 font-medium hidden sm:inline whitespace-nowrap">{tab.desc}</span>
              </div>
              {isSubActive && <Sparkles size={14} className="text-amber-500 fill-amber-500 ml-auto hidden sm:inline" />}
            </button>
          );
        })}
      </ScrollableMenuBar>
    </nav>
  );
}
