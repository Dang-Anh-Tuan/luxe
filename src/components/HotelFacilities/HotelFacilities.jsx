import React, { useState } from "react";
import { Heading } from "../common/Session/Heading";
import { WrapperPage } from "../CommonStyle/BaseStyle/BaseStyle.styled";
import { ContainerSession } from "../container/ContainerSession";
import DisplayFacility from "./DisplayFacility";
import { StyledHotelFacilities } from "./HotelFacilities.styled";
import Tabs from "./Tabs";

const listTabItem = [
  {
    icon: "fa-solid fa-utensils",
    content: "RESTAURANT",
    heading: "Restaurant",
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. 
    Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga 
    vero at. Quia, labore, reprehenderit illum dolorem quae facilis 
    reiciendis quas similique totam sequi ducimus temporibus ex nemo, 
    omnis perferendis earum fugit impedit molestias animi vitae.`,
    time: "7:30 AM - 8:00 PM",
    image: "/image/tab_img_1.jpg",
  },
  {
    icon: "fa-solid fa-martini-glass",
    content: "BAR",
    heading: "Bar",
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. 
    Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga 
    vero at. Quia, labore, reprehenderit illum dolorem quae facilis 
    reiciendis quas similique totam sequi ducimus temporibus ex nemo, 
    omnis perferendis earum fugit impedit molestias animi vitae.`,
    time: "7:30 AM - 8:00 PM",
    image: "/image/tab_img_2.jpg",
  },
  {
    icon: "fa-solid fa-car",
    content: "PICK-UP",
    heading: "Pick up",
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. 
    Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga 
    vero at. Quia, labore, reprehenderit illum dolorem quae facilis 
    reiciendis quas similique totam sequi ducimus temporibus ex nemo, 
    omnis perferendis earum fugit impedit molestias animi vitae.`,
    time: "7:30 AM - 8:00 PM",
    image: "/image/tab_img_3.jpg",
  },
  {
    icon: "fa-solid fa-person-swimming",
    content: "SWIMMING POOL",
    heading: "Swimming Pool",
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. 
    Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga 
    vero at. Quia, labore, reprehenderit illum dolorem quae facilis 
    reiciendis quas similique totam sequi ducimus temporibus ex nemo, 
    omnis perferendis earum fugit impedit molestias animi vitae.`,
    time: "7:30 AM - 8:00 PM",
    image: "/image/tab_img_4.jpg",
  },
  {
    icon: "fa-solid fa-spa",
    content: "SPA",
    heading: "Spa",
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. 
    Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga 
    vero at. Quia, labore, reprehenderit illum dolorem quae facilis 
    reiciendis quas similique totam sequi ducimus temporibus ex nemo, 
    omnis perferendis earum fugit impedit molestias animi vitae.`,
    time: "7:30 AM - 8:00 PM",
    image: "/image/tab_img_5.jpg",
  },
  {
    icon: "fa-solid fa-dumbbell",
    content: "GYM",
    heading: "Gym",
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. 
    Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga 
    vero at. Quia, labore, reprehenderit illum dolorem quae facilis 
    reiciendis quas similique totam sequi ducimus temporibus ex nemo, 
    omnis perferendis earum fugit impedit molestias animi vitae.`,
    time: "7:30 AM - 8:00 PM",
    image: "/image/tab_img_6.jpg",
  },
];

function HotelFacilities() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleClickTabItem = (index) => {
    setCurrentTab(index);
  };


  return (
    <StyledHotelFacilities>
      <ContainerSession>
        <WrapperPage>
          <Heading>HOTEL FACILITIES</Heading>
          <Tabs
            listTabItem={listTabItem}
            currentTab={currentTab}
            onClick={handleClickTabItem}
          />
          <DisplayFacility 
            currentTab={currentTab} 
            listTabItem={listTabItem} 
          />
        </WrapperPage>
      </ContainerSession>
    </StyledHotelFacilities>
  );
}

export default HotelFacilities;
