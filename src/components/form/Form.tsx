import "./form.scss";
import DocumentField from "../../shared/components/DocumentField/DocumentField";
import PhoneField from "../../shared/components/PhoneField/PhoneField";
import CheckboxField from "../../shared/components/CheckboxField/CheckboxField";
import useFormStore from "../../shared/store/useFormStore";
import useViewStore from "../../shared/store/useViewStore";

function Form() {
  const { validateForm, fetchUserData, formState } = useFormStore();
  const { setCurrentView } = useViewStore();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Formulario completo:", formState); // Mostrar todas las propiedades del formulario
  if (validateForm()) {
    try {
      await fetchUserData(); // Llamar a la API solo cuando el formulario sea válido
      setCurrentView("plans"); // Cambiar la vista a "plans"
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      alert("Hubo un problema al obtener los datos del usuario.");
    }
  } else {
    alert("Por favor, completa todos los campos correctamente.");
  }
};

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <DocumentField />
      </div>
      <div className="form__group">
        <PhoneField />
      </div>
      <CheckboxField name="privacyPolicy" label="Acepto la Política de Privacidad" />
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