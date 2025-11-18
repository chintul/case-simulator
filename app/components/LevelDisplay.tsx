'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import {
  getXPProgressInLevel,
  getPrestigeRank,
  getPlayerTitle,
  getPlayerColor,
  canPrestige,
  MAX_LEVEL,
} from '@/lib/prestige';

export default function LevelDisplay() {
  const { totalXP, prestigeLevel, username, setUsername } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);

  const xpProgress = getXPProgressInLevel(totalXP);
  const prestigeRank = getPrestigeRank(prestigeLevel);
  const playerTitle = getPlayerTitle(xpProgress.currentLevel, prestigeLevel);
  const playerColor = getPlayerColor(prestigeLevel);
  const canDoPrestige = canPrestige(xpProgress.currentLevel, prestigeLevel);

  const handleUsernameSubmit = () => {
    if (tempUsername.trim()) {
      setUsername(tempUsername.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="fixed top-8 right-8 z-30 hidden md:block">
      <motion.div
        className="bg-gray-900/90 backdrop-blur-xl border-2 rounded-2xl p-4 min-w-[280px]"
        style={{
          borderColor: playerColor,
          boxShadow: `0 0 20px ${playerColor}40`,
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Username */}
        <div className="mb-3">
          {isEditing ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={tempUsername}
                onChange={(e) => setTempUsername(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUsernameSubmit()}
                onBlur={handleUsernameSubmit}
                className="flex-1 bg-gray-800 text-white px-2 py-1 rounded border border-cyan-400 text-sm focus:outline-none"
                maxLength={20}
                autoFocus
              />
            </div>
          ) : (
            <div
              className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsEditing(true);
                setTempUsername(username);
              }}
            >
              <span className="text-white font-bold text-lg">{username}</span>
              <span className="text-gray-500 text-xs ml-2">✏️</span>
            </div>
          )}
        </div>

        {/* Prestige Badge & Title */}
        {prestigeLevel > 0 && (
          <motion.div
            className="mb-3 p-2 rounded-lg text-center"
            style={{
              backgroundColor: `${playerColor}20`,
              borderLeft: `3px solid ${playerColor}`,
            }}
            animate={{
              boxShadow: [
                `0 0 10px ${playerColor}40`,
                `0 0 20px ${playerColor}60`,
                `0 0 10px ${playerColor}40`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="text-2xl mb-1">{prestigeRank.badge}</div>
            <div
              className="text-xs font-bold uppercase"
              style={{ color: playerColor }}
            >
              {playerTitle}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Prestige {prestigeLevel} (+{prestigeRank.permanentBonus}% Rates)
            </div>
          </motion.div>
        )}

        {/* Level Display */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-400">Level</span>
            <span
              className="text-2xl font-black"
              style={{ color: playerColor }}
            >
              {xpProgress.currentLevel}
            </span>
          </div>

          {/* XP Progress Bar */}
          <div className="relative">
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500"
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress.progressPercent}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
              <span>{Math.floor(xpProgress.currentLevelXP)} XP</span>
              <span>{xpProgress.nextLevelXP} XP</span>
            </div>
          </div>
        </div>

        {/* Total XP */}
        <div className="text-center text-xs text-gray-500 mb-2">
          Total XP: {totalXP.toLocaleString()}
        </div>

        {/* Prestige Available */}
        {canDoPrestige && (
          <motion.div
            className="mt-3 p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400 rounded-lg text-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="text-yellow-400 font-bold text-sm">
              ✨ PRESTIGE AVAILABLE ✨
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Level {MAX_LEVEL} Reached!
            </div>
          </motion.div>
        )}

        {/* Prestige Info Tooltip */}
        {!canDoPrestige && prestigeLevel === 0 && (
          <div className="mt-2 text-[10px] text-gray-600 text-center">
            Reach level {MAX_LEVEL} to unlock Prestige
          </div>
        )}
      </motion.div>
    </div>
  );
}
