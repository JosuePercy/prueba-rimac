import "./Summary.scss";

import useFormStore from "../../shared/store/useFormStore";
import BackIcon from "../../shared/components/Icons/BackIcon";
import { usePlanStore } from "../../shared/store/usePlanStore";
import UserSummaryIcon from "../../shared/components/Icons/UserSummary";
import useViewStore from "../../shared/store/useViewStore";

function Summary() {
  const { formState } = useFormStore();
  const{ resetAndGoHome} = useViewStore()
  const { selectedPlan } = usePlanStore(); // Acceder al plan seleccionado directamente
  // Mostrar en consola la información que se está trayendo
  console.log("Información del formulario:", formState);
  console.log("Plan seleccionado:", selectedPlan);

  return (
    <main className="summary">
      <div className="summary__back">
        <div className="summary__back_container">
          <button onClick={resetAndGoHome}>
            <BackIcon color="#4f4fff" />
            <span color="#4f4fff">Volver</span>
          </button>
        </div>
      </div>
      <div className="summary__title">
        <h1 className="summary__title__text">Resumen del seguro</h1>
      </div>
      <div className="summary__card">
        <div className="summary__header">
          <span className="summary__subtitle">PRECIOS CALCULADOS PARA:</span>
          <h2 className="summary__name">
            <UserSummaryIcon />
            {formState.name} {formState.lastName}
          </h2>
        </div>
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
