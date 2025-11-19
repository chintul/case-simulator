'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import { getStreakBonus } from '@/lib/rarity';

export default function ActiveBonuses() {
  const { streak, getPrestigeBonus, getActiveDropBoost, prestigeLevel, activeRewards } = useStore();

  const streakBonus = getStreakBonus(streak);
  const prestigeBonus = getPrestigeBonus();
  const missionBonus = getActiveDropBoost();
  const totalBonus = streakBonus + prestigeBonus + missionBonus;

  // Don't show if no bonuses active
  if (totalBonus === 0) return null;

  const bonuses = [];
  if (streakBonus > 0) bonuses.push({ label: 'Streak', value: streakBonus, icon: '🔥', color: 'from-orange-500 to-red-500' });
  if (prestigeBonus > 0) bonuses.push({ label: `Prestige ${prestigeLevel}`, value: prestigeBonus, icon: '⭐', color: 'from-purple-500 to-pink-500' });
  if (missionBonus > 0) bonuses.push({ label: 'Mission Reward', value: missionBonus, icon: '🎯', color: 'from-cyan-500 to-blue-500' });

  // Check for guaranteed drops
  const guaranteedReward = activeRewards.find((r) => r.type === 'guaranteed_drop');

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-30"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="bg-gray-900/90 backdrop-blur-md border-2 border-cyan-400 rounded-xl p-4 min-w-[280px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="text-lg">⚡</div>
          <div className="text-cyan-400 text-sm uppercase tracking-wider font-bold">
            Active Bonuses
          </div>
        </div>

        {/* Total Bonus */}
        <div className="mb-4 p-3 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-lg border border-cyan-400/30">
          <div className="text-xs text-gray-400 mb-1">Total Drop Rate Boost</div>
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
            +{totalBonus}%
          </div>
        </div>

        {/* Individual Bonuses */}
        <div className="space-y-2">
          <AnimatePresence>
            {bonuses.map((bonus, index) => (
              <motion.div
                key={bonus.label}
                className={`flex items-center justify-between p-2 rounded-lg bg-gradient-to-r ${bonus.color} bg-opacity-20`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{bonus.icon}</span>
                  <span className="text-white text-sm font-semibold">{bonus.label}</span>
                </div>
                <div className="text-white text-sm font-bold">+{bonus.value}%</div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Guaranteed Drop */}
          {guaranteedReward && (
            <motion.div
              className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 border-2 border-yellow-400"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🎁</span>
                <span className="text-white text-sm font-bold">
                  Next: Guaranteed {String(guaranteedReward.value).toUpperCase()}
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Expiring Rewards */}
        {activeRewards.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="text-xs text-gray-400">
              Mission rewards expire after 24-48h
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
