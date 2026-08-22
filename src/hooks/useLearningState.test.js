import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLearningState } from './useLearningState';

describe('useLearningState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('重複朗讀同一個句子完成，星星只在第一次發放', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.markSentenceCompleted('sentence-1', 2);
    });
    const starsAfterFirstCompletion = result.current.state.stars;

    act(() => {
      result.current.markSentenceCompleted('sentence-1', 2);
    });
    expect(result.current.state.stars).toBe(starsAfterFirstCompletion);
  });

  it('重複朗讀同一則新聞完成，星星只在第一次發放', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.markNewsCompleted('news-1', 2);
    });
    const starsAfterFirstCompletion = result.current.state.stars;

    act(() => {
      result.current.markNewsCompleted('news-1', 2);
    });
    expect(result.current.state.stars).toBe(starsAfterFirstCompletion);
  });

  it('重複標記同一個單字完成，星星只在第一次發放', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.markWordCompleted('word-1', 1);
    });
    expect(result.current.state.completedWords).toContain('word-1');
    const starsAfterFirstCompletion = result.current.state.stars;

    act(() => {
      result.current.markWordCompleted('word-1', 1);
    });
    expect(result.current.state.stars).toBe(starsAfterFirstCompletion);
  });

  it('字卡標記為已記住會加 1 顆星，取消標記不會扣星星', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.toggleFlashcardMastered('card-1');
    });
    expect(result.current.state.flashcardMastered).toContain('card-1');
    const starsAfterMastered = result.current.state.stars;

    act(() => {
      result.current.toggleFlashcardMastered('card-1');
    });
    expect(result.current.state.flashcardMastered).not.toContain('card-1');
    expect(result.current.state.stars).toBe(starsAfterMastered);
  });

  it('每次拼字遊戲獲勝都會累加星星（可重複發放）', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.recordSpellingWin(2);
    });
    const starsAfterFirstWin = result.current.state.stars;

    act(() => {
      result.current.recordSpellingWin(2);
    });
    expect(result.current.state.stars).toBe(starsAfterFirstWin + 2);
    expect(result.current.state.spellingWinCount).toBe(2);
  });

  it('每次完成每日測驗都會累加星星（可重複發放）', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.recordQuizCompleted(3);
    });
    const starsAfterFirstQuiz = result.current.state.stars;

    act(() => {
      result.current.recordQuizCompleted(3);
    });
    expect(result.current.state.stars).toBe(starsAfterFirstQuiz + 3);
    expect(result.current.state.quizCount).toBe(2);
  });

  it('每次手寫描紅練習都會累加星星（可重複發放）', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.recordDrawingPractice('ㄅ');
    });
    const starsAfterFirstPractice = result.current.state.stars;

    act(() => {
      result.current.recordDrawingPractice('ㄆ');
    });
    expect(result.current.state.stars).toBe(starsAfterFirstPractice + 1);
    expect(result.current.state.drawingPracticeCount).toBe(2);
  });

  it('addStars 直接依指定數量加星星', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.addStars(1); // 消耗當日自動打卡獎勵，隔離基準值
    });
    const baseline = result.current.state.stars;

    act(() => {
      result.current.addStars(5);
    });
    expect(result.current.state.stars).toBe(baseline + 5);
  });

  it('同一天重複領取每日榮耀，只會發放一次獎勵', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.claimDailyGlory();
    });
    expect(result.current.state.dailyQuests.isGloryClaimed).toBe(true);
    const starsAfterFirstClaim = result.current.state.stars;

    act(() => {
      result.current.claimDailyGlory();
    });
    expect(result.current.state.stars).toBe(starsAfterFirstClaim);
  });

  it('同一天重複打卡，只會發放一次獎勵', () => {
    const { result } = renderHook(() => useLearningState());

    act(() => {
      result.current.recordCheckIn();
    });
    expect(result.current.state.checkInDates.length).toBe(1);
    const starsAfterFirstCheckIn = result.current.state.stars;

    act(() => {
      result.current.recordCheckIn();
    });
    expect(result.current.state.checkInDates.length).toBe(1);
    expect(result.current.state.stars).toBe(starsAfterFirstCheckIn);
  });
});
