import useFormStore from "../../store/useFormStore";
import "./CheckboxField.scss";

interface CheckboxFieldProps {
  name: "privacyPolicy" | "communicationsPolicy";
  label: string;
}

function CheckboxField({ name, label }: CheckboxFieldProps) {
  const { formState, setField } = useFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    console.log(`${name}:`, checked); // Mostrar el valor en la consola
    setField(name, checked);
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