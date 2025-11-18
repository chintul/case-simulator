'use client';

import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';

interface CaseDisplayProps {
  onOpenCase: () => void;
}

export default function CaseDisplay({ onOpenCase }: CaseDisplayProps) {
  const { currentAnimation, casesRemaining } = useStore();

  const isDisabled = currentAnimation !== 'idle' || casesRemaining <= 0;

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* 3D Glowing Case */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={!isDisabled ? { scale: 1.05 } : {}}
        whileTap={!isDisabled ? { scale: 0.95 } : {}}
        onClick={() => !isDisabled && onOpenCase()}
        animate={
          currentAnimation === 'idle'
            ? {
                y: [0, -10, 0],
                rotateY: [0, 5, 0, -5, 0],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 opacity-50 blur-3xl animate-pulse" />

        {/* Case box */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Front face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-magenta-400/20 border-2 border-cyan-400 rounded-2xl backdrop-blur-sm"
            style={{
              transform: 'translateZ(20px)',
              boxShadow: '0 0 60px rgba(0, 255, 242, 0.5), inset 0 0 60px rgba(255, 0, 255, 0.3)',
            }}
          >
            {/* Case emoji */}
            <div className="flex items-center justify-center h-full">
              <motion.div
                className="text-8xl md:text-9xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                📦
              </motion.div>
            </div>

            {/* Particle effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Open Case Button */}
      <motion.button
        onClick={onOpenCase}
        disabled={isDisabled}
        className={`
          relative px-12 py-4 text-2xl font-bold uppercase tracking-wider
          bg-gradient-to-r from-cyan-500 to-magenta-500
          text-white rounded-lg
          transition-all duration-300
          ${
            isDisabled
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,242,0.8)] active:scale-95'
          }
        `}
        whileHover={!isDisabled ? { scale: 1.05 } : {}}
        whileTap={!isDisabled ? { scale: 0.95 } : {}}
        animate={
          !isDisabled
            ? {
                boxShadow: [
                  '0 0 20px rgba(0, 255, 242, 0.5)',
                  '0 0 40px rgba(255, 0, 255, 0.5)',
                  '0 0 20px rgba(0, 255, 242, 0.5)',
                ],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {/* Button glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 opacity-50 blur-xl rounded-lg" />

        <span className="relative z-10">
          {isDisabled ? (casesRemaining <= 0 ? 'NO CASES LEFT' : 'OPENING...') : 'OPEN CASE'}
        </span>
      </motion.button>

      {/* Cases remaining counter */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-sm text-cyan-400 uppercase tracking-wider mb-2">Free Cases Remaining</div>
        <div className="text-5xl font-bold text-white">
          {casesRemaining}
          <span className="text-2xl text-gray-400">/3</span>
        </div>
      </motion.div>
    </div>
  );
}
