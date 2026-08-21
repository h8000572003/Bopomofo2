// 兒童友善時事與即時新聞資料庫 (100% 台灣標準注音符號標音)

import { convertTextToBpmfTokens } from '../utils/textToBpmf';

export const NEWS_CATEGORIES = [
  { id: 'all', name: '全部時事', icon: '📰' },
  { id: 'animal', name: '動物新奇', icon: '🐾', color: 'from-amber-400 to-orange-500' },
  { id: 'space', name: '太空科學', icon: '🚀', color: 'from-blue-500 to-indigo-600' },
  { id: 'nature', name: '自然環保', icon: '🌱', color: 'from-emerald-400 to-teal-500' },
  { id: 'school', name: '校園新知', icon: '🏫', color: 'from-purple-400 to-pink-500' },
  { id: 'culture', name: '生活文化', icon: '🏮', color: 'from-rose-400 to-red-500' },
];

export const INITIAL_NEWS_ARTICLES = [
  {
    id: 'news_1',
    category: 'animal',
    categoryName: '動物新奇',
    title: '動物園大貓熊寶寶健康長大，開心地在草地上翻滾！',
    emoji: '🐼🌿',
    date: '2026-08-21',
    source: '兒童動物日報',
    text: '動物園大貓熊寶寶健康長大，開心地在草地上翻滾。',
    tokens: convertTextToBpmfTokens('動物園大貓熊寶寶健康長大，開心地在草地上翻滾。')
  },
  {
    id: 'news_2',
    category: 'animal',
    categoryName: '動物新奇',
    title: '巡守隊在山林發現野生石虎媽媽帶著兩隻小石虎散步。',
    emoji: '🐯🐾',
    date: '2026-08-20',
    source: '森林生態週報',
    text: '巡守隊在山林發現野生石虎媽媽帶著兩隻小石虎散步。',
    tokens: convertTextToBpmfTokens('巡守隊在山林發現野生石虎媽媽帶著兩隻小石虎散步。')
  },
  {
    id: 'news_3',
    category: 'space',
    categoryName: '太空科學',
    title: '今晚夜空出現美麗的英仙座流星雨，大家一起仰望星空許願。',
    emoji: '🌠🌌',
    date: '2026-08-19',
    source: '天文科學快報',
    text: '今晚夜空出現美麗的英仙座流星雨，大家一起仰望星空許願。',
    tokens: convertTextToBpmfTokens('今晚夜空出現美麗的英仙座流星雨，大家一起仰望星空許願。')
  },
  {
    id: 'news_4',
    category: 'nature',
    categoryName: '自然環保',
    title: '小學生在海邊淨灘撿拾垃圾，保護大海與可愛的綠蠵龜。',
    emoji: '🐢🌊',
    date: '2026-08-18',
    source: '海洋環保報',
    text: '小學生在海邊淨灘撿拾垃圾，保護大海與可愛的綠蠵龜。',
    tokens: convertTextToBpmfTokens('小學生在海邊淨灘撿拾垃圾，保護大海與可愛的綠蠵龜。')
  },
  {
    id: 'news_5',
    category: 'school',
    categoryName: '校園新知',
    title: '小學校園打造空中開心農場，小朋友親手採收新鮮的青菜。',
    emoji: '🥬🌱',
    date: '2026-08-17',
    source: '校園食農日誌',
    text: '小學校園打造空中開心農場，小朋友親手採收新鮮的青菜。',
    tokens: convertTextToBpmfTokens('小學校園打造空中開心農場，小朋友親手採收新鮮的青菜。')
  },
  {
    id: 'news_6',
    category: 'culture',
    categoryName: '生活文化',
    title: '國際童玩節熱鬧登場，各國小朋友歡聚一堂唱歌跳舞。',
    emoji: '🎪🎉',
    date: '2026-08-16',
    source: '文化生活誌',
    text: '國際童玩節熱鬧登場，各國小朋友歡聚一堂唱歌跳舞。',
    tokens: convertTextToBpmfTokens('國際童玩節熱鬧登場，各國小朋友歡聚一堂唱歌跳舞。')
  }
];

// 動態產生今日新鮮時事短句
export function fetchDailyFreshNews() {
  const templates = [
    {
      category: 'animal',
      categoryName: '動物新奇',
      emoji: '🐬🌊',
      title: '東海岸發現成群海豚在蔚藍海面上快樂跳躍！',
      text: '東海岸發現成群海豚在蔚藍海面上快樂跳躍。',
      source: '海洋生態時事'
    },
    {
      category: 'space',
      categoryName: '太空科學',
      emoji: '🚀🔭',
      title: '太空望遠鏡傳回火星表面最新照片，發現古老河流的痕跡。',
      text: '太空望遠鏡傳回火星表面最新照片，發現古老河流的痕跡。',
      source: '太空探索新知'
    },
    {
      category: 'nature',
      categoryName: '自然環保',
      emoji: '🌳🌸',
      title: '國家公園的大樹開出美麗花朵，吸引成千上萬的蜜蜂與蝴蝶。',
      text: '國家公園的大樹開出美麗花朵，吸引成千上萬的蜜蜂與蝴蝶。',
      source: '自然保育日報'
    },
    {
      category: 'school',
      categoryName: '校園新知',
      emoji: '🤖💡',
      title: '國小機器人團隊在世界發明展榮獲金牌獎，為學校爭光！',
      text: '國小機器人團隊在世界發明展榮獲金牌獎，為學校爭光。',
      source: '未來科學少年'
    }
  ];

  const nowStr = new Date().toISOString().split('T')[0];

  return templates.map((item, idx) => ({
    id: `fresh_news_${Date.now()}_${idx}`,
    category: item.category,
    categoryName: item.categoryName,
    title: item.title,
    emoji: item.emoji,
    date: nowStr,
    source: item.source,
    text: item.text,
    tokens: convertTextToBpmfTokens(item.text)
  }));
}
