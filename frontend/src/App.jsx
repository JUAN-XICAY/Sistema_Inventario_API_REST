import "./index.css";
import { createContext } from "react";
import { Dark, Light } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import { MyRoutes } from "./routers/routes";
import { useState } from "react";

export const ThemeContext = createContext(null);
export function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <MyRoutes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
