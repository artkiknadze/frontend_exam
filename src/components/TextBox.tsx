import React, { ReactNode } from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts.ts";

interface TextBoxProps {
  children: ReactNode;
}

export const TextBox: React.FC<TextBoxProps> = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={
        "textbox " + (themeContext.theme === "dark" ? "textbox-dark" : "")
      }
    >
      {children}
    </div>
  );
};
