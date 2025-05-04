import { create } from "zustand";

export const useTheme = create((set) => ({
    isDarkMode: true,
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
