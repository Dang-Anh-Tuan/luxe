import styled from "styled-components";

export const StyledDisplayFacility = styled.div`
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ContainerDisplayFacility = styled.div`
  display: flex;
  width: 100%;
  height: 550px;
  margin-top: 42px;

  @media (max-width: 991px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  height: 100%;
  background-image: ${(props) => "url(" + props.image + ")"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 991px) {
    height: 550px !important;
  }
`;

export const ContainerContent = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding-left: 42px;

  @media (max-width: 991px) {
    width: 100%;
    padding: 0 42px;
  }
`;

export const LabelHeading = styled.div`
  margin-top: 12px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.subWhite};
`;

export const Heading = styled.div`
  margin-top: 16px;
  font-size: 3.5rem;
  line-height: 4rem;
  color: ${({ theme }) => theme.color.text};
`;

export const ShortDesc = styled.div`
  margin-top: 36px;
  font-size: 1.8rem;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.color.subText};
  line-height: 2.5rem;
`;

export const LabelTime = styled(LabelHeading)`
  position: absolute;
  bottom: 30px;

  @media (max-width: 991px) {
    position: relative;
    margin-top: 100px;
  }
`;

export const ContentTime = styled.strong`
  position: absolute;
  bottom: 5px;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: 991px) {
    position: relative;
    margin-top: 16px;
  }
`;
