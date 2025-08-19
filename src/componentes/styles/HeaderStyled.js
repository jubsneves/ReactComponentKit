import styled from "styled-components";

export const HeaderStyled = styled.header`
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: ${({ theme }) => theme.spacing.xs};
  height: 60px;
  padding: 0px ${({ theme }) => theme.spacing.xxxl};
  margin: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.color.backgroundDefaultOpacity};
  color: ${({ theme }) => theme.color.primaryMain};
  border-radius: ${({ theme }) => theme.radius.md};
  backdrop-filter: blur(8px);
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xl};
  list-style: none;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.textSecondary};
  }
`;

export const NavItem = styled.li`
  font-weight: ${({ theme }) => theme.weight.light};
  font-size: ${({ theme }) => theme.size.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.backgroundPaper};
    transition: background 0.3s ease, transform 0.3s ease;
    a {
      color: ${({ theme }) => theme.color.textPrimary};
    }
  }
`;
