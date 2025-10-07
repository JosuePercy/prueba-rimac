import "./form.scss";
import DocumentField from "../../shared/components/DocumentField/DocumentField";
import PhoneField from "../../shared/components/PhoneField/PhoneField";
import CheckboxField from "../../shared/components/CheckboxField/CheckboxField";
import useFormStore from "../../shared/store/useFormStore";
import useViewStore from "../../shared/store/useViewStore";

function Form() {
  const { validateForm, fetchUserData, formState, errors } = useFormStore(); 

  const { setCurrentView } = useViewStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    if (validateForm()) {
      try {
        await fetchUserData(); 
        setCurrentView("plans"); 
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.values(errors).length > 0 && (
        <div className="form__errors">
          {errors.documentNumber && <p>{errors.documentNumber}</p>}
          {errors.phone && <p>{errors.phone}</p>}
          {errors.privacyPolicy && <p>{errors.privacyPolicy}</p>}
          {errors.communicationsPolicy && <p>{errors.communicationsPolicy}</p>}
        </div>
      )}
      <div className="form__group">
        <DocumentField />
      </div>
      <div className="form__group">
        <PhoneField />
      </div>
      <CheckboxField
        name="privacyPolicy"
        label="Acepto la Política de Privacidad"
      />
      <CheckboxField
        name="communicationsPolicy"
        label="Acepto la Política Comunicaciones Comerciales"
      />
      <h5 className="form__policy-title">Aplican Términos y Condiciones.</h5>
      <button type="submit" className="form__submit">
        Cotiza aquí
      </button>
    </form>
  );
}

export default Form;
