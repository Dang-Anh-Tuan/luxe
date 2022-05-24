import styled from "styled-components";

export const StyledFeatureHotel = styled.div`

`;


export const RowFeature = styled.div`
  display: flex;
  @media (max-width: 991px) {
      flex-direction: column;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: ${(props) => (props.reserveContent ? "row-reverse" : "row")};
  margin-bottom: 32px;

  @media (max-width: 991px) {
      flex-direction: column;
  }
`;

export const ImageHotelLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  transform: scale(0, 1);
  transition: 0.1s all linear;
  transform-origin: right;
  width: 180px;
  height: 80px;

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  p {
    color: ${({ theme }) => theme.color.white};
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;

export const ContainerImageHotel = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  &:hover ${ImageHotelLabel} {
    transform: scale(1, 1);
  }

  @media (max-width: 991px) {
    width: 100%;
    height: 400px;
  }
`;

export const ImageHotel = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => "url(" + props.src + ")"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerContent = styled.div`
  width: 50%;
  padding: 56px;
  background-color: ${({ theme }) => theme.color.white};


  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const NameHotel = styled.p`
  color: ${({ theme }) => theme.color.text};
  margin: 0 0 16px 0;
  font-size: 2.5rem;
  line-height: 2rem;
`;

export const ShortDesc = styled.p`
  color: ${({ theme }) => theme.color.subText};
  font-size: 2rem;
  line-height: 3rem;
  margin: 0 0 32px 0;
`;

export const ContainerIcon = styled.div`
  position: absolute;
  right: -40px;
  opacity: 1;
  top: 50%;
  transform: translateY(-45%);
  transition: 0.2s all linear;
  z-index: 1;

  svg {
    font-size: 2rem;
  }
`;

export const ContainerButtonContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
  font-size: 1.6rem;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: calc(100% + 4px);
    background-color: ${({ theme }) => theme.color.text};
    top: -2px;
    right: -27px;
    transform: scale(0, 1);
    transform-origin: left;
    transition: 0.2s all linear;
  }

  &:hover::after {
    transform: scale(1, 1);
  }
  &:hover ${ContainerIcon} {
    right: -20px;
  }
`;
