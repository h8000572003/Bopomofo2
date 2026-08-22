import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import TabNav from './components/Layout/TabNav';
import BopomofoBasicsView from './components/BopomofoBasics/BopomofoBasicsView';
import FlashcardDrillView from './components/Flashcards/FlashcardDrillView';
import WordExplorerView from './components/WordExplorer/WordExplorerView';
import SentenceKaraokeView from './components/SentenceKaraoke/SentenceKaraokeView';
import NewsReaderView from './components/NewsReader/NewsReaderView';
import WordSpellingGameView from './components/WordSpellingGame/WordSpellingGameView';
import DailyQuizView from './components/DailyQuiz/DailyQuizView';
import DailyTrackerView from './components/DailyTracker/DailyTrackerView';
import BadgesGalleryView from './components/BadgesGallery/BadgesGalleryView';
import ConfettiModal from './components/Common/ConfettiModal';
import DailyGloryModal from './components/DailyTracker/DailyGloryModal';
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
  } = useLearningState();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-gray-800 font-bubble">
      {/* 頂部導覽列 */}
      <Navbar
        stars={state.stars}
        badgeCount={state.unlockedBadges.length}
        isMuted={state.settings.isMuted}
        dailyQuests={state.dailyQuests}
        gloryCount={state.gloryCount}
        onToggleMute={() => updateSettings({ isMuted: !state.settings.isMuted })}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenDailyTracker={() => setActiveTab('daily_tracker')}
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
            bopomofoScale={state.settings.bopomofoScale}
          />
        )}

        {/* 3. 單字探索 */}
        {activeTab === 'word_explorer' && (
          <WordExplorerView
            completedWords={state.completedWords}
            customTopics={state.customTopics}
            onMarkLearned={markWordCompleted}
            speechRate={state.settings.speechRate}
            bopomofoScale={state.settings.bopomofoScale}
          />
        )}

        {/* 4. 句子朗讀卡拉OK */}
        {activeTab === 'sentence_karaoke' && (
          <SentenceKaraokeView
            completedSentences={state.completedSentences}
            customTopics={state.customTopics}
            onSentenceLearned={markSentenceCompleted}
            speechRate={state.settings.speechRate}
            bopomofoScale={state.settings.bopomofoScale}
          />
        )}

        {/* 5. 📰 每日兒童新聞朗讀館 */}
        {activeTab === 'news_reader' && (
          <NewsReaderView
            newsArticles={state.newsArticles}
            completedNews={state.completedNews}
            onNewsCompleted={markNewsCompleted}
            onAddNewsItem={addNewsItem}
            onBatchAddNews={batchAddNews}
            speechRate={state.settings.speechRate}
            bopomofoScale={state.settings.bopomofoScale}
          />
        )}

        {/* 6. 注音拼拼樂 */}
        {activeTab === 'spelling_game' && (
          <WordSpellingGameView
            onGameWin={recordSpellingWin}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 7. 每日挑戰 */}
        {activeTab === 'daily_quiz' && (
          <DailyQuizView
            onQuizCompleted={recordQuizCompleted}
            speechRate={state.settings.speechRate}
          />
        )}

        {/* 8. 每日打卡日曆 & 待辦任務與每日榮耀 */}
        {activeTab === 'daily_tracker' && (
          <DailyTrackerView
            checkInDates={state.checkInDates}
            streakCount={state.streakCount}
            stars={state.stars}
            completedWords={state.completedWords}
            completedSentences={state.completedSentences}
            drawingPracticeCount={state.drawingPracticeCount}
            flashcardMastered={state.flashcardMastered}
            gloryCount={state.gloryCount}
            gloryDates={state.gloryDates}
            dailyQuests={state.dailyQuests}
            onCheckInToday={recordCheckIn}
            onNavigate={(tab) => setActiveTab(tab)}
            onClaimGlory={claimDailyGlory}
          />
        )}

        {/* 9. 榮譽圖鑑 */}
        {activeTab === 'badges' && (
          <BadgesGalleryView
            unlockedBadges={state.unlockedBadges}
            stars={state.stars}
            completedWords={state.completedWords}
            completedSentences={state.completedSentences}
            spellingWinCount={state.spellingWinCount}
            quizCount={state.quizCount}
            difficulty={state.settings.badgeDifficulty || 'easy'}
          />
        )}
      </main>

      {/* 頁尾版權與打氣話語 */}
      <footer className="py-4 text-center text-xs text-gray-400 border-t border-amber-100/60">
        <p>🎒 注音冒險島 • 為孩子量身打造的注音、時事新聞與句子朗讀學習遊樂場 ✨</p>
      </footer>

      {/* 徽章解鎖慶祝彈窗 */}
      <ConfettiModal
        isOpen={!!newlyUnlockedBadge}
        onClose={closeBadgeModal}
        badge={newlyUnlockedBadge}
        starsEarned={2}
      />

      {/* 👑 每日榮耀寶箱開箱彈窗 */}
      <DailyGloryModal
        isOpen={isGloryModalOpen}
        onClose={closeGloryModal}
        gloryCount={state.gloryCount}
      />

      {/* 家長與系統設定彈窗 */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={state.settings}
        customTopics={state.customTopics}
        onUpdateSettings={updateSettings}
        onAddCustomWord={addCustomWord}
        onAddCustomSentence={addCustomSentence}
        onImportCustomTopics={importCustomTopics}
        onResetProgress={resetProgress}
      />
    </div>
  );
}
