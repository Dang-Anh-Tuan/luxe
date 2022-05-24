import styled from "styled-components";

export const StyledListService = styled.div``;

export const ServiceItem = styled.div`
  display: flex;
  min-height: 380px;
  padding: 0 20px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-basis: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.subWhite};
`;

export const ServiceIcon = styled.i`
  font-size: 3rem;
  color: ${({ theme }) => theme.color.primary};
`;

export const ContainerContent = styled.div`
  padding-left: 12px;
`;

export const ServiceHeading = styled.h3`
  margin: 0;
  font-size: 2.4rem;
  line-height: 2.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.text};
`;

export const ServiceContent = styled.p`
  margin-top: 24px;
  font-size: 1.8rem;
  line-height: 2.5rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.subText};
`;
