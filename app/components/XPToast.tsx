'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface XPToastProps {
  xpGained: number;
  show: boolean;
  onHide: () => void;
}

export default function XPToast({ xpGained, show, onHide }: XPToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="bg-gradient-to-r from-cyan-500 to-magenta-500 p-1 rounded-xl shadow-[0_0_30px_rgba(0,255,242,0.6)]">
            <div className="bg-gray-900 rounded-lg px-6 py-3 flex items-center gap-3">
              <motion.div
                className="text-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                ⭐
              </motion.div>
              <div>
                <div className="text-cyan-400 text-xs uppercase tracking-wider font-bold">
                  XP Gained
                </div>
                <div className="text-white text-2xl font-bold">
                  +{xpGained}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
