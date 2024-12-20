import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts.ts";

export const ThemeCurrent = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <p>
      Зараз ви використовуєте{" "}
      {themeContext.theme === "light" ? "світлу" : "темну"} тему.
    </p>
  );
};
