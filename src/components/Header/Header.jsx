import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  ContainerNavbar,
  Logo,
  Nav,
  SubMenu,
  HaveSubMenu,
  ContainerButtonNavMobile,
  HamburgerButton,
  ButtonNavMobile,
} from "./Header.styled";
import { WrapperPage } from "../CommonStyle/BaseStyle/BaseStyle.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../CommonStyle/GlobalStyle/constantTheme";
import { GlobalStyle } from "../CommonStyle/GlobalStyle/GlobalStyle.styled";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

function Header() {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopPage, setIsTopPage] = useState(true);

  const styleLink = {
    textDecoration: "none",
    display: "inline-block",
    width: "100%",
    height: "100%",
    padding: "16px 24px",
    color: "inherit",
  };

  function handleClickHamburger() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsTopPage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledHeader isTopPage={isTopPage}>
        <WrapperPage>
          <ContainerNavbar>
            <Logo>
              <h3>Luxe</h3>
            </Logo>
            <Nav isMobileMenuOpen={isMobileMenuOpen}>
              <ul>
                <li>
                  <Link
                    style={{
                      ...styleLink,
                      color: active === "Home" ? "#fff" : "inherit",
                    }}
                    to="/"
                    onClick={() => {
                      setActive("Home");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <HaveSubMenu>
                  <li>
                    <Link
                      style={{
                        ...styleLink,
                        color: active === "Hotel" ? "#fff" : "inherit",
                      }}
                      to="/"
                      onClick={(e) => {
                        e.preventDefault()
                        setActive("Hotel");
                      }}
                    >
                      Hotel
                      <FiChevronDown
                        style={{
                          position: "relative",
                          top: "3px",
                          left: "2px",
                        }}
                      />
                    </Link>
                    <SubMenu position="under">
                      <ul>
                        <li>
                          <Link
                            style={{
                              ...styleLink,
                            }}
                            to="/"
                            onClick={() => {
                              setActive("Hotel");
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Luxe Hotel
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{
                              ...styleLink,
                            }}
                            to="/"
                            onClick={() => {
                              setActive("Hotel");
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Deluxe Hotel
                          </Link>
                        </li>
                        <HaveSubMenu>
                          <li>
                            <Link
                              style={{
                                ...styleLink,
                              }}
                              to="/"
                              onClick={() => {
                                setActive("Hotel");
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              King Hotel
                              <FiChevronRight
                                style={{
                                  position: "relative",
                                  top: "3px",
                                  left: "60px",
                                }}
                              />
                            </Link>
                            <SubMenu position="right">
                              <li>
                                <Link
                                  style={{
                                    ...styleLink,
                                  }}
                                  to="/"
                                  onClick={() => {
                                    setActive("Hotel");
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  Build
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    ...styleLink,
                                  }}
                                  to="/"
                                  onClick={() => {
                                    setActive("Hotel");
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  Work
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    ...styleLink,
                                  }}
                                  to="/"
                                  onClick={() => {
                                    setActive("Hotel");
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  Light
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    ...styleLink,
                                  }}
                                  to="/"
                                  onClick={() => {
                                    setActive("Hotel");
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  Display
                                </Link>
                              </li>
                            </SubMenu>
                          </li>
                        </HaveSubMenu>
                        <li>
                          <Link
                            style={{
                              ...styleLink,
                            }}
                            to="/"
                            onClick={() => {
                              setActive("Hotel");
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Five Star Hotel
                          </Link>
                        </li>
                      </ul>
                    </SubMenu>
                  </li>
                </HaveSubMenu>
                <li st>
                  <Link
                    style={{
                      ...styleLink,
                      color: active === "Service" ? "#fff" : "inherit",
                    }}
                    to="/service"
                    onClick={() => {
                      setActive("Service");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      ...styleLink,
                      color: active === "Blog" ? "#fff" : "inherit",
                    }}
                    to="/blog"
                    onClick={() => {
                      setActive("Blog");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li st>
                  <Link
                    style={{
                      ...styleLink,
                      color: active === "Contact" ? "#fff" : "inherit",
                    }}
                    to="/contact"
                    onClick={() => {
                      setActive("Contact");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Nav>
            <ContainerButtonNavMobile>
              <ButtonNavMobile onClick={() => handleClickHamburger()}>
                <HamburgerButton
                  style={{
                    transform: isMobileMenuOpen ? "rotate(45deg)" : "none",
                    top: isMobileMenuOpen ? "5px" : "0",
                  }}
                />
                <HamburgerButton
                  style={{
                    opacity: isMobileMenuOpen ? "0" : "1",
                    top: "10px",
                    left: isMobileMenuOpen ? "-10px" : "0",
                  }}
                />
                <HamburgerButton
                  style={{
                    transform: isMobileMenuOpen ? "rotate(-45deg)" : "none",
                    top: isMobileMenuOpen ? "5px" : "20px",
                  }}
                />
              </ButtonNavMobile>
            </ContainerButtonNavMobile>
          </ContainerNavbar>
        </WrapperPage>
      </StyledHeader>
    </ThemeProvider>
  );
}

export default Header;
