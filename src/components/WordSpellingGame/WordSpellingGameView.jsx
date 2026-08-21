import React, { useState, useEffect } from 'react';
import { Sparkles, Star, RefreshCw, Volume2, CheckCircle2, HelpCircle, Trophy } from 'lucide-react';
import { TOPICS } from '../../data/topicsData';
import { ALL_BOPOMOFO, BOPOMOFO_TONES } from '../../data/bopomofoData';
import { speechHelper } from '../../utils/speechHelper';
import { soundEffects } from '../../utils/soundEffects';
import BopomofoRuby from '../Common/BopomofoRuby';

export default function WordSpellingGameView({
  onGameWin,
  speechRate = 0.85
}) {
  // 匯總所有單字
  const allWords = TOPICS.flatMap(t => t.words);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [targetCharIndex, setTargetCharIndex] = useState(0);

  // 當前玩家已選填的拼音插槽
  const [selectedInitial, setSelectedInitial] = useState(null);
  const [selectedMedial, setSelectedMedial] = useState(null);
  const [selectedFinal, setSelectedFinal] = useState(null);
  const [selectedTone, setSelectedTone] = useState('');

  // 候選選項庫
  const [candidatePool, setCandidatePool] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [score, setScore] = useState(0);

  const currentWord = allWords[currentWordIndex] || allWords[0];
  const currentChar = currentWord.characters[targetCharIndex] || currentWord.characters[0];

  // 初始化每題的選項
  const loadQuestion = (wordIdx, charIdx) => {
    const word = allWords[wordIdx];
    const targetChar = word.characters[charIdx];

    setSelectedInitial(null);
    setSelectedMedial(null);
    setSelectedFinal(null);
    setSelectedTone('');
    setIsSuccess(false);

    // 產生干擾選項 (取正確答案 + 隨機其他符號)
    const initials = ALL_BOPOMOFO.filter(b => b.type === 'initial');
    const medials = ALL_BOPOMOFO.filter(b => b.type === 'medial');
    const finals = ALL_BOPOMOFO.filter(b => b.type === 'final');

    const randomPick = (arr, count) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const candidates = [];
    if (targetChar.initial) {
      candidates.push({ symbol: targetChar.initial, type: 'initial', label: '聲母' });
    }
    randomPick(initials, 3).forEach(item => {
      if (item.symbol !== targetChar.initial) {
        candidates.push({ symbol: item.symbol, type: 'initial', label: '聲母' });
      }
    });

    if (targetChar.medial) {
      candidates.push({ symbol: targetChar.medial, type: 'medial', label: '介音' });
    }
    randomPick(medials, 2).forEach(item => {
      if (item.symbol !== targetChar.medial) {
        candidates.push({ symbol: item.symbol, type: 'medial', label: '介音' });
      }
    });

    if (targetChar.final) {
      candidates.push({ symbol: targetChar.final, type: 'final', label: '韻母' });
    }
    randomPick(finals, 3).forEach(item => {
      if (item.symbol !== targetChar.final) {
        candidates.push({ symbol: item.symbol, type: 'final', label: '韻母' });
      }
    });

    // 打亂順序
    setCandidatePool(candidates.sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    loadQuestion(currentWordIndex, targetCharIndex);
  }, [currentWordIndex, targetCharIndex]);

  // 播放提示發音
  const playTargetSound = () => {
    speechHelper.speakText(currentChar.char, { rate: speechRate });
  };

  // 點選候選符號
  const handleSelectSymbol = (item) => {
    soundEffects.playBubble();
    speechHelper.speakText(item.symbol, { rate: 0.7 });

    if (item.type === 'initial') {
      setSelectedInitial(item.symbol);
    } else if (item.type === 'medial') {
      setSelectedMedial(item.symbol);
    } else if (item.type === 'final') {
      setSelectedFinal(item.symbol);
    }
  };

  // 選擇聲調
  const handleSelectTone = (toneSymbol) => {
    soundEffects.playBubble();
    setSelectedTone(toneSymbol);
  };

  // 驗證答案
  const handleCheckAnswer = () => {
    const isInitialMatch = (currentChar.initial || '') === (selectedInitial || '');
    const isMedialMatch = (currentChar.medial || '') === (selectedMedial || '');
    const isFinalMatch = (currentChar.final || '') === (selectedFinal || '');
    const isToneMatch = (currentChar.tone || '') === (selectedTone || '');

    if (isInitialMatch && isMedialMatch && isFinalMatch && isToneMatch) {
      soundEffects.playCorrect();
      setIsSuccess(true);
      setScore(prev => prev + 10);

      // 如果該單字有多個字且未完成
      setTimeout(() => {
        if (targetCharIndex + 1 < currentWord.characters.length) {
          setTargetCharIndex(prev => prev + 1);
        } else {
          // 整個單字拼完！
          soundEffects.playStarWin();
          onGameWin && onGameWin(2);
          // 下一個單字
          setTargetCharIndex(0);
          setCurrentWordIndex((prev) => (prev + 1) % allWords.length);
        }
      }, 1500);
    } else {
      soundEffects.playWrong();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部計分與遊戲橫幅 */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 text-white shadow-lg mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-5xl p-2 bg-white/20 rounded-2xl">🧩</span>
          <div>
            <h2 className="text-2xl md:text-3xl font-black">注音拼拼樂</h2>
            <p className="text-white/90 text-xs font-semibold mt-0.5">
              聽聽看發音，找出正確的聲母、介音、韻母與聲調組合出單字！
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-2xl backdrop-blur-sm">
          <Trophy size={20} className="text-yellow-200" />
          <span className="text-base font-black">得分：{score}</span>
        </div>
      </div>

      {/* 題目卡片 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-3 border-teal-100 mb-6 text-center">
        {/* 目標單字提示 */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-7xl mb-2 animate-bounceSmall">{currentWord.emoji}</div>
          <h3 className="text-xl font-black text-gray-800">
            請拼出「<strong className="text-teal-600">{currentWord.hanzi}</strong>」的第 {targetCharIndex + 1} 個字「{currentChar.char}」
          </h3>
          <button
            onClick={playTargetSound}
            className="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm shadow-md transition transform active:scale-95"
          >
            <Volume2 size={18} />
            <span>聽發音提示</span>
          </button>
        </div>

        {/* 🧩 拼音放置槽 (聲母 + 介音 + 韻母 + 聲調) */}
        <div className="my-6 flex items-center justify-center gap-3">
          {/* 聲母槽 */}
          <div
            onClick={() => setSelectedInitial(null)}
            className={`w-20 h-24 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition ${
              selectedInitial
                ? 'bg-rose-50 border-rose-400 shadow-md'
                : 'border-rose-200 bg-rose-50/40 hover:bg-rose-50'
            }`}
          >
            <span className="text-[10px] font-bold text-rose-400">聲母</span>
            <span className="text-3xl font-black text-rose-600">
              {selectedInitial || '?'}
            </span>
          </div>

          {/* 介音槽 */}
          <div
            onClick={() => setSelectedMedial(null)}
            className={`w-20 h-24 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition ${
              selectedMedial
                ? 'bg-emerald-50 border-emerald-400 shadow-md'
                : 'border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50'
            }`}
          >
            <span className="text-[10px] font-bold text-emerald-400">介音</span>
            <span className="text-3xl font-black text-emerald-600">
              {selectedMedial || '-'}
            </span>
          </div>

          {/* 韻母槽 */}
          <div
            onClick={() => setSelectedFinal(null)}
            className={`w-20 h-24 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition ${
              selectedFinal
                ? 'bg-sky-50 border-sky-400 shadow-md'
                : 'border-sky-200 bg-sky-50/40 hover:bg-sky-50'
            }`}
          >
            <span className="text-[10px] font-bold text-sky-400">韻母</span>
            <span className="text-3xl font-black text-sky-600">
              {selectedFinal || '?'}
            </span>
          </div>

          {/* 聲調槽 */}
          <div
            onClick={() => setSelectedTone('')}
            className={`w-20 h-24 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition ${
              selectedTone !== null
                ? 'bg-amber-50 border-amber-400 shadow-md'
                : 'border-amber-200 bg-amber-50/40 hover:bg-amber-50'
            }`}
          >
            <span className="text-[10px] font-bold text-amber-400">聲調</span>
            <span className="text-3xl font-black text-amber-600">
              {selectedTone === '' ? '一聲' : selectedTone}
            </span>
          </div>
        </div>

        {/* 聲調快捷選擇列 */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="text-xs font-bold text-gray-500 mr-1">選擇聲調：</span>
          {BOPOMOFO_TONES.map((t, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectTone(t.symbol)}
              className={`px-3 py-1.5 rounded-xl font-black text-sm transition ${
                selectedTone === t.symbol
                  ? 'bg-amber-500 text-white shadow-md scale-105'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {t.name.split(' ')[0]} {t.symbol || 'ˉ'}
            </button>
          ))}
        </div>

        {/* 驗證按鈕 */}
        <div className="flex justify-center gap-3">
          <button
            onClick={handleCheckAnswer}
            disabled={isSuccess}
            className={`px-8 py-3.5 rounded-2xl font-black text-lg text-white shadow-lg transition transform active:scale-95 ${
              isSuccess
                ? 'bg-emerald-500 ring-4 ring-emerald-200 animate-bounceSmall'
                : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:scale-105'
            }`}
          >
            {isSuccess ? '🎉 答對了！太厲害了！' : '檢查拼音 ✨'}
          </button>
        </div>
      </div>

      {/* 候選符號池 */}
      <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
        <h4 className="text-sm font-black text-gray-700 mb-3 flex items-center gap-1.5">
          <Sparkles size={16} className="text-teal-500" />
          <span>點選下列注音符號放入上方插槽：</span>
        </h4>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {candidatePool.map((item, idx) => {
            const isInitial = item.type === 'initial';
            const isMedial = item.type === 'medial';
            const isFinal = item.type === 'final';

            return (
              <button
                key={idx}
                onClick={() => handleSelectSymbol(item)}
                className={`flex flex-col items-center justify-center w-16 h-20 rounded-2xl font-black border-2 shadow-sm transition transform active:scale-90 hover:scale-105 ${
                  isInitial
                    ? 'bg-rose-50 border-rose-300 text-rose-600 hover:bg-rose-100'
                    : isMedial
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-600 hover:bg-emerald-100'
                    : 'bg-sky-50 border-sky-300 text-sky-600 hover:bg-sky-100'
                }`}
              >
                <span className="text-[10px] opacity-70">{item.label}</span>
                <span className="text-2xl">{item.symbol}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
