import React from 'react';
import { Sparkles } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

const TABS = [
  // 基礎學習
  { id: 'basics', label: '注音基礎', icon: '🔤', group: '基礎', color: 'from-rose-500 to-pink-500' },
  { id: 'flashcards', label: '3D 字卡', icon: '🃏', group: '基礎', color: 'from-amber-400 to-orange-500' },
  // 主題探索
  { id: 'word_explorer', label: '單字探索', icon: '🗺️', group: '探索', color: 'from-emerald-400 to-teal-500' },
  { id: 'sentence_karaoke', label: '句子朗讀', icon: '🎤', group: '探索', color: 'from-pink-400 to-rose-500' },
  // 遊戲挑戰
  { id: 'spelling_game', label: '注音拼拼樂', icon: '🧩', group: '遊戲', color: 'from-teal-400 to-cyan-500' },
  { id: 'daily_quiz', label: '每日挑戰', icon: '⚡', group: '遊戲', color: 'from-blue-400 to-indigo-500' },
  // 紀錄圖鑑
  { id: 'daily_tracker', label: '打卡日曆', icon: '📅', group: '紀錄', color: 'from-orange-400 to-amber-500' },
  { id: 'badges', label: '榮譽圖鑑', icon: '🏆', group: '紀錄', color: 'from-purple-400 to-violet-500' },
];

export default function TabNav({ activeTab, onSelectTab }) {
  return (
    <nav className="w-full max-w-5xl mx-auto px-3 py-3">
      <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
        {TABS.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playBubble();
                onSelectTab(tab.id);
              }}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl font-black text-xs md:text-sm transition-all duration-200 shadow-sm ${
                isActive
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-md scale-105 ring-2 ring-white`
                  : 'bg-white text-gray-700 hover:bg-amber-50/80 border border-gray-100 hover:scale-102'
              }`}
            >
              <span className="text-base md:text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
              {isActive && <Sparkles size={14} className="text-yellow-200" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
