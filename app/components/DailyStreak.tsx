'use client';

import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { getStreakBonus } from '@/lib/rarity';

export default function DailyStreak() {
  const { streak } = useStore();
  const bonus = getStreakBonus(streak);

  return (
    <div className="fixed top-8 left-8 z-30">
      <motion.div
        className="bg-gray-900/80 backdrop-blur-md border-2 border-cyan-400 rounded-2xl p-6 min-w-[200px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Streak title */}
        <div className="text-cyan-400 text-sm uppercase tracking-wider font-bold mb-3">
          Daily Streak
        </div>

        {/* Flame and number */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="text-5xl"
            animate={
              streak > 0
                ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🔥
          </motion.div>

          <div className="flex flex-col">
            <div className="text-4xl font-bold text-white">{streak}</div>
            <div className="text-xs text-gray-400 uppercase">
              {streak === 1 ? 'Day' : 'Days'}
            </div>
          </div>
        </div>

        {/* Bonus info */}
        {bonus > 0 && (
          <motion.div
            className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border border-cyan-400/50 rounded-lg p-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className="text-xs text-cyan-400 font-bold mb-1">ACTIVE BONUS:</div>
            <div className="text-white text-sm">+{bonus}% Rare Drop Chance</div>
          </motion.div>
        )}

        {/* Milestone progress */}
        {streak < 7 && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="text-xs text-gray-400 mb-2">Next Milestone:</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(streak / 7) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="text-xs text-white font-bold">
                {streak}/7
              </div>
            </div>
            <div className="text-xs text-cyan-400 mt-2">
              {streak >= 7 ? '✅ Guaranteed Epic!' : 'Day 7: Guaranteed Epic'}
            </div>
            {streak < 3 && (
              <div className="text-xs text-gray-500 mt-1">
                Day 3: +10% Rare Chance
              </div>
            )}
          </div>
        )}

        {/* Guaranteed epic badge */}
        {streak >= 7 && (
          <motion.div
            className="mt-4 pt-4 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center font-bold py-2 px-4 rounded-lg">
              ⚡ GUARANTEED EPIC ⚡
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
