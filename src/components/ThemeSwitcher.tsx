import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts.ts";

export const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <button onClick={() => themeContext.toggleTheme()}>
      Змінити тему на {themeContext.theme === "light" ? "темну" : "світлу"}
    </button>
  );
};
