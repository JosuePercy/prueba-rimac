import "./Summary.scss";
import useFormStore from "../../shared/store/useFormStore";
import BackIcon from "../../shared/components/Icons/BackIcon";
import { usePlanStore } from "../../shared/store/usePlanStore";

function Summary() {
  const { formState } = useFormStore();
  const { selectedPlan } = usePlanStore(); // Acceder al plan seleccionado directamente

  // Mostrar en consola la información que se está trayendo
  console.log("Información del formulario:", formState);
  console.log("Plan seleccionado:", selectedPlan);

  return (
    <main className="summary">
      <div className="summary__back">
        <button>
          <BackIcon color="#4f4fff" />
        </button>
        <span>Volver</span>
      </div>
      <h1 className="summary__title">Resumen del seguro</h1>
      <div className="summary__card">
        <h5 className="summary__subtitle">PRECIOS CALCULADOS PARA:</h5>
        <h2 className="summary__name">
          <span className="summary__icon">👤</span>
          {formState.name} {formState.lastName}
        </h2>
        <div className="summary__info">
          <h5>Responsable de pago</h5>
          <p>DNI: {formState.documentNumber}</p>
          <p>Celular: {formState.phone}</p>
        </div>
        {selectedPlan && (
          <div className="summary__plan">
            <h5>Plan elegido</h5>
            <p>{selectedPlan.name}</p>
            <p>Costo del Plan: S/{selectedPlan.price} al mes</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Summary;