import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer``;

export const GridFooter = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 3fr 2fr;

  @media (max-width: 991px) {
    padding: 0 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 678px) {
    grid-template-columns: auto;
    padding: 0 20px;
  }
`;

export const ContainerAuthor = styled.div``;

export const AuthorContent = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.subText};
`;

export const AuthorLink = styled(Link)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  margin-left: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContainerCompany = styled.div``;

export const FooterHeading = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.text};
  font-weight: 500;
`;

export const FooterLink = styled(Link)`
  display: block;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primary};
  line-height: 2rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContainerFacilities = styled.div``;

export const ContainerSubscribe = styled.div``;

export const SubscribeContent = styled.p`
  color: ${({ theme }) => theme.color.subText};
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const SubscribeForm = styled.div``;
export const SubscribeInputEmail = styled.input`
  padding: 11px 20px;
  outline: none;
  border: none;
  font-size: 1.6rem;

  &:focus {
    outline: none;
    border: none;
  }
`;
export const ContainerSocial = styled.div`
  @media (max-width: 991px) {
    margin-top: 24px;
  }
`;

export const ContainerSocialLink = styled.div``;

export const SocialLink = styled.a`
  font-size: 2rem;
  margin: 0 2px;
  color: ${({ theme }) => theme.color.text};
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
