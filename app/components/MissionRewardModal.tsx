'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import { MISSIONS } from '@/lib/missions';
import { soundManager } from '@/lib/sound';

export default function MissionRewardModal() {
  const { pendingReward, claimReward } = useStore();

  if (!pendingReward) return null;

  const mission = MISSIONS.find((m) => m.id === pendingReward.missionId);
  if (!mission) return null;

  const handleClaim = () => {
    soundManager?.playClick();
    claimReward({
      type: mission.reward.type,
      value: mission.reward.value,
      description: mission.reward.description,
    });
  };

  return (
    <AnimatePresence>
      {pendingReward && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative max-w-md w-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Particle effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 400,
                      y: (Math.random() - 0.5) * 400,
                      opacity: [1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.02,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </div>

              {/* Card */}
              <div
                className="relative bg-gray-900 rounded-2xl border-4 overflow-hidden"
                style={{
                  borderColor: '#FFD700',
                  boxShadow: '0 0 60px rgba(255, 215, 0, 0.8)',
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-30 blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, transparent 70%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  {/* Success Icon */}
                  <motion.div
                    className="text-8xl mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🎉
                  </motion.div>

                  {/* Mission Complete */}
                  <h2 className="text-3xl font-black uppercase text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text mb-2">
                    Mission Complete!
                  </h2>

                  {/* Mission Title */}
                  <div className="text-xl font-bold text-white mb-4">{pendingReward.missionTitle}</div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6" />

                  {/* Reward Section */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-400/50 rounded-xl p-6 mb-6">
                    <div className="text-sm text-yellow-400 uppercase tracking-wider mb-2">
                      🎁 Your Reward:
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {mission.reward.description}
                    </div>

                    {/* Reward Icon */}
                    <div className="text-6xl mt-4">
                      {mission.reward.type === 'extra_cases' && '📦'}
                      {mission.reward.type === 'guaranteed_drop' && '⭐'}
                      {mission.reward.type === 'unlock_item' && '🔓'}
                      {mission.reward.type === 'drop_rate_boost' && '🚀'}
                    </div>
                  </div>

                  {/* Claim Button */}
                  <motion.button
                    onClick={handleClaim}
                    className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-black text-xl uppercase rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.8)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(255, 215, 0, 0.5)',
                        '0 0 40px rgba(255, 215, 0, 0.8)',
                        '0 0 20px rgba(255, 215, 0, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    Claim Reward 🎁
                  </motion.button>

                  <div className="mt-4 text-xs text-gray-500">
                    Click to claim and continue your journey
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
