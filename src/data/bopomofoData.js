// 台灣繁體 37 個注音符號 + 5 個聲調基礎資料庫 (100% 純台灣注音，非羅馬拼音)

export const BOPOMOFO_INITIALS = [
  { symbol: 'ㄅ', name: '注音 ㄅ', typeName: '聲母', example: '芭樂', emoji: '🍈', chant: 'ㄅ ㄅ 芭樂 ㄅ ㄅ ㄅ，清脆又香甜！', strokes: 2, guide: '先寫橫折，再寫短橫' },
  { symbol: 'ㄆ', name: '注音 ㄆ', typeName: '聲母', example: '蘋果', emoji: '🍎', chant: 'ㄆ ㄆ 蘋果 ㄆ ㄆ ㄆ，紅紅大蘋果！', strokes: 2, guide: '先寫斜撇，再寫橫折撇' },
  { symbol: 'ㄇ', name: '注音 ㄇ', typeName: '聲母', example: '貓咪', emoji: '🐱', chant: 'ㄇ ㄇ 貓咪 ㄇ ㄇ ㄇ，喵喵愛撒嬌！', strokes: 2, guide: '左豎，再接橫折豎' },
  { symbol: 'ㄈ', name: '注音 ㄈ', typeName: '聲母', example: '風箏', emoji: '🪁', chant: 'ㄈ ㄈ 風箏 ㄈ ㄈ ㄈ，飛上青天去！', strokes: 2, guide: '先寫橫，再寫豎折' },
  { symbol: 'ㄉ', name: '注音 ㄉ', typeName: '聲母', example: '大象', emoji: '🐘', chant: 'ㄉ ㄉ 大象 ㄉ ㄉ ㄉ，長長大鼻子！', strokes: 2, guide: '先橫，再寫撇折橫' },
  { symbol: 'ㄊ', name: '注音 ㄊ', typeName: '聲母', example: '兔子', emoji: '🐰', chant: 'ㄊ ㄊ 兔子 ㄊ ㄊ ㄊ，蹦蹦跳跳跳！', strokes: 3, guide: '先豎，再橫，最後橫折撇' },
  { symbol: 'ㄋ', name: '注音 ㄋ', typeName: '聲母', example: '牛奶', emoji: '🥛', chant: 'ㄋ ㄋ 牛奶 ㄋ ㄋ ㄋ，濃醇好營養！', strokes: 2, guide: '橫折折彎向右' },
  { symbol: 'ㄌ', name: '注音 ㄌ', typeName: '聲母', example: '老虎', emoji: '🐯', chant: 'ㄌ ㄌ 老虎 ㄌ ㄌ ㄌ，威風森林王！', strokes: 2, guide: '先橫折，再接下折撇' },
  { symbol: 'ㄍ', name: '注音 ㄍ', typeName: '聲母', example: '狗狗', emoji: '🐶', chant: 'ㄍ ㄍ 狗狗 ㄍ ㄍ ㄍ，汪汪看家門！', strokes: 2, guide: '橫折，再撇折' },
  { symbol: 'ㄎ', name: '注音 ㄎ', typeName: '聲母', example: '恐龍', emoji: '🦖', chant: 'ㄎ ㄎ 恐龍 ㄎ ㄎ ㄎ，大步向前行！', strokes: 2, guide: '上橫，再寫豎折拐' },
  { symbol: 'ㄏ', name: '注音 ㄏ', typeName: '聲母', example: '蝴蝶', emoji: '🦋', chant: 'ㄏ ㄏ 蝴蝶 ㄏ ㄏ ㄏ，花間拍翅膀！', strokes: 2, guide: '橫畫，再向左撇下' },
  { symbol: 'ㄐ', name: '注音 ㄐ', typeName: '聲母', example: '雞蛋', emoji: '🥚', chant: 'ㄐ ㄐ 雞蛋 ㄐ ㄐ ㄐ，圓圓營養好！', strokes: 2, guide: '先寫左豎折，再寫右豎' },
  { symbol: 'ㄑ', name: '注音 ㄑ', typeName: '聲母', example: '氣球', emoji: '🎈', chant: 'ㄑ ㄑ 氣球 ㄑ ㄑ ㄑ，七彩飄高高！', strokes: 1, guide: '一筆完成折畫向左下' },
  { symbol: 'ㄒ', name: '注音 ㄒ', typeName: '聲母', example: '西瓜', emoji: '🍉', chant: 'ㄒ ㄒ 西瓜 ㄒ ㄒ ㄒ，清涼解暑氣！', strokes: 2, guide: '先橫，再從中間寫直豎' },
  { symbol: 'ㄓ', name: '注音 ㄓ', typeName: '聲母', example: '蜘蛛', emoji: '🕷️', chant: 'ㄓ ㄓ 蜘蛛 ㄓ ㄓ ㄓ，結網抓害蟲！', strokes: 4, guide: '橫折，豎，再兩橫' },
  { symbol: 'ㄔ', name: '注音 ㄔ', typeName: '聲母', example: '城堡', emoji: '🏰', chant: 'ㄔ ㄔ 城堡 ㄔ ㄔ ㄔ，雄偉高聳立！', strokes: 3, guide: '雙撇向下，再寫右豎' },
  { symbol: 'ㄕ', name: '注音 ㄕ', typeName: '聲母', example: '獅子', emoji: '🦁', chant: 'ㄕ ㄕ 獅子 ㄕ ㄕ ㄕ，大聲吼一吼！', strokes: 3, guide: '橫折折，再寫右豎' },
  { symbol: 'ㄖ', name: '注音 ㄖ', typeName: '聲母', example: '熱狗', emoji: '🌭', chant: 'ㄖ ㄖ 熱狗 ㄖ ㄖ ㄖ，香熱真美味！', strokes: 4, guide: '外框封口，如日字形' },
  { symbol: 'ㄗ', name: '注音 ㄗ', typeName: '聲母', example: '草莓', emoji: '🍓', chant: 'ㄗ ㄗ 草莓 ㄗ ㄗ ㄗ，酸甜可口愛！', strokes: 2, guide: '橫折，再向左撇橫' },
  { symbol: 'ㄘ', name: '注音 ㄘ', typeName: '聲母', example: '彩虹', emoji: '🌈', chant: 'ㄘ ㄘ 彩虹 ㄘ ㄘ ㄘ，七彩空中掛！', strokes: 2, guide: '先左撇豎，再右弧折' },
  { symbol: 'ㄙ', name: '注音 ㄙ', typeName: '聲母', example: '松鼠', emoji: '🐿️', chant: 'ㄙ ㄙ 松鼠 ㄙ ㄙ ㄙ，大尾巴抱松果！', strokes: 2, guide: '斜撇折，再寫右點' },
];

