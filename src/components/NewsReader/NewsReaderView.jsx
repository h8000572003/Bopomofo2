import React, { useState } from 'react';
import { NEWS_CATEGORIES, INITIAL_NEWS_ARTICLES, fetchDailyFreshNews } from '../../data/newsData';
import KaraokePlayer from '../SentenceKaraoke/KaraokePlayer';
import CustomNewsImporter from './CustomNewsImporter';
import { RefreshCw, Plus, Sparkles, Newspaper, Calendar, Globe, Bookmark } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import ScrollableMenuBar from '../Common/ScrollableMenuBar';

export default function NewsReaderView({
  newsArticles = [],
  completedNews = [],
  onNewsCompleted,
  onAddNewsItem,
  onBatchAddNews,
  speechRate = 0.8
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isImporterOpen, setIsImporterOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // 合併內建新聞與使用者自訂新聞
  const allArticles = [...newsArticles, ...INITIAL_NEWS_ARTICLES];

  // 依分類過濾
  const filteredArticles = allArticles.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  // 線上獲取今日新鮮事
  const handleFetchFreshNews = () => {
    soundEffects.playStarWin();
    setIsFetching(true);

    setTimeout(() => {
      const freshList = fetchDailyFreshNews();
      onBatchAddNews && onBatchAddNews(freshList);
      setIsFetching(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部橫幅 */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-4xl shadow-inner animate-bounceSmall">
            📰
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-black">每日兒童新聞朗讀館</h2>
              <span className="px-3 py-0.5 rounded-full text-xs font-black bg-white/30">
                100% 台灣注音
              </span>
            </div>
            <p className="text-white/90 text-xs md:text-sm font-medium mt-1">
              透過時事新知學習朗讀！動植物、太空科學與世界新鮮事一網打盡！
            </p>
          </div>
        </div>

        {/* 動作按鈕群 */}
        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
          <button
            onClick={handleFetchFreshNews}
            disabled={isFetching}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs sm:text-sm shadow-md transition transform active:scale-95 hover:scale-105"
          >
            <RefreshCw size={16} className={isFetching ? 'animate-spin' : ''} />
            <span>{isFetching ? '抓取最新時事中...' : '🔄 獲取今日新鮮事'}</span>
          </button>

          <button
            onClick={() => setIsImporterOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs sm:text-sm border border-white/40 backdrop-blur-sm shadow-md transition transform active:scale-95"
          >
            <Plus size={16} />
            <span>➕ 貼上新聞自訂標音</span>
          </button>
        </div>
      </div>

      {/* 分類標籤列 (支援左右滑動箭頭) */}
      <div className="mb-6">
        <ScrollableMenuBar>
          {NEWS_CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundEffects.playBubble();
                  setSelectedCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs md:text-sm whitespace-nowrap transition transform duration-150 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md scale-105 ring-2 ring-indigo-200'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200 hover:scale-102'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </ScrollableMenuBar>
      </div>

      {/* 新聞列表 */}
      {filteredArticles.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg font-bold">目前沒有這個分類的新聞喔～點擊上方按鈕獲取今日新鮮事！</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="relative">
              {/* 新聞標題與來源抬頭 */}
              <div className="flex items-center justify-between mb-2 px-2 text-xs font-bold text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full font-black">
                    {article.categoryName || '時事新知'}
                  </span>
                  <span>{article.source || '兒童日報'}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Calendar size={13} />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* 句子卡拉OK播放器 */}
              <KaraokePlayer
                sentence={article}
                isCompleted={completedNews.includes(article.id)}
                onSentenceLearned={onNewsCompleted}
                speechRate={speechRate}
              />
            </div>
          ))}
        </div>
      )}

      {/* 自訂新聞輸入 Modal */}
      <CustomNewsImporter
        isOpen={isImporterOpen}
        onClose={() => setIsImporterOpen(false)}
        onImportNews={onAddNewsItem}
      />
    </div>
  );
}
