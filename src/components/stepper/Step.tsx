import "./Step.scss";

interface StepProps {
  step: number;
  label: string;
  isActive: boolean;
}

function Step({ step, label, isActive }: StepProps) {
  return (
    <div className="step">
      <span className={`step__circle ${isActive ? "step__circle--active" : ""}`}>
        {step}
      </span>
      <span className={`step__label ${isActive ? "step__label--active" : ""}`}>
        {label}
      </span>
    </div>
  );
}

export default Step;