export const BOPOMOFO_MEDIALS = [
  { symbol: 'ㄧ', name: '注音 ㄧ', typeName: '介音', example: '衣服', emoji: '👕', chant: 'ㄧ ㄧ 衣服 ㄧ ㄧ ㄧ，穿好真整齊！', strokes: 1, guide: '水平寫一長橫（直書時寫一直豎）' },
  { symbol: 'ㄨ', name: '注音 ㄨ', typeName: '介音', example: '烏龜', emoji: '🐢', chant: 'ㄨ ㄨ 烏龜 ㄨ ㄨ ㄨ，慢慢爬得穩！', strokes: 2, guide: '撇折向下，再交叉捺出' },
  { symbol: 'ㄩ', name: '注音 ㄩ', typeName: '介音', example: '魚兒', emoji: '🐟', chant: 'ㄩ ㄩ 魚兒 ㄩ ㄩ ㄩ，水中游來游去！', strokes: 2, guide: '豎折向右，再寫右直豎' },
];

export const BOPOMOFO_FINALS = [
  { symbol: 'ㄚ', name: '注音 ㄚ', typeName: '韻母', example: '鴨子', emoji: '🦆', chant: 'ㄚ ㄚ 鴨子 ㄚ ㄚ ㄚ，搖擺水中游！', strokes: 2, guide: '橫折，再寫斜撇' },
  { symbol: 'ㄛ', name: '注音 ㄛ', typeName: '韻母', example: '菠蘿', emoji: '🍍', chant: 'ㄛ ㄛ 菠蘿 ㄛ ㄛ ㄛ，酸甜又多汁！', strokes: 2, guide: '先豎折，再寫斜撇點' },
  { symbol: 'ㄜ', name: '注音 ㄜ', typeName: '韻母', example: '天鵝', emoji: '🦢', chant: 'ㄜ ㄜ 天鵝 ㄜ ㄜ ㄜ，優雅長脖子！', strokes: 2, guide: '橫折，再寫下弧彎' },
  { symbol: 'ㄝ', name: '注音 ㄝ', typeName: '韻母', example: '葉子', emoji: '🍃', chant: 'ㄝ ㄝ 葉子 ㄝ ㄝ ㄝ，隨風飄落舞！', strokes: 3, guide: '橫，豎，再寫斜折' },
  { symbol: 'ㄞ', name: '注音 ㄞ', typeName: '韻母', example: '白兔', emoji: '🐇', chant: 'ㄞ ㄞ 白兔 ㄞ ㄞ ㄞ，愛吃甜蘿蔔！', strokes: 3, guide: '橫折，豎，再橫下' },
  { symbol: 'ㄟ', name: '注音 ㄟ', typeName: '韻母', example: '黑熊', emoji: '🐻', chant: 'ㄟ ㄟ 黑熊 ㄟ ㄟ ㄟ，愛抓河裡魚！', strokes: 1, guide: '一筆寫出右斜波浪折' },
  { symbol: 'ㄠ', name: '注音 ㄠ', typeName: '韻母', example: '小鳥', emoji: '🐦', chant: 'ㄠ ㄠ 小鳥 ㄠ ㄠ ㄠ，樹上唱晨曲！', strokes: 2, guide: '撇折撇折，下接小橫' },
  { symbol: 'ㄡ', name: '注音 ㄡ', typeName: '韻母', example: '猴子', emoji: '🐒', chant: 'ㄡ ㄡ 猴子 ㄡ ㄡ ㄡ，愛吃大香蕉！', strokes: 2, guide: '橫折撇，再寫右捺' },
  { symbol: 'ㄢ', name: '注音 ㄢ', typeName: '韻母', example: '雨傘', emoji: '☂️', chant: 'ㄢ ㄢ 雨傘 ㄢ ㄢ ㄢ，下雨撐開它！', strokes: 2, guide: '先橫，再撇豎折' },
  { symbol: 'ㄣ', name: '注音 ㄣ', typeName: '韻母', example: '森林', emoji: '🌲', chant: 'ㄣ ㄣ 森林 ㄣ ㄣ ㄣ，滿滿大綠樹！', strokes: 2, guide: '橫折折彎向右' },
  { symbol: 'ㄤ', name: '注音 ㄤ', typeName: '韻母', example: '太陽', emoji: '☀️', chant: 'ㄤ ㄤ 太陽 ㄤ ㄤ ㄤ，暖和照大地！', strokes: 3, guide: '先橫，再撇折，下寫右豎折' },
  { symbol: 'ㄥ', name: '注音 ㄥ', typeName: '韻母', example: '蜜蜂', emoji: '🐝', chant: 'ㄥ ㄥ 蜜蜂 ㄥ ㄥ ㄥ，嗡嗡採花蜜！', strokes: 1, guide: '一筆寫成右下直角折' },
  { symbol: 'ㄦ', name: '注音 ㄦ', typeName: '韻母', example: '耳朵', emoji: '👂', chant: 'ㄦ ㄦ 耳朵 ㄦ ㄦ ㄦ，聽音樂好清楚！', strokes: 2, guide: '左撇，右寫豎彎鉤' },
];

