import { create } from "zustand";
import { getUser } from "../../api/user";

interface FormState {
  formState: {
    name: string;
    lastName: string;
    birthDay: string;
    documentType: string;
    documentNumber: string;
    phone: string;
    privacyPolicy: boolean;
    communicationsPolicy: boolean;
  };
  setField: (field: keyof FormState["formState"], value: any) => void;
  validateForm: () => boolean;
  fetchUserData: () => Promise<void>;
}

const useFormStore = create<FormState>((set, get) => ({
  formState: {
    name: "",
    lastName: "",
    birthDay: "",
    documentType: "DNI",
    documentNumber: "",
    phone: "",
    privacyPolicy: false,
    communicationsPolicy: false,
  },
  setField: (field, value) =>
    set((state) => ({
      formState: {
        ...state.formState,
        [field]: value,
      },
    })),
  validateForm: () => {
    const { documentNumber, phone, privacyPolicy, communicationsPolicy } = get().formState;
    const isDocumentValid = /^[0-9]{8}$/.test(documentNumber); // DNI con 8 dígitos
    const isPhoneValid = /^[0-9]{9}$/.test(phone); // Teléfono con 9 dígitos
    return isDocumentValid && isPhoneValid && privacyPolicy && communicationsPolicy;
  },
  fetchUserData: async () => {
  try {
    console.log("Ejecutando fetchUserData...");
    const user = await getUser();
    console.log("Datos del usuario obtenidos:", user);

    set((state) => ({
      formState: {
        ...state.formState, // Mantener los valores actuales del formulario
        name: user.name || state.formState.name,
        lastName: user.lastName || state.formState.lastName,
        birthDay: user.birthDay || state.formState.birthDay,
        documentType: user.documentType || state.formState.documentType,
        documentNumber: state.formState.documentNumber, // Mantener el DNI ingresado
        phone: state.formState.phone, // Mantener el número de celular ingresado
        privacyPolicy: state.formState.privacyPolicy,
        communicationsPolicy: state.formState.communicationsPolicy,
      },
    }));
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw error; // Lanzar el error para manejarlo en el formulario
  }
},
}));

export default useFormStore;