import useFormStore from "../../store/useFormStore";
import "./DocumentField.scss";

function DocumentField() {
  const { formState, setField, validateField } = useFormStore();

  /*   const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Validar que solo se permitan números y limitar a 8 caracteres
    if (/^\d*$/.test(value) && value.length <= 8) {
      setField("documentNumber", value);
    }
  }; */

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setField("documentNumber", value);
    validateField("documentNumber", value); // Validar el campo
  };

  const handleDocumentTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setField("documentType", value);
  };

  return (
      <div className="document-field">
        <>
        <div className="document-field__wrapper">
          <div className="document-field__select-wrapper">
            <select
              value={formState.documentType}
              onChange={handleDocumentTypeChange}
              className="document-field__select"
            >
              <option value="DNI">DNI</option>
            </select>
          </div>
          <div className="document-field__input">
            <label>Nro. de documento</label>
            <input
              type="text"
              value={formState.documentNumber}
              onChange={handleDocumentChange}
              maxLength={8} 
            />
          </div>
        </div>
        </>
      </div>

  );
}

export default DocumentField;
