import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export default function ScrollableMenuBar({
  children,
  className = '',
  scrollAmount = 240
}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const el = scrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollability();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [children]);

  const handleScroll = (direction) => {
    soundEffects.playBubble();
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative flex items-center w-full group ${className}`}>
      {/* 左箭頭按鈕 */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => handleScroll('left')}
          className="absolute -left-2 sm:-left-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-gray-700 shadow-md border border-amber-200 flex items-center justify-center hover:bg-amber-100 hover:text-amber-900 transition-all duration-200 transform hover:scale-110 active:scale-95"
          aria-label="向左滾動"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* 水平滾動容器 */}
      <div
        ref={scrollRef}
        className="w-full flex items-center gap-2 overflow-x-auto scrollbar-none scroll-smooth py-1 px-1"
        style={{ scrollSnapType: 'x proximity' }}
      >
        {children}
      </div>

      {/* 右箭頭按鈕 */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => handleScroll('right')}
          className="absolute -right-2 sm:-right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-gray-700 shadow-md border border-amber-200 flex items-center justify-center hover:bg-amber-100 hover:text-amber-900 transition-all duration-200 transform hover:scale-110 active:scale-95"
          aria-label="向右滾動"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
}
