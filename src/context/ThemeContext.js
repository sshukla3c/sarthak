import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // If no saved preference, check system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (systemPrefersDark) {
      return "dark";
    }

    // If no system preference, check time of day
    const currentHour = new Date().getHours();
    return currentHour >= 18 || currentHour < 6 ? "dark" : "light";
  });

  const [color, setColor] = useState(() => {
    const savedColor = localStorage.getItem("themeColor");
    return savedColor || "blue";
  });

  useEffect(() => {
    // Update document class when theme changes
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Save color preference and update root element
    localStorage.setItem("themeColor", color);
    document.documentElement.setAttribute("data-theme-color", color);
  }, [color]);

  // Function to get the current theme color
  const getThemeColor = () => {
    return color;
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Function to set specific theme
  const setSpecificTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Function to set theme color
  const setThemeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        color,
        toggleTheme,
        setSpecificTheme,
        setThemeColor,
        getThemeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
