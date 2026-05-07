import React, { createContext, useContext } from "react";
import { theme as defaultTheme } from "./theme";

type Theme = typeof defaultTheme;

const ThemeContext = createContext<Theme>(defaultTheme);

type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: Theme;
};

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
