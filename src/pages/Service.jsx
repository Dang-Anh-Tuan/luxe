import React from "react";
import { GlobalStyle } from "../components/CommonStyle/GlobalStyle/GlobalStyle.styled";
import { theme } from "../components/CommonStyle/GlobalStyle/constantTheme";
import { ThemeProvider } from "styled-components";
import ParallaxBanner from "../components/ParallaxBanner/ParallaxBanner";
import ListService from "../components/ListService/ListService";

function Service() {
  const bannerBackground = "/image/slider1.jpg";
  const bannerHeading = "We Offer Services";
  const bannerContent = "Lorem ipsum dolor sit amet consectetur";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxBanner
        src={bannerBackground}
        bannerHeading={bannerHeading}
        bannerContent={bannerContent}
      />
      <ListService />
    </ThemeProvider>
  );
}

export default Service;
