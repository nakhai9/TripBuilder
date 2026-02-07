import { create } from "zustand";

type GlobalStore = {
  isLoading: boolean;
  description?: string;
  setIsLoading: (loading: boolean) => void;
  setConfiguration: (config: {
    description: string;
    [key: string]: string;
  }) => void;
};
export const useGlobalStore = create<GlobalStore>((set) => ({
  isLoading: false,
  description: undefined,
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  setConfiguration: (config) => set(config),
}));
