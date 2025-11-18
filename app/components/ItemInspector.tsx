'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Item } from '@/lib/items';
import { RARITY_COLORS, RARITY_GLOW_COLORS } from '@/lib/rarity';
import { soundManager } from '@/lib/sound';

interface ItemInspectorProps {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ItemInspector({ item, isOpen, onClose }: ItemInspectorProps) {
  if (!item) return null;

  const handleAffiliateClick = () => {
    soundManager?.playClick();
    // Open affiliate link in new tab
    window.open(item.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div
                className="absolute -inset-10 opacity-50 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${RARITY_GLOW_COLORS[item.rarity]} 0%, transparent 70%)`,
                }}
              />

              {/* Card */}
              <div
                className="relative bg-gray-900 rounded-2xl border-4 overflow-hidden"
                style={{
                  borderColor: RARITY_COLORS[item.rarity],
                  boxShadow: `0 0 60px ${RARITY_GLOW_COLORS[item.rarity]}`,
                }}
              >
                {/* Header */}
                <div
                  className="relative p-6 border-b-2"
                  style={{
                    borderColor: RARITY_COLORS[item.rarity],
                    background: `linear-gradient(to bottom, ${RARITY_GLOW_COLORS[item.rarity]}30, transparent)`,
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-800/50 hover:bg-gray-700 rounded-full text-white text-xl transition-colors"
                  >
                    ×
                  </button>

                  <div className="flex items-center gap-4">
                    {/* Item emoji */}
                    <motion.div
                      className="text-6xl"
                      animate={{
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {item.image}
                    </motion.div>

                    <div className="flex-1">
                      {/* Rarity badge */}
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-2"
                        style={{
                          backgroundColor: RARITY_COLORS[item.rarity],
                          color: '#000',
                        }}
                      >
                        {item.rarity}
                      </div>

                      {/* Item name */}
                      <h2 className="text-3xl font-bold text-white">{item.name}</h2>

                      {/* Category */}
                      <div className="text-cyan-400 uppercase text-sm tracking-wider mt-1">
                        {item.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-wider text-cyan-400 font-bold mb-2">
                      Why you need this:
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                  </div>

                  {/* Stats/Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-xs text-gray-400 uppercase mb-1">Drop Rate</div>
                      <div className="text-white font-bold">
                        {item.rarity === 'legendary' && '1%'}
                        {item.rarity === 'epic' && '4%'}
                        {item.rarity === 'rare' && '10%'}
                        {item.rarity === 'uncommon' && '25%'}
                        {item.rarity === 'common' && '60%'}
                      </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-xs text-gray-400 uppercase mb-1">Category</div>
                      <div className="text-white font-bold capitalize">{item.category}</div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border-2 border-cyan-400/50 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-400 mb-2">Ready to upgrade your life?</div>
                      <div className="text-2xl font-bold text-white mb-2">
                        Get this item now! 🚀
                      </div>
                      <div className="text-xs text-gray-500">
                        (Affiliate link - supports this project)
                      </div>
                    </div>

                    <motion.button
                      onClick={handleAffiliateClick}
                      className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-bold text-lg uppercase rounded-lg hover:shadow-[0_0_30px_rgba(0,255,242,0.8)] transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        boxShadow: `0 0 20px ${RARITY_GLOW_COLORS[item.rarity]}`,
                      }}
                    >
                      🔗 View on Amazon
                    </motion.button>
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
