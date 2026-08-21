import React from 'react';
import { parseBopomofoString } from '../../utils/bopomofoHelper';

/**
 * 國小標準注音排版組件
 * 漢字左側，右側以直書排列注音（聲母、介音、韻母、聲調）
 */
export default function BopomofoRuby({
  char,
  bopomofo,
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  interactive = false,
  onPartClick = null,
  highlight = false,
  className = ''
}) {
  const parts = parseBopomofoString(bopomofo);

  // 尺寸級別
  const sizeConfig = {
    sm: {
      char: 'text-xl',
      bpmf: 'text-[11px] leading-tight',
      tone: 'text-[10px]',
      gap: 'gap-0.5',
      padding: 'p-1'
    },
    md: {
      char: 'text-3xl font-bold',
      bpmf: 'text-xs leading-none font-semibold',
      tone: 'text-[11px] font-bold',
      gap: 'gap-1',
      padding: 'p-1.5'
    },
    lg: {
      char: 'text-5xl font-extrabold',
      bpmf: 'text-base leading-none font-bold',
      tone: 'text-sm font-extrabold',
      gap: 'gap-1.5',
      padding: 'p-2'
    },
    xl: {
      char: 'text-7xl font-black',
      bpmf: 'text-xl leading-none font-black',
      tone: 'text-lg font-black',
      gap: 'gap-2',
      padding: 'p-3'
    }
  }[size] || sizeConfig.md;

  // 標點符號直接顯示，不附注音
  if (!bopomofo || /[，。！？、…—\s]/.test(char)) {
    return (
      <span className={`inline-flex items-center justify-center ${sizeConfig.char} ${highlight ? 'text-bubble-pink scale-110 font-bold' : 'text-gray-700'} transition-all`}>
        {char}
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center select-none rounded-xl transition-all duration-200 ${sizeConfig.padding} ${
        highlight
          ? 'bg-amber-100 text-bubble-purple scale-110 shadow-md ring-2 ring-bubble-yellow'
          : 'hover:bg-amber-50/60'
      } ${className}`}
    >
      {/* 漢字 */}
      <span className={`${sizeConfig.char} font-bubble tracking-wide text-gray-800 mr-1`}>
        {char}
      </span>

      {/* 右側注音符號直書區 */}
      <div className="relative inline-flex items-center justify-center">
        {/* 輕聲標記（通常在上方或右側） */}
        {parts.tone === '˙' && (
          <span
            onClick={(e) => {
              if (interactive && onPartClick) {
                e.stopPropagation();
                onPartClick('˙', 'tone');
              }
            }}
            className={`absolute -top-2 left-1/2 -translate-x-1/2 text-amber-500 ${sizeConfig.tone} ${
              interactive ? 'cursor-pointer hover:scale-125 transition-transform' : ''
            }`}
          >
            ˙
          </span>
        )}

        {/* 聲母、介音、韻母直向排列 */}
        <div className={`flex flex-col items-center justify-center ${sizeConfig.gap}`}>
          {parts.initial && (
            <span
              onClick={(e) => {
                if (interactive && onPartClick) {
                  e.stopPropagation();
                  onPartClick(parts.initial, 'initial');
                }
              }}
              title="聲母"
              className={`text-rose-500 ${sizeConfig.bpmf} ${
                interactive ? 'cursor-pointer hover:scale-125 transition-transform' : ''
              }`}
            >
              {parts.initial}
            </span>
          )}

          {parts.medial && (
            <span
              onClick={(e) => {
                if (interactive && onPartClick) {
                  e.stopPropagation();
                  onPartClick(parts.medial, 'medial');
                }
              }}
              title="介音"
              className={`text-emerald-500 ${sizeConfig.bpmf} ${
                interactive ? 'cursor-pointer hover:scale-125 transition-transform' : ''
              }`}
            >
              {parts.medial}
            </span>
          )}

          {parts.final && (
            <span
              onClick={(e) => {
                if (interactive && onPartClick) {
                  e.stopPropagation();
                  onPartClick(parts.final, 'final');
                }
              }}
              title="韻母"
              className={`text-sky-600 ${sizeConfig.bpmf} ${
                interactive ? 'cursor-pointer hover:scale-125 transition-transform' : ''
              }`}
            >
              {parts.final}
            </span>
          )}
        </div>

        {/* 聲調標記 (二、三、四聲在右側中間偏上方) */}
        {parts.tone && parts.tone !== '˙' && (
          <span
            onClick={(e) => {
              if (interactive && onPartClick) {
                e.stopPropagation();
                onPartClick(parts.tone, 'tone');
              }
            }}
            title="聲調"
            className={`ml-0.5 text-amber-500 font-black ${sizeConfig.tone} ${
              interactive ? 'cursor-pointer hover:scale-125 transition-transform' : ''
            }`}
          >
            {parts.tone}
          </span>
        )}
      </div>
    </div>
  );
}
