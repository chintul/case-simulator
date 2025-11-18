'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function DopamineBar() {
  const { dopamineLevel } = useStore();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      height: `${Math.min(dopamineLevel, 100)}%`,
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    });

    // Overflow animation for legendary (>100%)
    if (dopamineLevel > 100) {
      controls.start({
        height: '100%',
        scale: [1, 1.05, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
        },
      });
    }
  }, [dopamineLevel, controls]);

  const getBarColor = () => {
    if (dopamineLevel >= 100) return 'from-yellow-400 via-orange-500 to-red-500';
    if (dopamineLevel >= 85) return 'from-pink-500 via-magenta-500 to-purple-500';
    if (dopamineLevel >= 60) return 'from-purple-500 via-blue-500 to-cyan-500';
    if (dopamineLevel >= 35) return 'from-blue-500 to-cyan-500';
    return 'from-gray-500 to-gray-600';
  };

  const getGlowColor = () => {
    if (dopamineLevel >= 100) return 'rgba(255, 215, 0, 0.8)';
    if (dopamineLevel >= 85) return 'rgba(255, 20, 147, 0.8)';
    if (dopamineLevel >= 60) return 'rgba(147, 112, 219, 0.8)';
    if (dopamineLevel >= 35) return 'rgba(0, 255, 242, 0.6)';
    return 'rgba(128, 128, 128, 0.4)';
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-4">
      {/* Label */}
      <div className="text-cyan-400 text-sm uppercase tracking-wider font-bold rotate-0 mb-2">
        Dopamine
      </div>

      {/* Bar container */}
      <div className="relative w-16 h-96 bg-gray-900 border-2 border-cyan-400 rounded-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-900" />

        {/* Filled bar */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${getBarColor()}`}
          initial={{ height: '0%' }}
          animate={controls}
          style={{
            boxShadow: `0 0 20px ${getGlowColor()}, inset 0 0 20px rgba(255,255,255,0.3)`,
          }}
        />

        {/* Overflow particles for legendary */}
        {dopamineLevel > 100 && (
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: '50%',
                  bottom: '100%',
                }}
                animate={{
                  y: [-20, -100],
                  x: (Math.random() - 0.5) * 40,
                  opacity: [1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        {/* Tick marks */}
        <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
          {[100, 75, 50, 25, 0].map((tick) => (
            <div key={tick} className="flex items-center">
              <div className="w-full h-px bg-cyan-400/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Percentage display */}
      <motion.div
        className="text-white text-2xl font-bold"
        animate={{
          scale: dopamineLevel > 100 ? [1, 1.2, 1] : 1,
          color: dopamineLevel > 100 ? ['#fff', '#FFD700', '#fff'] : '#fff',
        }}
        transition={{
          duration: 1,
          repeat: dopamineLevel > 100 ? Infinity : 0,
        }}
      >
        {Math.round(dopamineLevel)}%
      </motion.div>

      {/* Status text */}
      <div className="text-xs text-gray-400 uppercase tracking-wider">
        {dopamineLevel >= 100 && 'OVERLOAD! 🔥'}
        {dopamineLevel >= 85 && dopamineLevel < 100 && 'EPIC RUSH'}
        {dopamineLevel >= 60 && dopamineLevel < 85 && 'FEELING GOOD'}
        {dopamineLevel >= 35 && dopamineLevel < 60 && 'RISING'}
        {dopamineLevel < 35 && 'MEH'}
      </div>
    </div>
  );
}
