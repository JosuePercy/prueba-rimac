import { create } from "zustand";
import type { PlanResponse } from "../../types/plan";

type PlanStore = {
  plans: PlanResponse["list"];
  filteredPlans: PlanResponse["list"];
  userAge: number | null;
  selectedOption: "me" | "other" | null;
  discount: number;
  setPlans: (plans: PlanResponse["list"]) => void;
  setUserAge: (age: number) => void;
  setSelectedOption: (option: "me" | "other") => void;
  filterPlans: () => void;
};

export const usePlanStore = create<PlanStore>((set, get) => ({
  plans: [],
  filteredPlans: [],
  userAge: null,
  selectedOption: null,
  discount: 0.05, // 5% descuento para "Para alguien más"
  setPlans: (plans) => set({ plans }),
  setUserAge: (age) => set({ userAge: age }),
  setSelectedOption: (option) => {
    set({ selectedOption: option });
    get().filterPlans(); // Filtrar planes al seleccionar una opción
  },
  filterPlans: () => {
  const { plans, userAge, selectedOption, discount } = get();
  if (!userAge || !selectedOption) {
    set({ filteredPlans: [] }); // No mostrar planes si no hay opción seleccionada
    return;
  }

  const filtered = plans
    .filter((plan) => userAge <= plan.age) // Filtrar por edad
    .map((plan) =>
      selectedOption === "other"
        ? { ...plan, price: plan.price * (1 - discount) } // Aplicar descuento
        : plan
    );

  set({ filteredPlans: filtered });
},
}));