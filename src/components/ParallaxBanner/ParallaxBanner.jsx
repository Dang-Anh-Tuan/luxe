import React from "react";
import {
  StyledParallaxBanner,
  BannerContent,
  BannerHeading,
  ContainerBanner,
	ContainerContent
} from "./ParallaxBanner.styled";

function ParallaxBanner({ src, bannerHeading, bannerContent }) {
  return (
    <StyledParallaxBanner>
      <ContainerBanner src={src}>
        <ContainerContent>
          <BannerHeading>{bannerHeading}</BannerHeading>
          <BannerContent>{bannerContent}</BannerContent>
        </ContainerContent>
      </ContainerBanner>
    </StyledParallaxBanner>
  );
}

export default ParallaxBanner;
