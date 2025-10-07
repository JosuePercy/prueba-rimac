import "./PlanList.scss";
import PlanListCard from "./PlanListCard";

type PlanListProps = {
  plans: {
    name: string;
    price: number;
    description: string[];
    age: number;
    
  }[];
  onSelectPlan?: (plan: { name: string; price: number }) => void; // Callback para manejar la selección
};

function PlanList({ plans, onSelectPlan }: PlanListProps) {
  return (
    <div className="plan-list">
      {plans.map((plan, index) => (
        <PlanListCard
          key={index}
          {...plan} // Usar spread para pasar todas las propiedades del objeto `plan`
           onSelect={() => onSelectPlan && onSelectPlan({ name: plan.name, price: plan.price })} // Callback para manejar la selección
        />
      ))}
    </div>
  );
}

export default PlanList;