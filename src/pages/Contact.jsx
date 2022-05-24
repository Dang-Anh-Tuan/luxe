import React from "react";
import { GlobalStyle } from "../components/CommonStyle/GlobalStyle/GlobalStyle.styled";
import { theme } from "../components/CommonStyle/GlobalStyle/constantTheme";
import { ThemeProvider } from "styled-components";
import ParallaxBanner from "../components/ParallaxBanner/ParallaxBanner";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {
  const bannerBackground = "/image/slider3.jpg";
  const bannerHeading = "Contact Us";
  const bannerContent = "Lorem ipsum dolor sit amet consectetur";
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxBanner
        src={bannerBackground}
        bannerHeading={bannerHeading}
        bannerContent={bannerContent}
      />
      <ContactForm />
    </ThemeProvider>
  );
}

export default Contact;
