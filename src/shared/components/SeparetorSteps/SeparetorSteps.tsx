import "./SeparetorSteps.scss";

type StepsSeparatorProps = {
  active?: boolean;
};

function StepsSeparator({ active }: StepsSeparatorProps) {
  const classStepsSeparator = active
    ? "stepsseparator stepsseparator__active"
    : "stepsseparator";

  return (
    <div className={classStepsSeparator}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default StepsSeparator;