import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Item } from './items';

export type AnimationState = 'idle' | 'spinning' | 'revealing' | 'inspecting';

interface AppState {
  // Case opening state
  currentAnimation: AnimationState;
  casesRemaining: number;
  lastOpenedDate: string;
  streak: number;

  // Current item state
  currentItem: Item | null;
  conveyorItems: Item[] | null;
  dopamineLevel: number;
  commentary: string;
  nearMissMessage: string | null;

  // Inventory
  inventory: Item[];
  totalCasesOpened: number;

  // Actions
  setAnimationState: (state: AnimationState) => void;
  setCurrentItem: (item: Item | null) => void;
  setConveyorItems: (items: Item[] | null) => void;
  setDopamineLevel: (level: number) => void;
  setCommentary: (message: string) => void;
  setNearMissMessage: (message: string | null) => void;

  openCase: () => void;
  addToInventory: (item: Item) => void;
  updateStreak: () => void;
  resetDailyCases: () => void;

  // Reset for new case
  resetForNewCase: () => void;
}

const DAILY_FREE_CASES = 3;

// Helper to check if it's a new day
const isNewDay = (lastDate: string): boolean => {
  if (!lastDate) return true;

  const last = new Date(lastDate);
  const now = new Date();

  return (
    now.getDate() !== last.getDate() ||
    now.getMonth() !== last.getMonth() ||
    now.getFullYear() !== last.getFullYear()
  );
};

// Helper to check if streak continues (within 1 day)
const isStreakContinuing = (lastDate: string): boolean => {
  if (!lastDate) return false;

  const last = new Date(lastDate);
  const now = new Date();

  // Reset time to midnight for accurate day comparison
  last.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diffTime = now.getTime() - last.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays === 1; // Exactly 1 day apart = streak continues
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentAnimation: 'idle',
      casesRemaining: DAILY_FREE_CASES,
      lastOpenedDate: '',
      streak: 0,
      currentItem: null,
      conveyorItems: null,
      dopamineLevel: 0,
      commentary: '',
      nearMissMessage: null,
      inventory: [],
      totalCasesOpened: 0,

      // Setters
      setAnimationState: (state) => set({ currentAnimation: state }),
      setCurrentItem: (item) => set({ currentItem: item }),
      setConveyorItems: (items) => set({ conveyorItems: items }),
      setDopamineLevel: (level) => set({ dopamineLevel: level }),
      setCommentary: (message) => set({ commentary: message }),
      setNearMissMessage: (message) => set({ nearMissMessage: message }),

      // Open a case (decrements counter)
      openCase: () => {
        const state = get();
        if (state.casesRemaining > 0) {
          set({
            casesRemaining: state.casesRemaining - 1,
            totalCasesOpened: state.totalCasesOpened + 1,
          });
        }
      },

      // Add item to inventory
      addToInventory: (item) => {
        set((state) => ({
          inventory: [...state.inventory, item],
        }));
      },

      // Update streak
      updateStreak: () => {
        const state = get();
        const now = new Date().toISOString();

        if (isNewDay(state.lastOpenedDate)) {
          if (isStreakContinuing(state.lastOpenedDate)) {
            // Streak continues
            set({
              streak: state.streak + 1,
              lastOpenedDate: now,
            });
          } else {
            // Streak broken or first time
            set({
              streak: 1,
              lastOpenedDate: now,
            });
          }
        }
        // If same day, don't update streak
      },

      // Reset daily free cases
      resetDailyCases: () => {
        const state = get();
        if (isNewDay(state.lastOpenedDate)) {
          set({ casesRemaining: DAILY_FREE_CASES });
        }
      },

      // Reset state for a new case opening
      resetForNewCase: () => {
        set({
          currentItem: null,
          conveyorItems: null,
          dopamineLevel: 0,
          commentary: '',
          nearMissMessage: null,
          currentAnimation: 'idle',
        });
      },
    }),
    {
      name: 'case-simulator-storage', // LocalStorage key
      partialize: (state) => ({
        // Only persist these fields
        casesRemaining: state.casesRemaining,
        lastOpenedDate: state.lastOpenedDate,
        streak: state.streak,
        inventory: state.inventory,
        totalCasesOpened: state.totalCasesOpened,
      }),
    }
  )
);
