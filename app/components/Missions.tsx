'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import {
  MISSIONS,
  getMissionProgress,
  isMissionCompleted,
  getMissionColor,
  Mission,
} from '@/lib/missions';

export default function Missions() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  const { totalCasesOpened, streak, inventory, completedMissions, completeMission } = useStore();

  const stats = { totalCasesOpened, streak, inventory };

  // Get active and completed missions
  const activeMissions = MISSIONS.filter((mission) => !completedMissions.includes(mission.id));
  const completedMissionsData = MISSIONS.filter((mission) => completedMissions.includes(mission.id));

  // Check for newly completed missions
  const checkMissions = () => {
    activeMissions.forEach((mission) => {
      if (isMissionCompleted(mission, stats) && !completedMissions.includes(mission.id)) {
        completeMission(mission.id, mission.title);
      }
    });
  };

  // Check missions when opening the panel
  const handleToggle = () => {
    if (!isOpen) {
      checkMissions();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-30">
      {/* Toggle Button */}
      <motion.button
        onClick={handleToggle}
        className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-24 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-l-xl flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(0,255,242,0.5)]"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          🎯
        </motion.div>

        {/* Notification badge */}
        {activeMissions.some((m) => isMissionCompleted(m, stats)) && (
          <motion.div
            className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        )}
      </motion.button>

      {/* Missions Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-96 h-[600px] bg-gray-900/95 backdrop-blur-xl border-l-4 border-cyan-400 shadow-2xl overflow-hidden flex flex-col"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-2">🎯 Missions</h2>
              <p className="text-sm text-gray-400">Complete missions to unlock special rewards</p>

              {/* Tabs */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setActiveTab('active')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                    activeTab === 'active'
                      ? 'bg-cyan-500 text-black'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Active ({activeMissions.length})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                    activeTab === 'completed'
                      ? 'bg-cyan-500 text-black'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Done ({completedMissionsData.length})
                </button>
              </div>
            </div>

            {/* Mission List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {activeTab === 'active' &&
                activeMissions.map((mission) => (
                  <MissionCard key={mission.id} mission={mission} stats={stats} />
                ))}

              {activeTab === 'completed' &&
                completedMissionsData.map((mission) => (
                  <MissionCard key={mission.id} mission={mission} stats={stats} isCompleted />
                ))}

              {activeTab === 'active' && activeMissions.length === 0 && (
                <div className="text-center text-gray-400 py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <div className="text-lg font-semibold">All Missions Complete!</div>
                  <div className="text-sm">You're a true champion!</div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MissionCardProps {
  mission: Mission;
  stats: { totalCasesOpened: number; streak: number; inventory: any[] };
  isCompleted?: boolean;
}

function MissionCard({ mission, stats, isCompleted = false }: MissionCardProps) {
  const progress = getMissionProgress(mission, stats);
  const progressPercentage = Math.min((progress / mission.target) * 100, 100);
  const color = getMissionColor(mission.difficulty);
  const completed = isMissionCompleted(mission, stats);

  return (
    <motion.div
      className={`relative rounded-xl p-4 border-2 backdrop-blur-sm ${
        completed || isCompleted ? 'bg-gray-800/50 border-green-500' : 'bg-gray-800/80'
      }`}
      style={{
        borderColor: completed || isCompleted ? '#10b981' : color,
        boxShadow: `0 0 20px ${completed || isCompleted ? '#10b98140' : color + '40'}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Difficulty Badge */}
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <div
          className="px-2 py-1 rounded-full text-xs font-bold uppercase"
          style={{
            backgroundColor: color,
            color: '#000',
          }}
        >
          {mission.difficulty}
        </div>
        {(completed || isCompleted) && (
          <div className="text-2xl">✅</div>
        )}
      </div>

      {/* Mission Icon */}
      <div className="text-4xl mb-2">{mission.icon}</div>

      {/* Mission Title */}
      <h3 className="text-white font-bold text-lg mb-1">{mission.title}</h3>

      {/* Mission Description */}
      <p className="text-gray-400 text-sm mb-3">{mission.description}</p>

      {/* Progress Bar */}
      {!isCompleted && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>
              {progress}/{mission.target}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      {/* Reward */}
      <div
        className="mt-3 p-3 rounded-lg border"
        style={{
          backgroundColor: `${color}10`,
          borderColor: `${color}50`,
        }}
      >
        <div className="text-xs text-gray-400 uppercase mb-1">Reward</div>
        <div className="text-white font-semibold text-sm">{mission.reward.description}</div>
      </div>

      {/* Completion effect */}
      {completed && !isCompleted && (
        <motion.div
          className="absolute inset-0 bg-green-500/20 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