export const BOPOMOFO_TONES = [
  { symbol: '', name: '第一聲 (陰平)', typeName: '聲調', mark: 'ˉ', emoji: '☀️', chant: '一聲平平的，像小車在平路開！例如：貓 ㄇㄠ', soundRate: 1.0 },
  { symbol: 'ˊ', name: '第二聲 (陽平)', typeName: '聲調', mark: 'ˊ', emoji: '🚗', chant: '二聲往上揚，像小車開上坡！例如：羊 ㄧㄤˊ', soundRate: 1.0 },
  { symbol: 'ˇ', name: '第三聲 (上聲)', typeName: '聲調', mark: 'ˇ', emoji: '🎢', chant: '三聲轉個彎，像下坡又上坡！例如：狗 ㄍㄡˇ', soundRate: 1.0 },
  { symbol: 'ˋ', name: '第四聲 (去聲)', typeName: '聲調', mark: 'ˋ', emoji: '⛷️', chant: '四聲向下衝，像溜滑梯滑下來！例如：兔 ㄊㄨˋ', soundRate: 1.0 },
  { symbol: '˙', name: '輕聲 (短促)', typeName: '聲調', mark: '˙', emoji: '🎈', chant: '輕聲短短的，像小水滴輕輕點！例如：子 ˙ㄗ', soundRate: 1.0 },
];

export const ALL_BOPOMOFO = [
  ...BOPOMOFO_INITIALS.map(item => ({ ...item, type: 'initial', color: '#E63946', label: '聲母' })),
  ...BOPOMOFO_MEDIALS.map(item => ({ ...item, type: 'medial', color: '#2A9D8F', label: '介音' })),
  ...BOPOMOFO_FINALS.map(item => ({ ...item, type: 'final', color: '#457B9D', label: '韻母' })),
];
