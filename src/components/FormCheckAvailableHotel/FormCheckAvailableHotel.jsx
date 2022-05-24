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

  // Chức năng xử lý khi click ra ngoài BoxResult thì dropdown tự đóng
  // - Dã giải quyết được
  // - UX chưa xử lí được vì có lúc ấn chính xác BoxResult nhưng dropdown không mở
  // - Dự đoán : đối tượng refBoxResult bé hơn ContainerSelectHotel nên lấy vị trí k chính xác
  // - Fix : thêm 1 container BoxResult

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
