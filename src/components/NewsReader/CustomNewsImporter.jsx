import React, { useState } from 'react';
import { X, Sparkles, Wand2, Plus, Volume2, CheckCircle2 } from 'lucide-react';
import { convertTextToBpmfTokens, splitTextIntoSentences } from '../../utils/textToBpmf';
import BopomofoRuby from '../Common/BopomofoRuby';
import { soundEffects } from '../../utils/soundEffects';
import { speechHelper } from '../../utils/speechHelper';

export default function CustomNewsImporter({
  isOpen,
  onClose,
  onImportNews
}) {
  const [inputText, setInputText] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsEmoji, setNewsEmoji] = useState('📰');
  const [newsCategory, setNewsCategory] = useState('animal');
  const [previewTokens, setPreviewTokens] = useState([]);
  const [toastMsg, setToastMsg] = useState(null);

  if (!isOpen) return null;

  // 智慧產生注音預覽
  const handleGeneratePreview = () => {
    if (!inputText.trim()) {
      alert('請先輸入新聞或短文內容喔！');
      return;
    }
    soundEffects.playBubble();
    const tokens = convertTextToBpmfTokens(inputText.trim());
    setPreviewTokens(tokens);
    if (!newsTitle) {
      setNewsTitle(inputText.trim().slice(0, 20) + (inputText.length > 20 ? '...' : ''));
    }
  };

  // 朗讀預覽
  const handlePlayPreview = () => {
    if (inputText.trim()) {
      speechHelper.speakText(inputText.trim(), { rate: 0.85 });
    }
  };

  // 儲存並匯入新聞館
  const handleSave = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      alert('請輸入新聞內容！');
      return;
    }

    soundEffects.playCorrect();
    const cleanText = inputText.trim();
    const tokens = convertTextToBpmfTokens(cleanText);

    const newNewsItem = {
      id: `custom_news_${Date.now()}`,
      category: newsCategory,
      categoryName: newsCategory === 'animal' ? '動物新奇'
        : newsCategory === 'space' ? '太空科學'
        : newsCategory === 'nature' ? '自然環保'
        : newsCategory === 'school' ? '校園新知'
        : '生活文化',
      title: newsTitle || cleanText.slice(0, 25),
      emoji: newsEmoji || '📰',
      date: new Date().toISOString().split('T')[0],
      source: '自訂時事新聞',
      text: cleanText,
      tokens
    };

    onImportNews && onImportNews(newNewsItem);
    setToastMsg('✨ 成功加入新聞朗讀館！');
    setTimeout(() => {
      setToastMsg(null);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-popIn">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl border-4 border-indigo-200">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        {/* 標題 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-indigo-100 text-indigo-700 rounded-2xl">
            <Wand2 size={22} />
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-800">貼上新聞 • 自動標註台灣注音</h3>
            <p className="text-xs text-gray-500 font-semibold">
              支援任意中文新聞與生活短文，自動轉換為國小標準注音卡拉OK！
            </p>
          </div>
        </div>

        {toastMsg && (
          <div className="mb-4 p-3 bg-emerald-100 text-emerald-800 text-xs font-black rounded-xl text-center border border-emerald-300 animate-popIn">
            {toastMsg}
          </div>
        )}

        <form onSubmit={handleSave} className="flex flex-col gap-4">
          {/* 新聞輸入框 */}
          <div>
            <label className="text-xs font-black text-gray-700 block mb-1.5">
              請在此貼上新聞內容或時事短句：
            </label>
            <textarea
              rows={3}
              required
              placeholder="例如：動物園大貓熊開心地在草地上曬太陽。"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-3.5 rounded-2xl border-2 border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none text-sm font-bold text-gray-800"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-black text-gray-700 block mb-1">新聞主題分類</label>
              <select
                value={newsCategory}
                onChange={(e) => setNewsCategory(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-bold bg-white"
              >
                <option value="animal">🐾 動物新奇</option>
                <option value="space">🚀 太空科學</option>
                <option value="nature">🌱 自然環保</option>
                <option value="school">🏫 校園新知</option>
                <option value="culture">🏮 生活文化</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-black text-gray-700 block mb-1">圖示 Emoji</label>
              <input
                type="text"
                value={newsEmoji}
                onChange={(e) => setNewsEmoji(e.target.value)}
                className="w-full p-2 rounded-xl border border-gray-200 text-sm font-bold text-center"
              />
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-end">
              <button
                type="button"
                onClick={handleGeneratePreview}
                className="w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-black text-xs rounded-xl border border-indigo-200 flex items-center justify-center gap-1 transition"
              >
                <Sparkles size={14} />
                <span>注音預覽轉換</span>
              </button>
            </div>
          </div>

          {/* 自動產生的注音預覽區 */}
          {previewTokens.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-dashed border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-amber-800">
                  ✨ 台灣教育部標準注音排版預覽：
                </span>
                <button
                  type="button"
                  onClick={handlePlayPreview}
                  className="flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-200/80 px-2.5 py-1 rounded-lg hover:bg-amber-300 transition"
                >
                  <Volume2 size={14} />
                  <span>試聽發音</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-1.5 p-3 bg-white rounded-xl">
                {previewTokens.map((t, idx) => (
                  <BopomofoRuby
                    key={idx}
                    char={t.char}
                    bopomofo={t.bopomofo}
                    size="md"
                  />
                ))}
              </div>
            </div>
          )}

          {/* 儲存按鈕 */}
          <button
            type="submit"
            className="mt-2 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-base shadow-lg hover:scale-102 transition transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            <span>儲存並加入新聞朗讀館 🚀</span>
          </button>
        </form>
      </div>
    </div>
  );
}
