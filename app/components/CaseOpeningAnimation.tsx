'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Item } from '@/lib/items';
import { RARITY_COLORS, RARITY_GLOW_COLORS } from '@/lib/rarity';
import { soundManager } from '@/lib/sound';

interface CaseOpeningAnimationProps {
  items: Item[];
  onComplete: () => void;
  winningIndex?: number;
}

export default function CaseOpeningAnimation({
  items,
  onComplete,
  winningIndex = Math.floor(items.length / 2),
}: CaseOpeningAnimationProps) {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);
  const tickIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const ITEM_WIDTH = 200; // Width of each item card
  const VIEWPORT_CENTER = typeof window !== 'undefined' ? window.innerWidth / 2 : 800;

  useEffect(() => {
    startAnimation();

    return () => {
      if (tickIntervalRef.current) {
        clearInterval(tickIntervalRef.current);
      }
    };
  }, []);

  const startAnimation = async () => {
    setIsAnimating(true);

    // Calculate the final position to center the winning item
    const finalOffset = -(winningIndex * ITEM_WIDTH - VIEWPORT_CENTER + ITEM_WIDTH / 2);

    // Phase 1: Fast scroll (0-2 seconds)
    let tickSpeed = 50; // ms
    tickIntervalRef.current = setInterval(() => {
      soundManager?.playTick(800, 0.02);
    }, tickSpeed);

    await controls.start({
      x: finalOffset - 2000, // Overshoot
      transition: {
        duration: 2,
        ease: 'linear',
      },
    });

    // Phase 2: Gradual slowdown (2-5 seconds)
    clearInterval(tickIntervalRef.current!);
    tickSpeed = 100;
    tickIntervalRef.current = setInterval(() => {
      soundManager?.playTick(600, 0.03);
    }, tickSpeed);

    await controls.start({
      x: finalOffset - 500,
      transition: {
        duration: 3,
        ease: 'easeOut',
      },
    });

    // Phase 3: Dramatic slowdown with tick-tick-tick (5-7 seconds)
    clearInterval(tickIntervalRef.current!);
    tickSpeed = 200;
    tickIntervalRef.current = setInterval(() => {
      soundManager?.playTick(400, 0.04);
    }, tickSpeed);

    await controls.start({
      x: finalOffset - 100,
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    });

    // Phase 4: Final stop (near-miss slide) (7-8 seconds)
    clearInterval(tickIntervalRef.current!);
    tickSpeed = 300;
    let tickCount = 0;
    tickIntervalRef.current = setInterval(() => {
      soundManager?.playTick(300, 0.05);
      tickCount++;
      if (tickCount >= 3) {
        clearInterval(tickIntervalRef.current!);
      }
    }, tickSpeed);

    await controls.start({
      x: finalOffset,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    });

    clearInterval(tickIntervalRef.current!);

    // Trigger screen shake for rare+ items
    const winningItem = items[winningIndex];
    if (winningItem.rarity === 'epic' || winningItem.rarity === 'legendary') {
      // Screen shake effect
      const body = document.body;
      body.classList.add('shake');
      setTimeout(() => body.classList.remove('shake'), 500);
    }

    setIsAnimating(false);
    onComplete();
  };

  return (
    <div className="relative w-full h-72 overflow-hidden px-8">
      {/* Center indicator line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-400 z-20 shadow-[0_0_20px_rgba(0,255,242,0.8)]" />

      {/* Gradient overlays for edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

      {/* Conveyor belt */}
      <motion.div
        className="flex items-center h-full absolute gap-4"
        initial={{ x: 0 }}
        animate={controls}
        style={{
          filter: isAnimating ? 'blur(1px)' : 'blur(0px)',
          willChange: 'transform',
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className="flex-shrink-0"
            style={{ width: ITEM_WIDTH }}
            initial={{ opacity: 0.8 }}
            animate={{
              opacity: index === winningIndex && !isAnimating ? 1 : 0.8,
              scale: index === winningIndex && !isAnimating ? 1.05 : 1,
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {/* Item card */}
            <div
              className="relative h-64 rounded-xl border-2 backdrop-blur-sm overflow-hidden transition-all duration-200"
              style={{
                borderColor: RARITY_COLORS[item.rarity],
                backgroundColor: `${RARITY_GLOW_COLORS[item.rarity]}20`,
                boxShadow: `0 0 24px ${RARITY_GLOW_COLORS[item.rarity]}`,
              }}
            >
              {/* Rarity glow */}
              <div
                className="absolute inset-0 opacity-20 blur-2xl"
                style={{
                  background: `radial-gradient(circle, ${RARITY_GLOW_COLORS[item.rarity]} 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-5">
                {/* Item emoji */}
                <div className="text-7xl mb-4">{item.image}</div>

                {/* Item name */}
                <div className="text-center text-white font-semibold text-sm line-clamp-2 mb-3 px-2">
                  {item.name}
                </div>

                {/* Rarity badge */}
                <div
                  className="text-xs uppercase font-bold px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: RARITY_COLORS[item.rarity],
                    color: '#000',
                  }}
                >
                  {item.rarity}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
