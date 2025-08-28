import styled from "styled-components";

const shouldForwardProp = (prop) => prop !== "active";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ButtonTab = styled.button.withConfig({ shouldForwardProp })`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ active, theme }) =>
    active ? theme.color.primaryMain : "transparent"};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.primaryMain};
  color: ${({ theme, active }) =>
    active ? theme.color.backgroundDefault : theme.color.textPrimary};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  align-items: center;
  display: flex;
  gap: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryMain};
    transition: background 0.3s ease, transform 0.3s ease;
    color: ${({ theme, dark }) =>
      dark ? theme.color.textPrimary : theme.color.backgroundDefault};
  }
`;
