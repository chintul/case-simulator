import { Rarity } from './items';

// XP values for different actions
export const XP_VALUES = {
  OPEN_CASE: 10,
  RARITY_MULTIPLIERS: {
    common: 1,
    uncommon: 2,
    rare: 5,
    epic: 15,
    legendary: 50,
  },
  DAILY_STREAK: 20, // Bonus XP per streak day
  MISSION_COMPLETE: 100,
};

// Level progression (quadratic scaling)
export function getXPForLevel(level: number): number {
  return Math.floor(100 * Math.pow(level, 1.5));
}

// Calculate total XP needed to reach a level
export function getTotalXPForLevel(level: number): number {
  let total = 0;
  for (let i = 1; i < level; i++) {
    total += getXPForLevel(i);
  }
  return total;
}

// Get level from total XP
export function getLevelFromXP(xp: number): number {
  let level = 1;
  let requiredXP = 0;

  while (requiredXP <= xp) {
    level++;
    requiredXP += getXPForLevel(level - 1);
  }

  return level - 1;
}

// Get XP progress in current level
export function getXPProgressInLevel(totalXP: number): {
  currentLevel: number;
  currentLevelXP: number;
  nextLevelXP: number;
  progressPercent: number;
} {
  const currentLevel = getLevelFromXP(totalXP);
  const totalXPForCurrentLevel = getTotalXPForLevel(currentLevel);
  const totalXPForNextLevel = getTotalXPForLevel(currentLevel + 1);
  const currentLevelXP = totalXP - totalXPForCurrentLevel;
  const nextLevelXP = totalXPForNextLevel - totalXPForCurrentLevel;
  const progressPercent = (currentLevelXP / nextLevelXP) * 100;

  return {
    currentLevel,
    currentLevelXP,
    nextLevelXP,
    progressPercent,
  };
}

// Prestige system
export const MAX_LEVEL = 100;
export const MAX_PRESTIGE = 10;

export interface PrestigeRank {
  level: number;
  name: string;
  badge: string;
  color: string;
  permanentBonus: number; // % bonus to all drop rates
  unlocks: string[];
}

export const PRESTIGE_RANKS: PrestigeRank[] = [
  {
    level: 0,
    name: 'Novice',
    badge: '🆕',
    color: '#808080',
    permanentBonus: 0,
    unlocks: [],
  },
  {
    level: 1,
    name: 'Ascendant',
    badge: '⭐',
    color: '#4169E1',
    permanentBonus: 5,
    unlocks: ['Golden Case Skin', '+1 Daily Case'],
  },
  {
    level: 2,
    name: 'Elite',
    badge: '💎',
    color: '#9370DB',
    permanentBonus: 12,
    unlocks: ['Diamond Case Skin', 'Fast Spin Mode'],
  },
  {
    level: 3,
    name: 'Master',
    badge: '👑',
    color: '#FF1493',
    permanentBonus: 20,
    unlocks: ['Royal Case Skin', 'Instant Reveal'],
  },
  {
    level: 4,
    name: 'Grandmaster',
    badge: '🔥',
    color: '#FF6347',
    permanentBonus: 30,
    unlocks: ['Inferno Case Skin', '+2 Daily Cases'],
  },
  {
    level: 5,
    name: 'Legend',
    badge: '⚡',
    color: '#FFD700',
    permanentBonus: 42,
    unlocks: ['Lightning Case Skin', 'Auto-Open Mode'],
  },
  {
    level: 6,
    name: 'Mythic',
    badge: '🌟',
    color: '#00FFFF',
    permanentBonus: 55,
    unlocks: ['Cosmic Case Skin', 'Guaranteed Epic Daily'],
  },
  {
    level: 7,
    name: 'Divine',
    badge: '✨',
    color: '#FF00FF',
    permanentBonus: 70,
    unlocks: ['Celestial Case Skin', '+3 Daily Cases'],
  },
  {
    level: 8,
    name: 'Transcendent',
    badge: '🌌',
    color: '#8A2BE2',
    permanentBonus: 90,
    unlocks: ['Galaxy Case Skin', 'Legendary Guarantee Weekly'],
  },
  {
    level: 9,
    name: 'Eternal',
    badge: '💫',
    color: '#FF1493',
    permanentBonus: 115,
    unlocks: ['Eternal Case Skin', 'Double Drops Mode'],
  },
  {
    level: 10,
    name: 'Omnipotent',
    badge: '🔆',
    color: '#FFD700',
    permanentBonus: 150,
    unlocks: ['Omnipotent Case Skin', 'Infinite Cases', 'Custom Legendary Items'],
  },
];

