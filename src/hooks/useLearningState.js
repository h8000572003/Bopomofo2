import { useState, useEffect } from 'react';
import { BADGES } from '../data/badgesData';
import { soundEffects } from '../utils/soundEffects';

const STORAGE_KEY = 'BOPOMOFO_ADVENTURE_STATE_V2';

const getTodayString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const defaultState = {
  stars: 0,
  completedWords: [],
  completedSentences: [],
  unlockedBadges: [],
  spellingWinCount: 0,
  quizCount: 0,
  drawingPracticeCount: 0,
  flashcardMastered: [],
  checkInDates: [],
  streakCount: 0,
  lastCheckInDate: null,
  customTopics: [],
  settings: {
    speechRate: 0.85,
    isMuted: false,
    theme: 'sunny',
  }
};

export function useLearningState() {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load learning state', e);
    }
    return defaultState;
  });

  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState(null);

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

  // 檢查是否解鎖新徽章
  const checkBadges = (updatedState) => {
    const newlyUnlocked = [];
    const currentUnlocked = updatedState.unlockedBadges || [];

    BADGES.forEach(badge => {
      if (currentUnlocked.includes(badge.id)) return;

      let isConditionMet = false;
      if (badge.conditionType === 'word_count') {
        isConditionMet = (updatedState.completedWords.length >= badge.target);
      } else if (badge.conditionType === 'sentence_count') {
        isConditionMet = (updatedState.completedSentences.length >= badge.target);
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

  // 每日打卡處理
  const recordCheckIn = () => {
    const today = getTodayString();
    setState(prev => {
      if (prev.checkInDates?.includes(today)) {
        return prev; // 今日已打卡
      }

      // 計算連續天數 Streak
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

  // 自動在完成練習時檢查打卡
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

  // 記錄手寫描紅練習
  const recordDrawingPractice = (symbol) => {
    setState(prev => {
      soundEffects.playCorrect();
      const updated = {
        ...prev,
        stars: prev.stars + 1,
        drawingPracticeCount: (prev.drawingPracticeCount || 0) + 1
      };
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 標記字卡已記住 / 待複習
  const toggleFlashcardMastered = (wordId) => {
    setState(prev => {
      soundEffects.playBubble();
      const list = prev.flashcardMastered || [];
      const isMastered = list.includes(wordId);
      const updatedList = isMastered ? list.filter(id => id !== wordId) : [...list, wordId];
      const newStars = !isMastered ? prev.stars + 1 : prev.stars;
      const updated = {
        ...prev,
        stars: newStars,
        flashcardMastered: updatedList
      };
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 增加星星
  const addStars = (count = 1) => {
    soundEffects.playStarWin();
    setState(prev => {
      const updated = { ...prev, stars: prev.stars + count };
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 標記單字完成
  const markWordCompleted = (wordId, earnStars = 1) => {
    setState(prev => {
      const isNew = !prev.completedWords.includes(wordId);
      const newCompleted = isNew ? [...prev.completedWords, wordId] : prev.completedWords;
      const newStars = isNew ? prev.stars + earnStars : prev.stars;
      if (isNew) soundEffects.playStarWin();
      const updated = {
        ...prev,
        completedWords: newCompleted,
        stars: newStars
      };
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 標記句子朗讀完成
  const markSentenceCompleted = (sentenceId, earnedStars = 2) => {
    setState(prev => {
      const isNew = !prev.completedSentences.includes(sentenceId);
      const newCompleted = isNew ? [...prev.completedSentences, sentenceId] : prev.completedSentences;
      const newStars = prev.stars + earnedStars;
      soundEffects.playStarWin();
      const updated = {
        ...prev,
        completedSentences: newCompleted,
        stars: newStars
      };
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 記錄拼字遊戲勝利
  const recordSpellingWin = (earnedStars = 2) => {
    setState(prev => {
      const updated = {
        ...prev,
        stars: prev.stars + earnedStars,
        spellingWinCount: prev.spellingWinCount + 1
      };
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 記錄每日測驗完成
  const recordQuizCompleted = (earnedStars = 3) => {
    setState(prev => {
      const updated = {
        ...prev,
        stars: prev.stars + earnedStars,
        quizCount: prev.quizCount + 1
      };
      return checkBadges(triggerAutoCheckIn(updated));
    });
  };

  // 更新設定
  const updateSettings = (newSettings) => {
    setState(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
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

  return {
    state,
    addStars,
    markWordCompleted,
    markSentenceCompleted,
    recordSpellingWin,
    recordQuizCompleted,
    recordCheckIn,
    recordDrawingPractice,
    toggleFlashcardMastered,
    updateSettings,
    addCustomWord,
    addCustomSentence,
    resetProgress,
    newlyUnlockedBadge,
    closeBadgeModal
  };
}
