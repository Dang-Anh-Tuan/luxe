import styled from "styled-components";

export const ContainerSlider = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.srcImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s ease-in-out all;
`;

export const SliderContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.4);
  transition: 0.3s ease-in-out all;
`;

export const NameHotel = styled.div`
  & {
    position: relative;
    color: ${({ theme }) => theme.color.subWhite};
    font-size: 2.8rem;
    line-height: 2.8rem;
    margin-bottom: 60px;
    transition: 0.3s ease-in-out all;

    @media (max-width: 991px) {
      font-size: 2.5rem;
    }
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    border-bottom: 1px solid ${({ theme }) => theme.color.subWhite};
    top: 0px;
    left: -2px;
  }

  &::after {
    bottom: 0px;
    left: -2px;
  }
`;

export const SloganSlider = styled.div`
  font-size: 5rem;
  line-height: 5rem;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 50px;

  @media (max-width: 991px) {
    text-align: center;
    font-size: 3rem;
  }
`;

export const ContainerButtonSlider = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  bottom: 150px;
  right: 40px;
  width: 20px;
  height: 40px;
  z-index: 2;
`;

export const ButtonSlider = styled.input`
  width: 40px;
  margin: 8px 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0) !important;

  &::after {
    content: "";
    background-color: ${({ theme }) => theme.color.subText};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    left: 10px;
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  &:checked::after {
    background-color: ${({ theme }) => theme.color.text};
    border-color: ${({ theme }) => theme.color.white};
  }
`;
