import useFormStore from "../../store/useFormStore";
import "./PhoneField.scss";

function PhoneField() {
  const { formState, setField } = useFormStore();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("phone:", value); // Mostrar el valor en la consola
    setField("phone", value);
  };

  return (
    <div className="phone-field">
      <label htmlFor="phone">Celular</label>
      <input
        type="text"
        id="phone"
        value={formState.phone}
        onChange={handlePhoneChange}
        className="phone-field__input"
        placeholder="Ingrese su número de celular"
      />
    </div>
  );
}

export default PhoneField;