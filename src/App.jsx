import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./componentes/styles/Theme";
import "./App.css";
import Header from "./componentes/Header";
import Global from "./componentes/styles/Global";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? Theme.dark : Theme.light}>
      <>
        <Global />
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