export function getPrestigeRank(prestigeLevel: number): PrestigeRank {
  return PRESTIGE_RANKS[Math.min(prestigeLevel, MAX_PRESTIGE)] || PRESTIGE_RANKS[0];
}

export function canPrestige(level: number, prestigeLevel: number): boolean {
  return level >= MAX_LEVEL && prestigeLevel < MAX_PRESTIGE;
}

export function calculatePrestigeBonus(prestigeLevel: number): number {
  return getPrestigeRank(prestigeLevel).permanentBonus;
}

// Leaderboard (simulated - in production this would be backend)
export interface LeaderboardEntry {
  rank: number;
  username: string;
  level: number;
  prestigeLevel: number;
  totalXP: number;
  totalCasesOpened: number;
}

// Generate simulated leaderboard
export function generateLeaderboard(
  playerData: {
    username: string;
    level: number;
    prestigeLevel: number;
    totalXP: number;
    totalCasesOpened: number;
  }
): LeaderboardEntry[] {
  const leaderboard: LeaderboardEntry[] = [];

  // Add player
  leaderboard.push({
    rank: 0, // Will be calculated
    username: playerData.username,
    level: playerData.level,
    prestigeLevel: playerData.prestigeLevel,
    totalXP: playerData.totalXP,
    totalCasesOpened: playerData.totalCasesOpened,
  });

  // Generate 99 fake players with varying stats
  const names = [
    'CaseMaster3000',
    'LootGoblin',
    'RNGesus',
    'EpicHunter',
    'LegendaryLuck',
    'DropKing',
    'CaseAddict',
    'RarityChaser',
    'LootLegend',
    'GachaGod',
    'BoxOpener99',
    'PrimeDrops',
    'LuckyStreak',
    'CaseCrusher',
    'ItemCollector',
    'RNGWarrior',
    'LootMachine',
    'PrestigePro',
    'MegaOpener',
    'CaseWhale',
    'DropHunter',
    'RarityKing',
    'LootFiend',
    'BoxBuster',
    'CaseChamp',
    'EpicGamer420',
    'LegendSlayer',
    'MythicMaster',
    'DivineDrops',
    'CosmicCases',
    'QuantumLoot',
    'InfiniteOpener',
    'UltimateCollector',
    'SupremeGambler',
    'OmniLooter',
    'AscendedOne',
    'TranscendentBox',
    'EternalOpener',
    'ImmortalLuck',
    'CelestialCases',
  ];

  for (let i = 0; i < 99; i++) {
    const prestige = Math.floor(Math.random() * 11);
    const baseLevel = Math.floor(Math.random() * 100) + 1;
    const level = prestige > 0 ? baseLevel : Math.min(baseLevel, MAX_LEVEL);
    const totalXP = getTotalXPForLevel(level) + Math.floor(Math.random() * getXPForLevel(level));
    const casesOpened = Math.floor(totalXP / 15) + Math.floor(Math.random() * 1000);

    leaderboard.push({
      rank: 0,
      username: names[i % names.length] + (i > 39 ? i : ''),
      level,
      prestigeLevel: prestige,
      totalXP: totalXP + (prestige * 1000000),
      totalCasesOpened: casesOpened + (prestige * 10000),
    });
  }

  // Sort by prestige first, then by total XP
  leaderboard.sort((a, b) => {
    if (b.prestigeLevel !== a.prestigeLevel) {
      return b.prestigeLevel - a.prestigeLevel;
    }
    return b.totalXP - a.totalXP;
  });

  // Assign ranks
  leaderboard.forEach((entry, index) => {
    entry.rank = index + 1;
  });

  return leaderboard.slice(0, 100);
}

// Calculate XP gained from opening a case
export function calculateCaseXP(rarity: Rarity, streakDay: number): number {
  const baseXP = XP_VALUES.OPEN_CASE;
  const rarityBonus = XP_VALUES.RARITY_MULTIPLIERS[rarity];
  const streakBonus = streakDay * 2; // +2 XP per streak day

  return baseXP * rarityBonus + streakBonus;
}

// Get title based on level and prestige
export function getPlayerTitle(level: number, prestigeLevel: number): string {
  const prestige = getPrestigeRank(prestigeLevel);

  if (prestigeLevel === 0) {
    if (level < 10) return 'Beginner';
    if (level < 25) return 'Apprentice';
    if (level < 50) return 'Journeyman';
    if (level < 75) return 'Expert';
    return 'Master';
  }

  return prestige.name;
}

// Get color for level/prestige display
export function getPlayerColor(prestigeLevel: number): string {
  return getPrestigeRank(prestigeLevel).color;
}
