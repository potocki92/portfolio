import React, { createContext, useContext, useCallback, useMemo, useState, memo } from "react";

type ThemeContextType = "light" | "dark";
interface ThemeContextProps {
  theme: ThemeContextType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = memo(({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ThemeContextType>(() => {
    const localStorageTheme = localStorage.getItem("theme");
    return (localStorageTheme as ThemeContextType) || "light";
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return useMemo(
    () => <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>,
    [contextValue, children],
  );
});
