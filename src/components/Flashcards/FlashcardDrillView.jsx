import React, { useState } from 'react';
import { Sparkles, Star, Volume2, Mic, RotateCw, ArrowLeft, ArrowRight, Shuffle, CheckCircle2, RotateCcw, BookOpen } from 'lucide-react';
import { TOPICS } from '../../data/topicsData';
import BopomofoRuby from '../Common/BopomofoRuby';
import AudioButton from '../Common/AudioButton';
import MicRecorder from '../Common/MicRecorder';
import { speechHelper } from '../../utils/speechHelper';
import { soundEffects } from '../../utils/soundEffects';
import { useSpeech } from '../../hooks/useSpeech';

export default function FlashcardDrillView({
  masteredWords = [],
  onToggleMastered,
  speechRate = 0.85
}) {
  const allWords = TOPICS.flatMap(t => t.words);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'unmastered' | 'mastered'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    isPlaying,
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

  // 播放單字發音
  const handlePlayWord = () => {
    if (currentCard) {
      speakText(currentCard.hanzi, { rate: speechRate });
    }
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
              點擊卡片 3D 翻轉，正反面對照，隨心翻卡背單字！
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
            className="w-full max-w-lg h-[380px] sm:h-[420px] cursor-pointer group select-none"
          >
            <div
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="relative w-full h-full"
            >
              {/* 正面：超大漢字 + 國小標準注音 */}
              <div
                style={{ backfaceVisibility: 'hidden' }}
                className="absolute inset-0 w-full h-full bg-white rounded-3xl p-8 shadow-2xl border-4 border-amber-200 flex flex-col items-center justify-between hover:border-amber-300 transition-colors"
              >
                <div className="w-full flex justify-between items-center text-xs font-black text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl">
                  <span>正面：漢字與注音</span>
                  <span className="flex items-center gap-1 text-orange-500">
                    <RotateCw size={14} className="animate-spin" />
                    點擊翻轉背面
                  </span>
                </div>

                {/* 漢字 + 注音展示 */}
                <div className="flex items-center justify-center gap-4 my-auto">
                  {currentCard.characters.map((c, idx) => (
                    <BopomofoRuby
                      key={idx}
                      char={c.char}
                      bopomofo={c.bopomofo}
                      size="xl"
                    />
                  ))}
                </div>

                {/* 底部發音控制 */}
                <div className="w-full flex items-center justify-between gap-3 pt-3 border-t border-amber-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayWord();
                    }}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-bubble-pink hover:bg-pink-600 text-white font-black text-sm rounded-2xl shadow-md transition transform active:scale-95"
                  >
                    <Volume2 size={18} />
                    <span>聽發音</span>
                  </button>

                  <span className="text-xs text-gray-400 font-bold">
                    點擊任意處翻轉查看圖解 ➔
                  </span>
                </div>
              </div>

              {/* 背面：Emoji 圖解、拼音拆解、例句 */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-rose-300 flex flex-col items-center justify-between"
              >
                <div className="w-full flex justify-between items-center text-xs font-black text-rose-800 bg-rose-100 px-3 py-1.5 rounded-xl">
                  <span>背面：圖解與例句</span>
                  <span className="flex items-center gap-1 text-rose-600">
                    <RotateCw size={14} />
                    點擊翻回正面
                  </span>
                </div>

                {/* 大 Emoji 與意義 */}
                <div className="flex flex-col items-center my-auto">
                  <span className="text-7xl mb-2 animate-bounceSmall">{currentCard.emoji}</span>
                  <h3 className="text-2xl font-black text-gray-800">{currentCard.hanzi}</h3>
                  <p className="text-sm font-black text-rose-500 mt-1 tracking-wider">
                    {currentCard.bpmfFull || currentCard.characters.map(c => c.bopomofo).join(' ')} <span className="text-gray-400 font-normal">|</span> <span className="text-gray-600 font-semibold">{currentCard.meaning}</span>
                  </p>
                </div>

                {/* 例句區 */}
                {currentCard.exampleSentence && (
                  <div className="w-full p-3 bg-white/90 rounded-2xl border border-rose-200 flex items-center justify-between gap-2 shadow-sm">
                    <div className="text-left flex-1">
                      <span className="text-[10px] font-black text-rose-500 block">實用例句：</span>
                      <p className="text-xs font-bold text-gray-800">{currentCard.exampleSentence}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(currentCard.exampleSentence, { rate: 0.8 });
                      }}
                      className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition"
                      title="朗讀例句"
                    >
                      <Volume2 size={16} />
                    </button>
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
