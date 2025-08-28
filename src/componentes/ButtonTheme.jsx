import React from "react";

import { ButtonThemeStyled } from "./styles/ButtonThemeStyled";


export default function ButtonTheme({onClick, name}) {
  return <ButtonThemeStyled onClick={onClick}>{name}</ButtonThemeStyled>;
}
 