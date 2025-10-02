import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "dark", // Default theme is now always dark
  // setTheme: () => {}, // Removed as theme switching is no longer available
});