import React from "react";
import { Tab } from "./styles/TabButtonStyled";

export default function TabButton({ onSelect, icon: Icon, label, active }) {
  return (
    <Tab onClick={onSelect} active={active}>
      <Icon />
      {label}
    </Tab>
  );
}
