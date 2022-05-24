import styled from "styled-components";

export const StyledParallaxBanner = styled.div``;

export const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background-image: ${(props) => "url(" + props.src + ")"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
	background-attachment: fixed;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const BannerHeading = styled.h3`
  margin: 0;
  font-size: 5rem;
  line-height: 6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
	text-shadow: 1px 1px 3px #888;
`;

export const BannerContent = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.8rem;
  line-height: 2.5rem;
	font-weight: 500;
	text-shadow: 1px 1px 3px #888;
`;
