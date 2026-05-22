import { create } from 'zustand';

export const useUIStore = create((set) => ({
  // Initialize theme from localStorage or default to "dark"

  theme: localStorage.getItem("theme") || "dark",

  toggleTheme: () =>
    set((state) => {
      // Toggle the theme and update localStorage accordingly
      const newTheme = state.theme === "dark" ? "light" : "dark";

      localStorage.setItem(
        // Update localStorage with the new theme
        "theme",
        newTheme,
      );

      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return {
        theme: newTheme,
      };
    }),
}));
