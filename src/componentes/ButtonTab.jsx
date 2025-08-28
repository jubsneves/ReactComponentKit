import React from "react";
import { ButtonTab } from "./styles/ButtonTabStyled";

export default function TabButton({ onSelect, icon: Icon, label, active }) {
  return (
    <ButtonTab onClick={onSelect} active={active}>
      <Icon />
      {label}
    </ButtonTab>
  );
}
