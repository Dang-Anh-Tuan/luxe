import React from "react";
import { PrimaryButton } from "../CommonStyle/BaseStyle/BaseStyle.styled";
import { ContainerSession } from "../container/ContainerSession";
import {
  StyledContactForm,
  ContainerContactSession,
  ContainerForm,
  ContainerIcon,
  ContainerInput,
  Heading,
  Info,
  InfoIcon,
  InputArea,
  InputText,
  LineInfo,
  Map,
  ShortDes,
} from "./ContactForm.styled";

function ContactForm() {
  return (
    <StyledContactForm>
      <ContainerSession>
        <ContainerContactSession>
          <Map aria-label="Map" aria-roledescription="map" role="group"></Map>
          <ContainerForm>
            <Heading>Our Address</Heading>
            <ShortDes>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </ShortDes>
            <LineInfo>
              <ContainerIcon>
                <InfoIcon className="fas fa-phone"></InfoIcon>
              </ContainerIcon>
              <Info>198 West 21th Street, Suite 721 New York NY 10016</Info>
            </LineInfo>
            <LineInfo>
              <ContainerIcon>
                <InfoIcon className="fas fa-phone"></InfoIcon>
              </ContainerIcon>
              <Info>+ 1235 2355 98</Info>
            </LineInfo>
            <LineInfo>
              <ContainerIcon>
                <InfoIcon className="fas fa-phone"></InfoIcon>
              </ContainerIcon>
              <Info>info@yoursite.com</Info>
            </LineInfo>
            <LineInfo>
              <ContainerIcon>
                <InfoIcon className="fas fa-phone"></InfoIcon>
              </ContainerIcon>
              <Info>www.yoursite.com</Info>
            </LineInfo>
            <ContainerInput>
              <InputText type="text" placeholder="Name"></InputText>
              <InputText type="text" placeholder="Email"></InputText>
            </ContainerInput>
            <InputArea placeholder="Message"></InputArea>
            <PrimaryButton btnMedium>Send Message</PrimaryButton>
          </ContainerForm>
        </ContainerContactSession>
      </ContainerSession>
    </StyledContactForm>
  );
}

export default ContactForm;
