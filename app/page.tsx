'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';
import {
  rollItem,
  generateConveyor,
  calculateDopamineLevel,
  getCommentary,
  getNearMissMessage,
  shouldGetGuaranteedEpic,
  getStreakBonus,
} from '@/lib/rarity';
import { soundManager } from '@/lib/sound';

import CaseDisplay from './components/CaseDisplay';
import CaseOpeningAnimation from './components/CaseOpeningAnimation';
import ItemReveal from './components/ItemReveal';
import DopamineBar from './components/DopamineBar';
import DailyStreak from './components/DailyStreak';
import NearMissIndicator from './components/NearMissIndicator';
import ItemInspector from './components/ItemInspector';
import Missions from './components/Missions';
import MissionRewardModal from './components/MissionRewardModal';
import LevelDisplay from './components/LevelDisplay';
import Leaderboard from './components/Leaderboard';
import PrestigeModal from './components/PrestigeModal';
import { MISSIONS, getMissionProgress, isMissionCompleted } from '@/lib/missions';
import { calculateCaseXP, canPrestige, getXPProgressInLevel } from '@/lib/prestige';

export default function Home() {
  const {
    currentAnimation,
    currentItem,
    conveyorItems,
    dopamineLevel,
    commentary,
    nearMissMessage,
    streak,
    totalCasesOpened,
    inventory,
    completedMissions,
    totalXP,
    prestigeLevel,
    setAnimationState,
    setCurrentItem,
    setConveyorItems,
    setDopamineLevel,
    setCommentary,
    setNearMissMessage,
    openCase,
    addToInventory,
    updateStreak,
    resetDailyCases,
    resetForNewCase,
    completeMission,
    getActiveDropBoost,
    getGuaranteedDrop,
    addXP,
    getPrestigeBonus,
  } = useStore();

  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [prestigeModalOpen, setPrestigeModalOpen] = useState(false);

  // Initialize on mount
  useEffect(() => {
    resetDailyCases();
  }, []);

  const handleOpenCase = () => {
    if (currentAnimation !== 'idle') return;

    soundManager?.playClick();

    // Reset state
    resetForNewCase();

    // Update streak and open case
    updateStreak();
    openCase();

    // Start animation
    setAnimationState('spinning');

    // Check for mission guaranteed drops
    const missionGuaranteed = getGuaranteedDrop();

    // Roll for item with all bonuses
    const streakBonus = getStreakBonus(streak);
    const missionDropBoost = getActiveDropBoost();
    const prestigeBonus = getPrestigeBonus();
    const totalBonus = streakBonus + missionDropBoost + prestigeBonus;

    const guaranteedEpic = shouldGetGuaranteedEpic(streak);
    const guaranteedRarity = missionGuaranteed || (guaranteedEpic ? 'epic' : undefined);

    const item = rollItem(totalBonus, guaranteedRarity);

    // Generate conveyor with near-miss logic
    const enableNearMiss = item.rarity === 'common' || item.rarity === 'uncommon';
    const conveyor = generateConveyor(item, enableNearMiss);

    setCurrentItem(item);
    setConveyorItems(conveyor);

    // Calculate dopamine level
    const dopamine = calculateDopamineLevel(item.rarity);
    setDopamineLevel(dopamine);

    // Generate commentary
    const message = getCommentary(item.rarity);
    setCommentary(message);

    // Near-miss message
    const nearMiss = getNearMissMessage(item.rarity);
    setNearMissMessage(nearMiss);
  };

  const handleAnimationComplete = () => {
    setAnimationState('revealing');

    // Add to inventory after reveal
    if (currentItem) {
      addToInventory(currentItem);

      // Add XP based on rarity
      const xpGained = calculateCaseXP(currentItem.rarity, streak);
      addXP(xpGained);

      // Check for completed missions
      setTimeout(() => checkMissionCompletion(), 500);

      // Check if can prestige (after level up)
      setTimeout(() => {
        const xpProgress = getXPProgressInLevel(totalXP + xpGained);
        if (canPrestige(xpProgress.currentLevel, prestigeLevel)) {
          setPrestigeModalOpen(true);
        }
      }, 1000);
    }
  };

  const checkMissionCompletion = () => {
    const stats = { totalCasesOpened, streak, inventory };

    MISSIONS.forEach((mission) => {
      if (!completedMissions.includes(mission.id) && isMissionCompleted(mission, stats)) {
        completeMission(mission.id, mission.title);
      }
    });
  };

  const handleInspect = () => {
    setInspectorOpen(true);
  };

  const handleCloseInspector = () => {
    setInspectorOpen(false);
  };

  const handleOpenAnother = () => {
    resetForNewCase();
    setInspectorOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-2">
          <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
            Life Upgrade
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl uppercase tracking-widest">
          Case Simulator
        </p>
      </header>

      {/* Daily Streak */}
      <DailyStreak />

      {/* Dopamine Bar */}
      <DopamineBar />

      {/* Missions Panel */}
      <Missions />

      {/* Mission Reward Modal */}
      <MissionRewardModal />

      {/* Level Display */}
      <LevelDisplay />

      {/* Leaderboard */}
      <Leaderboard />

      {/* Prestige Modal */}
      <PrestigeModal isOpen={prestigeModalOpen} onClose={() => setPrestigeModalOpen(false)} />

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Idle state: Show case */}
        {currentAnimation === 'idle' && (
          <div className="flex items-center justify-center min-h-[70vh]">
            <CaseDisplay onOpenCase={handleOpenCase} />
          </div>
        )}

        {/* Spinning state: Show animation */}
        {currentAnimation === 'spinning' && conveyorItems && (
          <div className="flex items-center justify-center min-h-[70vh]">
            <CaseOpeningAnimation
              items={conveyorItems}
              onComplete={handleAnimationComplete}
            />
          </div>
        )}

        {/* Revealing state: Show item */}
        {currentAnimation === 'revealing' && currentItem && (
          <ItemReveal
            item={currentItem}
            commentary={commentary}
            onInspect={handleInspect}
            onOpenAnother={handleOpenAnother}
          />
        )}
      </main>

      {/* Near-miss indicator */}
      <NearMissIndicator message={nearMissMessage} />

      {/* Item inspector modal */}
      <ItemInspector
        item={currentItem}
        isOpen={inspectorOpen}
        onClose={handleCloseInspector}
      />

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm">
        <p>
          Made with 💀 by capitalism enthusiasts •{' '}
          <button
            onClick={() => soundManager?.toggleSound()}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Toggle Sound
          </button>
        </p>
        <p className="mt-2 text-xs">
          Affiliate links help support this project. Your life upgrades fund our server costs.
        </p>
      </footer>
    </div>
  );
}
