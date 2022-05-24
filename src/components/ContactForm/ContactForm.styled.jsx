import styled from "styled-components";

export const StyledContactForm = styled.div``;

export const ContainerContactSession = styled.div`
  display: flex;
  height: 687px;
  width: 100%;
  padding-right: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
		height: auto;

  }
`;

export const Map = styled.div`
  background-image: url(/image/map.png);
  background-repeat: no-repeat;
  background-size: cover;
  cursor: url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default;
  height: 100%;
  width: 50%;
  touch-action: pan-x pan-y;

  @media (max-width: 991px) {
    width: 100%;
		flex-shrink: 0;
		flex-basis: 400px;
		margin-bottom: 32px;
  }
`;

export const ContainerForm = styled.div`
  width: 50%;
  padding-left: 50px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Heading = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.color.text};
`;

export const ShortDes = styled.p`
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.color.subText};
`;

export const LineInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ContainerIcon = styled.div`
  padding-right: 20px;
`;

export const InfoIcon = styled.i`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.subText};
`;

export const Info = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.color.subText};
`;

export const ContainerInput = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;
  width: 100%;

	@media (max-width: 686px) {
		grid-template-columns: auto ;
	}
`;

export const InputText = styled.input`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.text};
  padding: 12px 12px;
`;

export const InputArea = styled.textarea`
  display: block;
  margin: 30px 0;
  width: 100%;
  height: 208px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.text};
  padding: 12px 12px;
`;
