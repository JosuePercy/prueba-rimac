import "./PlanListCard.scss";
import PlanIcon from "../../../shared/components/Icons/PlanIcon";
import { usePlanStore } from "../../../shared/store/usePlanStore";

type PlanListCardProps = {
  name: string;
  price: number;
  originalPrice?: number; 
  description: string[];
  age: number;
  onSelect?: () => void;
};

function PlanListCard({ name, price, originalPrice, description, age, onSelect }: PlanListCardProps) {
  const { setSelectedPlan } = usePlanStore();

  const handleClick = () => {
    const selectedPlan = { name, price, description, age };
    setSelectedPlan(selectedPlan);
  };

  return (
    <div className="plan-list-card">
      <div className="plan-list-card__header">
        <div className="plan-list-card__header-container">
          <h3 className="plan-list-card__name">{name}</h3>
          <h6 className="plan-list-card__cost-label">COSTO DEL PLAN</h6>
          {originalPrice && (
            <h5 className="plan-list-card__original-price">S/{originalPrice} antes</h5>
          )}
          <h4 className="plan-list-card__price">S/{price} al mes</h4>
        </div>
        <PlanIcon />
      </div>
      <div className="plan-list-card__content">
        <ul className="plan-list-card__description">
          {description.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
      <button
        className="plan-list-card__button"
        onClick={() => {
          if (onSelect) {
            handleClick();
            onSelect();
          }
        }}
      >
        Seleccionar Plan
      </button>
    </div>
  );
}

export default PlanListCard;