import styled from 'styled-components'

export const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  margin-bottom: 120px;
`;

export const HeadingColorWhite = styled(Heading)`
  color: ${({ theme }) => theme.color.white};
`;
