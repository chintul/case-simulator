'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface NearMissIndicatorProps {
  message: string | null;
}

export default function NearMissIndicator({ message }: NearMissIndicatorProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="bg-gray-900/95 backdrop-blur-xl border-4 border-yellow-400 rounded-2xl p-8 max-w-md">
            {/* Icon */}
            <motion.div
              className="text-8xl text-center mb-4"
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              😭
            </motion.div>

            {/* Message */}
            <div className="text-3xl font-bold text-white text-center mb-2">
              SO CLOSE!
            </div>

            <div className="text-xl text-yellow-400 text-center">
              {message}
            </div>

            {/* Dramatic lines */}
            <div className="mt-6 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-yellow-400/30 blur-3xl animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
