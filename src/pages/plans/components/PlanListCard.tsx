import PlanIcon from "../../../shared/components/Icons/PlanIcon";
import "./PlanListCard.scss";
import { usePlanStore } from "../../../shared/store/usePlanStore";

type PlanListCardProps = {
  name: string;
  price: number;
  description: string[];
  age: number;
  onSelect?: () => void; // Callback para manejar la selección del plan
};

function PlanListCard({ name, price, description, age, onSelect }: PlanListCardProps) {
  const { setSelectedPlan } = usePlanStore();

  const handleClick = () => {
    const selectedPlan = { name, price, description, age };
    console.log("Plan seleccionado:", selectedPlan); // Mostrar la información del plan seleccionado
    setSelectedPlan(selectedPlan); // Guardar el plan seleccionado en el store
  };

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
      <button
        className="plan-list-card__button"
        onClick={() => {
          console.log("Botón presionado para seleccionar el plan:", {
            name,
            price,
          });
          if (onSelect) {
            handleClick(); // Manejar la selección del plan
            onSelect(); // Ejecutar el callback si está definido
          }
        }}
      >
        Seleccionar Plan
      </button>
    </div>
  );
}

export default PlanListCard;
