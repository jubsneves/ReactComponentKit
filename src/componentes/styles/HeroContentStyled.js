import styled from "styled-components";

export const HeroContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "anton", sans-serif;
  font-size: ${({ theme }) => theme.size.xl};
  width: 100%;
  height: 400px;
  margin-top: -40px;
  position: relative;
  gap: 50px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.color.primaryContrastText};
  margin-bottom: ${({ theme }) => theme.spacing.xxs}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.primaryContrastText};
  font-size: ${({ theme }) => theme.size.md}
`;

export const Image = styled.img`
  height: 250px;
`;

export const Shape = styled.span`
  content: "";
  position: absolute;
  right: 0;
  top: -60px;
  z-index: -1;
  width: 50%;
  height: 400px;
  background-color: ${({ theme }) => theme.color.primaryLight};
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%);
`;
