import React, { useEffect, useRef, useState } from "react";
import { FiChevronUp, FiChevronRight } from "react-icons/fi";
import { WrapperPage } from "../CommonStyle/BaseStyle/BaseStyle.styled";
import {
  ContainerForm,
  StyledFormCheck,
  ContainerSelectHotel,
  BoxResult,
  DropdownSelect,
  LabelFormCheck,
  InputDateFromCheck,
  ButtonCheck,
  DropdownItem,
  ContainerSelectDate,
  ContainerContentButton,
  ContainerIconButton,
  ContainerLabel,
  WrapperSelectDate
} from "./FormCheckAvailableHotel.styled";

const hotelsName = ["Luxe Hotel", "Deluxe Hotel", "Five Start Hotel"];

function FormCheckAvailableHotel() {
  const [resultSelect, setResultSelect] = useState();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dateCheckIn, setDateCheckIn] = useState();
  const [dateCheckOut, setDateCheckOut] = useState();

  const refBoxResult = useRef();
  const refDropdownIsOpen = useRef(dropdownIsOpen);

  const handleClickDropdown = () => {
    refDropdownIsOpen.current = !dropdownIsOpen;
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const handleClickDropdownItem = (name) => {
    setResultSelect(name);
  };

  const getPosBoxResult = () => {
    if (refBoxResult) {
      return refBoxResult.current.getBoundingClientRect();
    }
    return null;
  };

  const handleChangeCheckIn = (e) => {
    setDateCheckIn(e.target.value);
  };

  const handleChangeCheckOut = (e) => {
    setDateCheckOut(e.target.value);
  };

  // useEffect(() => {
  //   function handleEvenListener(e) {
  //     if (refDropdownIsOpen.current) {
  //       console.log("call");
  //       const posX = e.clientX;
  //       const posY = e.clientY;
  //       const posEl = getPosBoxResult();
  //       if (posEl) {
  //         if (
  //           (posX < posEl.left || posX > posEl.right) ||
  //           (posY < posEl.top || posY > posEl.bottom)
  //         ) {
  //           setDropdownIsOpen(false);
  //         }
  //       }
  //     }
  //   }

  //   window.addEventListener("click", handleEvenListener);

  //   return () => {
  //     window.removeEventListener("click", handleEvenListener);
  //   }
  // }, []);

  // Ch???c n??ng x??? l?? khi click ra ngo??i BoxResult th?? dropdown t??? ????ng
  // - D?? gi???i quy???t ???????c
  // - UX ch??a x??? l?? ???????c v?? c?? l??c ???n ch??nh x??c BoxResult nh??ng dropdown kh??ng m???
  // - D??? ??o??n : ?????i t?????ng refBoxResult b?? h??n ContainerSelectHotel n??n l???y v??? tr?? k ch??nh x??c
  // - Fix : th??m 1 container BoxResult

  return (
    <ContainerForm>
      <WrapperPage>
        <StyledFormCheck>
          <ContainerSelectHotel
            dropdownIsOpen={dropdownIsOpen}
            onClick={() => handleClickDropdown()}
          >
            <BoxResult ref={refBoxResult}>
              {dropdownIsOpen ? "Select Hotel" : resultSelect || "Select Hotel"}
              <FiChevronUp
                style={{
                  position: "absolute",
                  right: "16px",
                  transform: dropdownIsOpen && "rotate(180deg)",
                  transition: "0.3s all ease-in-out",
                }}
              />
            </BoxResult>
            <DropdownSelect dropdownIsOpen={dropdownIsOpen}>
              {hotelsName.map((name, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleClickDropdownItem(name)}
                >
                  {name}
                </DropdownItem>
              ))}
            </DropdownSelect>
          </ContainerSelectHotel>
          <WrapperSelectDate>
            <ContainerSelectDate>
              <ContainerLabel>
                <LabelFormCheck>CHECK IN</LabelFormCheck>
              </ContainerLabel>
              <InputDateFromCheck
                type="date"
                value={dateCheckIn}
                onChange={handleChangeCheckIn}
              ></InputDateFromCheck>
            </ContainerSelectDate>
            <ContainerSelectDate>
              <ContainerLabel>
                <LabelFormCheck>CHECK OUT</LabelFormCheck>
              </ContainerLabel>
              <InputDateFromCheck
                type="date"
                value={dateCheckOut}
                onChange={handleChangeCheckOut}
              ></InputDateFromCheck>
            </ContainerSelectDate>
          </WrapperSelectDate>

          <ButtonCheck>
            <ContainerContentButton>
              <span>CHECK</span>
              <span>AVAILABILITY</span>
            </ContainerContentButton>
            <ContainerIconButton>
              <FiChevronRight
                style={{
                  fontSize: "2rem",
                }}
              />
            </ContainerIconButton>
          </ButtonCheck>
        </StyledFormCheck>
      </WrapperPage>
    </ContainerForm>
  );
}

export default FormCheckAvailableHotel;
