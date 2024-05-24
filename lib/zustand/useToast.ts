import { create } from "zustand";

type ToastType = "default"|"error"|"success";
interface ToastState {
   state: Toast,
   showToast: (toast: Toast) => void;
   hideToast: () => void;
}

type Toast = {
    message?: string;
    title?: string;
    type: ToastType;
}

const useToast = create<ToastState>((set) => ({
  state: { type: "default" },
  showToast: (toast) => set((state) => ({
    state: { ...state.state, ...toast }
  })),
  hideToast: () => set(state => ({
    state: { ...state.state, message: undefined, title: undefined }
  })) 
}));

export default useToast;