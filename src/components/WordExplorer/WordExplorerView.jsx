import React, { useState } from 'react';
import { TOPICS } from '../../data/topicsData';
import WordCard from './WordCard';
import WordDetailModal from './WordDetailModal';
import { speechHelper } from '../../utils/speechHelper';
import { soundEffects } from '../../utils/soundEffects';
import { Sparkles, Search, Compass } from 'lucide-react';
import ScrollableMenuBar from '../Common/ScrollableMenuBar';

export default function WordExplorerView({
  completedWords = [],
  customTopics = [],
  onMarkLearned,
  speechRate = 0.85
}) {
  const allTopics = [...TOPICS, ...customTopics];
  const [selectedTopicId, setSelectedTopicId] = useState(allTopics[0]?.id || 'animals');
  const [activeWord, setActiveWord] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const currentTopic = allTopics.find(t => t.id === selectedTopicId) || allTopics[0];

  // 取得目前主題的單字 (若有搜尋詞則過濾)
  const currentWords = (currentTopic?.words || []).filter(w => {
    if (!searchTerm) return true;
    const bpmfStr = w.bpmfFull || w.characters.map(c => c.bopomofo).join('');
    return w.hanzi.includes(searchTerm) || bpmfStr.includes(searchTerm);
  });

  const handleQuickAudio = (text) => {
    speechHelper.speakText(text, { rate: speechRate });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部主題橫幅 */}
      <div className={`p-6 rounded-3xl bg-gradient-to-r ${currentTopic.color} text-white shadow-lg mb-6 transition-all duration-300`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl md:text-6xl p-3 bg-white/20 rounded-3xl backdrop-blur-sm">
              {currentTopic.icon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl md:text-3xl font-black">{currentTopic.name}</h2>
                <span className="px-3 py-0.5 rounded-full text-xs font-black bg-white/30">
                  {currentTopic.words?.length || 0} 個單字
                </span>
              </div>
              <p className="text-white/90 text-sm mt-1 font-medium">
                {currentTopic.description}
              </p>
            </div>
          </div>

          {/* 搜尋列 */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="搜尋單字或注音符號..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/95 text-gray-800 placeholder-gray-400 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* 主題標籤切換列 (支援左右滑動箭頭) */}
      <div className="mb-6">
        <ScrollableMenuBar>
          {allTopics.map(topic => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  soundEffects.playBubble();
                  setSelectedTopicId(topic.id);
                  setSearchTerm('');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-sm whitespace-nowrap transition duration-150 transform ${
                  isSelected
                    ? 'bg-bubble-purple text-white shadow-md scale-105 ring-2 ring-purple-200'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200 hover:scale-102'
                }`}
              >
                <span className="text-lg">{topic.icon}</span>
                <span>{topic.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {topic.words?.length || 0}
                </span>
              </button>
            );
          })}
        </ScrollableMenuBar>
      </div>

      {/* 單字卡片網格 */}
      {currentWords.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg font-bold">找不到符合條件的單字喔～</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentWords.map(word => (
            <WordCard
              key={word.id}
              word={word}
              isCompleted={completedWords.includes(word.id)}
              onSelect={setActiveWord}
              onPlayQuickAudio={handleQuickAudio}
            />
          ))}
        </div>
      )}

      {/* 單字詳情與拼音學習彈窗 */}
      <WordDetailModal
        word={activeWord}
        isOpen={!!activeWord}
        onClose={() => setActiveWord(null)}
        isCompleted={activeWord ? completedWords.includes(activeWord.id) : false}
        onMarkLearned={onMarkLearned}
      />
    </div>
  );
}
