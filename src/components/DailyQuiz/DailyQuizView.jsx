import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Star, Volume2, CheckCircle2, XCircle, RotateCcw, Flame, ArrowRight } from 'lucide-react';
import { TOPICS } from '../../data/topicsData';
import { speechHelper } from '../../utils/speechHelper';
import { soundEffects } from '../../utils/soundEffects';
import BopomofoRuby from '../Common/BopomofoRuby';
import MicRecorder from '../Common/MicRecorder';
import { useSpeech } from '../../hooks/useSpeech';

export default function DailyQuizView({
  onQuizCompleted,
  speechRate = 0.85
}) {
  const [quizState, setQuizState] = useState('intro'); // 'intro' | 'playing' | 'result'
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const {
    isListening,
    transcript,
    speechResult,
    errorMsg,
    startRecording,
    stopRecording
  } = useSpeech(speechRate);

  // 產生 5 題隨機題目
  const generateQuestions = () => {
    const allWords = TOPICS.flatMap(t => t.words);
    const allSentences = TOPICS.flatMap(t => t.sentences);
    const shuffledWords = [...allWords].sort(() => 0.5 - Math.random());
    const shuffledSentences = [...allSentences].sort(() => 0.5 - Math.random());

    const generated = [];

    // 題目 1: 聽音選單字卡
    const target1 = shuffledWords[0];
    const choices1 = [target1, shuffledWords[1], shuffledWords[2], shuffledWords[3]].sort(() => 0.5 - Math.random());
    generated.push({
      type: 'listen_word',
      title: '聽音辨字：請仔細聽，選出正確的單字！',
      target: target1,
      choices: choices1
    });

    // 題目 2: 看注音選漢字
    const target2 = shuffledWords[4];
    const choices2 = [target2, shuffledWords[5], shuffledWords[6], shuffledWords[7]].sort(() => 0.5 - Math.random());
    generated.push({
      type: 'bopomofo_to_word',
      title: `請問「${target2.characters.map(c => c.bopomofo).join(' ')}」是哪一個單字？`,
      target: target2,
      choices: choices2
    });

    // 題目 3: 聽音選注音
    const target3 = shuffledWords[8];
    const targetChar3 = target3.characters[0];
    const wrongChars = shuffledWords.slice(9, 12).map(w => w.characters[0]);
    const choices3 = [targetChar3, ...wrongChars].sort(() => 0.5 - Math.random());
    generated.push({
      type: 'listen_bopomofo',
      title: `請問單字「${target3.hanzi}」的「${targetChar3.char}」注音是什麼？`,
      target: target3,
      targetChar: targetChar3,
      choices: choices3
    });

    // 題目 4: 語音句子跟讀挑戰
    const sentenceTarget = shuffledSentences[0] || allSentences[0];
    generated.push({
      type: 'speech_sentence',
      title: '語音朗讀挑戰：請按下麥克風，大聲唸出完整句子！',
      targetSentence: sentenceTarget
    });

    // 題目 5: 綜合辨識
    const target5 = shuffledWords[12] || shuffledWords[1];
    const choices5 = [target5, shuffledWords[2], shuffledWords[3], shuffledWords[4]].sort(() => 0.5 - Math.random());
    generated.push({
      type: 'listen_word',
      title: '最後衝刺：聽發音選出正確卡片！',
      target: target5,
      choices: choices5
    });

    setQuestions(generated);
    setCurrentIndex(0);
    setScore(0);
    setCombo(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizState('playing');
  };

  const currentQ = questions[currentIndex];

  // 播放當前題目的提示聲音
  useEffect(() => {
    if (quizState === 'playing' && currentQ) {
      if (currentQ.type === 'listen_word') {
        speechHelper.speakText(currentQ.target.hanzi, { rate: speechRate });
      } else if (currentQ.type === 'speech_sentence') {
        speechHelper.speakText(currentQ.targetSentence.text, { rate: speechRate });
      }
    }
  }, [quizState, currentIndex]);

  // 選擇答案
  const handleSelectChoice = (choice) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedAnswer(choice);

    let isCorrect = false;
    if (currentQ.type === 'listen_word' || currentQ.type === 'bopomofo_to_word') {
      isCorrect = choice.id === currentQ.target.id;
    } else if (currentQ.type === 'listen_bopomofo') {
      isCorrect = choice.bopomofo === currentQ.targetChar.bopomofo;
    }

    if (isCorrect) {
      soundEffects.playCorrect();
      const points = 20 + combo * 5;
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
    } else {
      soundEffects.playWrong();
      setCombo(0);
    }
  };

  // 語音朗讀測驗完成
  const handleSpeechQuizComplete = (evalResult) => {
    setIsAnswered(true);
    if (evalResult.score >= 50) {
      const points = 20 + combo * 5;
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
    } else {
      setCombo(0);
    }
  };

  // 下一題或結算
  const handleNextQuestion = () => {
    soundEffects.playBubble();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // 測驗結束！
      soundEffects.playFanfare();
      setQuizState('result');
      const starsEarned = score >= 80 ? 3 : score >= 50 ? 2 : 1;
      onQuizCompleted && onQuizCompleted(starsEarned);
    }
  };

  if (quizState === 'intro') {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
        <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-blue-100 text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center text-5xl shadow-lg animate-bounceSmall">
            ⚡
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">每日注音挑戰賽</h2>
          <p className="text-gray-600 font-semibold mb-6">
            包含聽音辨字、注音選擇與語音朗讀等 5 道趣味關卡，連擊答對獲得更高分！
          </p>

          <button
            onClick={() => {
              soundEffects.playBubble();
              generateQuestions();
            }}
            className="w-full max-w-sm mx-auto py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-xl shadow-lg transition transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles size={24} className="text-yellow-300" />
            <span>開始今日挑戰 🚀</span>
          </button>
        </div>
      </div>
    );
  }

  if (quizState === 'result') {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-popIn">
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-amber-200 text-center">
          <div className="text-7xl mb-3 animate-bounceSmall">🏆</div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">挑戰完成！</h2>
          <p className="text-gray-500 font-bold mb-6">今天表現得非常出色喔！</p>

          {/* 總分展示 */}
          <div className="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 inline-block w-full max-w-sm">
            <span className="text-sm font-black text-amber-800">總得分</span>
            <div className="text-6xl font-black text-amber-600 my-2">{score}</div>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1, 2, 3].map(s => (
                <Star
                  key={s}
                  size={28}
                  className={`${score >= s * 30 ? 'text-amber-400 fill-amber-400 animate-bounceSmall' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => {
                soundEffects.playBubble();
                generateQuestions();
              }}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-black text-lg shadow-lg hover:scale-105 transition transform active:scale-95 flex items-center gap-2"
            >
              <RotateCcw size={20} />
              <span>再玩一次 ⚡</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-2 animate-fadeIn">
      {/* 頂部進度條與得分連擊 */}
      <div className="flex items-center justify-between gap-4 mb-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-gray-500">
            第 {currentIndex + 1} / {questions.length} 題
          </span>
          <div className="w-32 sm:w-48 h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {combo > 1 && (
            <div className="flex items-center gap-1 text-xs font-black text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full border border-orange-300 animate-pulse">
              <Flame size={14} />
              <span>{combo} 連擊！</span>
            </div>
          )}
          <span className="text-base font-black text-indigo-600">得分：{score}</span>
        </div>
      </div>

      {/* 題目主卡片 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-3 border-blue-100 text-center mb-6">
        <h3 className="text-xl font-black text-gray-800 mb-4">{currentQ.title}</h3>

        {/* 聽音單字題 */}
        {currentQ.type === 'listen_word' && (
          <div>
            <button
              onClick={() => speechHelper.speakText(currentQ.target.hanzi, { rate: speechRate })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-base shadow-md mb-6 transition transform active:scale-95"
            >
              <Volume2 size={20} />
              <span>再聽一次發音 🔊</span>
            </button>

            <div className="grid grid-cols-2 gap-4">
              {currentQ.choices.map((choice) => {
                const isSelected = selectedAnswer?.id === choice.id;
                const isCorrect = choice.id === currentQ.target.id;
                let btnStyle = 'bg-slate-50 border-slate-200 text-gray-800 hover:bg-amber-50';

                if (isAnswered) {
                  if (isCorrect) btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 ring-2 ring-emerald-300';
                  else if (isSelected) btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                }

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition duration-150 ${btnStyle}`}
                  >
                    <span className="text-5xl">{choice.emoji}</span>
                    <span className="text-xl font-black">{choice.hanzi}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 看注音選漢字題 */}
        {currentQ.type === 'bopomofo_to_word' && (
          <div>
            <div className="my-4 p-4 bg-amber-50 rounded-2xl border border-amber-200 inline-flex items-center gap-2">
              <span className="text-3xl font-black text-amber-900">
                {currentQ.target.characters.map(c => c.bopomofo).join(' ')}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {currentQ.choices.map((choice) => {
                const isSelected = selectedAnswer?.id === choice.id;
                const isCorrect = choice.id === currentQ.target.id;
                let btnStyle = 'bg-slate-50 border-slate-200 text-gray-800 hover:bg-amber-50';

                if (isAnswered) {
                  if (isCorrect) btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 ring-2 ring-emerald-300';
                  else if (isSelected) btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                }

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition duration-150 ${btnStyle}`}
                  >
                    <span className="text-4xl">{choice.emoji}</span>
                    <span className="text-xl font-black">{choice.hanzi}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 聽音選注音題 */}
        {currentQ.type === 'listen_bopomofo' && (
          <div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-5xl">{currentQ.target.emoji}</span>
              <span className="text-4xl font-black text-gray-800">{currentQ.target.hanzi}</span>
            </div>

            <button
              onClick={() => speechHelper.speakText(currentQ.targetChar.char, { rate: speechRate })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm shadow-md mb-6"
            >
              <Volume2 size={18} />
              <span>聽發音 🔊</span>
            </button>

            <div className="grid grid-cols-2 gap-4">
              {currentQ.choices.map((choice, idx) => {
                const isSelected = selectedAnswer?.bopomofo === choice.bopomofo;
                const isCorrect = choice.bopomofo === currentQ.targetChar.bopomofo;
                let btnStyle = 'bg-slate-50 border-slate-200 text-gray-800 hover:bg-amber-50';

                if (isAnswered) {
                  if (isCorrect) btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 ring-2 ring-emerald-300';
                  else if (isSelected) btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectChoice(choice)}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-2 transition duration-150 ${btnStyle}`}
                  >
                    <span className="text-2xl font-black text-purple-700">{choice.bopomofo}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 語音句子跟讀測驗題 */}
        {currentQ.type === 'speech_sentence' && (
          <div className="flex flex-col items-center">
            <div className="my-4 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 max-w-lg w-full">
              <span className="text-3xl mb-1 block">{currentQ.targetSentence.emoji}</span>
              <p className="text-xs text-rose-500 font-bold mt-1 tracking-wider">
                {currentQ.targetSentence.tokens.filter(t => t.bopomofo).map(t => t.bopomofo).join(' ')}
              </p>
            </div>

            <button
              onClick={() => speechHelper.speakText(currentQ.targetSentence.text, { rate: speechRate })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm shadow-md mb-4"
            >
              <Volume2 size={18} />
              <span>聽示範發音</span>
            </button>

            <MicRecorder
              isListening={isListening}
              onStart={() => startRecording(currentQ.targetSentence.text, handleSpeechQuizComplete)}
              onStop={stopRecording}
              transcript={transcript}
              speechResult={speechResult}
              errorMsg={errorMsg}
              label="按我開始朗讀句子"
            />
          </div>
        )}

        {/* 下一題按鈕 */}
        {isAnswered && (
          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-center animate-popIn">
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-black text-lg shadow-lg hover:scale-105 transition transform active:scale-95 flex items-center gap-2"
            >
              <span>{currentIndex + 1 < questions.length ? '下一題 ➔' : '查看總成績 🏆'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
