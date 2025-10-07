import { create } from "zustand";

interface ViewState {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const useViewStore = create<ViewState>((set) => ({
  currentView: "home", // Vista inicial
  setCurrentView: (view) => set({ currentView: view }),
}));

export default useViewStore;