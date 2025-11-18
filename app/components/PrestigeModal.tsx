'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import {
  getXPProgressInLevel,
  getPrestigeRank,
  canPrestige,
  MAX_PRESTIGE,
} from '@/lib/prestige';
import { soundManager } from '@/lib/sound';

interface PrestigeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrestigeModal({ isOpen, onClose }: PrestigeModalProps) {
  const { totalXP, prestigeLevel, performPrestige } = useStore();

  const xpProgress = getXPProgressInLevel(totalXP);
  const canDoPrestige = canPrestige(xpProgress.currentLevel, prestigeLevel);
  const nextPrestigeRank = getPrestigeRank(prestigeLevel + 1);
  const currentPrestigeRank = getPrestigeRank(prestigeLevel);

  if (!canDoPrestige) return null;

  const handlePrestige = () => {
    soundManager?.playClick();
    performPrestige();
    onClose();

    // Show success message
    setTimeout(() => {
      alert(`You are now ${nextPrestigeRank.name}! +${nextPrestigeRank.permanentBonus}% permanent drop rates!`);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Particle effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: nextPrestigeRank.color,
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 600,
                      y: (Math.random() - 0.5) * 600,
                      opacity: [1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.02,
                      ease: 'easeOut',
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              {/* Card */}
              <div
                className="relative bg-gray-900 rounded-2xl border-4 overflow-hidden"
                style={{
                  borderColor: nextPrestigeRank.color,
                  boxShadow: `0 0 60px ${nextPrestigeRank.color}80`,
                }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-full text-white text-xl z-10"
                >
                  ✕
                </button>

                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-20 blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${nextPrestigeRank.color} 0%, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    className="text-9xl mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {nextPrestigeRank.badge}
                  </motion.div>

                  {/* Title */}
                  <h2
                    className="text-5xl font-black uppercase mb-2"
                    style={{ color: nextPrestigeRank.color }}
                  >
                    Prestige Available!
                  </h2>

                  <p className="text-gray-400 text-lg mb-6">
                    You've reached the peak. Ascend to new heights!
                  </p>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-6"
                    style={{
                      background: `linear-gradient(to right, transparent, ${nextPrestigeRank.color}, transparent)`,
                    }}
                  />

                  {/* Next Rank Info */}
                  <div
                    className="mb-6 p-6 rounded-xl border-2"
                    style={{
                      backgroundColor: `${nextPrestigeRank.color}10`,
                      borderColor: `${nextPrestigeRank.color}50`,
                    }}
                  >
                    <div className="text-sm text-gray-400 uppercase mb-2">
                      Become:
                    </div>
                    <div
                      className="text-4xl font-black mb-4"
                      style={{ color: nextPrestigeRank.color }}
                    >
                      {nextPrestigeRank.name}
                    </div>

                    {/* Permanent Bonus */}
                    <div className="bg-black/30 rounded-lg p-4 mb-4">
                      <div className="text-yellow-400 font-bold text-2xl mb-1">
                        +{nextPrestigeRank.permanentBonus}% Drop Rates
                      </div>
                      <div className="text-xs text-gray-400">
                        PERMANENT BONUS (was {currentPrestigeRank.permanentBonus}%)
                      </div>
                    </div>

                    {/* Unlocks */}
                    <div>
                      <div className="text-sm text-gray-400 uppercase mb-2">
                        New Unlocks:
                      </div>
                      <div className="space-y-1">
                        {nextPrestigeRank.unlocks.map((unlock, i) => (
                          <div
                            key={i}
                            className="text-white text-sm bg-gray-800/50 rounded px-3 py-1"
                          >
                            ✨ {unlock}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="mb-6 p-4 bg-red-500/10 border-2 border-red-500/50 rounded-xl">
                    <div className="text-red-400 font-bold mb-2">⚠️ Warning</div>
                    <div className="text-sm text-gray-300">
                      Prestiging will reset your level to 1, but you'll keep all items and
                      unlocks. Your permanent bonus will increase!
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      onClick={onClose}
                      className="flex-1 py-4 px-6 bg-gray-800 text-white font-bold uppercase rounded-xl border-2 border-gray-700 hover:bg-gray-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Not Yet
                    </motion.button>

                    <motion.button
                      onClick={handlePrestige}
                      className="flex-1 py-4 px-6 font-black text-xl uppercase rounded-xl"
                      style={{
                        background: `linear-gradient(to right, ${nextPrestigeRank.color}, ${nextPrestigeRank.color}dd)`,
                        color: '#000',
                        boxShadow: `0 0 30px ${nextPrestigeRank.color}80`,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${nextPrestigeRank.color}40`,
                          `0 0 40px ${nextPrestigeRank.color}80`,
                          `0 0 20px ${nextPrestigeRank.color}40`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      Prestige Now! 🚀
                    </motion.button>
                  </div>

                  {prestigeLevel + 1 === MAX_PRESTIGE && (
                    <div className="mt-4 text-xs text-yellow-400">
                      ⭐ This is the FINAL prestige rank! ⭐
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
