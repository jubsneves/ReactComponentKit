import React from "react";
import logoImg from '../assets/logo.png'
import { HeaderStyled, Logo, Nav } from "./styles/Header.styled";
import ButtonTheme from "./ButtonTheme";
import { Sun, Moon } from "lucide-react";


export default function Header({ isDarkMode, toggleTheme }) {
  return (
    <HeaderStyled>
      <Logo src={logoImg} />
      <h1>React Component Kit</h1>
      <Nav />
      <ButtonTheme
        name={isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        onClick={toggleTheme}
      />
    </HeaderStyled>
  );
}
