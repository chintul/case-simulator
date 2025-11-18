'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import {
  generateLeaderboard,
  getPrestigeRank,
  getXPProgressInLevel,
  LeaderboardEntry,
} from '@/lib/prestige';

export default function Leaderboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { username, totalXP, prestigeLevel, totalCasesOpened } = useStore();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [playerRank, setPlayerRank] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Generate leaderboard when opening
      const xpProgress = getXPProgressInLevel(totalXP);
      const board = generateLeaderboard({
        username,
        level: xpProgress.currentLevel,
        prestigeLevel,
        totalXP,
        totalCasesOpened,
      });

      setLeaderboard(board);

      // Find player rank
      const playerEntry = board.find((entry) => entry.username === username);
      if (playerEntry) {
        setPlayerRank(playerEntry.rank);
      }
    }
  }, [isOpen, username, totalXP, prestigeLevel, totalCasesOpened]);

  return (
    <div className="fixed bottom-8 right-8 z-30">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? '✕' : '🏆'}
      </motion.button>

      {/* Leaderboard Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-gray-900/95 backdrop-blur-xl border-4 border-yellow-400 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0, opacity: 0, originX: 1, originY: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-yellow-400/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
              <h2 className="text-3xl font-black uppercase text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-1">
                🏆 Leaderboard
              </h2>
              <div className="text-sm text-gray-400">
                Your Rank: <span className="text-yellow-400 font-bold">#{playerRank}</span>
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {leaderboard.map((entry) => (
                <LeaderboardCard
                  key={entry.rank}
                  entry={entry}
                  isPlayer={entry.username === username}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface LeaderboardCardProps {
  entry: LeaderboardEntry;
  isPlayer: boolean;
}

function LeaderboardCard({ entry, isPlayer }: LeaderboardCardProps) {
  const prestigeRank = getPrestigeRank(entry.prestigeLevel);

  // Medal colors for top 3
  const getMedalColor = (rank: number) => {
    if (rank === 1) return '#FFD700'; // Gold
    if (rank === 2) return '#C0C0C0'; // Silver
    if (rank === 3) return '#CD7F32'; // Bronze
    return '#4a5568'; // Gray
  };

  const medalColor = getMedalColor(entry.rank);

  return (
    <motion.div
      className={`relative p-3 rounded-xl border-2 ${
        isPlayer
          ? 'bg-cyan-500/10 border-cyan-400'
          : 'bg-gray-800/50 border-gray-700'
      }`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: entry.rank * 0.01 }}
      whileHover={{ scale: 1.02 }}
      style={{
        boxShadow: isPlayer ? '0 0 20px rgba(0, 255, 242, 0.3)' : 'none',
      }}
    >
      {/* Rank Badge */}
      <div
        className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-black text-sm border-2"
        style={{
          backgroundColor: medalColor,
          borderColor: medalColor,
          color: '#000',
        }}
      >
        {entry.rank}
      </div>

      <div className="ml-6">
        {/* Username & Prestige */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            {entry.prestigeLevel > 0 && (
              <span className="text-lg">{prestigeRank.badge}</span>
            )}
            <span
              className={`font-bold ${isPlayer ? 'text-cyan-400' : 'text-white'}`}
              style={{
                color: entry.prestigeLevel > 0 ? prestigeRank.color : undefined,
              }}
            >
              {entry.username}
            </span>
          </div>
          <span className="text-yellow-400 font-bold text-sm">Lv{entry.level}</span>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-xs text-gray-400">
          <span>{entry.totalXP.toLocaleString()} XP</span>
          <span>{entry.totalCasesOpened.toLocaleString()} cases</span>
        </div>

        {/* Prestige Level */}
        {entry.prestigeLevel > 0 && (
          <div
            className="text-[10px] font-bold uppercase mt-1"
            style={{ color: prestigeRank.color }}
          >
            {prestigeRank.name} (P{entry.prestigeLevel})
          </div>
        )}
      </div>
    </motion.div>
  );
}
