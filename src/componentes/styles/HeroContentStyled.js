import styled from "styled-components";

export const HeroContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-family: 'anton', sans-serif;
  font-size: ${({ theme }) => theme.size.xl}
`;
