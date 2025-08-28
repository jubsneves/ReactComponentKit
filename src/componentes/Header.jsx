import React from "react";
// import logoImg from '../assets/logo.png'
import { HeaderStyled, NavItems, NavItem, Logo, Brand } from "./styles/HeaderStyled";
import ButtonTheme from "./ButtonTheme";
import { Sun, Moon, Zap } from "lucide-react";

export default function Header({ isDarkMode, toggleTheme }) {
  return (
    <HeaderStyled>
      <Brand>
        <Logo>EletricBikes</Logo>
        <Zap />
      </Brand>
      <NavItems>
        <NavItem>
          <a href="/">See all bikes</a>
        </NavItem>
        <ButtonTheme
          name={isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          onClick={toggleTheme}
        />
      </NavItems>
    </HeaderStyled>
  );
}
