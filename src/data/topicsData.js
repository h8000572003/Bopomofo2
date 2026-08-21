// 台灣繁體主題式單字與句子完整資料庫 (100% 純台灣注音符號標音，絕非中國拼音)

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
      },
      {
        id: 's_elephant_1',
        text: '大象用長長的鼻子噴水洗澡。',
        emoji: '🐘💦',
        tokens: [
          { char: '大', bopomofo: 'ㄉㄚˋ' },
          { char: '象', bopomofo: 'ㄒㄧㄤˋ' },
          { char: '用', bopomofo: 'ㄩㄥˋ' },
          { char: '長', bopomofo: 'ㄔㄤˊ' },
          { char: '長', bopomofo: 'ㄔㄤˊ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '鼻', bopomofo: 'ㄅㄧˊ' },
          { char: '子', bopomofo: '˙ㄗ' },
          { char: '噴', bopomofo: 'ㄆㄣ' },
          { char: '水', bopomofo: 'ㄕㄨㄟˇ' },
          { char: '洗', bopomofo: 'ㄒㄧˇ' },
          { char: '澡', bopomofo: 'ㄗㄠˇ' },
          { char: '。', bopomofo: '' }
        ]
      },
      {
        id: 's_bird_1',
        text: '樹上的小鳥唱出清脆動聽的歌曲。',
        emoji: '🐦🎵',
        tokens: [
          { char: '樹', bopomofo: 'ㄕㄨˋ' },
          { char: '上', bopomofo: 'ㄕㄤˋ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '小', bopomofo: 'ㄒㄧㄠˇ' },
          { char: '鳥', bopomofo: 'ㄋㄧㄠˇ' },
          { char: '唱', bopomofo: 'ㄔㄤˋ' },
          { char: '出', bopomofo: 'ㄔㄨ' },
          { char: '清', bopomofo: 'ㄑㄧㄥ' },
          { char: '脆', bopomofo: 'ㄘㄨㄟˋ' },
          { char: '動', bopomofo: 'ㄉㄨㄥˋ' },
          { char: '聽', bopomofo: 'ㄊㄧㄥ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '歌', bopomofo: 'ㄍㄜ' },
          { char: '曲', bopomofo: 'ㄑㄩˇ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'food',
    name: '美味食物',
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
      },
      {
        id: 's_food_2',
        text: '今天早餐我喝了一杯熱牛奶。',
        emoji: '🥛🥪',
        tokens: [
          { char: '今', bopomofo: 'ㄐㄧㄣ' },
          { char: '天', bopomofo: 'ㄊㄧㄢ' },
          { char: '早', bopomofo: 'ㄗㄠˇ' },
          { char: '餐', bopomofo: 'ㄘㄢ' },
          { char: '我', bopomofo: 'ㄨㄛˇ' },
          { char: '喝', bopomofo: 'ㄏㄜ' },
          { char: '了', bopomofo: '˙ㄌㄜ' },
          { char: '一', bopomofo: 'ㄧˋ' },
          { char: '杯', bopomofo: 'ㄅㄟ' },
          { char: '熱', bopomofo: 'ㄖㄜˋ' },
          { char: '牛', bopomofo: 'ㄋㄧㄡˊ' },
          { char: '奶', bopomofo: 'ㄋㄞˇ' },
          { char: '。', bopomofo: '' }
        ]
      },
      {
        id: 's_food_3',
        text: '夏天吃冰涼的西瓜和草莓冰淇淋。',
        emoji: '🍉🍦',
        tokens: [
          { char: '夏', bopomofo: 'ㄒㄧㄚˋ' },
          { char: '天', bopomofo: 'ㄊㄧㄢ' },
          { char: '吃', bopomofo: 'ㄔ' },
          { char: '冰', bopomofo: 'ㄅㄧㄥ' },
          { char: '涼', bopomofo: 'ㄌㄧㄤˊ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '西', bopomofo: 'ㄒㄧ' },
          { char: '瓜', bopomofo: 'ㄍㄨㄚ' },
          { char: '和', bopomofo: 'ㄏㄢˋ' },
          { char: '草', bopomofo: 'ㄘㄠˇ' },
          { char: '莓', bopomofo: 'ㄇㄟˊ' },
          { char: '冰', bopomofo: 'ㄅㄧㄥ' },
          { char: '淇', bopomofo: 'ㄑㄧˊ' },
          { char: '淋', bopomofo: 'ㄌㄧㄣˊ' },
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
      },
      {
        id: 's_nature_2',
        text: '下雨過後，天空掛著漂亮的七色彩虹。',
        emoji: '🌈✨',
        tokens: [
          { char: '下', bopomofo: 'ㄒㄧㄚˋ' },
          { char: '雨', bopomofo: 'ㄩˇ' },
          { char: '過', bopomofo: 'ㄍㄨㄛˋ' },
          { char: '後', bopomofo: 'ㄏㄡˋ' },
          { char: '，', bopomofo: '' },
          { char: '天', bopomofo: 'ㄊㄧㄢ' },
          { char: '空', bopomofo: 'ㄎㄨㄥ' },
          { char: '掛', bopomofo: 'ㄍㄨㄚˋ' },
          { char: '著', bopomofo: '˙ㄓㄜ' },
          { char: '漂', bopomofo: 'ㄆㄧㄠˋ' },
          { char: '亮', bopomofo: '˙ㄌㄧㄤ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '七', bopomofo: 'ㄑㄧ' },
          { char: '色', bopomofo: 'ㄙㄜˋ' },
          { char: '彩', bopomofo: 'ㄘㄞˇ' },
          { char: '虹', bopomofo: 'ㄏㄨㄥˊ' },
          { char: '。', bopomofo: '' }
        ]
      },
      {
        id: 's_nature_3',
        text: '夜晚的微風輕輕吹，滿天星星一閃一閃。',
        emoji: '🌙⭐',
        tokens: [
          { char: '夜', bopomofo: 'ㄧㄝˋ' },
          { char: '晚', bopomofo: 'ㄨㄢˇ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '微', bopomofo: 'ㄨㄟ' },
          { char: '風', bopomofo: 'ㄈㄥ' },
          { char: '輕', bopomofo: 'ㄑㄧㄥ' },
          { char: '輕', bopomofo: 'ㄑㄧㄥ' },
          { char: '吹', bopomofo: 'ㄔㄨㄟ' },
          { char: '，', bopomofo: '' },
          { char: '滿', bopomofo: 'ㄇㄢˇ' },
          { char: '天', bopomofo: 'ㄊㄧㄢ' },
          { char: '星', bopomofo: 'ㄒㄧㄥ' },
          { char: '星', bopomofo: '˙ㄒㄧㄥ' },
          { char: '一', bopomofo: 'ㄧˋ' },
          { char: '閃', bopomofo: 'ㄕㄢˇ' },
          { char: '一', bopomofo: 'ㄧˋ' },
          { char: '閃', bopomofo: 'ㄕㄢˇ' },
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
      },
      {
        id: 's_transport_2',
        text: '紅色消防車開得很快，勇敢的消防員去救火。',
        emoji: '🚒👨‍🚒',
        tokens: [
          { char: '紅', bopomofo: 'ㄏㄨㄥˊ' },
          { char: '色', bopomofo: 'ㄙㄜˋ' },
          { char: '消', bopomofo: 'ㄒㄧㄠ' },
          { char: '防', bopomofo: 'ㄈㄤˊ' },
          { char: '車', bopomofo: 'ㄔㄜ' },
          { char: '開', bopomofo: 'ㄎㄞ' },
          { char: '得', bopomofo: '˙ㄉㄜ' },
          { char: '很', bopomofo: 'ㄏㄣˇ' },
          { char: '快', bopomofo: 'ㄎㄨㄞˋ' },
          { char: '，', bopomofo: '' },
          { char: '勇', bopomofo: 'ㄩㄥˇ' },
          { char: '敢', bopomofo: 'ㄍㄢˇ' },
          { char: '的', bopomofo: '˙ㄉㄜ' },
          { char: '消', bopomofo: 'ㄒㄧㄠ' },
          { char: '防', bopomofo: 'ㄈㄤˊ' },
          { char: '員', bopomofo: 'ㄩㄢˊ' },
          { char: '去', bopomofo: 'ㄑㄩˋ' },
          { char: '救', bopomofo: 'ㄐㄧㄡˋ' },
          { char: '火', bopomofo: 'ㄏㄨㄛˇ' },
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
      },
      {
        id: 's_school_2',
        text: '下課了，小朋友們排隊玩溜滑梯。',
        emoji: '🛝🎉',
        tokens: [
          { char: '下', bopomofo: 'ㄒㄧㄚˋ' },
          { char: '課', bopomofo: 'ㄎㄜˋ' },
          { char: '了', bopomofo: '˙ㄌㄜ' },
          { char: '，', bopomofo: '' },
          { char: '小', bopomofo: 'ㄒㄧㄠˇ' },
          { char: '朋', bopomofo: 'ㄆㄥˊ' },
          { char: '友', bopomofo: 'ㄧㄡˇ' },
          { char: '們', bopomofo: '˙ㄇㄣ' },
          { char: '排', bopomofo: 'ㄆㄞˊ' },
          { char: '隊', bopomofo: 'ㄉㄨㄟˋ' },
          { char: '玩', bopomofo: 'ㄨㄢˊ' },
          { char: '溜', bopomofo: 'ㄌㄧㄡ' },
          { char: '滑', bopomofo: 'ㄏㄨㄚˊ' },
          { char: '梯', bopomofo: 'ㄊㄧ' },
          { char: '。', bopomofo: '' }
        ]
      }
    ]
  },
  {
    id: 'family',
    name: '溫馨家庭生活',
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
      },
      {
        id: 's_family_2',
        text: '睡覺前要刷牙洗臉，對爸爸媽媽說晚安。',
        emoji: '🪥🌙',
        tokens: [
          { char: '睡', bopomofo: 'ㄕㄨㄟˋ' },
          { char: '覺', bopomofo: 'ㄐㄧㄠˋ' },
          { char: '前', bopomofo: 'ㄑㄧㄢˊ' },
          { char: '要', bopomofo: 'ㄧㄠˋ' },
          { char: '刷', bopomofo: 'ㄕㄨㄚ' },
          { char: '牙', bopomofo: 'ㄧㄚˊ' },
          { char: '洗', bopomofo: 'ㄒㄧˇ' },
          { char: '臉', bopomofo: 'ㄌㄧㄢˇ' },
          { char: '，', bopomofo: '' },
          { char: '對', bopomofo: 'ㄉㄨㄟˋ' },
          { char: '爸', bopomofo: 'ㄅㄚˋ' },
          { char: '爸', bopomofo: '˙ㄅㄚ' },
          { char: '媽', bopomofo: 'ㄇㄚ' },
          { char: '媽', bopomofo: '˙ㄇㄚ' },
          { char: '說', bopomofo: 'ㄕㄨㄛ' },
          { char: '晚', bopomofo: 'ㄨㄢˇ' },
          { char: '安', bopomofo: 'ㄢ' },
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
