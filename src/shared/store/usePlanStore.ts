import { create } from "zustand";
import type { PlanResponse } from "../../types/plan";

type PlanStore = {
  plans: PlanResponse["list"];
  filteredPlans: PlanResponse["list"];
  userAge: number | null;
  selectedOption: "me" | "other" | string | null; 
  selectedPlan: PlanResponse["list"][0] | null;
  discount: number;
  setPlans: (plans: PlanResponse["list"]) => void;
  setUserAge: (age: number) => void;
  setSelectedOption: (option: "me" | "other" | string) => void;
  setSelectedPlan: (plan: { name: string; price: number; description: string[]; age: number }) => void;
  filterPlans: () => void;
  resetPlan: () => void; 
};

export const usePlanStore = create<PlanStore>((set, get) => ({
  plans: [],
  filteredPlans: [],
  userAge: null,
  selectedOption: null,
  selectedPlan: null, 
  discount: 0.05,
  setPlans: (plans) => set({ plans }),
  setUserAge: (age) => set({ userAge: age }),
  setSelectedOption: (option: "me" | "other" | string) => {
    set({ selectedOption: option });
    get().filterPlans();
  },
  setSelectedPlan: (plan) => set({ selectedPlan: plan }), 
  filterPlans: () => {
  const { plans, userAge, selectedOption, discount } = get();
  if (!userAge || !selectedOption) {
    set({ filteredPlans: [] });
    return;
  }

  const filtered = plans
    .filter((plan) => userAge <= plan.age) 
    .map((plan) => {
      const discountedPrice = selectedOption === "other" ? plan.price * (1 - discount) : plan.price;
      return {
        ...plan,
        price: discountedPrice, 
        originalPrice: selectedOption === "other" ? plan.price : undefined, 
      };
    });

  set({ filteredPlans: filtered });
},
  resetPlan: () => set({ selectedPlan: null, selectedOption: null }),
}));