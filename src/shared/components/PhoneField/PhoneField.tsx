import useFormStore from "../../store/useFormStore";
import "./PhoneField.scss";

function PhoneField() {
  const { formState, setField, validateField } = useFormStore();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setField("phone", value);
    validateField("phone", value); 
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
          maxLength={9}
        />
      </div>
  );
}

export default PhoneField;
