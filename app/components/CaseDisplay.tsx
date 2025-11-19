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
    <div className="flex flex-col items-center justify-center gap-12">
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 opacity-40 blur-3xl" />

        {/* Case box */}
        <div className="relative w-72 h-72 md:w-96 md:h-96">
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
                className="text-9xl md:text-[10rem]"
                animate={{
                  scale: [1, 1.05, 1],
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
          </div>
        </div>
      </motion.div>

      {/* Open Case Button */}
      <motion.button
        onClick={onOpenCase}
        disabled={isDisabled}
        className={`
          relative px-16 py-5 text-2xl font-bold uppercase tracking-wider
          bg-gradient-to-r from-cyan-500 to-magenta-500
          text-white rounded-xl
          transition-all duration-300
          ${
            isDisabled
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,242,0.8)] active:scale-95'
          }
        `}
        whileHover={!isDisabled ? { scale: 1.05 } : {}}
        whileTap={!isDisabled ? { scale: 0.95 } : {}}
      >
        {/* Button glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 opacity-40 blur-xl rounded-xl" />

        <span className="relative z-10">
          {isDisabled ? (casesRemaining <= 0 ? 'NO CASES LEFT' : 'OPENING...') : 'OPEN CASE'}
        </span>
      </motion.button>

      {/* Cases remaining counter */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-sm text-cyan-400 uppercase tracking-wider mb-3">Free Cases Remaining</div>
        <div className="text-6xl font-bold text-white">
          {casesRemaining}
          <span className="text-3xl text-gray-400 ml-1">/3</span>
        </div>
      </motion.div>
    </div>
  );
}
