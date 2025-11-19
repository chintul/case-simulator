'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';

export default function NextCaseTimer() {
  const { casesRemaining } = useStore();
  const [timeUntilReset, setTimeUntilReset] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeUntilReset(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Only show when no cases remaining
  if (casesRemaining > 0) return null;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-30"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div className="bg-gray-900/90 backdrop-blur-md border-2 border-orange-500 rounded-xl p-5 min-w-[260px]">
        {/* Icon */}
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            className="text-3xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            ⏰
          </motion.div>
          <div>
            <div className="text-orange-400 text-sm uppercase tracking-wider font-bold">
              Out of Cases
            </div>
            <div className="text-gray-400 text-xs">
              Come back tomorrow!
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
          <div className="text-xs text-gray-400 mb-2 text-center">Next Reset In</div>
          <div className="text-white text-2xl font-mono font-bold text-center tabular-nums">
            {timeUntilReset}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-4 space-y-2">
          <div className="text-xs text-gray-400 text-center">
            While you wait:
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2 text-cyan-400">
              <span>📦</span>
              <span>Check your inventory</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <span>🎯</span>
              <span>Review mission progress</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <span>🏆</span>
              <span>Check leaderboard rank</span>
            </div>
          </div>
        </div>

        {/* Streak Reminder */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="text-xs text-orange-400 font-semibold text-center">
            💡 Don't break your streak! Come back daily.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
