import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./componentes/styles/Theme";
import "./App.css";
import Header from "./componentes/Header";
import Global from "./componentes/styles/Global";
import TabButton from "./componentes/TabButton";
import HeroContent from './componentes/HeroContent';
import { TabContainer } from "./componentes/styles/TabButtonStyled";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState("");
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <ThemeProvider theme={isDarkMode ? Theme.dark : Theme.light}>
      <>
        <Global />
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HeroContent label="COMING SOON..."/>
        <TabContainer>
          <TabButton onSelect={() => handleSelect("UX/UI")} label="UX/UI" />
          <TabButton
            onSelect={() => handleSelect("Web development")}
            label="Web development"
          />
          <TabButton onSelect={() => handleSelect("Mobile")} label="Mobile" />
        </TabContainer>
        {selectedTab}
      </>
    </ThemeProvider>
  );
}

export default App;
