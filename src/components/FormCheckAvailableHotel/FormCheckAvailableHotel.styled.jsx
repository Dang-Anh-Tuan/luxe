import styled from "styled-components";

export const ContainerForm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  top: -70px;

  @media (max-width: 768px) {
    height: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    height: auto;
  }
`;

export const StyledFormCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;

export const ContainerSelectHotel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 208px;
  height: 40px;
  margin: 16px 32px 16px 16px;
  padding: 0 12px;
  border: 1.5px solid ${({ theme }) => theme.color.white};
  color: ${(props) => (props.dropdownIsOpen ? "#ff5722" : "#fff")};
  background-color: ${(props) => (props.dropdownIsOpen ? "#fff" : "#ff5722")};
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 0;
  }

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    width: 100%;
    margin: 16px 0;
  }
`;

export const BoxResult = styled.div`
  display: flex;
  align-items: center;
  width: 208px;
  height: 40px;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const DropdownSelect = styled.div`
  display: ${(props) => (props.dropdownIsOpen ? "block" : "none")};
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  top: 100%;
  left: -1.5px;
  width: 208px;
  box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.1);
  z-index: 3;

  @media (max-width: 991px) {
    width: calc(100% + 3px);
  }
`;

export const DropdownItem = styled.div`
  color: ${({ theme }) => theme.color.subText};
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.color.subWhite};
  }
`;

export const WrapperSelectDate = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 0;
    flex-direction: column;
  }

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    width: 100%;
    margin: 16px 0;
    justify-content: space-between;
  }
`;

export const ContainerSelectDate = styled.p`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 12px 0 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 12px 16px 0;
  }

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    width: 48%;
    margin: 0;
  }
`;

export const ContainerLabel = styled.div`
  width: 100px;
`;

export const LabelFormCheck = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;

export const InputDateFromCheck = styled.input`
  width: 208px;
  height: 40px;
  border: 1.5px solid ${({ theme }) => theme.color.white};
  padding: 15px;
  background-color: ${({ theme }) => theme.color.primary};
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${(props) => (props.value ? "#fff" : "transparent")};
  outline: none;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex: 1;
  }

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    flex: 1;
  }
`;

export const ContainerIconButton = styled.div`
  position: relative;
  right: 12px;
  transition: 0.3s ease-in-out;
`;

export const ButtonCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 235px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.color.text};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #333;
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover ${ContainerIconButton} {
    position: relative;
    right: 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    width: 100%;
  }
`;

export const ContainerContentButton = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 1.6rem;
    margin-bottom: 4px;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }
`;
