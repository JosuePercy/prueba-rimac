import  { useEffect, useState } from "react";
import "./Plans.scss";
import BackIcon from "../../shared/components/Icons/BackIcon";
import { usePlanStore } from "../../shared/store/usePlanStore";
import { usePlans } from "../../hooks/usePlans";
import PlanList from "./components/PlanList";
import PlanCard from "./components/PlanCard";
import CotizationMeIcon from "../../shared/components/Icons/CotizationMe";
import CotizationOtherIcon from "../../shared/components/Icons/CotizationOther";
import useFormStore from "../../shared/store/useFormStore";

function Plans() {
  const { filteredPlans, setSelectedOption, setUserAge } = usePlanStore();
  const { formState } = useFormStore();

  const [selectedPlan, setSelectedPlan] = useState<"me" | "other" | null>(null); // Estado local para manejar la selección
  // Ejecutar la lógica del hook usePlans dentro de useEffect
    
  usePlans()

  // Establecer la edad del usuario al montar el componente
  useEffect(() => {
    setUserAge(70); // Cambia este valor según la lógica de tu aplicación
  }, [setUserAge]);

  const handleSelectPlan = (plan: "me" | "other") => {
    setSelectedPlan(plan); // Actualizar el estado local
    setSelectedOption(plan); // Actualizar el store
  };

  return (
    <main className="cotization">
      <div className="cotization__back">
        <button>
          <BackIcon color="#4f4fff" />
        </button>
        <span>Volver</span>
      </div>
      <div className="cotization__nameuser">
        <h1>{formState.name} ¿Para quién deseas cotizar?</h1>
        <h5>Selecciona la opción que se ajuste más a tus necesidades.</h5>
      </div>
      <div className="cotization__containerme">
        <PlanCard
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          icon={<CotizationMeIcon />}
          selected={selectedPlan === "me"} // Verificar si este plan está seleccionado
          onSelect={() => handleSelectPlan("me")} // Manejar la selección
        />
      </div>
      <div className="cotization__containerother">
        <PlanCard
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          icon={<CotizationOtherIcon />}
          selected={selectedPlan === "other"} // Verificar si este plan está seleccionado
          onSelect={() => handleSelectPlan("other")} // Manejar la selección
        />
      </div>
      {filteredPlans.length > 0 && (
        <div className="cotization__plans">
          <PlanList plans={filteredPlans} />
        </div>
      )}
    </main>
  );
}

export default Plans;