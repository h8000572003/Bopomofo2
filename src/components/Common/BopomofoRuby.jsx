import React from 'react';
import { parseBopomofoString } from '../../utils/bopomofoHelper';

/**
 * 國小標準注音排版組件
 * 漢字左側，右側以直書排列注音（聲母、介音、韻母、聲調）
 */
// 結構性尺寸級別（漢字、間距、留白），由各呼叫端依畫面版型指定
const SIZE_TIERS = ['sm', 'md', 'lg', 'xl'];
const SIZE_CONFIGS = {
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
};

// 注音字級設定的階梯步數：標準不動，大/特大各往 SIZE_TIERS higher 一階，頂端封頂（見 ADR-0001）
const ANNOTATION_SCALE_STEPS = {
  normal: 0,
  large: 1,
  xlarge: 2
};

// 隱藏漢字時的注音尺寸：注音本身是正面唯一內容，不套用 size / annotationScale 階梯（見 ADR-0002，屬於 ADR-0001 的限定範圍例外）
const HIDDEN_CHAR_ANNOTATION_CONFIG = {
  bpmf: 'text-5xl leading-none font-black',
  tone: 'text-3xl font-black',
  gap: 'gap-1.5',
  padding: 'p-5'
};

export default function BopomofoRuby({
  char,
  bopomofo,
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  annotationScale = 'large', // 'normal' | 'large' | 'xlarge'（來自使用者的「注音字級設定」）
  hideChar = false, // 隱藏漢字，注音填滿整塊區域（見 ADR-0002，目前僅供 3D 字卡正面使用）
  interactive = false,
  onPartClick = null,
  highlight = false,
  className = ''
}) {
  const parts = parseBopomofoString(bopomofo);

  // 漢字、間距、留白：只依結構性 size，不受注音字級設定影響
  const sizeConfig = SIZE_CONFIGS[size] || SIZE_CONFIGS.md;

  // 注音標注（聲母/介音/韻母/聲調）：在 size 對應的階梯位置上，依注音字級設定再往上爬，頂端封頂
  const baseTierIndex = SIZE_TIERS.indexOf(size);
  const steps = ANNOTATION_SCALE_STEPS[annotationScale] ?? ANNOTATION_SCALE_STEPS.large;
  const annotationTierIndex = Math.min(
    (baseTierIndex === -1 ? SIZE_TIERS.indexOf('md') : baseTierIndex) + steps,
    SIZE_TIERS.length - 1
  );
  const annotationConfig = hideChar
    ? HIDDEN_CHAR_ANNOTATION_CONFIG
    : SIZE_CONFIGS[SIZE_TIERS[annotationTierIndex]];
  const containerPadding = hideChar ? HIDDEN_CHAR_ANNOTATION_CONFIG.padding : sizeConfig.padding;

  // 標點符號直接顯示，不附注音；隱藏漢字模式下沒有注音可顯示時不渲染任何東西
  if (!bopomofo || /[，。！？、…—\s]/.test(char)) {
    if (hideChar) return null;
    return (
      <span className={`inline-flex items-center justify-center ${sizeConfig.char} ${highlight ? 'text-bubble-pink scale-110 font-bold' : 'text-gray-700'} transition-all`}>
        {char}
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center select-none rounded-xl transition-all duration-200 ${containerPadding} ${
        highlight
          ? 'bg-amber-100 text-bubble-purple scale-110 shadow-md ring-2 ring-bubble-yellow'
          : 'hover:bg-amber-50/60'
      } ${className}`}
    >
      {/* 漢字（隱藏漢字模式下不渲染） */}
      {!hideChar && (
        <span className={`${sizeConfig.char} font-bubble tracking-wide text-gray-800 mr-1`}>
          {char}
        </span>
      )}

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
            className={`absolute -top-2 left-1/2 -translate-x-1/2 text-amber-500 ${annotationConfig.tone} ${
              interactive ? 'cursor-pointer hover:scale-125 transition-transform' : ''
            }`}
          >
            ˙
          </span>
        )}

        {/* 聲母、介音、韻母直向排列 */}
        <div className={`flex flex-col items-center justify-center ${annotationConfig.gap}`}>
          {parts.initial && (
            <span
              onClick={(e) => {
                if (interactive && onPartClick) {
                  e.stopPropagation();
                  onPartClick(parts.initial, 'initial');
                }
              }}
              title="聲母"
              className={`text-rose-500 ${annotationConfig.bpmf} ${
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
              className={`text-emerald-500 ${annotationConfig.bpmf} ${
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
              className={`text-sky-600 ${annotationConfig.bpmf} ${
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
            className={`ml-0.5 text-amber-500 font-black ${annotationConfig.tone} ${
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
