import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export default function AudioButton({
  onClick,
  isPlaying = false,
  size = 'md', // 'sm' | 'md' | 'lg'
  label = '發音',
  subLabel = null,
  color = 'bg-bubble-pink hover:bg-pink-600',
  className = ''
}) {
  const sizeConfig = {
    sm: 'px-3 py-1.5 text-sm gap-1.5 rounded-xl',
    md: 'px-5 py-2.5 text-base font-bold gap-2 rounded-2xl shadow-md',
    lg: 'px-7 py-4 text-xl font-extrabold gap-3 rounded-3xl shadow-lg'
  }[size] || 'px-5 py-2.5 text-base rounded-2xl';

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 26 : 20;

  const handleClick = (e) => {
    e.stopPropagation();
    soundEffects.playBubble();
    onClick && onClick();
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPlaying}
      className={`inline-flex items-center justify-center font-bubble text-white transition-all transform active:scale-95 duration-150 ${color} ${
        isPlaying ? 'ring-4 ring-pink-300 animate-pulse scale-105' : 'hover:scale-105'
      } ${sizeConfig} ${className}`}
    >
      <Volume2
        size={iconSize}
        className={isPlaying ? 'animate-bounce text-yellow-200' : ''}
      />
      <span>{isPlaying ? '朗讀中...' : label}</span>
      {subLabel && (
        <span className="text-xs opacity-90 font-normal bg-white/20 px-2 py-0.5 rounded-full">
          {subLabel}
        </span>
      )}
    </button>
  );
}
