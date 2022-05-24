import styled from "styled-components";

export const ContainerSession = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px 0;
`;

export const ContainerSessionDark = styled(ContainerSession)`
  background-color: ${({ theme }) => theme.color.subWhite};
`;

export const ContainerSessionPrimary = styled(ContainerSession)`
  background-color: ${({ theme }) => theme.color.primary};
`;
