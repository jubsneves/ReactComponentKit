import React from "react";
import logoImg from '../assets/logo.png'
import { HeaderStyled, NavItems, NavItem, Logo } from "./styles/HeaderStyled";
import ButtonTheme from "./ButtonTheme";
import { Sun, Moon } from "lucide-react";


export default function Header({ isDarkMode, toggleTheme }) {
  return (
    <HeaderStyled>
      <Logo src={logoImg} />
      <NavItems>
        <NavItem><a href="/">About Me</a></NavItem>
        <NavItem><a href="/">Experience</a></NavItem>
        <NavItem><a href="/">Projects</a></NavItem>
      </NavItems>
      <ButtonTheme
        name={isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        onClick={toggleTheme}
      />
    </HeaderStyled>
  );
}
