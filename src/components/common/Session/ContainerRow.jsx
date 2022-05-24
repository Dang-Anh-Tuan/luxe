import styled from "styled-components";

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 24px;
  }
`;
