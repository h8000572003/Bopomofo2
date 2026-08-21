import React, { useState } from 'react';
import { BOPOMOFO_INITIALS, BOPOMOFO_MEDIALS, BOPOMOFO_FINALS, BOPOMOFO_TONES } from '../../data/bopomofoData';
import { Volume2, Sparkles, BookOpen, PenTool, Star, CheckCircle2, ChevronRight } from 'lucide-react';
import WritingCanvas from './WritingCanvas';
import { speechHelper } from '../../utils/speechHelper';
import { soundEffects } from '../../utils/soundEffects';

export default function BopomofoBasicsView({
  onRecordDrawing,
  speechRate = 0.85
}) {
  const [activeTab, setActiveTab] = useState('initials'); // 'initials' | 'medials' | 'finals' | 'tones'
  const [selectedSymbol, setSelectedSymbol] = useState(BOPOMOFO_INITIALS[0]);
  const [showCanvasModal, setShowCanvasModal] = useState(false);

  const getListByTab = () => {
    switch (activeTab) {
      case 'initials': return BOPOMOFO_INITIALS;
      case 'medials': return BOPOMOFO_MEDIALS;
      case 'finals': return BOPOMOFO_FINALS;
      case 'tones': return BOPOMOFO_TONES;
      default: return BOPOMOFO_INITIALS;
    }
  };

  const currentList = getListByTab();

  const handleSelect = (item) => {
    soundEffects.playBubble();
    setSelectedSymbol(item);
    // 朗讀符號或聲調
    if (item.symbol) {
      speechHelper.speakText(item.symbol, { rate: speechRate });
    } else if (item.name) {
      speechHelper.speakText(item.name, { rate: speechRate });
    }
  };

  const handlePlayChant = (item) => {
    soundEffects.playBubble();
    if (item.chant) {
      speechHelper.speakText(item.chant, { rate: speechRate });
    }
  };

  const handleFinishWriting = (sym) => {
    setShowCanvasModal(false);
    onRecordDrawing && onRecordDrawing(sym);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部橫幅 */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 text-white shadow-lg mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-5xl md:text-6xl p-3 bg-white/20 rounded-3xl backdrop-blur-sm">
            🔤
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-black">注音基礎大本營</h2>
              <span className="px-3 py-0.5 rounded-full text-xs font-black bg-white/30">
                37 符號 + 5 聲調
              </span>
            </div>
            <p className="text-white/90 text-sm mt-1 font-medium">
              認識聲母、介音、韻母與聲調，點讀標準發音，練習手寫筆順！
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCanvasModal(true)}
          className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-rose-600 hover:bg-rose-50 font-black text-sm shadow-md transition transform hover:scale-105 active:scale-95"
        >
          <PenTool size={18} />
          <span>開啟描紅畫板 ✍️</span>
        </button>
      </div>

      {/* 四大分類標籤 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {[
          { id: 'initials', label: '聲母 (21個)', desc: 'ㄅ~ㄙ', color: 'from-rose-500 to-red-500' },
          { id: 'medials', label: '介音 (3個)', desc: 'ㄧ ㄨ ㄩ', color: 'from-emerald-500 to-teal-500' },
          { id: 'finals', label: '韻母 (13個)', desc: 'ㄚ~ㄦ', color: 'from-sky-500 to-blue-500' },
          { id: 'tones', label: '聲調 (5聲)', desc: '一二三四輕', color: 'from-amber-500 to-orange-500' },
        ].map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playBubble();
                setActiveTab(tab.id);
                const newList = tab.id === 'initials' ? BOPOMOFO_INITIALS
                  : tab.id === 'medials' ? BOPOMOFO_MEDIALS
                  : tab.id === 'finals' ? BOPOMOFO_FINALS
                  : BOPOMOFO_TONES;
                setSelectedSymbol(newList[0]);
              }}
              className={`p-3.5 rounded-2xl font-black text-sm transition transform text-left flex flex-col justify-between ${
                isActive
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-102 ring-2 ring-white`
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="text-base">{tab.label}</span>
              <span className={`text-[11px] font-semibold mt-1 ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                {tab.desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* 主體區：左側符號矩陣 + 右側精選學習卡 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左側符號按鈕網格 */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-gray-100">
          <h3 className="text-sm font-black text-gray-600 mb-4 flex items-center justify-between">
            <span>點擊注音符號聆聽發音：</span>
            <span className="text-xs text-rose-500 font-bold">點選即可在右側深入學習 ➔</span>
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
            {currentList.map((item, idx) => {
              const isSelected = selectedSymbol?.symbol === item.symbol && (item.symbol !== '' || selectedSymbol?.name === item.name);
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl font-black transition transform active:scale-95 duration-150 ${
                    isSelected
                      ? 'bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg scale-110 ring-4 ring-rose-200'
                      : 'bg-slate-50 hover:bg-rose-50/80 text-gray-800 border border-slate-200/80 hover:border-rose-300'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl mb-0.5">
                    {item.symbol || item.mark || 'ˉ'}
                  </span>
                  <span className={`text-[10px] font-bold ${isSelected ? 'text-white/90' : 'text-gray-400'}`}>
                    {item.typeName || '注音'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 右側：當前符號學習焦點卡片 */}
        {selectedSymbol && (
          <div className="bg-white rounded-3xl p-6 shadow-xl border-3 border-rose-200 flex flex-col items-center text-center justify-between">
            {/* 符號大標 */}
            <div className="w-full">
              <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 border-2 border-rose-300 flex items-center justify-center shadow-inner mb-3">
                <span className="text-7xl font-black text-rose-600">
                  {selectedSymbol.symbol || selectedSymbol.mark || 'ˉ'}
                </span>
              </div>

              <h4 className="text-xl font-black text-gray-800">
                {selectedSymbol.name}
              </h4>
              <p className="text-xs text-rose-500 font-black mt-1">
                【台灣標準注音 • {selectedSymbol.typeName || '符號'}】
              </p>
            </div>

            {/* 代表字與口訣 */}
            <div className="w-full my-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-left">
              {selectedSymbol.example && (
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-amber-200/60">
                  <span className="text-2xl">{selectedSymbol.emoji}</span>
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 block">生活代表字：</span>
                    <strong className="text-base text-gray-800">{selectedSymbol.example}</strong>
                  </div>
                </div>
              )}

              {selectedSymbol.chant && (
                <div>
                  <span className="text-[10px] font-bold text-amber-800 block">趣味記憶口訣：</span>
                  <p className="text-xs font-bold text-amber-950 mt-0.5 leading-relaxed">
                    「{selectedSymbol.chant}」
                  </p>
                </div>
              )}
            </div>

            {/* 互動按鈕 */}
            <div className="w-full flex flex-col gap-2">
              <button
                onClick={() => handlePlayChant(selectedSymbol)}
                className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs shadow-sm flex items-center justify-center gap-1.5 transition"
              >
                <Volume2 size={16} />
                <span>唸唱趣味口訣 🎵</span>
              </button>

              <button
                onClick={() => setShowCanvasModal(true)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-black text-xs shadow-sm flex items-center justify-center gap-1.5 transition transform active:scale-95"
              >
                <PenTool size={16} />
                <span>動手描紅寫寫看 ✍️</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 手寫描紅 Modal */}
      {showCanvasModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-popIn">
          <div className="relative">
            <WritingCanvas
              symbol={selectedSymbol?.symbol || 'ㄅ'}
              guideText={selectedSymbol?.guide || ''}
              onFinishPractice={handleFinishWriting}
            />
            <button
              onClick={() => setShowCanvasModal(false)}
              className="absolute -top-3 -right-3 bg-white text-gray-600 rounded-full p-2 shadow-lg border hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
