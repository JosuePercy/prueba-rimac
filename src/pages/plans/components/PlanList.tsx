import "./PlanList.scss";
import PlanListCard from "./PlanListCard";

type PlanListProps = {
  plans: {
    name: string;
    price: number;
    description: string[];
    age: number;
  }[];
  onSelectPlan?: (plan: { name: string; price: number }) => void;
};

function PlanList({ plans, onSelectPlan }: PlanListProps) {
  return (
    <div className="plan-list">
      {plans.map((plan, index) => (
        <PlanListCard
          key={index}
          {...plan}
          onSelect={() => onSelectPlan && onSelectPlan({ name: plan.name, price: plan.price })} 
        />
      ))}
    </div>
  );
}

export default PlanList;