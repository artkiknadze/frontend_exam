import React from "react";
import { ThemeSwitcher } from "./components/ThemeSwitcher.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { TextBox } from "./components/TextBox.tsx";
import { ThemeCurrent } from "./components/ThemeCurrent.tsx";

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <TextBox>Текст 1</TextBox>
        <TextBox>Текст 2</TextBox>
        <TextBox>Текст 3</TextBox>
        <ThemeCurrent />
      </div>
    </ThemeProvider>
  );
}
