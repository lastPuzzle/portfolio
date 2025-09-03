import { create } from 'zustand';

interface AnimationStore {
  introCompleted: boolean;
  setIntroCompleted: (completed: boolean) => void;
}

export const useAnimationStore = create<AnimationStore>((set) => ({
  introCompleted: false,
  setIntroCompleted: (completed) => set({ introCompleted: completed }),
}));
