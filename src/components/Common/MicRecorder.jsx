import React from 'react';
import { Mic, MicOff, Star, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export default function MicRecorder({
  isListening,
  onStart,
  onStop,
  transcript,
  speechResult,
  errorMsg,
  size = 'md', // 'sm' | 'md' | 'lg'
  label = '按我跟讀',
  className = ''
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (isListening) {
      onStop && onStop();
    } else {
      onStart && onStart();
    }
  };

  const buttonSize = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  }[size] || 'w-14 h-14';

  const iconSize = {
    sm: 18,
    md: 24,
    lg: 36
  }[size] || 24;

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* 麥克風按鈕主體 */}
      <div className="relative">
        {/* 錄音波紋動畫 */}
        {isListening && (
          <div className="absolute -inset-3 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        )}

        <button
          onClick={handleClick}
          title={isListening ? '點擊停止錄音' : '點擊開始朗讀跟讀'}
          className={`relative flex items-center justify-center rounded-full text-white shadow-lg transition-all transform active:scale-95 duration-200 ${buttonSize} ${
            isListening
              ? 'bg-emerald-500 ring-4 ring-emerald-300 scale-110 shadow-emerald-300/50 animate-pulse'
              : 'bg-gradient-to-tr from-bubble-blue to-teal-400 hover:scale-105 hover:shadow-cyan-200/60'
          }`}
        >
          {isListening ? (
            <Mic size={iconSize} className="animate-bounce" />
          ) : (
            <Mic size={iconSize} />
          )}
        </button>
      </div>

      {/* 提示或辨識狀態 */}
      <div className="text-center">
        {isListening ? (
          <div className="flex items-center gap-2 text-emerald-600 font-bold animate-pulse">
            <span className="flex gap-1">
              <span className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-4 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </span>
            <span className="text-sm">正在聆聽中，請大聲唸出來...</span>
          </div>
        ) : (
          <span className="text-xs font-semibold text-gray-500">{label}</span>
        )}

        {/* 即時轉錄文字 */}
        {transcript && isListening && (
          <div className="mt-1 text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
            聽到：「{transcript}」
          </div>
        )}

        {/* 辨識評分結果 */}
        {speechResult && !isListening && (
          <div className="mt-2 p-2.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl flex flex-col items-center gap-1 shadow-sm animate-popIn">
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((starIdx) => (
                <Star
                  key={starIdx}
                  size={20}
                  className={`${
                    starIdx <= speechResult.stars
                      ? 'text-amber-400 fill-amber-400 animate-bounceSmall'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="text-sm font-black text-amber-900 flex items-center gap-1">
              {speechResult.stars === 3 ? (
                <>
                  <Sparkles size={16} className="text-amber-500" />
                  <span>太神了！發音滿分！⭐⭐⭐</span>
                </>
              ) : speechResult.stars === 2 ? (
                <>
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>唸得很好喔！再接再厲！⭐⭐</span>
                </>
              ) : (
                <>
                  <RotateCcw size={16} className="text-blue-500" />
                  <span>加油！再大聲唸一次看看！⭐</span>
                </>
              )}
            </div>

            {transcript && (
              <span className="text-xs text-gray-600">
                你的發音：<strong className="text-bubble-purple">「{transcript}」</strong> (準確度 {speechResult.score}%)
              </span>
            )}
          </div>
        )}

        {/* 錯誤提示 */}
        {errorMsg && (
          <div className="mt-1.5 text-xs text-rose-500 bg-rose-50 px-2.5 py-1 rounded-xl border border-rose-200">
            {errorMsg}
          </div>
        )}
      </div>
    </div>
  );
}
