import styled from "styled-components";

export const StyledHeader = styled.header`
  & {
    width: 100vw;
    height: 85px;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: ${(props) =>
      props.isTopPage ? "transparent" : "#ff5722"};
    position: fixed;
    -webkit-backface-visibility: hidden;
  }
`;

export const ContainerNavbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Logo = styled.div`
  h3 {
    color: ${({ theme }) => theme.color.white};
    font-weight: 350;
    font-size: 2.4rem;
    letter-spacing: 0.5px;
    margin: 0 12px;
  }

  @media (max-width: 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Nav = styled.nav`
  transition: 0.4s all linear;

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.subWhite};

      &:hover {
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  @media (max-width: 992px) {
    & {
      position: absolute;
      width: 100%;
      background-color: ${({ theme }) => theme.color.text};
      top: 100%;
      left: ${(props) =>
        props.isMobileMenuOpen ? "0" : "150%"};
      
      min-height: 100vh;
      overflow-y: auto;
      
    }
    & > ul {
      flex-direction: column;
      width: 100%;
      padding: 0;
      margin: 0;

      li {
        text-align: center;
        width: 100%;
        padding: 12px 0;
        border-bottom: 0.5px solid ${({ theme }) => theme.color.white};
      }

      li:hover {
        background-color: ${({ theme }) => theme.color.subText};
      }
    }
    ul > li:last-child {
      border: none;
    }
  }

`;
export const SubMenu = styled.div`
  position: absolute;
  top: ${(props) => (props.position === "under" ? "100%" : 0)};
  left: ${(props) => (props.position === "right" ? "100%" : 0)};
  width: 200px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 0.1);
  display: none;
  margin: 0;

  ul {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;

    li {
      width: 100%;
      color: ${({ theme }) => theme.color.white};

      &:hover {
        color: ${({ theme }) => theme.color.subWhite};
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 20px;
    border-color: transparent transparent ${({ theme }) => theme.color.primary}
      transparent;
    top: -15px;
    left: 20px;
    z-index: 10;
    transition: 0.3s ease-in-out;
    display: ${(props) => (props.position === "under" ? "block" : "none")};
  }

  @media (max-width: 992px) {
    position: initial;
    width: 100%;
    box-shadow: initial;
    background-color: ${({ theme }) => theme.color.text};

    &::before {
      display: none;
    }
  }
`;

export const HaveSubMenu = styled.div`
  position: relative;
  margin: 0;

  & > li:hover ${SubMenu} {
    display: block;
  }

  @media (max-width: 992px) {
    width: 100%;
    li {
      width: 100%;
      box-shadow: initial;
      background-color: ${({ theme }) => theme.color.text};
    }
  }
`;

export const ContainerButtonNavMobile = styled.div`
  display: none;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);

  @media (max-width: 992px) {
    display: block;
  }
`;

export const ButtonNavMobile = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const HamburgerButton = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.color.white};
  margin: 8px 0;
  transition: 0.3s all ease-in-out;
`;
