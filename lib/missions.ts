import { Item, Rarity } from './items';

export type MissionType =
  | 'open_cases'
  | 'streak_days'
  | 'collect_rarity'
  | 'collect_categories'
  | 'get_legendary';

export type RewardType =
  | 'extra_cases'
  | 'guaranteed_drop'
  | 'unlock_item'
  | 'drop_rate_boost';

export interface MissionReward {
  type: RewardType;
  value: string | number; // Item ID for unlock, number for cases, rarity for guaranteed drop
  description: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: MissionType;
  target: number; // e.g., open 10 cases, 5 day streak, etc.
  targetRarity?: Rarity; // For collect_rarity missions
  reward: MissionReward;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'legendary';
}

export const MISSIONS: Mission[] = [
  // Easy Missions
  {
    id: 'first_case',
    title: 'First Timer',
    description: 'Open your first case',
    type: 'open_cases',
    target: 1,
    reward: {
      type: 'extra_cases',
      value: 2,
      description: '+2 Free Cases',
    },
    icon: '🎁',
    difficulty: 'easy',
  },
  {
    id: 'case_opener_5',
    title: 'Getting Started',
    description: 'Open 5 cases',
    type: 'open_cases',
    target: 5,
    reward: {
      type: 'extra_cases',
      value: 3,
      description: '+3 Free Cases',
    },
    icon: '📦',
    difficulty: 'easy',
  },
  {
    id: 'streak_3',
    title: 'Committed',
    description: 'Maintain a 3-day streak',
    type: 'streak_days',
    target: 3,
    reward: {
      type: 'guaranteed_drop',
      value: 'rare',
      description: 'Next case: Guaranteed Rare+',
    },
    icon: '🔥',
    difficulty: 'easy',
  },

  // Medium Missions
  {
    id: 'case_opener_25',
    title: 'Case Enthusiast',
    description: 'Open 25 cases',
    type: 'open_cases',
    target: 25,
    reward: {
      type: 'guaranteed_drop',
      value: 'epic',
      description: 'Next case: Guaranteed Epic',
    },
    icon: '🎰',
    difficulty: 'medium',
  },
  {
    id: 'collect_uncommon',
    title: 'Uncommon Collector',
    description: 'Collect 10 uncommon items',
    type: 'collect_rarity',
    target: 10,
    targetRarity: 'uncommon',
    reward: {
      type: 'extra_cases',
      value: 5,
      description: '+5 Free Cases',
    },
    icon: '💎',
    difficulty: 'medium',
  },
  {
    id: 'streak_7',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    type: 'streak_days',
    target: 7,
    reward: {
      type: 'unlock_item',
      value: 'secret_gaming_chair',
      description: 'Unlock: Secret Gaming Chair',
    },
    icon: '⚡',
    difficulty: 'medium',
  },
  {
    id: 'all_categories',
    title: 'Life Optimizer',
    description: 'Collect items from all 5 categories',
    type: 'collect_categories',
    target: 5,
    reward: {
      type: 'drop_rate_boost',
      value: 20,
      description: '+20% Rare Drop Rate (24h)',
    },
    icon: '🌟',
    difficulty: 'medium',
  },

  // Hard Missions
  {
    id: 'case_opener_100',
    title: 'Case Master',
    description: 'Open 100 cases',
    type: 'open_cases',
    target: 100,
    reward: {
      type: 'unlock_item',
      value: 'master_ultrawide',
      description: 'Unlock: Master\'s 49" Ultrawide',
    },
    icon: '👑',
    difficulty: 'hard',
  },
  {
    id: 'collect_rare',
    title: 'Rare Hunter',
    description: 'Collect 20 rare items',
    type: 'collect_rarity',
    target: 20,
    targetRarity: 'rare',
    reward: {
      type: 'guaranteed_drop',
      value: 'legendary',
      description: 'Next case: Guaranteed LEGENDARY',
    },
    icon: '🎯',
    difficulty: 'hard',
  },
  {
    id: 'streak_30',
    title: 'Monthly Champion',
    description: 'Maintain a 30-day streak',
    type: 'streak_days',
    target: 30,
    reward: {
      type: 'unlock_item',
      value: 'champion_setup',
      description: 'Unlock: Champion\'s Complete Setup',
    },
    icon: '🏆',
    difficulty: 'hard',
  },

  // Legendary Missions
  {
    id: 'first_legendary',
    title: 'Legendary Luck',
    description: 'Get your first legendary item',
    type: 'get_legendary',
    target: 1,
    reward: {
      type: 'drop_rate_boost',
      value: 50,
      description: '+50% All Drop Rates (48h)',
    },
    icon: '⭐',
    difficulty: 'legendary',
  },
  {
    id: 'collect_epic',
    title: 'Epic Collector',
    description: 'Collect 10 epic items',
    type: 'collect_rarity',
    target: 10,
    targetRarity: 'epic',
    reward: {
      type: 'unlock_item',
      value: 'ultimate_throne',
      description: 'Unlock: Ultimate Gaming Throne',
    },
    icon: '💫',
    difficulty: 'legendary',
  },
];

