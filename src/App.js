import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Splash from "./Components/SplashScreen";

const LightTheme = {
  pageBackground: "white",
  titleColor: "black",
  tagLineColor: "red",
};

const DarkTheme = {
  pageBackground: "black",
  titleColor: "white",
  tagLineColor: "green",
};

const themes = { light: LightTheme, dark: DarkTheme };


function App() {
  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme}></Splash>
    </ThemeProvider>
  );
}

export default App;
