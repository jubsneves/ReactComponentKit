import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.3s ease;

  svg {
    color: ${({ theme }) => theme.color.primaryMain};
    transition: transform 0.5s ease, color 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primaryLight};
    transform: scale(1.1);
  }

  &:active svg {
    transform: rotate(360deg);
  }
`;
