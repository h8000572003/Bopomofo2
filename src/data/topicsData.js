// 台灣繁體主題式單字與句子完整資料庫 (100+ 筆單字題庫，100% 純台灣標準注音符號標音)

export const TOPICS = [
  {
    id: 'animals',
    name: '可愛動物',
    icon: '🦁',
    badgeIcon: '🐾',
    color: 'from-amber-400 to-orange-500',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-300',
    tagColor: 'bg-amber-100 text-amber-800',
    description: '認識草原、森林與家中的可愛動物好朋友！',
    words: [
      {
        id: 'w_cat',
        hanzi: '貓咪',
        emoji: '🐱',
        bpmfFull: 'ㄇㄠ ㄇㄧ',
        meaning: '愛撒嬌、會發出呼嚕聲的小動物',
        characters: [
          { char: '貓', bopomofo: 'ㄇㄠ', initial: 'ㄇ', medial: '', final: 'ㄠ', tone: '', toneMark: '' },
          { char: '咪', bopomofo: 'ㄇㄧ', initial: 'ㄇ', medial: 'ㄧ', final: '', tone: '', toneMark: '' }
        ],
        exampleSentence: '小貓咪在草地上曬太陽。'
      },
      {
        id: 'w_dog',
        hanzi: '小狗',
        emoji: '🐶',
        bpmfFull: 'ㄒㄧㄠˇ ㄍㄡˇ',
        meaning: '忠誠又活潑的四腳好朋友',
        characters: [
          { char: '小', bopomofo: 'ㄒㄧㄠˇ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '狗', bopomofo: 'ㄍㄡˇ', initial: 'ㄍ', medial: '', final: 'ㄡ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '小狗搖著尾巴跑過來。'
      },
      {
        id: 'w_elephant',
        hanzi: '大象',
        emoji: '🐘',
        bpmfFull: 'ㄉㄚˋ ㄒㄧㄤˋ',
        meaning: '有著長長鼻子與大耳朵的陸地巨人',
        characters: [
          { char: '大', bopomofo: 'ㄉㄚˋ', initial: 'ㄉ', medial: '', final: 'ㄚ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '象', bopomofo: 'ㄒㄧㄤˋ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄤ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '大象用長鼻子噴水洗澡。'
      },
      {
        id: 'w_rabbit',
        hanzi: '兔子',
        emoji: '🐰',
        bpmfFull: 'ㄊㄨˋ ˙ㄗ',
        meaning: '長著長耳朵、跳躍前進的白兔',
        characters: [
          { char: '兔', bopomofo: 'ㄊㄨˋ', initial: 'ㄊ', medial: '', final: 'ㄨ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '子', bopomofo: '˙ㄗ', initial: 'ㄗ', medial: '', final: '', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '小兔子最喜歡吃紅蘿蔔。'
      },
      {
        id: 'w_giraffe',
        hanzi: '長頸鹿',
        emoji: '🦒',
        bpmfFull: 'ㄔㄤˊ ㄐㄧㄥˇ ㄌㄨˋ',
        meaning: '脖子很長、能吃到高樹葉子的動物',
        characters: [
          { char: '長', bopomofo: 'ㄔㄤˊ', initial: 'ㄔ', medial: '', final: 'ㄤ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '頸', bopomofo: 'ㄐㄧㄥˇ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '鹿', bopomofo: 'ㄌㄨˋ', initial: 'ㄌ', medial: '', final: 'ㄨ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '長頸鹿在草原上散步。'
      },
      {
        id: 'w_penguin',
        hanzi: '企鵝',
        emoji: '🐧',
        bpmfFull: 'ㄑㄧˋ ㄜˊ',
        meaning: '穿著燕尾服、住在冰天雪地的鳥類',
        characters: [
          { char: '企', bopomofo: 'ㄑㄧˋ', initial: 'ㄑ', medial: 'ㄧ', final: '', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '鵝', bopomofo: 'ㄜˊ', initial: '', medial: '', final: 'ㄜ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '小企鵝在冰面上搖搖擺擺走路。'
      },
      {
        id: 'w_panda',
        hanzi: '熊貓',
        emoji: '🐼',
        bpmfFull: 'ㄒㄩㄥˊ ㄇㄠ',
        meaning: '黑白相間、最喜歡啃竹子的大萌獸',
        characters: [
          { char: '熊', bopomofo: 'ㄒㄩㄥˊ', initial: 'ㄒ', medial: 'ㄩ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '貓', bopomofo: 'ㄇㄠ', initial: 'ㄇ', medial: '', final: 'ㄠ', tone: '', toneMark: '' }
        ],
        exampleSentence: '大熊貓坐在竹林裡吃竹子。'
      },
      {
        id: 'w_lion',
        hanzi: '獅子',
        emoji: '🦁',
        bpmfFull: 'ㄕ ˙ㄗ',
        meaning: '有著威武鬃毛的萬獸之王',
        characters: [
          { char: '獅', bopomofo: 'ㄕ', initial: 'ㄕ', medial: '', final: '', tone: '', toneMark: '' },
          { char: '子', bopomofo: '˙ㄗ', initial: 'ㄗ', medial: '', final: '', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '獅子在陽光下大聲咆哮。'
      },
      {
        id: 'w_monkey',
        hanzi: '猴子',
        emoji: '🐵',
        bpmfFull: 'ㄏㄡˊ ˙ㄗ',
        meaning: '身手矯健、在樹林間盪鞦韆的靈活動物',
        characters: [
          { char: '猴', bopomofo: 'ㄏㄡˊ', initial: 'ㄏ', medial: '', final: 'ㄡ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '子', bopomofo: '˙ㄗ', initial: 'ㄗ', medial: '', final: '', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '調皮的小猴子在樹上跳來跳去。'
      },
      {
        id: 'w_dolphin',
        hanzi: '海豚',
        emoji: '🐬',
        bpmfFull: 'ㄏㄞˇ ㄊㄨㄣˊ',
        meaning: '在大海中歡樂跳躍的聰明哺乳動物',
        characters: [
          { char: '海', bopomofo: 'ㄏㄞˇ', initial: 'ㄏ', medial: '', final: 'ㄞ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '豚', bopomofo: 'ㄊㄨㄣˊ', initial: 'ㄊ', medial: '', final: 'ㄨㄣ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '海豚在藍藍的海浪中躍出水面。'
      },
      {
        id: 'w_koala',
        hanzi: '無尾熊',
        emoji: '🐨',
        bpmfFull: 'ㄨˊ ㄨㄟˇ ㄒㄩㄥˊ',
        meaning: '緊抱尤加利樹、愛睡覺的可愛動物',
        characters: [
          { char: '無', bopomofo: 'ㄨˊ', initial: '', medial: 'ㄨ', final: '', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '尾', bopomofo: 'ㄨㄟˇ', initial: '', medial: 'ㄨ', final: 'ㄟ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '熊', bopomofo: 'ㄒㄩㄥˊ', initial: 'ㄒ', medial: 'ㄩ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '無尾熊抱著樹枝睡大覺。'
      },
      {
        id: 'w_bird',
        hanzi: '小鳥',
        emoji: '🐦',
        bpmfFull: 'ㄒㄧㄠˇ ㄋㄧㄠˇ',
        meaning: '在空中展翅飛翔、唱著清脆歌聲的鳥兒',
        characters: [
          { char: '小', bopomofo: 'ㄒㄧㄠˇ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '鳥', bopomofo: 'ㄋㄧㄠˇ', initial: 'ㄋ', medial: 'ㄧ', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '枝頭上的小鳥唱著動聽的歌。'
      },
      {
        id: 'w_zebra',
        hanzi: '斑馬',
        emoji: '🦓',
        bpmfFull: 'ㄅㄢ ㄇㄚˇ',
        meaning: '身穿黑白條紋外衣、奔馳在草原上的馬兒',
        characters: [
          { char: '斑', bopomofo: 'ㄅㄢ', initial: 'ㄅ', medial: '', final: 'ㄢ', tone: '', toneMark: '' },
          { char: '馬', bopomofo: 'ㄇㄚˇ', initial: 'ㄇ', medial: '', final: 'ㄚ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '斑馬在遼闊的草原上奔跑。'
      },
      {
        id: 'w_squirrel',
        hanzi: '松鼠',
        emoji: '🐿️',
        bpmfFull: 'ㄙㄨㄥ ㄕㄨˇ',
        meaning: '有著蓬鬆大尾巴、最喜歡吃堅果的小動物',
        characters: [
          { char: '松', bopomofo: 'ㄙㄨㄥ', initial: 'ㄙ', medial: '', final: 'ㄨㄥ', tone: '', toneMark: '' },
          { char: '鼠', bopomofo: 'ㄕㄨˇ', initial: 'ㄕ', medial: '', final: 'ㄨ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '小松鼠捧著松果開心地啃著。'
      }
    ],
    sentences: [
      {
        id: 's_cat_1',
        text: '小花貓在草地上曬太陽。',
        emoji: '🐱☀️',
        tokens: [
          { char: '小', bopomofo: 'ㄒㄧㄠˇ' },
          { char: '花', bopomofo: 'ㄏㄨㄚ' },
          { char: '貓', bopomofo: 'ㄇㄠ' },
          { char: '在', bopomofo: 'ㄗㄞˋ' },
          { char: '草', bopomofo: 'ㄘㄠˇ' },
          { char: '地', bopomofo: 'ㄉㄧˋ' },
          { char: '上', bopomofo: 'ㄕㄤˋ' },
          { char: '曬', bopomofo: 'ㄕㄞˋ' },
          { char: '太', bopomofo: 'ㄊㄞˋ' },
          { char: '陽', bopomofo: 'ㄧㄤˊ' },
          { char: '。', bopomofo: '' }
        ]
      },
      {
        id: 's_dog_1',
        text: '可愛的小狗開心地搖尾巴。',
        emoji: '🐶🐾',
        tokens: [
          { char: '可', bopomofo: 'ㄎㄜˇ' },
          { char: '愛', bopomofo: 'ㄞˋ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '小', bopomofo: 'ㄒㄧㄠˇ' },
          { char: '狗', bopomofo: 'ㄍㄡˇ' },
          { char: '開', bopomofo: 'ㄎㄞ' },
          { char: '心', bopomofo: 'ㄒㄧㄣ' },
          { char: '地', bopomofo: '˙ㄉㄜ' },
          { char: '搖', bopomofo: 'ㄧㄠˊ' },
          { char: '尾', bopomofo: 'ㄨㄟˇ' },
          { char: '巴', bopomofo: '˙ㄅㄚ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'food',
    name: '美味食物與水果',
    icon: '🍎',
    badgeIcon: '🍰',
    color: 'from-rose-400 to-red-500',
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-300',
    tagColor: 'bg-rose-100 text-rose-800',
    description: '香甜水果、營養蔬菜與可口點心，大聲唸出好滋味！',
    words: [
      {
        id: 'w_apple',
        hanzi: '蘋果',
        emoji: '🍎',
        bpmfFull: 'ㄆㄧㄥˊ ㄍㄨㄛˇ',
        meaning: '紅通通又香甜多汁的健康水果',
        characters: [
          { char: '蘋', bopomofo: 'ㄆㄧㄥˊ', initial: 'ㄆ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '果', bopomofo: 'ㄍㄨㄛˇ', initial: 'ㄍ', medial: 'ㄨ', final: 'ㄛ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '紅紅的蘋果吃起來甜甜的。'
      },
      {
        id: 'w_banana',
        hanzi: '香蕉',
        emoji: '🍌',
        bpmfFull: 'ㄒㄧㄤ ㄐㄧㄠ',
        meaning: '彎彎像月亮、黃澄澄的營養水果',
        characters: [
          { char: '香', bopomofo: 'ㄒㄧㄤ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄤ', tone: '', toneMark: '' },
          { char: '蕉', bopomofo: 'ㄐㄧㄠ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄠ', tone: '', toneMark: '' }
        ],
        exampleSentence: '小猴子最喜歡吃甜香蕉。'
      },
      {
        id: 'w_watermelon',
        hanzi: '西瓜',
        emoji: '🍉',
        bpmfFull: 'ㄒㄧ ㄍㄨㄚ',
        meaning: '夏天消暑、果肉鮮紅多汁的大西瓜',
        characters: [
          { char: '西', bopomofo: 'ㄒㄧ', initial: 'ㄒ', medial: 'ㄧ', final: '', tone: '', toneMark: '' },
          { char: '瓜', bopomofo: 'ㄍㄨㄚ', initial: 'ㄍ', medial: 'ㄨ', final: 'ㄚ', tone: '', toneMark: '' }
        ],
        exampleSentence: '夏天吃大西瓜最清涼解渴。'
      },
      {
        id: 'w_strawberry',
        hanzi: '草莓',
        emoji: '🍓',
        bpmfFull: 'ㄘㄠˇ ㄇㄟˊ',
        meaning: '鮮紅誘人、酸酸甜甜的可愛水果',
        characters: [
          { char: '草', bopomofo: 'ㄘㄠˇ', initial: 'ㄘ', medial: '', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '莓', bopomofo: 'ㄇㄟˊ', initial: 'ㄇ', medial: '', final: 'ㄟ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '蛋糕上有一顆鮮紅的大草莓。'
      },
      {
        id: 'w_grape',
        hanzi: '葡萄',
        emoji: '🍇',
        bpmfFull: 'ㄆㄨˊ ㄊㄠˊ',
        meaning: '一串串紫晶剔透的香甜果實',
        characters: [
          { char: '葡', bopomofo: 'ㄆㄨˊ', initial: 'ㄆ', medial: '', final: 'ㄨ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '萄', bopomofo: 'ㄊㄠˊ', initial: 'ㄊ', medial: '', final: 'ㄠ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '紫色的葡萄一顆一顆圓滾滾。'
      },
      {
        id: 'w_cake',
        hanzi: '蛋糕',
        emoji: '🎂',
        bpmfFull: 'ㄉㄢˋ ㄍㄠ',
        meaning: '生日慶祝時最美味的奶油點心',
        characters: [
          { char: '蛋', bopomofo: 'ㄉㄢˋ', initial: 'ㄉ', medial: '', final: 'ㄢ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '糕', bopomofo: 'ㄍㄠ', initial: 'ㄍ', medial: '', final: 'ㄠ', tone: '', toneMark: '' }
        ],
        exampleSentence: '媽媽做了一個草莓生日蛋糕。'
      },
      {
        id: 'w_icecream',
        hanzi: '冰淇淋',
        emoji: '🍦',
        bpmfFull: 'ㄅㄧㄥ ㄑㄧˊ ㄌㄧㄣˊ',
        meaning: '冰涼香甜、入口即化的甜筒點心',
        characters: [
          { char: '冰', bopomofo: 'ㄅㄧㄥ', initial: 'ㄅ', medial: 'ㄧ', final: 'ㄥ', tone: '', toneMark: '' },
          { char: '淇', bopomofo: 'ㄑㄧˊ', initial: 'ㄑ', medial: 'ㄧ', final: '', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '淋', bopomofo: 'ㄌㄧㄣˊ', initial: 'ㄌ', medial: 'ㄧ', final: 'ㄣ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '香草冰淇淋甜甜涼涼真好吃。'
      },
      {
        id: 'w_milk',
        hanzi: '牛奶',
        emoji: '🥛',
        bpmfFull: 'ㄋㄧㄡˊ ㄋㄞˇ',
        meaning: '補充鈣質、每天早晨喝的濃醇飲品',
        characters: [
          { char: '牛', bopomofo: 'ㄋㄧㄡˊ', initial: 'ㄋ', medial: 'ㄧ', final: 'ㄡ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '奶', bopomofo: 'ㄋㄞˇ', initial: 'ㄋ', medial: '', final: 'ㄞ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '每天喝一杯牛奶身體好健康。'
      },
      {
        id: 'w_bread',
        hanzi: '麵包',
        emoji: '🍞',
        bpmfFull: 'ㄇㄧㄢˋ ㄅㄠ',
        meaning: '剛出爐香氣四溢的柔軟主食',
        characters: [
          { char: '麵', bopomofo: 'ㄇㄧㄢˋ', initial: 'ㄇ', medial: 'ㄧ', final: 'ㄢ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '包', bopomofo: 'ㄅㄠ', initial: 'ㄅ', medial: '', final: 'ㄠ', tone: '', toneMark: '' }
        ],
        exampleSentence: '熱騰騰的吐司麵包好鬆軟。'
      },
      {
        id: 'w_doughnut',
        hanzi: '甜甜圈',
        emoji: '🍩',
        bpmfFull: 'ㄊㄧㄢˊ ㄊㄧㄢˊ ㄑㄩㄢ',
        meaning: '中間有圓孔、沾滿糖霜的可愛點心',
        characters: [
          { char: '甜', bopomofo: 'ㄊㄧㄢˊ', initial: 'ㄊ', medial: 'ㄧ', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '甜', bopomofo: 'ㄊㄧㄢˊ', initial: 'ㄊ', medial: 'ㄧ', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '圈', bopomofo: 'ㄑㄩㄢ', initial: 'ㄑ', medial: 'ㄩ', final: 'ㄢ', tone: '', toneMark: '' }
        ],
        exampleSentence: '巧克力的甜甜圈讓人垂涎三尺。'
      },
      {
        id: 'w_pudding',
        hanzi: '布丁',
        emoji: '🍮',
        bpmfFull: 'ㄅㄨˋ ㄉㄧㄥ',
        meaning: '搖搖晃晃、滑嫩香甜的焦糖甜品',
        characters: [
          { char: '布', bopomofo: 'ㄅㄨˋ', initial: 'ㄅ', medial: '', final: 'ㄨ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '丁', bopomofo: 'ㄉㄧㄥ', initial: 'ㄉ', medial: 'ㄧ', final: 'ㄥ', tone: '', toneMark: '' }
        ],
        exampleSentence: '焦糖布丁吃起來滑滑嫩嫩的。'
      },
      {
        id: 'w_orange',
        hanzi: '橘子',
        emoji: '🍊',
        bpmfFull: 'ㄐㄩˊ ˙ㄗ',
        meaning: '橙黃鮮豔、充滿維他命C的柑橘',
        characters: [
          { char: '橘', bopomofo: 'ㄐㄩˊ', initial: 'ㄐ', medial: 'ㄩ', final: '', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '子', bopomofo: '˙ㄗ', initial: 'ㄗ', medial: '', final: '', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '多汁的橘子酸甜可口。'
      },
      {
        id: 'w_cherry',
        hanzi: '櫻桃',
        emoji: '🍒',
        bpmfFull: 'ㄧㄥ ㄊㄠˊ',
        meaning: '小巧玲瓏、紅寶石般酸甜的水果',
        characters: [
          { char: '櫻', bopomofo: 'ㄧㄥ', initial: '', medial: 'ㄧ', final: 'ㄥ', tone: '', toneMark: '' },
          { char: '桃', bopomofo: 'ㄊㄠˊ', initial: 'ㄊ', medial: '', final: 'ㄠ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '小櫻桃掛在枝頭上像紅色寶石。'
      },
      {
        id: 'w_pancake',
        hanzi: '鬆餅',
        emoji: '🥞',
        bpmfFull: 'ㄙㄨㄥ ㄅㄧㄥˇ',
        meaning: '淋上甜蜜蜂蜜與奶油的熱騰騰點心',
        characters: [
          { char: '鬆', bopomofo: 'ㄙㄨㄥ', initial: 'ㄙ', medial: '', final: 'ㄨㄥ', tone: '', toneMark: '' },
          { char: '餅', bopomofo: 'ㄅㄧㄥˇ', initial: 'ㄅ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '美味的鬆餅淋上香甜蜂蜜。'
      }
    ],
    sentences: [
      {
        id: 's_food_1',
        text: '紅紅的蘋果吃起來又香又甜。',
        emoji: '🍎😋',
        tokens: [
          { char: '紅', bopomofo: 'ㄏㄨㄥˊ' },
          { char: '紅', bopomofo: 'ㄏㄨㄥˊ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '蘋', bopomofo: 'ㄆㄧㄥˊ' },
          { char: '果', bopomofo: 'ㄍㄨㄛˇ' },
          { char: '吃', bopomofo: 'ㄔ' },
          { char: '起', bopomofo: 'ㄑㄧˇ' },
          { char: '來', bopomofo: 'ㄌㄞˊ' },
          { char: '又', bopomofo: 'ㄧㄡˋ' },
          { char: '香', bopomofo: 'ㄒㄧㄤ' },
          { char: '又', bopomofo: 'ㄧㄡˋ' },
          { char: '甜', bopomofo: 'ㄊㄧㄢˊ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'nature',
    name: '大自然與天氣',
    icon: '🌳',
    badgeIcon: '🌈',
    color: 'from-emerald-400 to-teal-500',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-300',
    tagColor: 'bg-emerald-100 text-emerald-800',
    description: '藍天白雲、陽光雨露，感受大自然的美妙律動！',
    words: [
      {
        id: 'w_sun',
        hanzi: '太陽',
        emoji: '☀️',
        bpmfFull: 'ㄊㄞˋ ㄧㄤˊ',
        meaning: '照亮大地、給我們溫暖光芒的恆星',
        characters: [
          { char: '太', bopomofo: 'ㄊㄞˋ', initial: 'ㄊ', medial: '', final: 'ㄞ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '陽', bopomofo: 'ㄧㄤˊ', initial: '', medial: 'ㄧ', final: 'ㄤ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '太陽公公早上對著我們微笑。'
      },
      {
        id: 'w_moon',
        hanzi: '月亮',
        emoji: '🌙',
        bpmfFull: 'ㄩㄝˋ ˙ㄌㄧㄤ',
        meaning: '夜空中彎彎皎潔的溫柔銀盤',
        characters: [
          { char: '月', bopomofo: 'ㄩㄝˋ', initial: '', medial: 'ㄩ', final: 'ㄝ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '亮', bopomofo: '˙ㄌㄧㄤ', initial: 'ㄌ', medial: 'ㄧ', final: 'ㄤ', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '夜晚的月亮像一艘金色小船。'
      },
      {
        id: 'w_stars',
        hanzi: '星星',
        emoji: '⭐',
        bpmfFull: 'ㄒㄧㄥ ˙ㄒㄧㄥ',
        meaning: '夜空中一閃一閃眨著眼睛的星光',
        characters: [
          { char: '星', bopomofo: 'ㄒㄧㄥ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: '', toneMark: '' },
          { char: '星', bopomofo: '˙ㄒㄧㄥ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '天上的星星一閃一閃放光明。'
      },
      {
        id: 'w_rainbow',
        hanzi: '彩虹',
        emoji: '🌈',
        bpmfFull: 'ㄘㄞˇ ㄏㄨㄥˊ',
        meaning: '雨過天晴後空中出現的七彩光帶',
        characters: [
          { char: '彩', bopomofo: 'ㄘㄞˇ', initial: 'ㄘ', medial: '', final: 'ㄞ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '虹', bopomofo: 'ㄏㄨㄥˊ', initial: 'ㄏ', medial: '', final: 'ㄨㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '天空中出現了一道美麗的彩虹。'
      },
      {
        id: 'w_flower',
        hanzi: '花朵',
        emoji: '🌸',
        bpmfFull: 'ㄏㄨㄚ ㄉㄨㄛˇ',
        meaning: '五顏六色、散發芬芳的植物花冠',
        characters: [
          { char: '花', bopomofo: 'ㄏㄨㄚ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄚ', tone: '', toneMark: '' },
          { char: '朵', bopomofo: 'ㄉㄨㄛˇ', initial: 'ㄉ', medial: 'ㄨ', final: 'ㄛ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '花園裡開滿了粉紅色的花朵。'
      },
      {
        id: 'w_rain',
        hanzi: '下雨',
        emoji: '🌧️',
        bpmfFull: 'ㄒㄧㄚˋ ㄩˇ',
        meaning: '天空掉下小水滴，滋潤大地花草',
        characters: [
          { char: '下', bopomofo: 'ㄒㄧㄚˋ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄚ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '雨', bopomofo: 'ㄩˇ', initial: '', medial: 'ㄩ', final: '', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '下雨天出門記得要帶雨傘。'
      },
      {
        id: 'w_cloud',
        hanzi: '白雲',
        emoji: '☁️',
        bpmfFull: 'ㄅㄞˊ ㄩㄣˊ',
        meaning: '天上像棉花糖般飄浮的白色水氣',
        characters: [
          { char: '白', bopomofo: 'ㄅㄞˊ', initial: 'ㄅ', medial: '', final: 'ㄞ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '雲', bopomofo: 'ㄩㄣˊ', initial: '', medial: 'ㄩ', final: 'ㄣ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '藍天上的白雲像柔軟的棉花糖。'
      },
      {
        id: 'w_tree',
        hanzi: '大樹',
        emoji: '🌳',
        bpmfFull: 'ㄉㄚˋ ㄕㄨˋ',
        meaning: '枝繁葉茂、為我們遮陽的高大植物',
        characters: [
          { char: '大', bopomofo: 'ㄉㄚˋ', initial: 'ㄉ', medial: '', final: 'ㄚ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '樹', bopomofo: 'ㄕㄨˋ', initial: 'ㄕ', medial: '', final: 'ㄨ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '老爺爺在大樹下乘涼乘風。'
      },
      {
        id: 'w_snow',
        hanzi: '雪花',
        emoji: '❄️',
        bpmfFull: 'ㄒㄩㄝˇ ㄏㄨㄚ',
        meaning: '冬天從空中飄落的純白六角冰晶',
        characters: [
          { char: '雪', bopomofo: 'ㄒㄩㄝˇ', initial: 'ㄒ', medial: 'ㄩ', final: 'ㄝ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '花', bopomofo: 'ㄏㄨㄚ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄚ', tone: '', toneMark: '' }
        ],
        exampleSentence: '潔白的雪花一片片飄落下來。'
      },
      {
        id: 'w_ocean',
        hanzi: '海洋',
        emoji: '🌊',
        bpmfFull: 'ㄏㄞˇ ㄧㄤˊ',
        meaning: '浩瀚無邊、孕育無數生命的藍色大海',
        characters: [
          { char: '海', bopomofo: 'ㄏㄞˇ', initial: 'ㄏ', medial: '', final: 'ㄞ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '洋', bopomofo: 'ㄧㄤˊ', initial: '', medial: 'ㄧ', final: 'ㄤ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '遼闊的海洋裡住著很多小魚。'
      },
      {
        id: 'w_mountain',
        hanzi: '山峰',
        emoji: '⛰️',
        bpmfFull: 'ㄕㄢ ㄈㄥ',
        meaning: '高聳入雲、青翠美麗的大山',
        characters: [
          { char: '山', bopomofo: 'ㄕㄢ', initial: 'ㄕ', medial: '', final: 'ㄢ', tone: '', toneMark: '' },
          { char: '峰', bopomofo: 'ㄈㄥ', initial: 'ㄈ', medial: '', final: 'ㄥ', tone: '', toneMark: '' }
        ],
        exampleSentence: '巍峨的山峰籠罩在白雲中。'
      },
      {
        id: 'w_breeze',
        hanzi: '微風',
        emoji: '🍃',
        bpmfFull: 'ㄨㄟ ㄈㄥ',
        meaning: '輕輕吹拂臉龐、舒適涼爽的清風',
        characters: [
          { char: '微', bopomofo: 'ㄨㄟ', initial: '', medial: 'ㄨ', final: 'ㄟ', tone: '', toneMark: '' },
          { char: '風', bopomofo: 'ㄈㄥ', initial: 'ㄈ', medial: '', final: 'ㄥ', tone: '', toneMark: '' }
        ],
        exampleSentence: '陣陣微風吹拂著綠色小草。'
      },
      {
        id: 'w_thunder',
        hanzi: '雷電',
        emoji: '⚡',
        bpmfFull: 'ㄌㄟˊ ㄉㄧㄢˋ',
        meaning: '暴風雨中空中劃過的閃亮閃電與隆隆巨響',
        characters: [
          { char: '雷', bopomofo: 'ㄌㄟˊ', initial: 'ㄌ', medial: '', final: 'ㄟ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '電', bopomofo: 'ㄉㄧㄢˋ', initial: 'ㄉ', medial: 'ㄧ', final: 'ㄢ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '天空閃過金黃色的雷電。'
      },
      {
        id: 'w_dew',
        hanzi: '露水',
        emoji: '💧',
        bpmfFull: 'ㄌㄡˋ ㄕㄨㄟˇ',
        meaning: '清晨凝聚在花草葉片上的晶瑩小水滴',
        characters: [
          { char: '露', bopomofo: 'ㄌㄡˋ', initial: 'ㄌ', medial: '', final: 'ㄡ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '水', bopomofo: 'ㄕㄨㄟˇ', initial: 'ㄕ', medial: 'ㄨ', final: 'ㄟ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '晶瑩的露水在荷葉上滾動。'
      }
    ],
    sentences: [
      {
        id: 's_nature_1',
        text: '太陽公公露出了溫暖的笑容。',
        emoji: '☀️😊',
        tokens: [
          { char: '太', bopomofo: 'ㄊㄞˋ' },
          { char: '陽', bopomofo: 'ㄧㄤˊ' },
          { char: '公', bopomofo: 'ㄍㄨㄥ' },
          { char: '公', bopomofo: '˙ㄍㄨㄥ' },
          { char: '露', bopomofo: 'ㄌㄡˋ' },
          { char: '出', bopomofo: 'ㄔㄨ' },
          { char: '了', bopomofo: '˙ㄌㄜ' },
          { char: '溫', bopomofo: 'ㄨㄣ' },
          { char: '暖', bopomofo: 'ㄋㄨㄢˇ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '笑', bopomofo: 'ㄒㄧㄠˋ' },
          { char: '容', bopomofo: 'ㄖㄨㄥˊ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'transport',
    name: '交通工具大集合',
    icon: '🚗',
    badgeIcon: '✈️',
    color: 'from-cyan-400 to-blue-600',
    bgLight: 'bg-cyan-50',
    borderColor: 'border-cyan-300',
    tagColor: 'bg-cyan-100 text-cyan-800',
    description: '陸海空全速前進！認識各種帥氣好玩的交通工具！',
    words: [
      {
        id: 'w_car',
        hanzi: '汽車',
        emoji: '🚗',
        bpmfFull: 'ㄑㄧˋ ㄔㄜ',
        meaning: '馬路上跑得快、載著全家人出遊的小客車',
        characters: [
          { char: '汽', bopomofo: 'ㄑㄧˋ', initial: 'ㄑ', medial: 'ㄧ', final: '', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '車', bopomofo: 'ㄔㄜ', initial: 'ㄔ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '爸爸開著紅色的汽車帶我們去兜風。'
      },
      {
        id: 'w_train',
        hanzi: '火車',
        emoji: '🚆',
        bpmfFull: 'ㄏㄨㄛˇ ㄔㄜ',
        meaning: '在鐵軌上奔馳、發出嘟嘟聲的長長列車',
        characters: [
          { char: '火', bopomofo: 'ㄏㄨㄛˇ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄛ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '車', bopomofo: 'ㄔㄜ', initial: 'ㄔ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '火車穿過山洞，發出嘟嘟的鳴笛聲。'
      },
      {
        id: 'w_airplane',
        hanzi: '飛機',
        emoji: '✈️',
        bpmfFull: 'ㄈㄟ ㄐㄧ',
        meaning: '張開巨大雙翼、在高空雲層中翱翔',
        characters: [
          { char: '飛', bopomofo: 'ㄈㄟ', initial: 'ㄈ', medial: '', final: 'ㄟ', tone: '', toneMark: '' },
          { char: '機', bopomofo: 'ㄐㄧ', initial: 'ㄐ', medial: 'ㄧ', final: '', tone: '', toneMark: '' }
        ],
        exampleSentence: '巨大的銀色飛機在藍天上飛翔。'
      },
      {
        id: 'w_ship',
        hanzi: '輪船',
        emoji: '🚢',
        bpmfFull: 'ㄌㄨㄣˊ ㄔㄨㄢˊ',
        meaning: '在大海航行、鳴響汽笛的豪華大客輪',
        characters: [
          { char: '輪', bopomofo: 'ㄌㄨㄣˊ', initial: 'ㄌ', medial: '', final: 'ㄨㄣ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '船', bopomofo: 'ㄔㄨㄢˊ', initial: 'ㄔ', medial: 'ㄨ', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '大輪船在蔚藍的海面上航行。'
      },
      {
        id: 'w_bicycle',
        hanzi: '腳踏車',
        emoji: '🚲',
        bpmfFull: 'ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ',
        meaning: '踩著雙腳踏板、環保又健康的二輪車',
        characters: [
          { char: '腳', bopomofo: 'ㄐㄧㄠˇ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '踏', bopomofo: 'ㄊㄚˋ', initial: 'ㄊ', medial: '', final: 'ㄚ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '車', bopomofo: 'ㄔㄜ', initial: 'ㄔ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '哥哥在公園裡開心地騎腳踏車。'
      },
      {
        id: 'w_bus',
        hanzi: '公車',
        emoji: '🚌',
        bpmfFull: 'ㄍㄨㄥ ㄔㄜ',
        meaning: '每天接送許多乘客上下學的公共大巴士',
        characters: [
          { char: '公', bopomofo: 'ㄍㄨㄥ', initial: 'ㄍ', medial: '', final: 'ㄨㄥ', tone: '', toneMark: '' },
          { char: '車', bopomofo: 'ㄔㄜ', initial: 'ㄔ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '我們排隊上公車，當個有禮貌的好學生。'
      },
      {
        id: 'w_fireengine',
        hanzi: '消防車',
        emoji: '🚒',
        bpmfFull: 'ㄒㄧㄠ ㄈㄤˊ ㄔㄜ',
        meaning: '閃著警示燈、帶著水管搶救火災的紅色英雄車',
        characters: [
          { char: '消', bopomofo: 'ㄒㄧㄠ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄠ', tone: '', toneMark: '' },
          { char: '防', bopomofo: 'ㄈㄤˊ', initial: 'ㄈ', medial: '', final: 'ㄤ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '車', bopomofo: 'ㄔㄜ', initial: 'ㄔ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '紅色的消防車鳴著警笛前去滅火。'
      },
      {
        id: 'w_rocket',
        hanzi: '火箭',
        emoji: '🚀',
        bpmfFull: 'ㄏㄨㄛˇ ㄐㄧㄢˋ',
        meaning: '噴射耀眼烈焰、衝向外太空探索宇宙的太空火箭',
        characters: [
          { char: '火', bopomofo: 'ㄏㄨㄛˇ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄛ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '箭', bopomofo: 'ㄐㄧㄢˋ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄢ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '火箭點火倒數，咻一聲飛向太空！'
      },
      {
        id: 'w_helicopter',
        hanzi: '直升機',
        emoji: '🚁',
        bpmfFull: 'ㄓˊ ㄕㄥ ㄐㄧ',
        meaning: '頂部有巨大旋轉槳葉、能垂直升降的飛行器',
        characters: [
          { char: '直', bopomofo: 'ㄓˊ', initial: 'ㄓ', medial: '', final: '', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '升', bopomofo: 'ㄕㄥ', initial: 'ㄕ', medial: '', final: 'ㄥ', tone: '', toneMark: '' },
          { char: '機', bopomofo: 'ㄐㄧ', initial: 'ㄐ', medial: 'ㄧ', final: '', tone: '', toneMark: '' }
        ],
        exampleSentence: '救難直升機在空中快速盤旋。'
      },
      {
        id: 'w_ambulance',
        hanzi: '救護車',
        emoji: '🚑',
        bpmfFull: 'ㄐㄧㄡˋ ㄏㄨˋ ㄔㄜ',
        meaning: '響著警笛、急速送病人去醫院的白色醫療車',
        characters: [
          { char: '救', bopomofo: 'ㄐㄧㄡˋ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄡ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '護', bopomofo: 'ㄏㄨˋ', initial: 'ㄏ', medial: '', final: 'ㄨ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '車', bopomofo: 'ㄔㄜ', initial: 'ㄔ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '救護車載著病人開向醫院。'
      },
      {
        id: 'w_submarine',
        hanzi: '潛水艇',
        emoji: '🛥️',
        bpmfFull: 'ㄑㄧㄢˊ ㄕㄨㄟˇ ㄊㄧㄥˇ',
        meaning: '潛入深海探尋神秘海底世界的特殊船隻',
        characters: [
          { char: '潛', bopomofo: 'ㄑㄧㄢˊ', initial: 'ㄑ', medial: 'ㄧ', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '水', bopomofo: 'ㄕㄨㄟˇ', initial: 'ㄕ', medial: 'ㄨ', final: 'ㄟ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '艇', bopomofo: 'ㄊㄧㄥˇ', initial: 'ㄊ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '潛水艇潛入深邃蔚藍的海洋。'
      },
      {
        id: 'w_sailboat',
        hanzi: '帆船',
        emoji: '⛵',
        bpmfFull: 'ㄈㄢˊ ㄔㄨㄢˊ',
        meaning: '乘著海風在浪花間前進的白色風帆小船',
        characters: [
          { char: '帆', bopomofo: 'ㄈㄢˊ', initial: 'ㄈ', medial: '', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '船', bopomofo: 'ㄔㄨㄢˊ', initial: 'ㄔ', medial: 'ㄨ', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '美麗的帆船迎著海風航行。'
      },
      {
        id: 'w_motorcycle',
        hanzi: '機車',
        emoji: '🛵',
        bpmfFull: 'ㄐㄧ ㄔㄜ',
        meaning: '戴好安全帽、穿梭在街頭的兩輪摩托車',
        characters: [
          { char: '機', bopomofo: 'ㄐㄧ', initial: 'ㄐ', medial: 'ㄧ', final: '', tone: '', toneMark: '' },
          { char: '車', bopomofo: 'ㄔㄜ', initial: 'ㄔ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '媽媽騎機車戴我安全上學。'
      }
    ],
    sentences: [
      {
        id: 's_transport_1',
        text: '我們搭乘火車，一路欣賞窗外美麗的風景。',
        emoji: '🚆🏔️',
        tokens: [
          { char: '我', bopomofo: 'ㄨㄛˇ' },
          { char: '們', bopomofo: '˙ㄇㄣ' },
          { char: '搭', bopomofo: 'ㄉㄚ' },
          { char: '乘', bopomofo: 'ㄔㄥˊ' },
          { char: '火', bopomofo: 'ㄏㄨㄛˇ' },
          { char: '車', bopomofo: 'ㄔㄜ' },
          { char: '，', bopomofo: '' },
          { char: '一', bopomofo: 'ㄧˊ' },
          { char: '路', bopomofo: 'ㄌㄨˋ' },
          { char: '欣', bopomofo: 'ㄒㄧㄣ' },
          { char: '賞', bopomofo: 'ㄕㄤˇ' },
          { char: '窗', bopomofo: 'ㄔㄨㄤ' },
          { char: '外', bopomofo: 'ㄨㄞˋ' },
          { char: '美', bopomofo: 'ㄇㄟˇ' },
          { char: '麗', bopomofo: 'ㄌㄧˋ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '風', bopomofo: 'ㄈㄥ' },
          { char: '景', bopomofo: 'ㄐㄧㄥˇ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'school',
    name: '歡樂學校與日常',
    icon: '🏫',
    badgeIcon: '📚',
    color: 'from-blue-400 to-indigo-500',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-300',
    tagColor: 'bg-blue-100 text-blue-800',
    description: '和老師同學一起玩遊戲、讀好書、溜滑梯、快樂成長！',
    words: [
      {
        id: 'w_teacher',
        hanzi: '老師',
        emoji: '👩‍🏫',
        bpmfFull: 'ㄌㄠˇ ㄕ',
        meaning: '教導我們知識與禮貌的敬愛長輩',
        characters: [
          { char: '老', bopomofo: 'ㄌㄠˇ', initial: 'ㄌ', medial: '', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '師', bopomofo: 'ㄕ', initial: 'ㄕ', medial: '', final: '', tone: '', toneMark: '' }
        ],
        exampleSentence: '老師親切地跟我們打招呼。'
      },
      {
        id: 'w_friend',
        hanzi: '朋友',
        emoji: '🤝',
        bpmfFull: 'ㄆㄥˊ ㄧㄡˇ',
        meaning: '一起玩耍、互相幫忙的好夥伴',
        characters: [
          { char: '朋', bopomofo: 'ㄆㄥˊ', initial: 'ㄆ', medial: '', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '友', bopomofo: 'ㄧㄡˇ', initial: '', medial: 'ㄧ', final: 'ㄡ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '我和好朋友一起在操場玩球。'
      },
      {
        id: 'w_slide',
        hanzi: '溜滑梯',
        emoji: '🛝',
        bpmfFull: 'ㄌㄧㄡ ㄏㄨㄚˊ ㄊㄧ',
        meaning: '公園與學校裡最好玩的滑溜遊樂設施',
        characters: [
          { char: '溜', bopomofo: 'ㄌㄧㄡ', initial: 'ㄌ', medial: 'ㄧ', final: 'ㄡ', tone: '', toneMark: '' },
          { char: '滑', bopomofo: 'ㄏㄨㄚˊ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄚ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '梯', bopomofo: 'ㄊㄧ', initial: 'ㄊ', medial: 'ㄧ', final: '', tone: '', toneMark: '' }
        ],
        exampleSentence: '下課時我們排隊玩溜滑梯。'
      },
      {
        id: 'w_backpack',
        hanzi: '書包',
        emoji: '🎒',
        bpmfFull: 'ㄕㄨ ㄅㄠ',
        meaning: '裝著課本、文具與水壺的漂亮背包',
        characters: [
          { char: '書', bopomofo: 'ㄕㄨ', initial: 'ㄕ', medial: '', final: 'ㄨ', tone: '', toneMark: '' },
          { char: '包', bopomofo: 'ㄅㄠ', initial: 'ㄅ', medial: '', final: 'ㄠ', tone: '', toneMark: '' }
        ],
        exampleSentence: '我每天背著書包開開心心上學。'
      },
      {
        id: 'w_pencil',
        hanzi: '鉛筆',
        emoji: '✏️',
        bpmfFull: 'ㄑㄧㄢ ㄅㄧˇ',
        meaning: '寫出漂亮工整字跡與繪畫的文具',
        characters: [
          { char: '鉛', bopomofo: 'ㄑㄧㄢ', initial: 'ㄑ', medial: 'ㄧ', final: 'ㄢ', tone: '', toneMark: '' },
          { char: '筆', bopomofo: 'ㄅㄧˇ', initial: 'ㄅ', medial: 'ㄧ', final: '', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '我用鉛筆在作業本上練習寫注音。'
      },
      {
        id: 'w_draw',
        hanzi: '畫畫',
        emoji: '🎨',
        bpmfFull: 'ㄏㄨㄚˋ ㄏㄨㄚˋ',
        meaning: '用七彩顏色畫出美麗圖案的創作活動',
        characters: [
          { char: '畫', bopomofo: 'ㄏㄨㄚˋ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄚ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '畫', bopomofo: 'ㄏㄨㄚˋ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄚ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '美術課時我們開心地拿蠟筆畫畫。'
      },
      {
        id: 'w_blocks',
        hanzi: '積木',
        emoji: '🧱',
        bpmfFull: 'ㄐㄧ ㄇㄨˋ',
        meaning: '能堆疊出高樓、城堡與車子的木製玩具',
        characters: [
          { char: '積', bopomofo: 'ㄐㄧ', initial: 'ㄐ', medial: 'ㄧ', final: '', tone: '', toneMark: '' },
          { char: '木', bopomofo: 'ㄇㄨˋ', initial: 'ㄇ', medial: '', final: 'ㄨ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '我們一起用積木搭了一座大城堡。'
      },
      {
        id: 'w_sing',
        hanzi: '唱歌',
        emoji: '🎤',
        bpmfFull: 'ㄔㄤˋ ㄍㄜ',
        meaning: '隨輕快旋律開口唱出動人歌詞',
        characters: [
          { char: '唱', bopomofo: 'ㄔㄤˋ', initial: 'ㄔ', medial: '', final: 'ㄤ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '歌', bopomofo: 'ㄍㄜ', initial: 'ㄍ', medial: '', final: 'ㄜ', tone: '', toneMark: '' }
        ],
        exampleSentence: '大家跟著音樂一起拍手大聲唱歌。'
      },
      {
        id: 'w_textbook',
        hanzi: '課本',
        emoji: '📖',
        bpmfFull: 'ㄎㄜˋ ㄅㄣˇ',
        meaning: '記載豐富故事與注音知識的學習教材',
        characters: [
          { char: '課', bopomofo: 'ㄎㄜˋ', initial: 'ㄎ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '本', bopomofo: 'ㄅㄣˇ', initial: 'ㄅ', medial: '', final: 'ㄣ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '翻開語文課本大聲朗讀課文。'
      },
      {
        id: 'w_scissors',
        hanzi: '剪刀',
        emoji: '✂️',
        bpmfFull: 'ㄐㄧㄢˇ ㄉㄠ',
        meaning: '在美勞課裁切色紙與勞作的安全工具',
        characters: [
          { char: '剪', bopomofo: 'ㄐㄧㄢˇ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄢ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '刀', bopomofo: 'ㄉㄠ', initial: 'ㄉ', medial: '', final: 'ㄠ', tone: '', toneMark: '' }
        ],
        exampleSentence: '美勞課用剪刀剪出一顆大愛心。'
      },
      {
        id: 'w_eraser',
        hanzi: '橡皮擦',
        emoji: '🧼',
        bpmfFull: 'ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ',
        meaning: '把寫錯的鉛筆字擦得乾乾淨淨的文具',
        characters: [
          { char: '橡', bopomofo: 'ㄒㄧㄤˋ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄤ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '皮', bopomofo: 'ㄆㄧˊ', initial: 'ㄆ', medial: '', final: 'ㄧ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '擦', bopomofo: 'ㄘㄚ', initial: 'ㄘ', medial: '', final: 'ㄚ', tone: '', toneMark: '' }
        ],
        exampleSentence: '用橡皮擦把錯字擦得乾乾淨淨。'
      },
      {
        id: 'w_playground',
        hanzi: '操場',
        emoji: '🏃',
        bpmfFull: 'ㄘㄠ ㄔㄤˇ',
        meaning: '下課時跑步、踢球與嬉戲的寬闊紅土跑道',
        characters: [
          { char: '操', bopomofo: 'ㄘㄠ', initial: 'ㄘ', medial: '', final: 'ㄠ', tone: '', toneMark: '' },
          { char: '場', bopomofo: 'ㄔㄤˇ', initial: 'ㄔ', medial: '', final: 'ㄤ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '小朋友在操場上快樂地跑步。'
      },
      {
        id: 'w_swing',
        hanzi: '鞦韆',
        emoji: '🎪',
        bpmfFull: 'ㄑㄧㄡ ㄑㄧㄢ',
        meaning: '坐在木板上隨風擺盪升高的好玩遊具',
        characters: [
          { char: '鞦', bopomofo: 'ㄑㄧㄡ', initial: 'ㄑ', medial: 'ㄧ', final: 'ㄡ', tone: '', toneMark: '' },
          { char: '韆', bopomofo: 'ㄑㄧㄢ', initial: 'ㄑ', medial: 'ㄧ', final: 'ㄢ', tone: '', toneMark: '' }
        ],
        exampleSentence: '盪鞦韆盪得高高的，好像飛在空中。'
      }
    ],
    sentences: [
      {
        id: 's_school_1',
        text: '今天天氣真好，我們一起去學校玩！',
        emoji: '🏫🎒',
        tokens: [
          { char: '今', bopomofo: 'ㄐㄧㄣ' },
          { char: '天', bopomofo: 'ㄊㄧㄢ' },
          { char: '天', bopomofo: 'ㄊㄧㄢ' },
          { char: '氣', bopomofo: 'ㄑㄧˋ' },
          { char: '真', bopomofo: 'ㄓㄣ' },
          { char: '好', bopomofo: 'ㄏㄠˇ' },
          { char: '，', bopomofo: '' },
          { char: '我', bopomofo: 'ㄨㄛˇ' },
          { char: '們', bopomofo: '˙ㄇㄣ' },
          { char: '一', bopomofo: 'ㄧˋ' },
          { char: '起', bopomofo: 'ㄑㄧˇ' },
          { char: '去', bopomofo: 'ㄑㄩˋ' },
          { char: '學', bopomofo: 'ㄒㄩㄝˊ' },
          { char: '校', bopomofo: 'ㄒㄧㄠˋ' },
          { char: '玩', bopomofo: 'ㄨㄢˊ' },
          { char: '！', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'family',
    name: '溫馨家庭與生活',
    icon: '🏠',
    badgeIcon: '❤️',
    color: 'from-pink-400 to-rose-500',
    bgLight: 'bg-pink-50',
    borderColor: 'border-pink-300',
    tagColor: 'bg-pink-100 text-pink-800',
    description: '最親愛的爸爸媽媽與溫暖的家，滿滿都是愛！',
    words: [
      {
        id: 'w_papa',
        hanzi: '爸爸',
        emoji: '👨',
        bpmfFull: 'ㄅㄚˋ ˙ㄅㄚ',
        meaning: '高大強壯、保護全家人的好父親',
        characters: [
          { char: '爸', bopomofo: 'ㄅㄚˋ', initial: 'ㄅ', medial: '', final: 'ㄚ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '爸', bopomofo: '˙ㄅㄚ', initial: 'ㄅ', medial: '', final: 'ㄚ', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '爸爸下班回家，給我一個大大的擁抱。'
      },
      {
        id: 'w_mama',
        hanzi: '媽媽',
        emoji: '👩',
        bpmfFull: 'ㄇㄚ ˙ㄇㄚ',
        meaning: '溫柔體貼、做飯最好吃的好母親',
        characters: [
          { char: '媽', bopomofo: 'ㄇㄚ', initial: 'ㄇ', medial: '', final: 'ㄚ', tone: '', toneMark: '' },
          { char: '媽', bopomofo: '˙ㄇㄚ', initial: 'ㄇ', medial: '', final: 'ㄚ', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '媽媽講床邊故事陪我入睡。'
      },
      {
        id: 'w_brush',
        hanzi: '刷牙',
        emoji: '🪥',
        bpmfFull: 'ㄕㄨㄚ ㄧㄚˊ',
        meaning: '早晚清潔牙齒、預防蛀牙的健康習慣',
        characters: [
          { char: '刷', bopomofo: 'ㄕㄨㄚ', initial: 'ㄕ', medial: 'ㄨ', final: 'ㄚ', tone: '', toneMark: '' },
          { char: '牙', bopomofo: 'ㄧㄚˊ', initial: '', medial: 'ㄧ', final: 'ㄚ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '睡覺前刷牙，牙齒白又亮。'
      },
      {
        id: 'w_washhands',
        hanzi: '洗手',
        emoji: '🧼',
        bpmfFull: 'ㄒㄧˇ ㄕㄡˇ',
        meaning: '用肥皂搓洗雙手、消滅細菌的好習慣',
        characters: [
          { char: '洗', bopomofo: 'ㄒㄧˇ', initial: 'ㄒ', medial: 'ㄧ', final: '', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '手', bopomofo: 'ㄕㄡˇ', initial: 'ㄕ', medial: '', final: 'ㄡ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '吃東西前一定要記得用肥皂洗手。'
      },
      {
        id: 'w_sleep',
        hanzi: '睡覺',
        emoji: '😴',
        bpmfFull: 'ㄕㄨㄟˋ ㄐㄧㄠˋ',
        meaning: '躺在舒適床上閉眼休息、做個甜甜的美夢',
        characters: [
          { char: '睡', bopomofo: 'ㄕㄨㄟˋ', initial: 'ㄕ', medial: 'ㄨ', final: 'ㄟ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '覺', bopomofo: 'ㄐㄧㄠˋ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄠ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '蓋上溫暖的被子，準備安心睡覺。'
      },
      {
        id: 'w_shoes',
        hanzi: '穿鞋',
        emoji: '👟',
        bpmfFull: 'ㄔㄨㄢ ㄒㄧㄝˊ',
        meaning: '出門時穿在腳上保護雙腳的鞋子',
        characters: [
          { char: '穿', bopomofo: 'ㄔㄨㄢ', initial: 'ㄔ', medial: 'ㄨ', final: 'ㄢ', tone: '', toneMark: '' },
          { char: '鞋', bopomofo: 'ㄒㄧㄝˊ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄝ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '我會自己穿好鞋子準備出門。'
      },
      {
        id: 'w_grandpa',
        hanzi: '爺爺',
        emoji: '👴',
        bpmfFull: 'ㄧㄝˊ ˙ㄧㄝ',
        meaning: '慈祥和藹、帶我們去公園散步的老長輩',
        characters: [
          { char: '爺', bopomofo: 'ㄧㄝˊ', initial: '', medial: 'ㄧ', final: 'ㄝ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '爺', bopomofo: '˙ㄧㄝ', initial: '', medial: 'ㄧ', final: 'ㄝ', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '爺爺牽著我的小手在公園散步。'
      },
      {
        id: 'w_grandma',
        hanzi: '奶奶',
        emoji: '👵',
        bpmfFull: 'ㄋㄞˇ ˙ㄋㄞ',
        meaning: '笑容溫暖、總是端出美味點心的慈祥祖母',
        characters: [
          { char: '奶', bopomofo: 'ㄋㄞˇ', initial: 'ㄋ', medial: '', final: 'ㄞ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '奶', bopomofo: '˙ㄋㄞ', initial: 'ㄋ', medial: '', final: 'ㄞ', tone: '˙', toneMark: '˙' }
        ],
        exampleSentence: '奶奶織了一件溫暖的毛衣送給我。'
      },
      {
        id: 'w_drinkwater',
        hanzi: '喝水',
        emoji: '🥤',
        bpmfFull: 'ㄏㄜ ㄕㄨㄟˇ',
        meaning: '運動後補充水分、保持身體健康的好習慣',
        characters: [
          { char: '喝', bopomofo: 'ㄏㄜ', initial: 'ㄏ', medial: '', final: 'ㄜ', tone: '', toneMark: '' },
          { char: '水', bopomofo: 'ㄕㄨㄟˇ', initial: 'ㄕ', medial: 'ㄨ', final: 'ㄟ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '多喝水身體才會健康有活力。'
      },
      {
        id: 'w_bath',
        hanzi: '洗澡',
        emoji: '🛁',
        bpmfFull: 'ㄒㄧˇ ㄗㄠˇ',
        meaning: '在浴缸裡泡泡水、洗去全身汗水與髒污',
        characters: [
          { char: '洗', bopomofo: 'ㄒㄧˇ', initial: 'ㄒ', medial: 'ㄧ', final: '', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '澡', bopomofo: 'ㄗㄠˇ', initial: 'ㄗ', medial: '', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '洗個熱水澡，舒服又乾淨。'
      },
      {
        id: 'w_hug',
        hanzi: '擁抱',
        emoji: '🫂',
        bpmfFull: 'ㄩㄥˇ ㄅㄠˋ',
        meaning: '張開雙手緊緊抱住家人、傳遞愛與溫暖',
        characters: [
          { char: '擁', bopomofo: 'ㄩㄥˇ', initial: '', medial: 'ㄩ', final: 'ㄥ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '抱', bopomofo: 'ㄅㄠˋ', initial: 'ㄅ', medial: '', final: 'ㄠ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '給親愛的爸爸媽媽一個溫暖的大擁抱。'
      },
      {
        id: 'w_comb',
        hanzi: '梳頭',
        emoji: '🪮',
        bpmfFull: 'ㄕㄨ ㄊㄡˊ',
        meaning: '用梳子把頭髮梳理得整整齊齊',
        characters: [
          { char: '梳', bopomofo: 'ㄕㄨ', initial: 'ㄕ', medial: '', final: 'ㄨ', tone: '', toneMark: '' },
          { char: '頭', bopomofo: 'ㄊㄡˊ', initial: 'ㄊ', medial: '', final: 'ㄡ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '出門前把頭髮梳理得整整齊齊。'
      }
    ],
    sentences: [
      {
        id: 's_family_1',
        text: '我們一家人圍在一起開心地吃晚餐。',
        emoji: '👨‍👩‍👧‍👦🍲',
        tokens: [
          { char: '我', bopomofo: 'ㄨㄛˇ' },
          { char: '們', bopomofo: '˙ㄇㄣ' },
          { char: '一', bopomofo: 'ㄧˋ' },
          { char: '家', bopomofo: 'ㄐㄧㄚ' },
          { char: '人', bopomofo: 'ㄖㄣˊ' },
          { char: '圍', bopomofo: 'ㄨㄟˊ' },
          { char: '在', bopomofo: 'ㄗㄞˋ' },
          { char: '一', bopomofo: 'ㄧˋ' },
          { char: '起', bopomofo: 'ㄑㄧˇ' },
          { char: '開', bopomofo: 'ㄎㄞ' },
          { char: '心', bopomofo: 'ㄒㄧㄣ' },
          { char: '地', bopomofo: '˙ㄉㄜ' },
          { char: '吃', bopomofo: 'ㄔ' },
          { char: '晚', bopomofo: 'ㄨㄢˇ' },
          { char: '餐', bopomofo: 'ㄘㄢ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'fairytale',
    name: '童話與冒險世界',
    icon: '🏰',
    badgeIcon: '🦄',
    color: 'from-purple-400 to-violet-600',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-300',
    tagColor: 'bg-purple-100 text-purple-800',
    description: '神奇魔法、巨龍騎士與夢幻城堡，開啟冒險旅程！',
    words: [
      {
        id: 'w_castle',
        hanzi: '城堡',
        emoji: '🏰',
        bpmfFull: 'ㄔㄥˊ ㄅㄠˇ',
        meaning: '有著高聳尖塔與城牆的宏偉王國宮殿',
        characters: [
          { char: '城', bopomofo: 'ㄔㄥˊ', initial: 'ㄔ', medial: '', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '堡', bopomofo: 'ㄅㄠˇ', initial: 'ㄅ', medial: '', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '遠方山頂上有一座金碧輝煌的城堡。'
      },
      {
        id: 'w_princess',
        hanzi: '公主',
        emoji: '👸',
        bpmfFull: 'ㄍㄨㄥ ㄓㄨˇ',
        meaning: '戴著閃亮皇冠、心地善良的王國女子',
        characters: [
          { char: '公', bopomofo: 'ㄍㄨㄥ', initial: 'ㄍ', medial: '', final: 'ㄨㄥ', tone: '', toneMark: '' },
          { char: '主', bopomofo: 'ㄓㄨˇ', initial: 'ㄓ', medial: '', final: 'ㄨ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '美麗的公主穿著粉紅色的禮服。'
      },
      {
        id: 'w_knight',
        hanzi: '騎士',
        emoji: '🛡️',
        bpmfFull: 'ㄑㄧˊ ㄕˋ',
        meaning: '身穿鋼鐵盔甲、手持寶劍保衛和平的勇士',
        characters: [
          { char: '騎', bopomofo: 'ㄑㄧˊ', initial: 'ㄑ', medial: 'ㄧ', final: '', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '士', bopomofo: 'ㄕˋ', initial: 'ㄕ', medial: '', final: '', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '英勇的騎士騎著白馬保護大家。'
      },
      {
        id: 'w_dinosaur',
        hanzi: '恐龍',
        emoji: '🦖',
        bpmfFull: 'ㄎㄨㄥˇ ㄌㄨㄥˊ',
        meaning: '遠古時代統治地球的巨大爬行動物霸主',
        characters: [
          { char: '恐', bopomofo: 'ㄎㄨㄥˇ', initial: 'ㄎ', medial: '', final: 'ㄨㄥ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '龍', bopomofo: 'ㄌㄨㄥˊ', initial: 'ㄌ', medial: '', final: 'ㄨㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '巨大的霸王龍在森林裡大步走動。'
      },
      {
        id: 'w_magic',
        hanzi: '魔法棒',
        emoji: '🪄',
        bpmfFull: 'ㄇㄛˊ ㄈㄚˇ ㄅㄤˋ',
        meaning: '揮一揮就會綻放閃爍星光與奇蹟的神奇法杖',
        characters: [
          { char: '魔', bopomofo: 'ㄇㄛˊ', initial: 'ㄇ', medial: '', final: 'ㄛ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '法', bopomofo: 'ㄈㄚˇ', initial: 'ㄈ', medial: '', final: 'ㄚ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '棒', bopomofo: 'ㄅㄤˋ', initial: 'ㄅ', medial: '', final: 'ㄤ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '小仙女輕輕揮動魔法棒變出糖果。'
      },
      {
        id: 'w_treasure',
        hanzi: '寶藏',
        emoji: '💎',
        bpmfFull: 'ㄅㄠˇ ㄗㄤˋ',
        meaning: '藏在神秘寶箱裡的黃金、珍珠與寶石',
        characters: [
          { char: '寶', bopomofo: 'ㄅㄠˇ', initial: 'ㄅ', medial: '', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '藏', bopomofo: 'ㄗㄤˋ', initial: 'ㄗ', medial: '', final: 'ㄤ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '我們沿著藏寶圖找到發光的寶藏。'
      },
      {
        id: 'w_dragon',
        hanzi: '巨龍',
        emoji: '🐉',
        bpmfFull: 'ㄐㄩˋ ㄌㄨㄥˊ',
        meaning: '會噴出火焰、在天空盤旋守護寶藏的神話神獸',
        characters: [
          { char: '巨', bopomofo: 'ㄐㄩˋ', initial: 'ㄐ', medial: 'ㄩ', final: '', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '龍', bopomofo: 'ㄌㄨㄥˊ', initial: 'ㄌ', medial: '', final: 'ㄨㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '友善的巨龍載著冒險家飛越高山。'
      },
      {
        id: 'w_unicorn',
        hanzi: '獨角獸',
        emoji: '🦄',
        bpmfFull: 'ㄉㄨˊ ㄐㄧㄠˇ ㄕㄡˋ',
        meaning: '額頭長著旋轉金角、純白夢幻的森林神獸',
        characters: [
          { char: '獨', bopomofo: 'ㄉㄨˊ', initial: 'ㄉ', medial: '', final: 'ㄨ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '角', bopomofo: 'ㄐㄧㄠˇ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '獸', bopomofo: 'ㄕㄡˋ', initial: 'ㄕ', medial: '', final: 'ㄡ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '彩虹森林裡住著純潔美麗的獨角獸。'
      },
      {
        id: 'w_king',
        hanzi: '國王',
        emoji: '👑',
        bpmfFull: 'ㄍㄨㄛˊ ㄨㄤˊ',
        meaning: '戴著金色皇冠、治理王國的威嚴領袖',
        characters: [
          { char: '國', bopomofo: 'ㄍㄨㄛˊ', initial: 'ㄍ', medial: 'ㄨ', final: 'ㄛ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '王', bopomofo: 'ㄨㄤˊ', initial: '', medial: 'ㄨ', final: 'ㄤ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '國王坐在王座上親切地接見人民。'
      },
      {
        id: 'w_fairy',
        hanzi: '仙女',
        emoji: '🧚',
        bpmfFull: 'ㄒㄧㄢ ㄋㄩˇ',
        meaning: '背後有著透明翅膀、能施展美好魔法的精靈',
        characters: [
          { char: '仙', bopomofo: 'ㄒㄧㄢ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄢ', tone: '', toneMark: '' },
          { char: '女', bopomofo: 'ㄋㄩˇ', initial: 'ㄋ', medial: 'ㄩ', final: '', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '花朵上的小仙女灑下金色的星光粉。'
      },
      {
        id: 'w_carpet',
        hanzi: '飛毯',
        emoji: '🧞',
        bpmfFull: 'ㄈㄟ ㄊㄢˇ',
        meaning: '能在空中自由穿梭飛翔的神奇魔毯',
        characters: [
          { char: '飛', bopomofo: 'ㄈㄟ', initial: 'ㄈ', medial: '', final: 'ㄟ', tone: '', toneMark: '' },
          { char: '毯', bopomofo: 'ㄊㄢˇ', initial: 'ㄊ', medial: '', final: 'ㄢ', tone: 'ˇ', toneMark: 'ˇ' }
        ],
        exampleSentence: '坐上神奇飛毯在雲朵上方翱翔。'
      },
      {
        id: 'w_crown',
        hanzi: '皇冠',
        emoji: '👑',
        bpmfFull: 'ㄏㄨㄤˊ ㄍㄨㄢ',
        meaning: '鑲嵌七彩寶石、象徵榮耀與勝利的金色冠冕',
        characters: [
          { char: '皇', bopomofo: 'ㄏㄨㄤˊ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄤ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '冠', bopomofo: 'ㄍㄨㄢ', initial: 'ㄍ', medial: 'ㄨ', final: 'ㄢ', tone: '', toneMark: '' }
        ],
        exampleSentence: '金光閃閃的皇冠象徵至高無上的榮譽。'
      }
    ],
    sentences: [
      {
        id: 's_fairy_1',
        text: '勇敢的騎士拔出寶劍，保護城堡裡的每一個人。',
        emoji: '🛡️🏰',
        tokens: [
          { char: '勇', bopomofo: 'ㄩㄥˇ' },
          { char: '敢', bopomofo: 'ㄍㄢˇ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '騎', bopomofo: 'ㄑㄧˊ' },
          { char: '士', bopomofo: 'ㄕˋ' },
          { char: '拔', bopomofo: 'ㄅㄚˊ' },
          { char: '出', bopomofo: 'ㄔㄨ' },
          { char: '寶', bopomofo: 'ㄅㄠˇ' },
          { char: '劍', bopomofo: 'ㄐㄧㄢˋ' },
          { char: '，', bopomofo: '' },
          { char: '保', bopomofo: 'ㄅㄠˇ' },
          { char: '護', bopomofo: 'ㄏㄨˋ' },
          { char: '城', bopomofo: 'ㄔㄥˊ' },
          { char: '堡', bopomofo: 'ㄅㄠˇ' },
          { char: '裡', bopomofo: 'ㄌㄧˇ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '每', bopomofo: 'ㄇㄟˇ' },
          { char: '一', bopomofo: 'ㄧˊ' },
          { char: '個', bopomofo: '˙ㄍㄜ' },
          { char: '人', bopomofo: 'ㄖㄣˊ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'colors',
    name: '繽紛色彩與形狀',
    icon: '🎨',
    badgeIcon: '✨',
    color: 'from-amber-400 via-pink-400 to-indigo-500',
    bgLight: 'bg-gradient-to-r from-amber-50 to-pink-50',
    borderColor: 'border-pink-300',
    tagColor: 'bg-purple-100 text-purple-800',
    description: '紅黃藍綠五彩斑斕，圓形三角形變形樂園！',
    words: [
      {
        id: 'w_red',
        hanzi: '紅色',
        emoji: '🔴',
        bpmfFull: 'ㄏㄨㄥˊ ㄙㄜˋ',
        meaning: '熱情鮮豔像蘋果與草莓的顏色',
        characters: [
          { char: '紅', bopomofo: 'ㄏㄨㄥˊ', initial: 'ㄏ', medial: '', final: 'ㄨㄥ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '色', bopomofo: 'ㄙㄜˋ', initial: 'ㄙ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '這是一頂亮麗的紅色帽子。'
      },
      {
        id: 'w_blue',
        hanzi: '藍色',
        emoji: '🔵',
        bpmfFull: 'ㄌㄢˊ ㄙㄜˋ',
        meaning: '像大海與晴朗天空般澄淨的顏色',
        characters: [
          { char: '藍', bopomofo: 'ㄌㄢˊ', initial: 'ㄌ', medial: '', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '色', bopomofo: 'ㄙㄜˋ', initial: 'ㄙ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '藍色的大海泛著波浪。'
      },
      {
        id: 'w_yellow',
        hanzi: '黃色',
        emoji: '🟡',
        bpmfFull: 'ㄏㄨㄤˊ ㄙㄜˋ',
        meaning: '像溫暖陽光與香蕉般明亮的顏色',
        characters: [
          { char: '黃', bopomofo: 'ㄏㄨㄤˊ', initial: 'ㄏ', medial: 'ㄨ', final: 'ㄤ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '色', bopomofo: 'ㄙㄜˋ', initial: 'ㄙ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '小鴨子有著黃色柔軟的羽毛。'
      },
      {
        id: 'w_green',
        hanzi: '綠色',
        emoji: '🟢',
        bpmfFull: 'ㄌㄩˋ ㄙㄜˋ',
        meaning: '像森林樹木與翠綠草地般充滿生機的色彩',
        characters: [
          { char: '綠', bopomofo: 'ㄌㄩˋ', initial: 'ㄌ', medial: 'ㄩ', final: '', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '色', bopomofo: 'ㄙㄜˋ', initial: 'ㄙ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '春天來了，草地上長滿綠色的嫩芽。'
      },
      {
        id: 'w_circle',
        hanzi: '圓形',
        emoji: '⭕',
        bpmfFull: 'ㄩㄢˊ ㄒㄧㄥˊ',
        meaning: '像皮球、車輪與滿月般圓滑對稱的圖案',
        characters: [
          { char: '圓', bopomofo: 'ㄩㄢˊ', initial: '', medial: 'ㄩ', final: 'ㄢ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '形', bopomofo: 'ㄒㄧㄥˊ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '時鐘和皮球都是圓形的。'
      },
      {
        id: 'w_triangle',
        hanzi: '三角形',
        emoji: '🔺',
        bpmfFull: 'ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ',
        meaning: '有三個邊與三個角的幾何圖形',
        characters: [
          { char: '三', bopomofo: 'ㄙㄢ', initial: 'ㄙ', medial: '', final: 'ㄢ', tone: '', toneMark: '' },
          { char: '角', bopomofo: 'ㄐㄧㄠˇ', initial: 'ㄐ', medial: 'ㄧ', final: 'ㄠ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '形', bopomofo: 'ㄒㄧㄥˊ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '美味的披薩切成一塊塊三角形。'
      },
      {
        id: 'w_purple',
        hanzi: '紫色',
        emoji: '🟣',
        bpmfFull: 'ㄗˇ ㄙㄜˋ',
        meaning: '像薰衣草與紫葡萄般高貴神秘的顏色',
        characters: [
          { char: '紫', bopomofo: 'ㄗˇ', initial: 'ㄗ', medial: '', final: '', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '色', bopomofo: 'ㄙㄜˋ', initial: 'ㄙ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '花瓶裡插著一束紫色的薰衣草。'
      },
      {
        id: 'w_orange_col',
        hanzi: '橙色',
        emoji: '🟠',
        bpmfFull: 'ㄔㄥˊ ㄙㄜˋ',
        meaning: '像多汁柳橙與日落晚霞般溫暖的色彩',
        characters: [
          { char: '橙', bopomofo: 'ㄔㄥˊ', initial: 'ㄔ', medial: '', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '色', bopomofo: 'ㄙㄜˋ', initial: 'ㄙ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '夕陽把天空染成了溫暖的橙色。'
      },
      {
        id: 'w_pink',
        hanzi: '粉紅色',
        emoji: '🌸',
        bpmfFull: 'ㄈㄣˇ ㄏㄨㄥˊ ㄙㄜˋ',
        meaning: '像盛開櫻花與水蜜桃般甜美溫柔的顏色',
        characters: [
          { char: '粉', bopomofo: 'ㄈㄣˇ', initial: 'ㄈ', medial: '', final: 'ㄣ', tone: 'ˇ', toneMark: 'ˇ' },
          { char: '紅', bopomofo: 'ㄏㄨㄥˊ', initial: 'ㄏ', medial: '', final: 'ㄨㄥ', tone: 'ˊ', toneMark: 'ˊ' },
          { char: '色', bopomofo: 'ㄙㄜˋ', initial: 'ㄙ', medial: '', final: 'ㄜ', tone: 'ˋ', toneMark: 'ˋ' }
        ],
        exampleSentence: '春天公園裡盛開著粉紅色的櫻花。'
      },
      {
        id: 'w_square',
        hanzi: '正方形',
        emoji: '⏹️',
        bpmfFull: 'ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ',
        meaning: '四個邊一樣長、四個角都是直角的對稱圖形',
        characters: [
          { char: '正', bopomofo: 'ㄓㄥˋ', initial: 'ㄓ', medial: '', final: 'ㄥ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '方', bopomofo: 'ㄈㄤ', initial: 'ㄈ', medial: '', final: 'ㄤ', tone: '', toneMark: '' },
          { char: '形', bopomofo: 'ㄒㄧㄥˊ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '玩具魔術方塊每個面都是正方形。'
      },
      {
        id: 'w_star_shape',
        hanzi: '星形',
        emoji: '⭐',
        bpmfFull: 'ㄒㄧㄥ ㄒㄧㄥˊ',
        meaning: '有五個尖角、像夜空星光閃耀的漂亮圖形',
        characters: [
          { char: '星', bopomofo: 'ㄒㄧㄥ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: '', toneMark: '' },
          { char: '形', bopomofo: 'ㄒㄧㄥˊ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '聖誕樹頂端裝飾著一顆星形寶石。'
      },
      {
        id: 'w_heart_shape',
        hanzi: '愛心形',
        emoji: '❤️',
        bpmfFull: 'ㄞˋ ㄒㄧㄣ ㄒㄧㄥˊ',
        meaning: '象徵滿滿溫暖與愛意的愛心圖案',
        characters: [
          { char: '愛', bopomofo: 'ㄞˋ', initial: '', medial: '', final: 'ㄞ', tone: 'ˋ', toneMark: 'ˋ' },
          { char: '心', bopomofo: 'ㄒㄧㄣ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄣ', tone: '', toneMark: '' },
          { char: '形', bopomofo: 'ㄒㄧㄥˊ', initial: 'ㄒ', medial: 'ㄧ', final: 'ㄥ', tone: 'ˊ', toneMark: 'ˊ' }
        ],
        exampleSentence: '卡片上畫著一個紅色的大愛心形。'
      }
    ],
    sentences: [
      {
        id: 's_color_1',
        text: '我們用紅橙黃綠藍靛紫，畫出一道七色彩虹。',
        emoji: '🎨🌈',
        tokens: [
          { char: '我', bopomofo: 'ㄨㄛˇ' },
          { char: '們', bopomofo: '˙ㄇㄣ' },
          { char: '用', bopomofo: 'ㄩㄥˋ' },
          { char: '紅', bopomofo: 'ㄏㄨㄥˊ' },
          { char: '橙', bopomofo: 'ㄔㄥˊ' },
          { char: '黃', bopomofo: 'ㄏㄨㄤˊ' },
          { char: '綠', bopomofo: 'ㄌㄩˋ' },
          { char: '藍', bopomofo: 'ㄌㄢˊ' },
          { char: '靛', bopomofo: 'ㄉㄧㄢˋ' },
          { char: '紫', bopomofo: 'ㄗˇ' },
          { char: '，', bopomofo: '' },
          { char: '畫', bopomofo: 'ㄏㄨㄚˋ' },
          { char: '出', bopomofo: 'ㄔㄨ' },
          { char: '一', bopomofo: 'ㄧˊ' },
          { char: '道', bopomofo: 'ㄉㄠˋ' },
          { char: '七', bopomofo: 'ㄑㄧ' },
          { char: '色', bopomofo: 'ㄙㄜˋ' },
          { char: '彩', bopomofo: 'ㄘㄞˇ' },
          { char: '虹', bopomofo: 'ㄏㄨㄥˊ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  }
];
