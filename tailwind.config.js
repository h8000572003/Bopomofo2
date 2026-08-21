/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bubble: {
          pink: '#FF6B8B',
          yellow: '#FFD166',
          green: '#06D6A0',
          blue: '#118AB2',
          purple: '#8338EC',
          orange: '#FF9F1C',
          cream: '#FFFDF9',
        },
        bopomofo: {
          initial: '#E63946', // 聲母 - 熱情紅
          medial: '#2A9D8F',  // 介音 - 清新綠
          final: '#457B9D',   // 韻母 - 沉穩藍
          tone: '#F4A261',    // 聲調 - 明亮橘
        }
      },
      fontFamily: {
        bubble: ['"Nunito"', '"Zen Maru Gothic"', '"Comic Sans MS"', '"Microsoft JhengHei"', 'sans-serif'],
        bopomofo: ['"BpmfGenSenRounded"', '"DFKai-SB"', '"BiauKai"', '"Microsoft JhengHei"', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSmall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 107, 139, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 107, 139, 0.8)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        bounceSmall: 'bounceSmall 1.5s ease-in-out infinite',
        popIn: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        pulseGlow: 'pulseGlow 2s infinite',
      }
    },
  },
  plugins: [],
}
