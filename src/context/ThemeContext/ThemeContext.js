import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  const [isChecked, setIsChecked] = useState(storedTheme === "light");
  const [themeChanged, setThemeChanged] = useState(false);

  const handleChange = (e) => {
    const checked = e.target.checked;
    const newTheme = checked ? "light" : "dark";
    setIsChecked(checked);
    setTheme(newTheme);
    setThemeChanged(true);

    //localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (themeChanged) {
      setTimeout(() => {
        setThemeChanged(false);
      }, 500);
    }
  }, [themeChanged]);

  const data = {
    theme,
    handleChange,
    isChecked,
    themeChanged,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
