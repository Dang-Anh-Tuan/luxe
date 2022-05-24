import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Heading } from "../common/Session/Heading";

import {
  BgTextButton,
  WrapperPage,
} from "../CommonStyle/BaseStyle/BaseStyle.styled";
import { ContainerSessionDark } from "../container/ContainerSession";
import {
  StyledFeatureHotel,
  RowFeature,
  FeatureItem,
  ContainerImageHotel,
  ImageHotel,
  ImageHotelLabel,
  NameHotel,
  ShortDesc,
  ContainerContent,
  ContainerIcon,
  ContainerButtonContent,
} from "./FeatureHotel.styled";

const hotelInfos = [
  {
    name: "Deluxe Hotel",
    ShortDesc: `Pellentesque habitant morbi tristique senectus et netus ett 
    mauada fames ac turpis egestas. Etiam euismod 
    tempor leo, in suscipit urna condimentum sed. 
    Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. 
    Nullam malesuada congue`,
    price: 100,
    image: "/image/hotel_feture_1.jpg",
  },
  {
    name: "Hotel Bora",
    ShortDesc: `Pellentesque habitant morbi tristique senectus 
    et netus ett mauada fames ac turpis egestas.
    Etiam euismod tempor leo, in suscipit urna 
    condimentum sed.`,
    price: 99,
    image: "/image/hotel_feture_2.jpg",
  },
  {
    name: "D’Morvie",
    ShortDesc: `PPellentesque habitant morbi tristique senectus et 
    netus ett mauada fames ac turpis egestas. 
    Etiam euismod tempor leo, in suscipit urna 
    condimentum sed .`,
    price: 99,
    image: "/image/hotel_feture_3.jpg",
  },
];

function FeatureHotel() {
  return (
    <StyledFeatureHotel>
      <ContainerSessionDark>
        <WrapperPage>
          <Heading>FEATURED HOTELS</Heading>
          {hotelInfos
            .map((item, index) => {
              if ((index + 1) % 3 === 1) {
                return (
                  <RowFeature>
                    <FeatureItem>
                      <ContainerImageHotel>
                        <ImageHotel src={item.image}></ImageHotel>
                        <ImageHotelLabel>
                          <span>FOR AS LOW AS</span>
                          <p>${item.price}/night</p>
                        </ImageHotelLabel>
                      </ContainerImageHotel>
                      <ContainerContent>
                        <NameHotel>{item.name}</NameHotel>
                        <ShortDesc>{item.ShortDesc}</ShortDesc>
                        <BgTextButton>
                          <ContainerButtonContent>
                            Book Now
                            <ContainerIcon>
                              <FiChevronRight />
                            </ContainerIcon>
                          </ContainerButtonContent>
                        </BgTextButton>
                      </ContainerContent>
                    </FeatureItem>
                  </RowFeature>
                );
              } else if ((index + 1) % 3 === 2) {
                return (
                  <RowFeature>
                    <FeatureItem reserveContent>
                      <ContainerImageHotel>
                        <ImageHotel src={item.image}></ImageHotel>
                        <ImageHotelLabel>
                          <span>FOR AS LOW AS</span>
                          <p>${item.price}/night</p>
                        </ImageHotelLabel>
                      </ContainerImageHotel>
                      <ContainerContent>
                        <NameHotel>{item.name}</NameHotel>
                        <ShortDesc>{item.ShortDesc}</ShortDesc>
                        <BgTextButton>
                          <ContainerButtonContent>
                            Book Now
                            <ContainerIcon>
                              <FiChevronRight />
                            </ContainerIcon>
                          </ContainerButtonContent>
                        </BgTextButton>
                      </ContainerContent>
                    </FeatureItem>
                    <FeatureItem reserveContent>
                      <ContainerImageHotel>
                        <ImageHotel
                          src={hotelInfos[index + 1].image}
                        ></ImageHotel>
                        <ImageHotelLabel>
                          <span>FOR AS LOW AS</span>
                          <p>${hotelInfos[index + 1].price}/night</p>
                        </ImageHotelLabel>
                      </ContainerImageHotel>
                      <ContainerContent>
                        <NameHotel>{hotelInfos[index + 1].name}</NameHotel>
                        <ShortDesc>{hotelInfos[index + 1].ShortDesc}</ShortDesc>
                        <BgTextButton>
                          <ContainerButtonContent>
                            Book Now
                            <ContainerIcon>
                              <FiChevronRight />
                            </ContainerIcon>
                          </ContainerButtonContent>
                        </BgTextButton>
                      </ContainerContent>
                    </FeatureItem>
                  </RowFeature>
                );
              }
            })
            .filter((item) => item !== undefined)}
        </WrapperPage>
      </ContainerSessionDark>
    </StyledFeatureHotel>
  );
}

export default FeatureHotel;
