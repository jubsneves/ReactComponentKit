import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Tab = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.color.primaryMain};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.color.primaryMain};
  background-color: transparent;
  color: ${({ theme }) => theme.color.textPrimary};
  font-weight: ${({ theme }) => theme.weight.textPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryMain};
    transition: background 0.3s ease, transform 0.3s ease;
    color: ${({ theme }) => theme.color.primaryContrastText};
  }
`;
