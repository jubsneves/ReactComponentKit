import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./componentes/styles/Theme";
import { UnfoldHorizontal, Mountain, PlugZap } from "lucide-react";
import Global from "./componentes/styles/Global";
import Header from "./componentes/Header";
import HeroContent from "./componentes/HeroContent";
import TabButton from "./componentes/TabButton";
import { TabContainer } from "./componentes/styles/TabButtonStyled";
import { EXAMPLES } from "./data-hero";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState("hybridBikes");
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <ThemeProvider theme={isDarkMode ? Theme.dark : Theme.light}>
      <>
        <Global />
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HeroContent data={EXAMPLES[selectedTab]} />
        <TabContainer>
          <TabButton
            onSelect={() => handleSelect("hybridBikes")}
            icon={PlugZap}
            label="Hybrid Bikes"
            active={selectedTab === "hybridBikes"}
          />
          <TabButton
            onSelect={() => handleSelect("mountainBikes")}
            icon={Mountain}
            label="Mountain Bikes"
            active={selectedTab === "mountainBikes"}
          />
          <TabButton
            onSelect={() => handleSelect("foldingBikes")}
            icon={UnfoldHorizontal}
            label="Folding Bikes"
            active={selectedTab === "foldingBikes"}
          />
        </TabContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
