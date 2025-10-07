import Step from "./Step";
import useStepStore from "../../shared/store/useStepStore";
import "./Stepper.scss";
import BackIcon from "../../shared/components/Icons/BackIcon";
import StepsSeparator from "../../shared/components/SeparetorSteps/SeparetorSteps";
import useViewStore from "../../shared/store/useViewStore";

function Stepper() {
  const { resetAndGoHome } = useViewStore();
  const { currentStep } = useStepStore(); // Obtener el paso actual desde el store

  return (
    <div className="stepper">
      {/* Vista de escritorio */}
      <div className="stepper__desktop">
        <Step step={1} label="Planes y coberturas" isActive={currentStep === 1} />
        <StepsSeparator active={currentStep === 1} />
        <Step step={2} label="Resumen" isActive={currentStep === 2} />
      </div>

      {/* Vista móvil */}
      <div className="stepper__mobile">
        <div className="stepper__back">
           <button onClick={resetAndGoHome} >
            <BackIcon /> 
          </button>
        </div>
        <span className="stepper__text">Paso {currentStep} de 2</span>
        <div className="stepper__progress-bar">
          <div
            className="stepper__progress-bar__fill"
            style={{ width: `${(currentStep / 2) * 100}%` }} // Cálculo dinámico
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;