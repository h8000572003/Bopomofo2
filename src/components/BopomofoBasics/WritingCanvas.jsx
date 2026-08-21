import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Check, Sparkles, Paintbrush, Eraser, Trash2 } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

const BRUSH_COLORS = [
  { name: '熱情紅', hex: '#E63946' },
  { name: '清新綠', hex: '#2A9D8F' },
  { name: '沉穩藍', hex: '#1D3557' },
  { name: '魔幻紫', hex: '#8338EC' },
  { name: '活力橘', hex: '#FF9F1C' },
  { name: '墨黑色', hex: '#2B2D42' },
];

export default function WritingCanvas({
  symbol = 'ㄅ',
  onFinishPractice,
  guideText = ''
}) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#E63946');
  const [brushSize, setBrushSize] = useState(12);
  const [isEraser, setIsEraser] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // 初始化並繪製田字格與背景注音底稿
  const drawBackground = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // 清空背景
    ctx.fillStyle = '#FFFDF7';
    ctx.fillRect(0, 0, width, height);

    // 繪製田字格邊框與虛線
    ctx.strokeStyle = '#FCA5A5'; // 紅色田字格外框
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // 十字虛線
    ctx.beginPath();
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#FECACA';
    ctx.lineWidth = 2;
    // 水平中線
    ctx.moveTo(10, height / 2);
    ctx.lineTo(width - 10, height / 2);
    // 垂直中線
    ctx.moveTo(width / 2, 10);
    ctx.lineTo(width / 2, height - 10);
    ctx.stroke();
    ctx.setLineDash([]); // 重設虛線

    // 繪製淺色描紅字型底稿
    ctx.fillStyle = 'rgba(203, 213, 225, 0.35)'; // 淺灰輪廓
    ctx.font = 'bold 220px "Zen Maru Gothic", "DFKai-SB", "BiauKai", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol, width / 2, height / 2 + 10);
  };

  useEffect(() => {
    drawBackground();
    setHasDrawn(false);
  }, [symbol]);

  // 取得畫布座標
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  // 開始繪製
  const startDrawing = (e) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  // 繪製中
  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (isEraser) {
      ctx.strokeStyle = '#FFFDF7';
    } else {
      ctx.strokeStyle = brushColor;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // 結束繪製
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // 清空重寫
  const handleClear = () => {
    soundEffects.playBubble();
    drawBackground();
    setHasDrawn(false);
  };

  // 完成書寫
  const handleComplete = () => {
    soundEffects.playCorrect();
    onFinishPractice && onFinishPractice(symbol);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-3xl shadow-xl border-3 border-rose-100 max-w-md mx-auto">
      {/* 頂部筆順指引 */}
      <div className="w-full text-center bg-rose-50/80 p-3 rounded-2xl border border-rose-200">
        <h4 className="text-base font-black text-rose-800 flex items-center justify-center gap-1.5">
          <Paintbrush size={18} />
          <span>動手寫寫看：「{symbol}」</span>
        </h4>
        {guideText && (
          <p className="text-xs text-rose-600 font-semibold mt-0.5">
            💡 筆順訣竅：{guideText}
          </p>
        )}
      </div>

      {/* 田字格手寫畫布 */}
      <div className="relative rounded-3xl overflow-hidden shadow-inner border-4 border-rose-300 bg-[#FFFDF7] touch-none cursor-crosshair">
        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]"
        />
      </div>

      {/* 筆刷顏色選擇 */}
      <div className="flex items-center gap-2">
        {BRUSH_COLORS.map(c => (
          <button
            key={c.hex}
            onClick={() => {
              soundEffects.playBubble();
              setBrushColor(c.hex);
              setIsEraser(false);
            }}
            title={c.name}
            style={{ backgroundColor: c.hex }}
            className={`w-7 h-7 rounded-full shadow-sm transition transform hover:scale-110 ${
              !isEraser && brushColor === c.hex ? 'ring-4 ring-rose-200 scale-110' : ''
            }`}
          />
        ))}

        <button
          onClick={() => {
            soundEffects.playBubble();
            setIsEraser(!isEraser);
          }}
          title="橡皮擦"
          className={`p-1.5 rounded-full transition ${
            isEraser ? 'bg-amber-400 text-white ring-2 ring-amber-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Eraser size={16} />
        </button>
      </div>

      {/* 底部控制按鈕 */}
      <div className="w-full flex items-center justify-between gap-3 pt-2">
        <button
          onClick={handleClear}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition"
        >
          <Trash2 size={16} />
          <span>清除重寫</span>
        </button>

        <button
          onClick={handleComplete}
          className="flex items-center gap-1.5 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-black text-sm shadow-md transition transform active:scale-95"
        >
          <Sparkles size={16} className="text-yellow-200" />
          <span>我寫好了！✨ (+1⭐)</span>
        </button>
      </div>
    </div>
  );
}
