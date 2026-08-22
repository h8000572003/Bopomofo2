import { useState, useEffect } from 'react';
import { getBadgesForDifficulty } from '../data/badgesData';
import { soundEffects } from '../utils/soundEffects';

const STORAGE_KEY = 'BOPOMOFO_ADVENTURE_STATE_V4';

export const getTodayString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getInitialDailyQuests = () => ({
  date: getTodayString(),
  drawingCount: 0,
  flashcardCount: 0,
  sentenceCount: 0,
  quizCount: 0,
  isGloryClaimed: false
});

const defaultState = {
  stars: 0,
  completedWords: [],
  completedSentences: [],
  completedNews: [],
  unlockedBadges: [],
  spellingWinCount: 0,
  quizCount: 0,
  drawingPracticeCount: 0,
  flashcardMastered: [],
  checkInDates: [],
  streakCount: 0,
  lastCheckInDate: null,
  gloryCount: 0,
  gloryDates: [],
  dailyQuests: getInitialDailyQuests(),
  customTopics: [],
  newsArticles: [],
  settings: {
    speechRate: 0.85,
    isMuted: false,
    theme: 'sunny',
    badgeDifficulty: 'easy', // 'easy' (1x) | 'medium' (2x) | 'hard' (4x)
    bopomofoScale: 'large', // 'normal' (標準) | 'large' (大) | 'xlarge' (特大)
  }
};

