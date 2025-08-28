import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./componentes/styles/Theme";
import { UnfoldHorizontal, Mountain, PlugZap } from "lucide-react";
import Global from "./componentes/styles/Global";
import Header from "./componentes/Header";
import HeroContent from "./componentes/HeroContent";
import ButtonTab from "./componentes/ButtonTab";
import { TabContainer } from "./componentes/styles/ButtonTabStyled";
import { EXAMPLES } from "./data-hero";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState("hybridBikes");
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const tabs = [
    {
      key: "hybridBikes",
      label: "Hybrid Bikes",
      icon: PlugZap,
    },
    {
      key: "mountainBikes",
      label: "Mountain Bikes",
      icon: PlugZap,
    },
    {
      key: "foldingBikes",
      label: "Folding Bikes",
      icon: PlugZap,
    },
  ];

  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <ThemeProvider theme={isDarkMode ? Theme.dark : Theme.light}>
      <>
        <Global />
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HeroContent content={EXAMPLES[selectedTab]} />
        <TabContainer>
          {tabs.map((tab) => (
            <ButtonTab
              onSelect={() => handleSelect(tab.key)}
              icon={tab.icon}
              label={tab.label}
              active={selectedTab === tab.key}
              key={tab.key}
            />
          ))}
        </TabContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
