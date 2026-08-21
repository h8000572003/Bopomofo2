# 🎒 注音冒險島 (Bopomofo Adventure) 開發規範與基礎規則

本文件為「注音冒險島」專案之核心開發規範與架構指南。所有參與開發之 AI 代理與工程師均須嚴格遵守本文件規範。

---

## 🇹🇼 核心強制規範：100% 純台灣注音符號 (Zero Roman Pinyin Policy)

> [!IMPORTANT]
> **本專案為專供台灣學童設計之注音學習系統，嚴禁任何中國漢語拼音（Roman Pinyin）！**

1. **純注音標音**：
   - 只能使用**台灣教育部標準注音符號**（37 個符號 + 5 種聲調）。
   - 🚫 **絕對禁止**出現 `pinyin`、`pin_yin`、`ni hao`、`b p m f`（英文字母羅馬字拼音）、`wǒ`、`nǐ` 等拼音標註。
   - ✅ **必須使用**台灣注音符號結構：
     - **21 個聲母**：`ㄅ ㄆ ㄇ ㄈ ㄉ ㄊ ㄋ ㄌ ㄍ ㄎ ㄏ ㄐ ㄑ ㄒ ㄓ ㄔ ㄕ ㄖ ㄗ ㄘ ㄙ`
     - **3 個介音**：`ㄧ ㄨ ㄩ`
     - **13 個韻母**：`ㄚ ㄛ ㄜ ㄝ ㄞ ㄟ ㄠ ㄡ ㄢ ㄣ ㄤ ㄥ ㄦ`
     - **5 種聲調**：一聲（陰平，不標調號）、二聲（陽平 `ˊ`）、三聲（上聲 `ˇ`）、四聲（去聲 `ˋ`）、五聲（輕聲 `˙`）。

2. **直書 Ruby 與注音排版**：
   - 漢字與注音必須使用台灣傳統直書或右側 Ruby 標音排版。
   - 輕聲 `˙` 標於注音字首上方或左上方，二/三/四聲標於注音符號右上方。

3. **正體繁體中文**：
   - 全站 UI 介面、題目內容、提示文字與例句一律使用**台灣正體繁體中文**（Traditional Chinese - Taiwan）。

---

## 🎨 幼兒介面與設計語彙規範

1. **目標對象**：台灣幼兒園大班與國小低年級（1~2 年級）學童。
2. **視覺風格**：
   - 活潑可愛、溫暖糖果色系（Pink, Amber, Sky, Emerald, Indigo）。
   - 大按鈕設計（`rounded-3xl`、`rounded-2xl`），方便平板觸控與滑鼠點擊。
   - 豐富生動的 Emoji 輔助視覺認知。
3. **響應式 RWD 與滑動選單**：
   - 橫向選單（如主題分類、頁籤導覽）一律使用 `ScrollableMenuBar` 組件，並提供懸浮左右箭頭（`◀` / `▶`），確保手機與平板螢幕皆能順暢選取。
4. **即時鼓勵機制**：
   - 正確作答或完成朗讀時觸發星願獎勵、音效反饋（Web Audio API）與全螢幕彩色彩帶慶祝（`canvas-confetti`）。

---

## 🎤 語音與卡拉OK動態字幕規範

1. **單一時間軸排程原則**：
   - 朗讀與卡拉OK高亮引擎（`speechHelper.js`）必須採用單一權威的單向遞增時間軸排程器（`requestAnimationFrame`）。
   - 🚫 **嚴禁**同時啟用 `utterance.onboundary` 與固定間隔的 `setInterval`，避免非同步競爭造成字幕亂跳或倒退。
2. **語音朗讀支援**：
   - 語音朗讀一律優先選用台灣中文語音（`zh-TW`），預設語速為適中 `0.85x`。

---

## 🛠️ 開發常用指令

```bash
# 安裝相依套件
npm install

# 啟動本機開發伺服器 (預設 Port: 3000)
npm run dev

# 專案靜態建置 (輸出至 dist/，設定 base: './' 供 GitHub Pages 部署)
npm run build

# 預覽建置成果
npm run preview
```

---

## 📁 專案架構目錄

```text
Bopomofo/
├── .github/workflows/deploy.yml   # GitHub Actions 自動部署至 GitHub Pages
├── src/
│   ├── components/
│   │   ├── BopomofoBasics/        # 1. 注音基礎大本營 (37符號發音與田字格手寫描紅)
│   │   ├── Flashcards/            # 2. 3D 翻轉單字注音字卡
│   │   ├── WordExplorer/          # 3. 主題單字探索與拼音拆解
│   │   ├── SentenceKaraoke/       # 4. 情境句子卡拉OK朗讀
│   │   ├── NewsReader/            # 5. 每日時事新聞朗讀館
│   │   ├── WordSpellingGame/      # 6. 注音拼拼樂遊戲
│   │   ├── DailyQuiz/             # 7. 每日 5 題挑戰賽
│   │   ├── DailyTracker/          # 8. 每日待辦清單、打卡日曆與每日榮耀王冠
│   │   ├── BadgesGallery/         # 9. 榮譽圖鑑 (支援 低1x/中2x/高4x 難度)
│   │   ├── Layout/                # 頂部導覽列 (Navbar) 與兩段式頁籤 (TabNav)
│   │   ├── Common/                # 通用組件 (ScrollableMenuBar, ConfettiModal 等)
│   │   └── Settings/              # 家長與系統設定 (語速、難度、題庫更新)
│   ├── data/
│   │   ├── bopomofoData.js        # 37 注音符號資料庫
│   │   ├── topicsData.js          # 100+ 筆主題單字與情境句子題庫
│   │   ├── newsData.js            # 兒童新聞範例與題庫
│   │   └── badgesData.js          # 13 大榮譽徽章與倍率定義 (低 1x, 中 2x, 高 4x)
│   ├── hooks/
│   │   ├── useLearningState.js    # 全域學習進度、打卡、每日任務與設定狀態
│   │   └── useSpeech.js           # 語音合成與逐字卡拉OK播放 Hook
│   └── utils/
│       ├── bopomofoDictionary.js  # 台灣教育部常用字注音字典 (1500+ 字)
│       ├── textToBpmf.js          # 文字自動注音標註與斷詞引擎
│       ├── speechHelper.js        # 語音合成與單向時間軸排程器
│       └── soundEffects.js        # Web Audio 音效合成器
├── vite.config.js                 # Vite 設定 (base: './')
└── package.json
```

---

## 🔒 程式碼風格與維護原則

1. **組件設計**：採用 React 18 函數式組件（Functional Components）搭配 React Hooks。
2. **樣式規範**：採用 Tailwind CSS 工具類別，維持語意化與色彩一致性。
3. **中文註解**：程式碼註解一律採用台灣繁體中文，詳細記錄核心演算法與業務邏輯。
4. **狀態持久化**：所有學習歷程（星星、成就、打卡天數、每日任務、榮耀次數）均自動持久化於瀏覽器 `localStorage`。
