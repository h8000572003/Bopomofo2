import React, { useState, useEffect } from 'react';
import { X, Settings, Volume2, Plus, Trash2, RotateCcw, Sparkles, Check, Mic, Globe, Download, Upload, RefreshCw } from 'lucide-react';
import { speechHelper } from '../../utils/speechHelper';
import { soundEffects } from '../../utils/soundEffects';
import { parseBopomofoString } from '../../utils/bopomofoHelper';
import ScrollableMenuBar from '../Common/ScrollableMenuBar';

export default function SettingsModal({
  isOpen,
  onClose,
  settings,
  customTopics = [],
  onUpdateSettings,
  onAddCustomWord,
  onAddCustomSentence,
  onImportCustomTopics,
  onResetProgress
}) {
  const [activeTab, setActiveTab] = useState('general'); // 'general' | 'online_sync' | 'custom_word' | 'custom_sentence'
  const [voices, setVoices] = useState([]);

  // 線上題庫 URL
  const [onlineUrl, setOnlineUrl] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);

  // 自訂單字表單
  const [wordHanzi, setWordHanzi] = useState('');
  const [wordEmoji, setWordEmoji] = useState('🌟');
  const [wordMeaning, setWordMeaning] = useState('');
  const [wordBpmf1, setWordBpmf1] = useState('');
  const [wordBpmf2, setWordBpmf2] = useState('');

  // 自訂句子表單
  const [sentenceText, setSentenceText] = useState('');
  const [sentenceEmoji, setSentenceEmoji] = useState('📖');

  const [toastMsg, setToastMsg] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const avail = speechHelper.getAvailableVoices();
      setVoices(avail);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // 1. 線上題庫 URL 一鍵下載同步
  const handleOnlineSync = async (e) => {
    e.preventDefault();
    if (!onlineUrl.trim()) {
      alert('請輸入題庫 JSON 網址！');
      return;
    }

    setIsSyncing(true);
    soundEffects.playBubble();

    try {
      const res = await fetch(onlineUrl.trim());
      if (!res.ok) throw new Error(`HTTP 錯誤：${res.status}`);
      const data = await res.json();

      if (Array.isArray(data)) {
        onImportCustomTopics && onImportCustomTopics(data);
        soundEffects.playCorrect();
        showToast('🎉 線上題庫同步成功！已載入最新單字與句子！');
      } else if (data.topics && Array.isArray(data.topics)) {
        onImportCustomTopics && onImportCustomTopics(data.topics);
        soundEffects.playCorrect();
        showToast('🎉 線上題庫同步成功！已載入最新單字與句子！');
      } else {
        throw new Error('題庫格式不正確，需為主題陣列！');
      }
    } catch (err) {
      console.warn('Sync error', err);
      soundEffects.playWrong();
      showToast(`❌ 同步失敗：${err.message || '請確認網址與 CORS 權限'}`);
    } finally {
      setIsSyncing(false);
    }
  };

  // 2. 匯出題庫備份 JSON
  const handleExportJson = () => {
    soundEffects.playBubble();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customTopics, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `注音冒險島_自訂題庫_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('💾 題庫已成功匯出至下載資料夾！');
  };

  // 3. 匯入本機 JSON 題庫檔案
  const handleFileUpload = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (Array.isArray(parsed)) {
            onImportCustomTopics && onImportCustomTopics(parsed);
            soundEffects.playCorrect();
            showToast('🎉 題庫檔案匯入成功！');
          } else {
            showToast('❌ 題庫格式不符，需為主題陣列！');
          }
        } catch (err) {
          showToast('❌ JSON 解析失敗，請確認檔案格式！');
        }
      };
    }
  };

  // 提交新增自訂單字
  const handleCreateWord = (e) => {
    e.preventDefault();
    if (!wordHanzi) {
      alert('請填寫單字漢字喔！');
      return;
    }

    const chars = [];
    const hanziChars = wordHanzi.split('');
    const bpmfList = [wordBpmf1, wordBpmf2];

    hanziChars.forEach((ch, idx) => {
      const bpmf = bpmfList[idx] || '';
      const parsed = parseBopomofoString(bpmf);
      chars.push({
        char: ch,
        bopomofo: bpmf,
        initial: parsed.initial,
        medial: parsed.medial,
        final: parsed.final,
        tone: parsed.tone,
        toneMark: parsed.tone
      });
    });

    const bpmfFull = bpmfList.filter(Boolean).join(' ');

    const newWord = {
      id: `custom_w_${Date.now()}`,
      hanzi: wordHanzi,
      emoji: wordEmoji || '✨',
      bpmfFull: bpmfFull,
      meaning: wordMeaning || '自訂學習單字',
      characters: chars,
      exampleSentence: `這是一個${wordHanzi}。`
    };

    onAddCustomWord(newWord);
    showToast('✨ 成功新增自訂單字！');
    setWordHanzi('');
    setWordBpmf1('');
    setWordBpmf2('');
    setWordMeaning('');
  };

  // 提交新增自訂句子
  const handleCreateSentence = (e) => {
    e.preventDefault();
    if (!sentenceText) {
      alert('請填寫句子文字喔！');
      return;
    }

    const tokens = sentenceText.split('').map(ch => ({
      char: ch,
      bopomofo: ''
    }));

    const newSentence = {
      id: `custom_s_${Date.now()}`,
      text: sentenceText,
      emoji: sentenceEmoji || '📖',
      tokens
    };

    onAddCustomSentence(newSentence);
    showToast('✨ 成功新增自訂句子！');
    setSentenceText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-popIn">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl border-4 border-amber-200">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        {/* 標題 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-amber-100 text-amber-700 rounded-2xl">
            <Settings size={22} />
          </div>
          <h3 className="text-xl font-black text-gray-800">家長、設定與線上題庫</h3>
        </div>

        {/* 標籤切換列 (支援左右滑動箭頭) */}
        <div className="mb-6 border-b border-gray-100 pb-3">
          <ScrollableMenuBar>
            {[
              { id: 'general', label: '語音偏好' },
              { id: 'online_sync', label: '🌐 線上更新' },
              { id: 'custom_word', label: '➕ 自訂單字' },
              { id: 'custom_sentence', label: '➕ 自訂句子' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-amber-950 shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </ScrollableMenuBar>
        </div>

        {/* 提示訊息 */}
        {toastMsg && (
          <div className="mb-4 p-3 bg-emerald-100 text-emerald-800 text-xs font-black rounded-xl text-center border border-emerald-300 animate-popIn">
            {toastMsg}
          </div>
        )}

        {/* 1. 一般設定 */}
        {activeTab === 'general' && (
          <div className="flex flex-col gap-5">
            {/* 語速調整 */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <label className="text-xs font-black text-gray-700 block mb-2">
                🔊 語音朗讀速度：{settings.speechRate}x
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: '慢速 0.6x', value: 0.6 },
                  { label: '適中 0.8x', value: 0.8 },
                  { label: '標準 1.0x', value: 1.0 },
                  { label: '快速 1.2x', value: 1.2 }
                ].map(item => (
                  <button
                    key={item.value}
                    onClick={() => {
                      soundEffects.playBubble();
                      onUpdateSettings({ speechRate: item.value });
                    }}
                    className={`py-2 rounded-xl text-xs font-bold transition ${
                      settings.speechRate === item.value
                        ? 'bg-bubble-pink text-white shadow-sm'
                        : 'bg-white text-gray-700 border hover:bg-pink-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 音效開關 */}
            <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-black text-gray-700">遊戲音效與鼓勵音樂</span>
              <button
                onClick={() => {
                  soundEffects.playBubble();
                  onUpdateSettings({ isMuted: !settings.isMuted });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition ${
                  !settings.isMuted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {!settings.isMuted ? '開啟中 🔔' : '已靜音 🔕'}
              </button>
            </div>

            {/* 重置進度 */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-black text-rose-600 block">重置學習紀錄</span>
                <span className="text-[11px] text-gray-400">清除星星、解鎖徽章與通關紀錄</span>
              </div>
              <button
                onClick={() => {
                  if (confirm('確定要清除所有學習進度與星星嗎？')) {
                    onResetProgress();
                    showToast('已重置所有進度！');
                  }
                }}
                className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold rounded-xl border border-rose-200 transition"
              >
                清除進度
              </button>
            </div>
          </div>
        )}

        {/* 2. 🌐 線上題庫同步與備份 */}
        {activeTab === 'online_sync' && (
          <div className="flex flex-col gap-4">
            {/* 遠端 URL 同步 */}
            <form onSubmit={handleOnlineSync} className="p-4 bg-indigo-50/70 rounded-2xl border border-indigo-200">
              <label className="text-xs font-black text-indigo-900 block mb-1.5 flex items-center gap-1">
                <Globe size={16} />
                <span>線上題庫 JSON 網址訂閱與同步</span>
              </label>
              <p className="text-[11px] text-indigo-700 font-semibold mb-2 leading-relaxed">
                輸入學校、老師或自訂架設的題庫 JSON 網址（如 GitHub Raw 或 Gist），一鍵下載更新。
              </p>
              <input
                type="url"
                placeholder="https://example.com/bopomofo-questions.json"
                value={onlineUrl}
                onChange={(e) => setOnlineUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-indigo-200 text-xs font-bold bg-white outline-none focus:ring-2 focus:ring-indigo-300 mb-2"
              />
              <button
                type="submit"
                disabled={isSyncing}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md transition flex items-center justify-center gap-1.5"
              >
                <RefreshCw size={14} className={isSyncing ? 'animate-spin' : ''} />
                <span>{isSyncing ? '正在同步題庫中...' : '一鍵從線上更新題庫 🚀'}</span>
              </button>
            </form>

            {/* 本地檔案匯出與匯入 */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-black text-gray-700 block mb-2">
                📂 題庫備份與離線分享 (JSON)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="py-2.5 bg-white hover:bg-amber-50 border border-gray-200 text-amber-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm transition"
                >
                  <Download size={14} />
                  <span>匯出題庫檔案</span>
                </button>

                <label className="py-2.5 bg-white hover:bg-blue-50 border border-gray-200 text-blue-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm cursor-pointer transition">
                  <Upload size={14} />
                  <span>匯入題庫檔案</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* 3. 新增自訂單字 */}
        {activeTab === 'custom_word' && (
          <form onSubmit={handleCreateWord} className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-black text-gray-700 block mb-1">單字漢字 (例如：手套)</label>
              <input
                type="text"
                required
                placeholder="例如：手套"
                value={wordHanzi}
                onChange={e => setWordHanzi(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-black text-gray-700 block mb-1">選擇 Emoji (圖示)</label>
                <input
                  type="text"
                  placeholder="🧤"
                  value={wordEmoji}
                  onChange={e => setWordEmoji(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold text-center"
                />
              </div>
              <div>
                <label className="text-xs font-black text-gray-700 block mb-1">字詞意思 (例如: 冬天保暖物)</label>
                <input
                  type="text"
                  placeholder="冬天保暖用品"
                  value={wordMeaning}
                  onChange={e => setWordMeaning(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-black text-gray-700 block mb-1">第 1 字台灣注音 (例如: ㄕㄡˇ)</label>
                <input
                  type="text"
                  placeholder="ㄕㄡˇ"
                  value={wordBpmf1}
                  onChange={e => setWordBpmf1(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold"
                />
              </div>
              <div>
                <label className="text-xs font-black text-gray-700 block mb-1">第 2 字台灣注音 (例如: ㄊㄠˋ)</label>
                <input
                  type="text"
                  placeholder="ㄊㄠˋ"
                  value={wordBpmf2}
                  onChange={e => setWordBpmf2(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 font-black text-sm shadow-md hover:scale-102 transition"
            >
              儲存並加入單字庫 ✨
            </button>
          </form>
        )}

        {/* 4. 新增自訂句子 */}
        {activeTab === 'custom_sentence' && (
          <form onSubmit={handleCreateSentence} className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-black text-gray-700 block mb-1">句子文字</label>
              <textarea
                rows={3}
                required
                placeholder="例如：我有一副溫暖的手套。"
                value={sentenceText}
                onChange={e => setSentenceText(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-black text-gray-700 block mb-1">選擇 Emoji (圖示)</label>
              <input
                type="text"
                placeholder="🧤❄️"
                value={sentenceEmoji}
                onChange={e => setSentenceEmoji(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold text-center"
              />
            </div>

            <button
              type="submit"
              className="mt-4 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 text-white font-black text-sm shadow-md hover:scale-102 transition"
            >
              儲存並加入句子庫 🎤
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
