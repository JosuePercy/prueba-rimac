import useFormStore from "../../store/useFormStore";
import "./DocumentField.scss";

function DocumentField() {
  const { formState, setField } = useFormStore();

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("documentNumber:", value); // Mostrar el valor en la consola
    setField("documentNumber", value);
  };

  const handleDocumentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log("documentType:", value); // Mostrar el valor en la consola
    setField("documentType", value);
  };

  return (
    <div className="document-field">
      <div className="document-field__wrapper">
        <div className="document-field__select-wrapper">
          <select
            value={formState.documentType}
            onChange={handleDocumentTypeChange}
            className="document-field__select"
          >
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="document-field__input">
          <label>Nro. de documento</label>
          <input
            type="text"
            value={formState.documentNumber}
            onChange={handleDocumentChange}
            placeholder="987654321"
          />
        </div>
      </div>
    </div>
  );
}

export default DocumentField;