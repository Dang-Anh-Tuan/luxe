import styled from "styled-components";
import { css } from "styled-components";

export const WrapperPage = styled.div`
  margin: 0 auto;
  height: 100%;

  @media (min-width: 768px) {
    width: 760px;
  }
  @media (min-width: 992px) {
    width: 980px;
  }
  @media (min-width: 1200px) {
    width: 1180px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > div,
  & > ul {
    flex: 1;
  }
`;

export const Button = styled.button`
  & {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  ${({ btnLarge }) =>
    btnLarge &&
    css`
       {
        font-size: 2.4rem;
        line-height: 2.4rem;
        padding: 14px 30px;
      }
    `}

  ${({ btnMedium }) =>
    btnMedium &&
    css`
       {
        font-size: 1.6rem;
        padding: 14px 12px;
      }
    `}

  ${({ btnSmall }) =>
    btnSmall &&
    css`
       {
        font-size: 1.6rem;
        padding: 10px 20px;
      }
    `}
`;

export const PrimaryButton = styled(Button)`
  & {
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.text};
    border: 1px solid ${({ theme }) => theme.color.text};
  }
`;

export const BorderPrimaryButton = styled(PrimaryButton)`
  ${({ border }) => border} && {
    border-radius: 50px;
  }
`;

export const BgTextButton = styled(Button)`
  &,
  &:hover {
    background-color: ${({ theme }) => theme.color.text};
    border: 1px solid ${({ theme }) => theme.color.text};
  }
`;


export const Grid3Col = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: ${props => props.rowGap + "px"};
  column-gap: ${props => props.colGap + "px"};


  @media (max-width: 991px) {
    grid-template-columns: auto;
  }
`