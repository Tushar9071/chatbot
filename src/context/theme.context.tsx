import React, { createContext, useContext, useEffect, useState } from "react";
import themejson from "../assets/theme.json";

interface themeOfJson {
  id: number;
  color: string;
  font: string;
  name: string;
}

interface ThemeContextType {
  themeNo: number;
  setThemeNo: React.Dispatch<React.SetStateAction<number>>;
  currentTheme: themeOfJson;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeNo, setThemeNo] = useState<number>(1);
  const theme = themejson.find((theme: themeOfJson) => theme.id === themeNo);
  const [currentTheme, setCurrentTheme] = useState<themeOfJson>(
    theme || themejson[0]
  );

  useEffect(() => {
    const theme = themejson.find((theme: themeOfJson) => theme.id === themeNo);
    setCurrentTheme(theme || themejson[0]);
  }, [themeNo]);

  return (
    <ThemeContext.Provider value={{ themeNo, setThemeNo, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
