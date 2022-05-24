import styled from "styled-components";

export const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 190px;
  height: 180px;
  color: ${({ theme }) => theme.color.subWhite};
  cursor: pointer;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const TabItemIcon = styled.div`
  font-size: 3rem;
`;

export const TabItemContent = styled.div`
  font-size: 1.4rem;
  margin-top: 20px;
  letter-spacing: 0.7px;
  font-weight: 600;
`;

export const TabItemActive = styled(TabItem)`
  color: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;
