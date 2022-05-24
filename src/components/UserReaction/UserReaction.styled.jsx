import styled from "styled-components";

export const StyledUserReaction = styled.div``;

export const ContainerReactionItem = styled.div`
  width: 100%;
  min-height: 240px;
`;

export const ContainerReactionContent = styled.div`
  position: relative;
  min-height: 168px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 28px;

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 15px 15px;
    border-color: ${({ theme }) => theme.color.white} transparent transparent
      transparent;
    bottom: -30px;
    left: 20px;
  }
`;

export const ReactionContent = styled.p`
  margin: 0;
  font-size: 1.6rem;
  line-height: 3rem;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.color.text};
`;

export const ContainerNameReaction = styled.div`
  margin-top: 24px;
  padding-left: 8px;
`;
export const NameReaction = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.color.white};
  font-style: italic;
`;
