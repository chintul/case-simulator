'use client';

import { motion } from 'framer-motion';
import { Item } from '@/lib/items';
import { RARITY_COLORS, RARITY_GLOW_COLORS } from '@/lib/rarity';
import { useEffect } from 'react';
import { soundManager } from '@/lib/sound';

interface ItemRevealProps {
  item: Item;
  commentary: string;
  onInspect: () => void;
  onOpenAnother: () => void;
  xpGained?: number;
  totalItems?: number;
}

export default function ItemReveal({ item, commentary, onInspect, onOpenAnother, xpGained = 0, totalItems = 0 }: ItemRevealProps) {
  useEffect(() => {
    // Play reveal sound based on rarity
    soundManager?.playReveal(item.rarity);

    if (item.rarity === 'legendary') {
      soundManager?.playBassDrop();
    }
  }, [item.rarity]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Confetti/Particles for epic+ */}
      {(item.rarity === 'epic' || item.rarity === 'legendary') && <Particles rarity={item.rarity} />}

      {/* Item card */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.8,
        }}
      >
        {/* Massive glow */}
        <div
          className="absolute -inset-20 opacity-50 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${RARITY_GLOW_COLORS[item.rarity]} 0%, transparent 70%)`,
          }}
        />

        {/* Card */}
        <div
          className="relative w-80 md:w-96 rounded-2xl border-4 backdrop-blur-md overflow-hidden"
          style={{
            borderColor: RARITY_COLORS[item.rarity],
            backgroundColor: `${RARITY_GLOW_COLORS[item.rarity]}20`,
            boxShadow: `0 0 60px ${RARITY_GLOW_COLORS[item.rarity]}, inset 0 0 40px ${RARITY_GLOW_COLORS[item.rarity]}`,
          }}
        >
          {/* Rarity badge */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold uppercase z-20"
            style={{
              backgroundColor: RARITY_COLORS[item.rarity],
              color: '#000',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            {item.rarity}
          </motion.div>

          {/* XP Badge */}
          {xpGained > 0 && (
            <motion.div
              className="absolute top-4 left-4 px-3 py-2 rounded-full text-xs font-bold uppercase z-20 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white flex items-center gap-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              <span>⭐</span>
              <span>+{xpGained} XP</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col items-center">
            {/* Item emoji */}
            <motion.div
              className="text-9xl mb-6"
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
              {item.image}
            </motion.div>

            {/* Item name */}
            <h2 className="text-3xl font-bold text-white text-center mb-4">{item.name}</h2>

            {/* Category */}
            <div className="text-cyan-400 uppercase text-sm tracking-wider mb-4">{item.category}</div>

            {/* Description */}
            <p className="text-gray-300 text-center text-sm mb-4 max-w-sm">{item.description}</p>

            {/* Stats */}
            {totalItems > 0 && (
              <motion.div
                className="flex gap-4 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-center">
                  <div className="text-gray-400 text-xs uppercase">Total Items</div>
                  <div className="text-white text-lg font-bold">{totalItems}</div>
                </div>
                <div className="w-px bg-gray-700" />
                <div className="text-center">
                  <div className="text-gray-400 text-xs uppercase">Rarity</div>
                  <div className="text-white text-lg font-bold capitalize">{item.rarity}</div>
                </div>
              </motion.div>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6" />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <motion.button
                onClick={onInspect}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-bold uppercase rounded-lg hover:shadow-[0_0_20px_rgba(0,255,242,0.8)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get This Item 🔗
              </motion.button>

              <motion.button
                onClick={onOpenAnother}
                className="flex-1 px-6 py-3 bg-gray-800 border-2 border-cyan-400 text-cyan-400 font-bold uppercase rounded-lg hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open Another Case
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Commentary */}
      <motion.div
        className="mt-8 text-center text-xl md:text-2xl text-white font-semibold max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {commentary}
      </motion.div>
    </motion.div>
  );
}

// Particle component for epic/legendary drops
function Particles({ rarity }: { rarity: string }) {
  const particleCount = rarity === 'legendary' ? 50 : 30;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: rarity === 'legendary' ? '#FFD700' : '#FF1493',
            left: '50%',
            top: '50%',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0,
          }}
          animate={{
            x: (Math.random() - 0.5) * 1000,
            y: (Math.random() - 0.5) * 1000,
            opacity: 0,
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
  );
}
