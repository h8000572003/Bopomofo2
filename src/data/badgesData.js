// 擴充版星星成就與圖鑑獎勵資料庫 (15個階梯式榮譽徽章)

export const BADGES = [
  {
    id: 'first_word',
    name: '注音小萌新',
    icon: '🌱',
    color: 'from-emerald-400 to-green-500',
    description: '完成第 1 個單字發音或拼音學習！',
    conditionType: 'word_count',
    target: 1,
    cheer: '恭喜踏出冒險的第一步！注音小精靈為你鼓掌！'
  },
  {
    id: 'first_draw',
    name: '小小書法家',
    icon: '✍️',
    color: 'from-sky-400 to-blue-500',
    description: '在注音基礎館完成 1 次手寫描紅練習！',
    conditionType: 'drawing_count',
    target: 1,
    cheer: '筆筆工整！你的一筆一畫充滿了力量！'
  },
  {
    id: 'draw_master_5',
    name: '筆順小神童',
    icon: '🎨',
    color: 'from-cyan-400 to-teal-500',
    description: '完成 5 個注音符號手寫描紅！',
    conditionType: 'drawing_count',
    target: 5,
    cheer: '手寫注音越來越流暢，太優秀了！'
  },
  {
    id: 'word_master_5',
    name: '單字小探險家',
    icon: '🧭',
    color: 'from-blue-400 to-cyan-500',
    description: '成功學會 5 個單字！',
    conditionType: 'word_count',
    target: 5,
    cheer: '太棒了！你的單字寶庫越來越豐富了！'
  },
  {
    id: 'flashcard_10',
    name: '字卡記憶大師',
    icon: '🃏',
    color: 'from-amber-400 to-orange-500',
    description: '在 3D 字卡練習中記住 10 張字卡！',
    conditionType: 'flashcard_count',
    target: 10,
    cheer: '過目不忘！你的字卡記憶力驚人！'
  },
  {
    id: 'first_sentence',
    name: '朗讀小明星',
    icon: '🎤',
    color: 'from-purple-400 to-pink-500',
    description: '完成第 1 個完整句子卡拉OK朗讀！',
    conditionType: 'sentence_count',
    target: 1,
    cheer: '哇！你的聲音清脆又宏亮，真有精神！'
  },
  {
    id: 'sentence_master_5',
    name: '故事朗讀家',
    icon: '📖',
    color: 'from-rose-400 to-red-500',
    description: '朗讀完成 5 個完整句子！',
    conditionType: 'sentence_count',
    target: 5,
    cheer: '超有節奏感！你唸故事的樣子太帥氣了！'
  },
  {
    id: 'streak_3',
    name: '連續學習達人',
    icon: '🔥',
    color: 'from-orange-400 to-red-500',
    description: '連續打卡學習達到 3 天！',
    conditionType: 'streak_count',
    target: 3,
    cheer: '堅持就是力量！連續 3 天學習，熱情如火！'
  },
  {
    id: 'streak_7',
    name: '勤奮小蜜蜂',
    icon: '🐝',
    color: 'from-yellow-400 to-amber-500',
    description: '連續打卡學習達到 7 天！',
    conditionType: 'streak_count',
    target: 7,
    cheer: '太有毅力了！整整一週每天不懈努力，送你大大的榮譽！'
  },
  {
    id: 'stars_10',
    name: '星光收藏家',
    icon: '⭐',
    color: 'from-yellow-300 to-amber-500',
    description: '累積收集 10 顆金色星星！',
    conditionType: 'stars_count',
    target: 10,
    cheer: '閃閃發光的星星照亮了冒險島！'
  },
  {
    id: 'stars_30',
    name: '黃金星之勇者',
    icon: '✨',
    color: 'from-yellow-400 to-orange-500',
    description: '累積收集 30 顆金色星星！',
    conditionType: 'stars_count',
    target: 30,
    cheer: '滿天星斗都被你收集齊全了！勇者無敵！'
  },
  {
    id: 'quiz_master',
    name: '每日挑戰王',
    icon: '⚡',
    color: 'from-violet-400 to-indigo-500',
    description: '完成 1 次每日挑戰測驗！',
    conditionType: 'quiz_count',
    target: 1,
    cheer: '答題速度又快又準，挑戰王非你莫屬！'
  },
  {
    id: 'spelling_ace',
    name: '拼音快手',
    icon: '🧩',
    color: 'from-teal-400 to-cyan-600',
    description: '完成 3 次注音拼拼樂遊戲！',
    conditionType: 'spelling_count',
    target: 3,
    cheer: '聲母韻母手到擒來，拼字無敵！'
  }
];
