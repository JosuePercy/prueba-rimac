import { create } from "zustand";
import useFormStore from "./useFormStore"; 
import { usePlanStore } from "./usePlanStore"; 

interface ViewState {
  currentView: string;
  setCurrentView: (view: string) => void;
  resetAndGoHome: () => void; 
}

const useViewStore = create<ViewState>((set) => ({
  currentView: "home", 
  setCurrentView: (view) => set({ currentView: view }),
  resetAndGoHome: () => {
    const { resetForm } = useFormStore.getState(); 
    const { resetPlan } = usePlanStore.getState(); 
    resetForm(); 
    resetPlan(); 
    set({ currentView: "home" }); 
  },
}));

export default useViewStore;