export function useLearningState() {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const today = getTodayString();
        const quests = (parsed.dailyQuests && parsed.dailyQuests.date === today)
          ? parsed.dailyQuests
          : getInitialDailyQuests();

        return {
          ...defaultState,
          ...parsed,
          settings: { ...defaultState.settings, ...parsed.settings },
          dailyQuests: quests,
          gloryDates: parsed.gloryDates || []
        };
      }
    } catch (e) {
      console.warn('Failed to load learning state', e);
    }
    return defaultState;
  });

  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState(null);
  const [isGloryModalOpen, setIsGloryModalOpen] = useState(false);

  // 儲存至 LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save learning state', e);
    }
  }, [state]);

  // 設定音效靜音
  useEffect(() => {
    soundEffects.setMuted(state.settings.isMuted);
  }, [state.settings.isMuted]);

  // 確保今日任務資料結構存在
  const ensureTodayQuests = (currentState) => {
    const today = getTodayString();
    if (!currentState.dailyQuests || currentState.dailyQuests.date !== today) {
      return {
        ...currentState,
        dailyQuests: getInitialDailyQuests()
      };
    }
    return currentState;
  };

  // 檢查是否解鎖新徽章 (動態依難度倍率計算)
  const checkBadges = (updatedState) => {
    const newlyUnlocked = [];
    const currentUnlocked = updatedState.unlockedBadges || [];
    const badges = getBadgesForDifficulty(updatedState.settings?.badgeDifficulty || 'easy');

    badges.forEach(badge => {
      if (currentUnlocked.includes(badge.id)) return;

      let isConditionMet = false;
      if (badge.conditionType === 'word_count') {
        isConditionMet = (updatedState.completedWords.length >= badge.target);
      } else if (badge.conditionType === 'sentence_count') {
        isConditionMet = (updatedState.completedSentences.length + (updatedState.completedNews?.length || 0) >= badge.target);
      } else if (badge.conditionType === 'stars_count') {
        isConditionMet = (updatedState.stars >= badge.target);
      } else if (badge.conditionType === 'spelling_count') {
        isConditionMet = (updatedState.spellingWinCount >= badge.target);
      } else if (badge.conditionType === 'quiz_count') {
        isConditionMet = (updatedState.quizCount >= badge.target);
      } else if (badge.conditionType === 'drawing_count') {
        isConditionMet = ((updatedState.drawingPracticeCount || 0) >= badge.target);
      } else if (badge.conditionType === 'flashcard_count') {
        isConditionMet = ((updatedState.flashcardMastered || []).length >= badge.target);
      } else if (badge.conditionType === 'streak_count') {
        isConditionMet = ((updatedState.streakCount || 0) >= badge.target);
      }

      if (isConditionMet) {
        newlyUnlocked.push(badge.id);
        setNewlyUnlockedBadge(badge);
      }
    });

    if (newlyUnlocked.length > 0) {
      return {
        ...updatedState,
        unlockedBadges: [...currentUnlocked, ...newlyUnlocked]
      };
    }
    return updatedState;
  };

  // 深模組：套用一次進度事件——computeFn 決定「狀態怎麼改、加幾顆星、要不要播音效」，
  // 這裡統一處理「補每日任務結構→套用結果→視需要累加每日任務計數→檢查徽章→自動打卡」共用尾段。
  // computeFn(ensured) => { patch, stars = 0, sound = null }
  const recordEvent = (prev, computeFn, { questField = null } = {}) => {
    const ensured = ensureTodayQuests(prev);
    const { patch, stars = 0, sound = null } = computeFn(ensured);

    if (sound) sound();

    const updatedQuests = questField
      ? { ...ensured.dailyQuests, [questField]: (ensured.dailyQuests[questField] || 0) + 1 }
      : ensured.dailyQuests;

    const updated = {
      ...ensured,
      ...patch,
      stars: ensured.stars + stars,
      dailyQuests: updatedQuests
    };

    return checkBadges(triggerAutoCheckIn(updated));
  };

  // recordEvent 之上的加層：id 清單去重＋只在第一次完成時發獎勵（見架構檢視候選 1）
  // sound 可以是 (isNew) => void，讓呼叫端自行決定音效是否也要只在第一次播放
  const recordCompletion = (prev, listKey, id, { stars = 0, questField = null, sound = null } = {}) => {
    return recordEvent(prev, (ensured) => {
      const list = ensured[listKey] || [];
      const isNew = !list.includes(id);
      return {
        patch: { [listKey]: isNew ? [...list, id] : list },
        stars: isNew ? stars : 0,
        sound: sound ? () => sound(isNew) : null
      };
    }, { questField });
  };

  // 每日打卡處理
  const recordCheckIn = () => {
    const today = getTodayString();
    setState(prev => {
      if (prev.checkInDates?.includes(today)) {
        return prev;
      }

      const lastDate = prev.lastCheckInDate;
      let newStreak = 1;
      if (lastDate) {
        const last = new Date(lastDate);
        const curr = new Date(today);
        const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          newStreak = (prev.streakCount || 0) + 1;
        } else if (diffDays === 0) {
          newStreak = prev.streakCount || 1;
        }
      }

      soundEffects.playStarWin();
      const updated = {
        ...prev,
        stars: prev.stars + 2,
        checkInDates: [...(prev.checkInDates || []), today],
        streakCount: newStreak,
        lastCheckInDate: today
      };
      return checkBadges(updated);
    });
  };

  // 自動打卡輔助
  const triggerAutoCheckIn = (currentState) => {
    const today = getTodayString();
    if (!currentState.checkInDates?.includes(today)) {
      const lastDate = currentState.lastCheckInDate;
      let newStreak = 1;
      if (lastDate) {
        const last = new Date(lastDate);
        const curr = new Date(today);
        const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          newStreak = (currentState.streakCount || 0) + 1;
        } else if (diffDays === 0) {
          newStreak = currentState.streakCount || 1;
        }
      }

      return {
        ...currentState,
        stars: currentState.stars + 2,
        checkInDates: [...(currentState.checkInDates || []), today],
        streakCount: newStreak,
        lastCheckInDate: today
      };
    }
    return currentState;
  };

  // 🌟 領取每日榮耀大獎勵 (+10⭐, 蓋金冠印章)
  const claimDailyGlory = () => {
    const today = getTodayString();
    setState(prev => {
      const ensured = ensureTodayQuests(prev);
      if (ensured.dailyQuests.isGloryClaimed) return prev;

      soundEffects.playFanfare();
      const updatedQuests = { ...ensured.dailyQuests, isGloryClaimed: true };
      const updatedGloryDates = ensured.gloryDates?.includes(today)
        ? ensured.gloryDates
        : [...(ensured.gloryDates || []), today];

      const updated = {
        ...ensured,
        stars: ensured.stars + 10,
        gloryCount: (ensured.gloryCount || 0) + 1,
        gloryDates: updatedGloryDates,
        dailyQuests: updatedQuests
      };

      setIsGloryModalOpen(true);
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 記錄手寫描紅練習
  const recordDrawingPractice = (symbol) => {
    setState(prev => recordEvent(prev, (ensured) => ({
      patch: { drawingPracticeCount: (ensured.drawingPracticeCount || 0) + 1 },
      stars: 1,
      sound: () => soundEffects.playCorrect()
    }), { questField: 'drawingCount' }));
  };

  // 標記字卡已記住 / 待複習
  const toggleFlashcardMastered = (wordId) => {
    setState(prev => recordEvent(prev, (ensured) => {
      const list = ensured.flashcardMastered || [];
      const isMastered = list.includes(wordId);
      return {
        patch: { flashcardMastered: isMastered ? list.filter(id => id !== wordId) : [...list, wordId] },
        stars: isMastered ? 0 : 1,
        sound: () => soundEffects.playBubble()
      };
    }, { questField: 'flashcardCount' }));
  };

  // 標記單字完成（只在第一次完成時發放星星與音效）
  const markWordCompleted = (wordId, earnStars = 1) => {
    setState(prev => recordCompletion(prev, 'completedWords', wordId, {
      stars: earnStars,
      sound: (isNew) => { if (isNew) soundEffects.playStarWin(); }
    }));
  };

  // 標記句子朗讀完成（只在第一次完成時發放星星；音效維持每次朗讀都播放的既有行為）
  const markSentenceCompleted = (sentenceId, earnedStars = 2) => {
    setState(prev => recordCompletion(prev, 'completedSentences', sentenceId, {
      stars: earnedStars,
      questField: 'sentenceCount',
      sound: () => soundEffects.playStarWin()
    }));
  };

  // 標記新聞朗讀完成（只在第一次完成時發放星星；音效維持每次朗讀都播放的既有行為）
  const markNewsCompleted = (newsId, earnedStars = 2) => {
    setState(prev => recordCompletion(prev, 'completedNews', newsId, {
      stars: earnedStars,
      questField: 'sentenceCount',
      sound: () => soundEffects.playStarWin()
    }));
  };

  // 記錄拼字遊戲勝利
  const recordSpellingWin = (earnedStars = 2) => {
    setState(prev => recordEvent(prev, (ensured) => ({
      patch: { spellingWinCount: ensured.spellingWinCount + 1 },
      stars: earnedStars
    })));
  };

  // 記錄每日測驗完成
  const recordQuizCompleted = (earnedStars = 3) => {
    setState(prev => recordEvent(prev, (ensured) => ({
      patch: { quizCount: ensured.quizCount + 1 },
      stars: earnedStars
    }), { questField: 'quizCount' }));
  };

  // 新增單一新聞
  const addNewsItem = (newsItem) => {
    setState(prev => ({
      ...prev,
      newsArticles: [newsItem, ...(prev.newsArticles || [])]
    }));
  };

  // 批次新增即時新聞
  const batchAddNews = (newsItems) => {
    setState(prev => {
      const existingIds = new Set((prev.newsArticles || []).map(n => n.id));
      const freshOnly = newsItems.filter(n => !existingIds.has(n.id));
      return {
        ...prev,
        newsArticles: [...freshOnly, ...(prev.newsArticles || [])]
      };
    });
  };

  // 匯入自訂/線上主題庫
  const importCustomTopics = (newTopics) => {
    setState(prev => ({
      ...prev,
      customTopics: newTopics
    }));
  };

  // 增加星星
  const addStars = (count = 1) => {
    setState(prev => recordEvent(prev, () => ({
      patch: {},
      stars: count,
      sound: () => soundEffects.playStarWin()
    })));
  };

  // 更新設定
  const updateSettings = (newSettings) => {
    setState(prev => {
      const updated = {
        ...prev,
        settings: { ...prev.settings, ...newSettings }
      };
      return checkBadges(updated);
    });
  };

  // 新增自訂主題/單字
  const addCustomWord = (newWord) => {
    setState(prev => {
      const existingCustom = prev.customTopics || [];
      const topicIndex = existingCustom.findIndex(t => t.id === 'custom');
      let updatedCustom;
      if (topicIndex >= 0) {
        const topic = existingCustom[topicIndex];
        const updatedWords = [...topic.words, newWord];
        updatedCustom = [
          ...existingCustom.slice(0, topicIndex),
          { ...topic, words: updatedWords },
          ...existingCustom.slice(topicIndex + 1)
        ];
      } else {
        updatedCustom = [
          ...existingCustom,
          {
            id: 'custom',
            name: '✨ 我的自訂題庫',
            icon: '🎨',
            badgeIcon: '⭐',
            color: 'from-pink-400 to-purple-500',
            bgLight: 'bg-pink-50',
            borderColor: 'border-pink-300',
            tagColor: 'bg-pink-100 text-pink-800',
            description: '家長或小朋友親手新增的專屬詞句！',
            words: [newWord],
            sentences: []
          }
        ];
      }
      return { ...prev, customTopics: updatedCustom };
    });
  };

  // 新增自訂句子
  const addCustomSentence = (newSentence) => {
    setState(prev => {
      const existingCustom = prev.customTopics || [];
      const topicIndex = existingCustom.findIndex(t => t.id === 'custom');
      let updatedCustom;
      if (topicIndex >= 0) {
        const topic = existingCustom[topicIndex];
        const updatedSentences = [...topic.sentences, newSentence];
        updatedCustom = [
          ...existingCustom.slice(0, topicIndex),
          { ...topic, sentences: updatedSentences },
          ...existingCustom.slice(topicIndex + 1)
        ];
      } else {
        updatedCustom = [
          ...existingCustom,
          {
            id: 'custom',
            name: '✨ 我的自訂題庫',
            icon: '🎨',
            badgeIcon: '⭐',
            color: 'from-pink-400 to-purple-500',
            bgLight: 'bg-pink-50',
            borderColor: 'border-pink-300',
            tagColor: 'bg-pink-100 text-pink-800',
            description: '家長或小朋友親手新增的專屬詞句！',
            words: [],
            sentences: [newSentence]
          }
        ];
      }
      return { ...prev, customTopics: updatedCustom };
    });
  };

  // 重置進度
  const resetProgress = () => {
    setState(defaultState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const closeBadgeModal = () => {
    setNewlyUnlockedBadge(null);
  };

  const closeGloryModal = () => {
    setIsGloryModalOpen(false);
  };

  return {
    state,
    addStars,
    markWordCompleted,
    markSentenceCompleted,
    markNewsCompleted,
    addNewsItem,
    batchAddNews,
    importCustomTopics,
    recordSpellingWin,
    recordQuizCompleted,
    recordCheckIn,
    recordDrawingPractice,
    toggleFlashcardMastered,
    claimDailyGlory,
    updateSettings,
    addCustomWord,
    addCustomSentence,
    resetProgress,
    newlyUnlockedBadge,
    closeBadgeModal,
    isGloryModalOpen,
    closeGloryModal
  };
}
