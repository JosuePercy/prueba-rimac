import { create } from "zustand";
import useFormStore from "./useFormStore"; // Importar el store completo
import { usePlanStore } from "./usePlanStore"; // Use named import

interface ViewState {
  currentView: string;
  setCurrentView: (view: string) => void;
  resetAndGoHome: () => void; // Nueva función global
}

const useViewStore = create<ViewState>((set) => ({
  currentView: "home", // Vista inicial
  setCurrentView: (view) => set({ currentView: view }),
  resetAndGoHome: () => {
    const { resetForm } = useFormStore.getState(); // Acceder a la función para resetear el formulario
    const { resetPlan } = usePlanStore.getState(); // Acceder a la función para resetear el plan
    resetForm(); // Limpiar la información del formulario
    resetPlan(); // Limpiar la información del plan seleccionado
    set({ currentView: "home" }); // Cambiar la vista a "home"
  },
}));

export default useViewStore;