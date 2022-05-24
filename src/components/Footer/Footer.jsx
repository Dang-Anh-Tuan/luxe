import React from "react";
import {
  BgTextButton,
  WrapperPage,
} from "../CommonStyle/BaseStyle/BaseStyle.styled";
import {
  StyledFooter,
  AuthorContent,
  AuthorLink,
  ContainerAuthor,
  ContainerCompany,
  ContainerFacilities,
  ContainerSocial,
  ContainerSocialLink,
  ContainerSubscribe,
  FooterHeading,
  FooterLink,
  SocialLink,
  SubscribeContent,
  SubscribeForm,
  SubscribeInputEmail,
  GridFooter,
} from "./Footer.styled";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ContainerSessionDark } from "../container/ContainerSession";
import { ThemeProvider } from "styled-components";
import { theme } from "../CommonStyle/GlobalStyle/constantTheme";
import { GlobalStyle } from "../CommonStyle/GlobalStyle/GlobalStyle.styled";

const listCompanyLink = ["About Us", "Hotels", "Customer Care", "Contact Us"];
const listFacilitiesLink = [
  "Resturant",
  "Bars",
  "Pick-up",
  "Swimming Pool",
  "Spa",
  "Gym",
];

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledFooter>
        <ContainerSessionDark>
          <WrapperPage>
            <GridFooter>
              <ContainerAuthor>
                <AuthorContent>© Domain.com</AuthorContent>
                <AuthorContent>All Rights Reserved.</AuthorContent>
                <AuthorContent>
                  Designed by
                  <AuthorLink to="">FreeHTML5.co</AuthorLink>
                </AuthorContent>
                <AuthorContent>Demo Images: Unsplash</AuthorContent>
              </ContainerAuthor>
              <ContainerCompany>
                <FooterHeading>Company</FooterHeading>
                {listCompanyLink.map((item, index) => (
                  <FooterLink key={index} to="">
                    {item}
                  </FooterLink>
                ))}
              </ContainerCompany>
              <ContainerFacilities>
                <FooterHeading>Our Facilities</FooterHeading>
                {listFacilitiesLink.map((item, index) => (
                  <FooterLink key={index} to="">
                    {item}
                  </FooterLink>
                ))}
              </ContainerFacilities>
              <ContainerSubscribe>
                <FooterHeading>Subscribe</FooterHeading>
                <SubscribeContent>
                  Sed cursus ut nibh in semper. 
                  <br/>Mauris varius et <br/>magna in
                  fermentum
                </SubscribeContent>
                <SubscribeForm>
                  <SubscribeInputEmail type="text" placeholder="Enter your email ..."></SubscribeInputEmail>
                  <BgTextButton btnSmall>Send</BgTextButton>
                </SubscribeForm>
              </ContainerSubscribe>
              <ContainerSocial>
                <ContainerSocialLink>
                  <SocialLink to="">
                    <BsTwitter />
                  </SocialLink>
                  <SocialLink to="">
                    <BsFacebook />
                  </SocialLink>
                  <SocialLink to="">
                    <AiFillInstagram />
                  </SocialLink>
                  <SocialLink to="">
                    <BsLinkedin />
                  </SocialLink>
                </ContainerSocialLink>
              </ContainerSocial>
            </GridFooter>
          </WrapperPage>
        </ContainerSessionDark>
      </StyledFooter>
    </ThemeProvider>
  );
}

export default Footer;
