import React from "react";
import { GlobalStyle } from "../components/CommonStyle/GlobalStyle/GlobalStyle.styled";
import { theme } from "../components/CommonStyle/GlobalStyle/constantTheme";
import { ThemeProvider } from "styled-components";
import ParallaxBanner from "../components/ParallaxBanner/ParallaxBanner";
import ListBlog from "../components/ListBog/ListBlog";

function Blog() {
  const bannerBackground = "/image/slider2.jpg";
  const bannerHeading = "Read Our Blog";
  const bannerContent = "Lorem ipsum dolor sit amet consectetur";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxBanner
        src={bannerBackground}
        bannerHeading={bannerHeading}
        bannerContent={bannerContent}
      />
      <ListBlog />
    </ThemeProvider>
  );
}

export default Blog;
