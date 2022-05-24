import React from "react";
import {
  StyledDisplayFacility,
  ContainerContent,
  ContainerDisplayFacility,
  ContainerImage,
  ContentTime,
  Heading,
  Image,
  LabelHeading,
  LabelTime,
  ShortDesc,
} from "./DisplayFacility.styled";

function DisplayFacility({ currentTab, listTabItem }) {
  return (
    <StyledDisplayFacility>
      <ContainerDisplayFacility>
        <ContainerImage>
          <Image image={listTabItem[currentTab].image} />
        </ContainerImage>
        <ContainerContent>
          <LabelHeading>WORLD CLASS</LabelHeading>
          <Heading>{listTabItem[currentTab].heading}</Heading>
          <ShortDesc>{listTabItem[currentTab].shortDesc}</ShortDesc>
          <LabelTime>SERVICE HOUR</LabelTime>
          <ContentTime>{listTabItem[currentTab].time}</ContentTime>
        </ContainerContent>
      </ContainerDisplayFacility>
    </StyledDisplayFacility>
  );
}

export default DisplayFacility;
