import React, { useEffect, useRef, useState } from "react";
import { WrapperPage } from "../CommonStyle/BaseStyle/BaseStyle.styled";
import {
  StyledTrafficWeb,
  TrafficLabel,
  TrafficNumber,
  TrafficWebItem,
  TrafficWebList,
} from "./TrafficWeb.styled";
const trafficDatas = [
  {
    trafficNumber: 20356,
    trafficLabel: "USER ACCESS",
  },
  {
    trafficNumber: 15501,
    trafficLabel: "HOTELS",
  },
  {
    trafficNumber: 8200,
    trafficLabel: "TRANSACTIONS",
  },
  {
    trafficNumber: 8763,
    trafficLabel: "RATING & REVIEW",
  },
];

function TrafficWeb() {
  const [currentNumbers, setCurrentNumbers] = useState(
    new Array(trafficDatas.length).fill(0)
  );

  const [isFirstScroll, setIsFirstScroll] = useState(false)

  const refTimeout = useRef(null);
  const refFirstScroll = useRef()

  function resetTimeout() {
    if (refTimeout.current) {
      clearInterval(refTimeout.current);
    }
  }

  useEffect(() => {
    resetTimeout();

    function handleInitTrafficWeb() {
      if (window.scrollY >= 124 && !refFirstScroll.current) {
        for (let i = 0; i <= 100; i++) {
          refTimeout.current = setInterval(() => {
            setCurrentNumbers((preState) =>
              preState.map((item, index) =>
                item < trafficDatas[index].trafficNumber ? item + 1 : item
              )
            );
          }, 1);
        }
        refFirstScroll.current = true
      }
    }

    window.addEventListener("scroll", handleInitTrafficWeb);

    return () => {
      resetTimeout();
      window.removeEventListener("scroll", handleInitTrafficWeb);
    };
  }, []);

  return (
    <StyledTrafficWeb>
      <WrapperPage>
        <TrafficWebList>
          {trafficDatas.map((item, index) => (
            <TrafficWebItem key={index}>
              <TrafficNumber>{currentNumbers[index]}</TrafficNumber>
              <TrafficLabel>{item.trafficLabel}</TrafficLabel>
            </TrafficWebItem>
          ))}
        </TrafficWebList>
      </WrapperPage>
    </StyledTrafficWeb>
  );
}

export default TrafficWeb;