// Special unlockable items (only available through missions)
export const SPECIAL_ITEMS: Item[] = [
  {
    id: 'secret_gaming_chair',
    name: 'Secret Gaming Chair of Legends',
    description: 'Only the dedicated can sit here. Your back thanks you eternally.',
    rarity: 'epic',
    affiliateLink: 'https://amzn.to/secret-chair',
    category: 'comfort',
    image: '🪑',
  },
  {
    id: 'master_ultrawide',
    name: 'Master\'s 49" Super Ultrawide',
    description: 'This isn\'t just a monitor. This is a life philosophy.',
    rarity: 'legendary',
    affiliateLink: 'https://amzn.to/master-ultrawide',
    category: 'tech',
    image: '🖥️',
  },
  {
    id: 'champion_setup',
    name: 'Champion\'s Complete Desk Setup',
    description: 'Everything you need. Nothing you don\'t. Perfection achieved.',
    rarity: 'legendary',
    affiliateLink: 'https://amzn.to/champion-setup',
    category: 'productivity',
    image: '⚡',
  },
  {
    id: 'ultimate_throne',
    name: 'Ultimate Gaming Throne',
    description: 'This chair costs more than your car. Worth every penny.',
    rarity: 'legendary',
    affiliateLink: 'https://amzn.to/ultimate-throne',
    category: 'comfort',
    image: '👑',
  },
];

/**
 * Get mission progress based on mission type
 */
export function getMissionProgress(
  mission: Mission,
  stats: {
    totalCasesOpened: number;
    streak: number;
    inventory: Item[];
  }
): number {
  switch (mission.type) {
    case 'open_cases':
      return stats.totalCasesOpened;

    case 'streak_days':
      return stats.streak;

    case 'collect_rarity':
      return stats.inventory.filter((item) => item.rarity === mission.targetRarity).length;

    case 'collect_categories':
      const categories = new Set(stats.inventory.map((item) => item.category));
      return categories.size;

    case 'get_legendary':
      return stats.inventory.filter((item) => item.rarity === 'legendary').length;

    default:
      return 0;
  }
}

/**
 * Check if a mission is completed
 */
export function isMissionCompleted(
  mission: Mission,
  stats: {
    totalCasesOpened: number;
    streak: number;
    inventory: Item[];
  }
): boolean {
  const progress = getMissionProgress(mission, stats);
  return progress >= mission.target;
}

/**
 * Get all completed missions
 */
export function getCompletedMissions(
  completedIds: string[]
): Mission[] {
  return MISSIONS.filter((mission) => completedIds.includes(mission.id));
}

/**
 * Get all active (not yet completed) missions
 */
export function getActiveMissions(
  completedIds: string[]
): Mission[] {
  return MISSIONS.filter((mission) => !completedIds.includes(mission.id));
}

/**
 * Get special item by ID
 */
export function getSpecialItemById(id: string): Item | undefined {
  return SPECIAL_ITEMS.find((item) => item.id === id);
}

/**
 * Get mission difficulty color
 */
export function getMissionColor(difficulty: Mission['difficulty']): string {
  switch (difficulty) {
    case 'easy':
      return '#4169E1'; // Blue
    case 'medium':
      return '#9370DB'; // Purple
    case 'hard':
      return '#FF1493'; // Pink
    case 'legendary':
      return '#FFD700'; // Gold
    default:
      return '#808080';
  }
}
