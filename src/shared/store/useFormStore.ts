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
  errors: {
    documentNumber?: string;
    phone?: string;
    privacyPolicy?: string;
    communicationsPolicy?: string;
  };
  setField: (field: keyof FormState["formState"], value: any) => void;
  validateField: (field: keyof FormState["formState"], value: any) => void;
  validateForm: () => boolean;
  fetchUserData: () => Promise<void>;
  resetForm: () => void;
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
  errors: {}, 

  setField: (field, value) =>
    set((state) => ({
      formState: {
        ...state.formState,
        [field]: value,
      },
    })),

  validateField: (field, value) => {
  const errors = { ...get().errors };

  if (field === "documentNumber") {
    if (!/^\d{8}$/.test(value)) {
      errors.documentNumber = "Debe tener 8 dígitos.";
    } else {
      delete errors.documentNumber;
    }
  }

  if (field === "phone") {
    if (!/^\d{9}$/.test(value)) {
      errors.phone = "Debe tener 9 dígitos.";
    } else {
      delete errors.phone;
    }
  }

  if (field === "privacyPolicy") {
    if (!value) {
      errors.privacyPolicy = "Debes aceptar la Política de Privacidad.";
    } else {
      delete errors.privacyPolicy;
    }
  }

  if (field === "communicationsPolicy") {
    if (!value) {
      errors.communicationsPolicy = "Debes aceptar las Comunicaciones Comerciales.";
    } else {
      delete errors.communicationsPolicy;
    }
  }

  set({ errors });
},

  validateForm: () => {
    const { documentNumber, phone, privacyPolicy, communicationsPolicy } = get().formState;
    const isDocumentValid = /^\d{8}$/.test(documentNumber);
    const isPhoneValid = /^\d{9}$/.test(phone);
    const isPrivacyPolicyAccepted = privacyPolicy;
    const isCommunicationsPolicyAccepted = communicationsPolicy;

    const errors = {
      documentNumber: isDocumentValid ? undefined : "Debe tener 8 dígitos.",
      phone: isPhoneValid ? undefined : "Debe tener 9 dígitos.",
      privacyPolicy: isPrivacyPolicyAccepted ? undefined : "Debes aceptar la Política de Privacidad.",
      communicationsPolicy: isCommunicationsPolicyAccepted ? undefined : "Debes aceptar las Comunicaciones Comerciales.",
    };

    set({ errors }); 
    return isDocumentValid && isPhoneValid && isPrivacyPolicyAccepted && isCommunicationsPolicyAccepted;
  },

  fetchUserData: async () => {
    try {
      const user = await getUser();

      set((state) => ({
        formState: {
          ...state.formState,
          name: user.name || state.formState.name,
          lastName: user.lastName || state.formState.lastName,
          birthDay: user.birthDay || state.formState.birthDay,
          documentType: user.documentType || state.formState.documentType,
          documentNumber: state.formState.documentNumber,
          phone: state.formState.phone,
          privacyPolicy: state.formState.privacyPolicy,
          communicationsPolicy: state.formState.communicationsPolicy,
        },
      }));
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      throw error;
    }
  },

  resetForm: () =>
    set(() => ({
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
      errors: {}, 
    })),
}));

export default useFormStore;