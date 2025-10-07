import PlanIcon from "../../../shared/components/Icons/PlanIcon";
import "./PlanListCard.scss";

type PlanListCardProps = {
  name: string;
  price: number;
  description: string[];
  age?: number;
  onSelect?: () => void; // Callback para manejar la selección del plan
};

function PlanListCard({ name, price, description, onSelect }: PlanListCardProps) {
  return (
    <div className="plan-list-card">
      <div className="plan-list-card__header">
        <div className="plan-list-card__header-container">
          <h3>{name}</h3>
          <h6>COSTO DEL PLAN</h6>
          <h4>S/{price} al mes</h4>
        </div>
        <PlanIcon />
      </div>
      <div className="plan-list-card__content">
        <ul>
          {description.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
      <button className="plan-list-card__button" onClick={onSelect}>
        Seleccionar Plan
      </button>
    </div>
  );
}

export default PlanListCard;