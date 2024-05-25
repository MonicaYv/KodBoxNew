import { create } from "zustand";

interface ConfirmationState {
   state: ConfirmationAsk,
   ask: (question: ConfirmationAsk) => void;
}

type ConfirmationAsk = {
    title?: string;
    description: string;
    onConfirm?: () => void;
}

const useConfirm = create<ConfirmationState>((set) => ({
  state: { title: "Confirm?", description: "", },
  ask: (question) => set((state) => ({
    state: { ...state.state, ...question },
  }))  
}));

export default useConfirm;