import React, { useState, useMemo } from 'react';
import { Volume2, RotateCw, ArrowLeft, ArrowRight, Shuffle, CheckCircle2, BookOpen } from 'lucide-react';
import { TOPICS } from '../../data/topicsData';
import BopomofoRuby from '../Common/BopomofoRuby';
import MicRecorder from '../Common/MicRecorder';
import { textToBpmfTokens } from '../../utils/textToBpmf';
import { soundEffects } from '../../utils/soundEffects';
import { useSpeech } from '../../hooks/useSpeech';

export default function FlashcardDrillView({
  masteredWords = [],
  onToggleMastered,
  speechRate = 0.85,
  bopomofoScale = 'large'
}) {
  const allWords = TOPICS.flatMap(t => t.words);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'unmastered' | 'mastered'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    isListening,
    transcript,
    speechResult,
    errorMsg,
    speakText,
    startRecording,
    stopRecording
  } = useSpeech(speechRate);

  // 依篩選過濾字卡
  const filteredWords = allWords.filter(w => {
    const isMastered = masteredWords.includes(w.id);
    if (filterMode === 'mastered') return isMastered;
    if (filterMode === 'unmastered') return !isMastered;
    return true;
  });

  const activeWordsList = filteredWords.length > 0 ? filteredWords : allWords;
  const currentCard = activeWordsList[currentIndex % activeWordsList.length];
  const isCurrentMastered = currentCard ? masteredWords.includes(currentCard.id) : false;

  // 自動為例句剖析台灣教育部標準注音標記
  const sentenceTokens = useMemo(() => {
    if (!currentCard?.exampleSentence) return [];
    return textToBpmfTokens(currentCard.exampleSentence);
  }, [currentCard?.exampleSentence]);

  // 翻轉卡片
  const handleFlipCard = () => {
    soundEffects.playBubble();
    setIsFlipped(!isFlipped);
  };

  // 下一張
  const handleNext = () => {
    soundEffects.playBubble();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % activeWordsList.length);
  };

  // 上一張
  const handlePrev = () => {
    soundEffects.playBubble();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + activeWordsList.length) % activeWordsList.length);
  };

  // 隨機洗牌
  const handleShuffle = () => {
    soundEffects.playStarWin();
    setIsFlipped(false);
    const randIdx = Math.floor(Math.random() * activeWordsList.length);
    setCurrentIndex(randIdx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部橫幅 */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-white shadow-lg mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-5xl md:text-6xl p-3 bg-white/20 rounded-3xl backdrop-blur-sm">
            🃏
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-black">單字注音 3D 字卡練習</h2>
              <span className="px-3 py-0.5 rounded-full text-xs font-black bg-white/30">
                {masteredWords.length} / {allWords.length} 已記住
              </span>
            </div>
            <p className="text-white/90 text-sm mt-1 font-medium">
              看注音猜猜是哪個字，3D 翻轉查看圖解、漢字與全注音例句！
            </p>
          </div>
        </div>

        {/* 篩選標籤 */}
        <div className="flex bg-white/20 p-1.5 rounded-2xl backdrop-blur-sm self-start sm:self-auto gap-1">
          {[
            { id: 'all', label: '全部字卡' },
            { id: 'unmastered', label: '待複習 🔄' },
            { id: 'mastered', label: '已記住 ✅' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playBubble();
                setFilterMode(tab.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                filterMode === tab.id
                  ? 'bg-white text-orange-600 shadow-md'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D 翻轉字卡主體 */}
      {currentCard && (
        <div className="flex flex-col items-center">
          {/* 進度與標記按鈕 */}
          <div className="w-full max-w-lg flex items-center justify-between px-2 mb-3">
            <span className="text-xs font-black text-gray-500">
              字卡：第 { (currentIndex % activeWordsList.length) + 1 } / {activeWordsList.length} 張
            </span>

            <button
              onClick={() => onToggleMastered && onToggleMastered(currentCard.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black border transition transform active:scale-95 ${
                isCurrentMastered
                  ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-amber-50'
              }`}
            >
              <CheckCircle2 size={16} className={isCurrentMastered ? 'text-amber-600' : 'text-gray-400'} />
              <span>{isCurrentMastered ? '已標記為記住 ✨' : '標記為已記住'}</span>
            </button>
          </div>

          {/* 3D 翻轉容器 */}
          <div
            onClick={handleFlipCard}
            style={{ perspective: '1000px' }}
            className="w-full max-w-lg min-h-[540px] sm:min-h-[580px] cursor-pointer group select-none"
          >
            <div
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="relative w-full min-h-[410px] sm:min-h-[440px]"
            >
              {/* 🌟 正面：只顯示放大注音，漢字永久隱藏，翻面才揭曉解答（見 ADR-0002） */}
              <div
                style={{ backfaceVisibility: 'hidden' }}
                className="absolute inset-0 w-full h-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-200 flex flex-col items-center justify-between hover:border-amber-300 transition-colors"
              >
                <div className="w-full flex justify-between items-center text-xs font-black text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl">
                  <span>正面：看注音猜猜看</span>
                  <span className="flex items-center gap-1 text-orange-500">
                    <RotateCw size={14} className="animate-spin" />
                    點擊翻轉背面看解答
                  </span>
                </div>

                {/* 放大注音展示（不顯示漢字，不提供發音提示） */}
                <div className="flex flex-col items-center my-auto py-2">
                  <div className="flex items-center justify-center gap-4 sm:gap-6">
                    {currentCard.characters.map((c, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center p-3 sm:p-4 rounded-3xl bg-amber-50/70 border-2 border-amber-200"
                      >
                        <BopomofoRuby
                          char={c.char}
                          bopomofo={c.bopomofo}
                          hideChar
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 底部提示 */}
                <div className="w-full flex items-center justify-center pt-3 border-t border-amber-100">
                  <span className="text-xs text-gray-400 font-bold">
                    點擊卡片空白處翻轉 ➔
                  </span>
                </div>
              </div>

              {/* 🌟 背面：Emoji 圖解、釋義、全注音標註例句 */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-rose-300 flex flex-col items-center justify-between"
              >
                <div className="w-full flex justify-between items-center text-xs font-black text-rose-800 bg-rose-100 px-3 py-1.5 rounded-xl">
                  <span>背面：圖解與全注音例句</span>
                  <span className="flex items-center gap-1 text-rose-600">
                    <RotateCw size={14} />
                    點擊翻回正面
                  </span>
                </div>

                {/* 大 Emoji 與意義 */}
                <div className="flex flex-col items-center py-1">
                  <span className="text-6xl sm:text-7xl mb-1.5 animate-bounceSmall">{currentCard.emoji}</span>
                  <h3 className="text-2xl font-black text-gray-800">{currentCard.hanzi}</h3>
                  <p className="text-xs sm:text-sm font-black text-rose-600 mt-1 tracking-wider">
                    {currentCard.bpmfFull || currentCard.characters.map(c => c.bopomofo).join(' ')} <span className="text-gray-300 font-normal">|</span> <span className="text-gray-700 font-semibold">{currentCard.meaning}</span>
                  </p>
                </div>

                {/* 🔊 發音與麥克風跟讀測試（見 ADR-0003：正面維持零提示不變，發音與跟讀只在背面提供） */}
                <div className="w-full flex flex-col items-center gap-2.5 py-1">
                  <div className="flex items-center justify-center flex-wrap gap-1.5">
                    {currentCard.characters.map((c, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          soundEffects.playBubble();
                          speakText(c.char, { rate: speechRate });
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/90 hover:bg-rose-100 text-rose-700 font-black text-xs border border-rose-200 transition"
                      >
                        <Volume2 size={12} />
                        <span>{c.char}</span>
                      </button>
                    ))}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        soundEffects.playBubble();
                        speakText(currentCard.hanzi, { rate: speechRate });
                      }}
                      className="flex items-center gap-1.5 px-4 py-1 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs shadow-sm transition"
                    >
                      <Volume2 size={13} />
                      <span>整詞發音</span>
                    </button>
                  </div>

                  <MicRecorder
                    isListening={isListening}
                    onStart={() => startRecording(currentCard.hanzi)}
                    onStop={stopRecording}
                    transcript={transcript}
                    speechResult={speechResult}
                    errorMsg={errorMsg}
                    size="sm"
                    label="按我跟讀看看"
                  />
                </div>

                {/* 🌟 例句區：全面加入台灣教育部標準注音 Ruby */}
                {currentCard.exampleSentence && (
                  <div className="w-full p-3.5 bg-white/95 rounded-2xl border-2 border-rose-200 flex flex-col gap-2 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-rose-600 flex items-center gap-1">
                        <BookOpen size={14} /> 實用例句（附標準注音）：
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          soundEffects.playBubble();
                          speakText(currentCard.exampleSentence, { rate: 0.8 });
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 font-black text-xs transition"
                        title="朗讀例句"
                      >
                        <Volume2 size={14} />
                        <span>朗讀例句</span>
                      </button>
                    </div>

                    {/* 例句全注音 Ruby 渲染 */}
                    <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1 py-1 px-1 bg-rose-50/50 rounded-xl border border-rose-100">
                      {sentenceTokens.map((token, idx) => (
                        <BopomofoRuby
                          key={idx}
                          char={token.char}
                          bopomofo={token.bopomofo}
                          size="sm"
                          annotationScale={bopomofoScale}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 翻卡導覽控制列 */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-white text-gray-700 hover:bg-amber-50 border-2 border-gray-200 font-black text-sm shadow-md transition transform active:scale-95 hover:scale-105"
            >
              <ArrowLeft size={18} />
              <span>上一張</span>
            </button>

            <button
              onClick={handleShuffle}
              title="隨機抽取字卡"
              className="p-3 rounded-2xl bg-amber-100 text-amber-800 hover:bg-amber-200 border-2 border-amber-300 transition transform active:scale-95"
            >
              <Shuffle size={20} />
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-7 py-3 rounded-2xl bg-gradient-to-r from-orange-400 to-rose-500 hover:from-orange-500 hover:to-rose-600 text-white font-black text-sm shadow-lg transition transform active:scale-95 hover:scale-105"
            >
              <span>下一張</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
