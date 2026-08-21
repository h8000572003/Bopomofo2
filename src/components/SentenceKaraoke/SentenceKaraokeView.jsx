import React, { useState } from 'react';
import { TOPICS } from '../../data/topicsData';
import KaraokePlayer from './KaraokePlayer';
import { soundEffects } from '../../utils/soundEffects';
import { Sparkles, BookOpen, Music, CheckCircle2 } from 'lucide-react';
import ScrollableMenuBar from '../Common/ScrollableMenuBar';

export default function SentenceKaraokeView({
  completedSentences = [],
  customTopics = [],
  onSentenceLearned,
  speechRate = 0.8
}) {
  const allTopics = [...TOPICS, ...customTopics];
  const [selectedTopicId, setSelectedTopicId] = useState(allTopics[0]?.id || 'animals');

  const currentTopic = allTopics.find(t => t.id === selectedTopicId) || allTopics[0];
  const sentences = currentTopic?.sentences || [];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部引導橫幅 */}
      <div className={`p-6 rounded-3xl bg-gradient-to-r ${currentTopic.color} text-white shadow-lg mb-6`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl md:text-6xl p-3 bg-white/20 rounded-3xl backdrop-blur-sm">
              🎤
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl md:text-3xl font-black">句子朗讀卡拉OK</h2>
                <span className="px-3 py-0.5 rounded-full text-xs font-black bg-white/30">
                  {sentences.length} 個情境句子
                </span>
              </div>
              <p className="text-white/90 text-sm mt-1 font-medium">
                跟隨亮起的文字節奏，大聲唸出完整的句子！
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-2xl backdrop-blur-sm self-start md:self-auto">
            <Music className="text-yellow-200" size={20} />
            <span className="text-xs font-black">
              逐字高亮 • 語音跟讀 • 星星評分
            </span>
          </div>
        </div>
      </div>

      {/* 主題切換按鈕 (支援左右滑動箭頭) */}
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
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-sm whitespace-nowrap transition duration-150 transform ${
                  isSelected
                    ? 'bg-bubble-pink text-white shadow-md scale-105 ring-2 ring-pink-200'
                    : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200 hover:scale-102'
                }`}
              >
                <span className="text-lg">{topic.icon}</span>
                <span>{topic.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {topic.sentences?.length || 0}
                </span>
              </button>
            );
          })}
        </ScrollableMenuBar>
      </div>

      {/* 句子卡拉OK播放列表 */}
      {sentences.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg font-bold">這個主題目前還沒有句子喔～歡迎在設定中新增！</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {sentences.map((sentence, idx) => (
            <KaraokePlayer
              key={sentence.id || idx}
              sentence={sentence}
              isCompleted={completedSentences.includes(sentence.id)}
              onSentenceLearned={onSentenceLearned}
              speechRate={speechRate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
