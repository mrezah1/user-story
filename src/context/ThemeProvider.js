import React, { useState, useEffect, useContext } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
