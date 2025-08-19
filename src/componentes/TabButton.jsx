import React from "react";
import { Tab } from "./styles/TabButtonStyled";

export default function TabButton({ label, onSelect }) {
  return <Tab onClick={onSelect}>{label}</Tab>;
}
