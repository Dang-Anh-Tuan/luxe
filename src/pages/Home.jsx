import React from "react";
import { GlobalStyle } from "../components/CommonStyle/GlobalStyle/GlobalStyle.styled";
import { theme } from "../components/CommonStyle/GlobalStyle/constantTheme";
import { ThemeProvider } from "styled-components";
import Slider from "../components/Slider/Slider";
import FormCheckAvailableHotel from "../components/FormCheckAvailableHotel/FormCheckAvailableHotel";
import TrafficWeb from "../components/TrafficWeb/TrafficWeb";
import FeatureHotel from "../components/FeatureHotel/FeatureHotel";
import HotelFacilities from "../components/HotelFacilities/HotelFacilities";
import UserReaction from "../components/UserReaction/UserReaction";
import OurBlog from "../components/OurBlog/OurBlog";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Slider />
      <FormCheckAvailableHotel />
      <TrafficWeb />
      <FeatureHotel />
      <HotelFacilities />
      <UserReaction />
      <OurBlog />
    </ThemeProvider>
  );
}

export default Home;
