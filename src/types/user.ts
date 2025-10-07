export interface User {
  name: string;
  lastName: string;
  birthDay: string; // formato DD-MM-YYYY
  documentType: string; // Ejemplo: DNI o CE
  documentNumber: string; // Número de documento
  phone: string; // Número de celular
}