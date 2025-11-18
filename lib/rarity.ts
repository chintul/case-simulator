import { Item, Rarity, ITEMS, getItemsByRarity } from './items';

export const RARITY_CHANCES = {
  common: 60,    // 60%
  uncommon: 25,  // 25%
  rare: 10,      // 10%
  epic: 4,       // 4%
  legendary: 1   // 1%
};

export const RARITY_COLORS = {
  common: '#808080',
  uncommon: '#4169E1',
  rare: '#9370DB',
  epic: '#FF1493',
  legendary: '#FFD700'
};

export const RARITY_GLOW_COLORS = {
  common: 'rgba(128, 128, 128, 0.5)',
  uncommon: 'rgba(65, 105, 225, 0.6)',
  rare: 'rgba(147, 112, 219, 0.7)',
  epic: 'rgba(255, 20, 147, 0.8)',
  legendary: 'rgba(255, 215, 0, 0.9)'
};

/**
 * Rolls for a rarity based on probability weights
 * Can apply streak bonuses that increase rare drop chances
 */
export function rollRarity(streakBonus: number = 0): Rarity {
  const rand = Math.random() * 100;

  // Apply streak bonus (e.g., Day 3 gives +10% rare chance)
  const adjustedChances = { ...RARITY_CHANCES };
  if (streakBonus > 0) {
    // Reduce common chance, increase rare+ chances
    adjustedChances.common = Math.max(40, adjustedChances.common - streakBonus);
    adjustedChances.rare += streakBonus * 0.4;
    adjustedChances.epic += streakBonus * 0.3;
    adjustedChances.legendary += streakBonus * 0.3;
  }

  let cumulative = 0;

  // Legendary
  cumulative += adjustedChances.legendary;
  if (rand < cumulative) return 'legendary';

  // Epic
  cumulative += adjustedChances.epic;
  if (rand < cumulative) return 'epic';

  // Rare
  cumulative += adjustedChances.rare;
  if (rand < cumulative) return 'rare';

  // Uncommon
  cumulative += adjustedChances.uncommon;
  if (rand < cumulative) return 'uncommon';

  // Common (default)
  return 'common';
}

/**
 * Selects a random item from a specific rarity tier
 */
export function rollItemByRarity(rarity: Rarity): Item {
  const itemsOfRarity = getItemsByRarity(rarity);
  return itemsOfRarity[Math.floor(Math.random() * itemsOfRarity.length)];
}

/**
 * Rolls for a random item based on probability
 */
export function rollItem(streakBonus: number = 0, guaranteedRarity?: Rarity): Item {
  const rarity = guaranteedRarity || rollRarity(streakBonus);
  return rollItemByRarity(rarity);
}

/**
 * Generates a conveyor belt of items for the animation
 * The winning item is placed in the center, with decoy items around it
 * Near-miss items (higher rarity) are strategically placed adjacent to create tension
 */
export function generateConveyor(
  winningItem: Item,
  enableNearMiss: boolean = true
): Item[] {
  const conveyorSize = 50;
  const winningIndex = Math.floor(conveyorSize / 2); // Center position
  const items: Item[] = [];

  // Determine near-miss rarity (one tier higher than winning item)
  const rarityOrder: Rarity[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  const winningRarityIndex = rarityOrder.indexOf(winningItem.rarity);
  const nearMissRarity = rarityOrder[Math.min(winningRarityIndex + 1, rarityOrder.length - 1)];

  // Generate items
  for (let i = 0; i < conveyorSize; i++) {
    if (i === winningIndex) {
      // Place the winning item
      items.push(winningItem);
    } else if (enableNearMiss && winningItem.rarity === 'common' && (i === winningIndex - 1 || i === winningIndex - 2)) {
      // Place near-miss items (epic items) just before the winning item for common drops
      items.push(rollItemByRarity('epic'));
    } else if (enableNearMiss && winningItem.rarity === 'uncommon' && i === winningIndex - 1) {
      // Place a rare item before uncommon
      items.push(rollItemByRarity('rare'));
    } else if (enableNearMiss && (i === winningIndex + 1 || i === winningIndex + 2)) {
      // Place slightly better items after the winning item
      items.push(rollItemByRarity(nearMissRarity));
    } else {
      // Random filler items, weighted toward common/uncommon
      const randomRarity = rollRarity(0);
      items.push(rollItemByRarity(randomRarity));
    }
  }

  return items;
}

/**
 * Calculates the dopamine level based on rarity
 * Returns a percentage (0-100)
 */
export function calculateDopamineLevel(rarity: Rarity): number {
  switch (rarity) {
    case 'common':
      return 15 + Math.random() * 10; // 15-25%
    case 'uncommon':
      return 35 + Math.random() * 10; // 35-45%
    case 'rare':
      return 60 + Math.random() * 10; // 60-70%
    case 'epic':
      return 85 + Math.random() * 10; // 85-95%
    case 'legendary':
      return 100 + Math.random() * 20; // 100-120% (overflow!)
    default:
      return 20;
  }
}

/**
 * Returns a funny commentary message based on the rarity
 */
export function getCommentary(rarity: Rarity): string {
  const commentaries = {
    common: [
      "Your luck is statistically concerning.",
      "This item will fix 0.3% of your problems.",
      "Baby steps toward a better life.",
      "At least it's something, right?",
      "Your lifestyle is evolving. Like a Pokémon, but sadder.",
      "Common doesn't mean bad. It means... common.",
      "Progress is progress. Keep going.",
    ],
    uncommon: [
      "Not bad! You're climbing the ladder.",
      "This is actually useful. No cap.",
      "Uncommon = slightly above average. That's you now.",
      "Your wallet will thank me later. Maybe.",
      "Solid pull. Could be worse.",
      "You're doing better than 60% of people. Literally.",
    ],
    rare: [
      "Now we're talking! This is good.",
      "Rare drop! Your luck is turning around.",
      "This actually changes things. For real.",
      "You just unlocked a new tier of living.",
      "Capitalism has never felt this good.",
      "Your lifestyle is now officially 'upgraded'.",
    ],
    epic: [
      "EPIC! Bro, you're on fire! 🔥",
      "This is life-changing. No exaggeration.",
      "You just won the mini-lottery of life.",
      "Your quality of life just jumped 3 levels.",
      "SO CLOSE to legendary... but this is incredible!",
      "Top 4% club. Welcome to the elite.",
    ],
    legendary: [
      "LEGENDARY DROP! THIS CHANGES EVERYTHING! 🌟",
      "You just peaked. Life is different now.",
      "The 1%. You're in it. Congratulations.",
      "This is the stuff dreams are made of.",
      "Your entire existence just upgraded.",
      "Frame this moment. You'll never forget it.",
      "ABSOLUTE LEGEND! 👑",
    ],
  };

  const messages = commentaries[rarity];
  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Returns a near-miss message when applicable
 */
export function getNearMissMessage(winningRarity: Rarity): string | null {
  if (winningRarity === 'common' || winningRarity === 'uncommon') {
    const messages = [
      "SO CLOSE! 😭 Try again?",
      "You almost had it! One more case?",
      "Bro, you were THIS close to epic!",
      "The gods of RNG are testing you.",
      "Next one's gonna be big. I can feel it.",
      "That hurt to watch. Go again?",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  return null;
}

/**
 * Determines if the user should get a guaranteed epic drop
 */
export function shouldGetGuaranteedEpic(streak: number): boolean {
  return streak >= 7;
}

/**
 * Calculates streak bonus percentage
 */
export function getStreakBonus(streak: number): number {
  if (streak >= 7) return 15;
  if (streak >= 3) return 10;
  return 0;
}
