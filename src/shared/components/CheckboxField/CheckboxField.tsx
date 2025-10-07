import useFormStore from "../../store/useFormStore";
import "./CheckboxField.scss";

interface CheckboxFieldProps {
  name: "privacyPolicy" | "communicationsPolicy";
  label: string;
}

function CheckboxField({ name, label }: CheckboxFieldProps) {
  const { formState, setField, validateField } = useFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setField(name, checked);
    validateField(name, checked); // Validar el campo al cambiar su valor
  };

  return (
    <div className="checkbox-field">
      <input
        type="checkbox"
        id={name}
        checked={formState[name]}
        onChange={handleChange}
        className="checkbox-field__input"
      />
      <label htmlFor={name} className="checkbox-field__label">
        {label}
      </label>
    </div>
  );
}

export default CheckboxField;