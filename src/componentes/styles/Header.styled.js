import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.backgroundDefault};
  color: ${({ theme }) => theme.color.primaryMain};
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0px 120px;
  align-items: center;
  box-sizing: border-box;

  h1 {
    font-size: ${( {theme} ) => theme.fontSize.md};
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.primaryMain};
  height: 40px;
  width: 40px;
`

