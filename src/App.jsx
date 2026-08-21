import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import TabNav from './components/Layout/TabNav';
import BopomofoBasicsView from './components/BopomofoBasics/BopomofoBasicsView';
import FlashcardDrillView from './components/Flashcards/FlashcardDrillView';
import WordExplorerView from './components/WordExplorer/WordExplorerView';
import SentenceKaraokeView from './components/SentenceKaraoke/SentenceKaraokeView';
import WordSpellingGameView from './components/WordSpellingGame/WordSpellingGameView';
import DailyQuizView from './components/DailyQuiz/DailyQuizView';
import DailyTrackerView from './components/DailyTracker/DailyTrackerView';
import BadgesGalleryView from './components/BadgesGallery/BadgesGalleryView';
import ConfettiModal from './components/Common/ConfettiModal';
import SettingsModal from './components/Settings/SettingsModal';
import { useLearningState } from './hooks/useLearningState';

export default function App() {
  const [activeTab, setActiveTab] = useState('basics');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const {
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
  } = useLearningState();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-gray-800 font-bubble">
      {/* 頂部導覽列 */}
      <Navbar
        stars={state.stars}
        badgeCount={state.unlockedBadges.length}
        isMuted={state.settings.isMuted}
        onToggleMute={() => updateSettings({ isMuted: !state.settings.isMuted })}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* 模組切換頁籤列 */}
      <TabNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* 主內容視圖區 */}
      <main className="flex-1 pb-16">
        {/* 1. 注音基礎大本營 */}
        {activeTab === 'basics' && (
          <BopomofoBasicsView
            onRecordDrawing={recordDrawingPractice}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 2. 3D 翻轉字卡練習 */}
        {activeTab === 'flashcards' && (
          <FlashcardDrillView
            masteredWords={state.flashcardMastered}
            onToggleMastered={toggleFlashcardMastered}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 3. 單字探索 */}
        {activeTab === 'word_explorer' && (
          <WordExplorerView
            completedWords={state.completedWords}
            customTopics={state.customTopics}
            onMarkLearned={markWordCompleted}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 4. 句子朗讀卡拉OK */}
        {activeTab === 'sentence_karaoke' && (
          <SentenceKaraokeView
            completedSentences={state.completedSentences}
            customTopics={state.customTopics}
            onSentenceLearned={markSentenceCompleted}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 5. 注音拼拼樂 */}
        {activeTab === 'spelling_game' && (
          <WordSpellingGameView
            onGameWin={recordSpellingWin}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 6. 每日挑戰 */}
        {activeTab === 'daily_quiz' && (
          <DailyQuizView
            onQuizCompleted={recordQuizCompleted}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 7. 每日打卡日曆 & Streak */}
        {activeTab === 'daily_tracker' && (
          <DailyTrackerView
            checkInDates={state.checkInDates}
            streakCount={state.streakCount}
            stars={state.stars}
            completedWords={state.completedWords}
            completedSentences={state.completedSentences}
            drawingPracticeCount={state.drawingPracticeCount}
            flashcardMastered={state.flashcardMastered}
            onCheckInToday={recordCheckIn}
          />
        )}

        {/* 8. 榮譽圖鑑 */}
        {activeTab === 'badges' && (
          <BadgesGalleryView
            unlockedBadges={state.unlockedBadges}
            stars={state.stars}
            completedWords={state.completedWords}
            completedSentences={state.completedSentences}
            spellingWinCount={state.spellingWinCount}
            quizCount={state.quizCount}
          />
        )}
      </main>

      {/* 頁尾版權與打氣話語 */}
      <footer className="py-4 text-center text-xs text-gray-400 border-t border-amber-100/60">
        <p>🎒 注音冒險島 • 為孩子量身打造的注音、字卡與句子朗讀學習遊樂場 ✨</p>
      </footer>

      {/* 徽章解鎖慶祝彈窗 */}
      <ConfettiModal
        isOpen={!!newlyUnlockedBadge}
        onClose={closeBadgeModal}
        badge={newlyUnlockedBadge}
        starsEarned={2}
      />

      {/* 家長與系統設定彈窗 */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={state.settings}
        onUpdateSettings={updateSettings}
        onAddCustomWord={addCustomWord}
        onAddCustomSentence={addCustomSentence}
        onResetProgress={resetProgress}
      />
    </div>
  );
}
