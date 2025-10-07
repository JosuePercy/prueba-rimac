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
import useViewStore from "../../shared/store/useViewStore";

function Plans() {
  const { filteredPlans, setSelectedOption, setUserAge } = usePlanStore();
  const { setCurrentView, resetAndGoHome } = useViewStore();
  const { formState } = useFormStore();

  const [selectedPlan, setSelectedPlan] = useState<"me" | "other" | null>(null);

  usePlans();

  useEffect(() => {
    setUserAge(70); // Cambia este valor según la lógica de tu aplicación
  }, [setUserAge]);

  const handleSelectPlanType = (planType: "me" | "other") => {
    setSelectedPlan(planType);
    setSelectedOption(planType);
  };

  const handleSelectPlanDetails = (plan: { name: string; price: number }) => {
      console.log("Plan seleccionado para redirecciónsssssss:", plan); // Verificar que la función se ejecuta
    setSelectedOption(plan.name);
    setCurrentView("summary");
  };

  return (
    <main className="cotization">
      <div className="cotization__back">
        <button onClick={resetAndGoHome}>
          <BackIcon color="#4f4fff" />
          <span>Volver</span>
        </button>
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
          selected={selectedPlan === "me"}
          onSelect={() => handleSelectPlanType("me")}
        />
      </div>
      <div className="cotization__containerother">
        <PlanCard
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          icon={<CotizationOtherIcon />}
          selected={selectedPlan === "other"}
          onSelect={() => handleSelectPlanType("other")}
        />
      </div>
      {filteredPlans.length > 0 && (
        <div className="cotization__plans">
          <PlanList plans={filteredPlans} onSelectPlan={handleSelectPlanDetails} />
        </div>
      )}
    </main>
  );
}

export default Plans;