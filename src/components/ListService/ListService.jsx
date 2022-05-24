import React from "react";
import { ContainerSession } from "../container/ContainerSession";
import {
  StyledListService,
  ContainerContent,
  ContainerIcon,
  ServiceContent,
  ServiceHeading,
	ServiceIcon,
	ServiceItem
} from "./ListService.styled";
import {
  Grid3Col,
  WrapperPage,
} from "../CommonStyle/BaseStyle/BaseStyle.styled";

const listService = [
  {
    icon: "fa-regular fa-calendar",
    heading: "Accessible Location",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    icon: "fa-regular fa-user",
    heading: "Open 24/7",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    icon: "fa-regular fa-calendar",
    heading: "Reservation",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    icon: "fa-regular fa-user",
    heading: "Friendly Staff",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    icon: "fa-regular fa-calendar",
    heading: "Free Wifi",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    icon: "fa-regular fa-user",
    heading: "Accessible Location",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];



function ListService() {
  return (
    <StyledListService>
      <ContainerSession>
        <WrapperPage>
          <Grid3Col>
            {listService.map((item, index) => (
							<ServiceItem key={index}>
                <ContainerIcon>
                  <ServiceIcon className={item.icon}></ServiceIcon>
                </ContainerIcon>
                <ContainerContent>
                  <ServiceHeading>{item.heading}</ServiceHeading>
                  <ServiceContent>{item.content}</ServiceContent>
                </ContainerContent>
              </ServiceItem>
						))}
          </Grid3Col>
        </WrapperPage>
      </ContainerSession>
    </StyledListService>
  );
}

export default ListService;
