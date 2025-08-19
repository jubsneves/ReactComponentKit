import React from "react";

import { StyledButton } from "./styles/StyledButton";


export default function ButtonTheme({onClick, name}) {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
}
