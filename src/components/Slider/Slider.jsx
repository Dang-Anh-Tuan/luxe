import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ContainerSlider,
  ButtonSlider,
  ContainerButtonSlider,
  NameHotel,
  SliderContent,
  SloganSlider,
} from "./Slider.styled";
import { BorderPrimaryButton } from "../CommonStyle/BaseStyle/BaseStyle.styled";

const contentSliders = [
  {
    image: "/image/slider1.jpg",
    nameHotel: "Bora Hotel",
    slogan: "Reserve Room for Family Vacation",
  },
  {
    image: "/image/slider2.jpg",
    nameHotel: "DELUXE HOTEL",
    slogan: "Make Your Vacation Comfortable",
  },
  {
    image: "/image/slider3.jpg",
    nameHotel: "LUXE HOTEL",
    slogan: "A Best Place To Enjoy Your Life",
  },
];

function Slider() {
  const [indexCurrentContent, setIndexCurrentContent] = useState(0);

  const timeoutRef = useRef(null);

  const handleClick = useCallback(
    (index) => () => {
      setIndexCurrentContent(index);
    },
    []
  );

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setIndexCurrentContent((preIndex) =>
        preIndex === contentSliders.length - 1 ? 0 : preIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [indexCurrentContent]);

  return (
    <ContainerSlider srcImg={contentSliders[indexCurrentContent].image}>
      <SliderContent>
        <NameHotel>{contentSliders[indexCurrentContent].nameHotel}</NameHotel>
        <SloganSlider>
          {contentSliders[indexCurrentContent].slogan}
        </SloganSlider>
        <BorderPrimaryButton btnLarge>Book Now</BorderPrimaryButton>
      </SliderContent>
      <ContainerButtonSlider>
        {contentSliders.map((content, index) => (
          <div key={index}>
            <ButtonSlider
              onChange={handleClick(index)}
              type="radio"
              name="slider-content"
              checked={indexCurrentContent === index}
            />
            <label for="slider-content"></label>
          </div>
        ))}
      </ContainerButtonSlider>
    </ContainerSlider>
  );
}

export default Slider;
