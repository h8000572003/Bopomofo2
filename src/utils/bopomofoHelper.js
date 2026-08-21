// 注音拆解、聲調與顏色工具

export const BOPOMOFO_COLORS = {
  initial: {
    bg: 'bg-rose-100',
    text: 'text-rose-600',
    border: 'border-rose-300',
    label: '聲母'
  },
  medial: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-300',
    label: '介音'
  },
  final: {
    bg: 'bg-sky-100',
    text: 'text-sky-600',
    border: 'border-sky-300',
    label: '韻母'
  },
  tone: {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    border: 'border-amber-300',
    label: '聲調'
  }
};

// 取得聲調名稱與標記
export function getToneInfo(toneSymbol) {
  switch (toneSymbol) {
    case 'ˊ':
      return { tone: 2, name: '第二聲 (陽平)', symbol: 'ˊ' };
    case 'ˇ':
      return { tone: 3, name: '第三聲 (上聲)', symbol: 'ˇ' };
    case 'ˋ':
      return { tone: 4, name: '第四聲 (去聲)', symbol: 'ˋ' };
    case '˙':
      return { tone: 5, name: '輕聲', symbol: '˙' };
    default:
      return { tone: 1, name: '第一聲 (陰平)', symbol: '' };
  }
}

// 拆解單一注音字串 (例如 "ㄒㄧㄤˋ" -> { initial: 'ㄒ', medial: 'ㄧ', final: 'ㄤ', tone: 'ˋ' })
export function parseBopomofoString(bpmfStr) {
  if (!bpmfStr) return { initial: '', medial: '', final: '', tone: '' };

  let tone = '';
  let cleanStr = bpmfStr;

  // 檢查聲調
  if (bpmfStr.includes('ˊ')) { tone = 'ˊ'; cleanStr = cleanStr.replace('ˊ', ''); }
  else if (bpmfStr.includes('ˇ')) { tone = 'ˇ'; cleanStr = cleanStr.replace('ˇ', ''); }
  else if (bpmfStr.includes('ˋ')) { tone = 'ˋ'; cleanStr = cleanStr.replace('ˋ', ''); }
  else if (bpmfStr.includes('˙')) { tone = '˙'; cleanStr = cleanStr.replace('˙', ''); }

  const initials = ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄗ','ㄘ','ㄙ'];
  const medials = ['ㄧ','ㄨ','ㄩ'];
  const finals = ['ㄚ','ㄛ','ㄜ','ㄝ','ㄞ','ㄟ','ㄠ','ㄡ','ㄢ','ㄣ','ㄤ','ㄥ','ㄦ'];

  let initial = '';
  let medial = '';
  let final = '';

  for (const char of cleanStr) {
    if (initials.includes(char)) {
      initial = char;
    } else if (medials.includes(char)) {
      medial = char;
    } else if (finals.includes(char)) {
      final = char;
    }
  }

  return { initial, medial, final, tone };
}
