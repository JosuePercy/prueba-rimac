import { create } from "zustand";

interface StepState {
  currentStep: number;
  setStep: (step: number) => void;
}

const useStepStore = create<StepState>((set) => ({
  currentStep: 1, // Paso inicial
  setStep: (step) => set({ currentStep: step }),
}));

export default useStepStore;