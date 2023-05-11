import styled from "styled-components";

export const StyledHeaderMenu = styled.header`
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  z-index: 98;
  transition: all 0.5s ease;
  @media (min-width: 1200px) {
    width: 100%;
    height: 100px;
    backgroound: transparent;
    height: auto;
    position: static;
  }

  @media screen and (max-width: 1199px) {
    transform: translateX(-100%);
    
    &.menu-open {
      transform: translateX(0);
    }
  }
`;

export const SidebarInner = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 40px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding: 40px;

  @media (min-width: 1200px) {
    float: none;
    border-bottom: none;
    padding: 0;
    height: auto;
  }

  @media screen and (max-width: 1199px) {
    padding: 20px;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding: 60px 40px;

  @media (min-width: 1200px) {
    height: auto;
    float: none;
    padding: 0;
  }

  @media screen and (max-width: 1199px) {
    padding: 35px 20px 20px;
  }
`;

export const MenuList = styled.ul`
  margin: 0;
  list-style-type: none;
  display: contents;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const MenuItem = styled.li`
  margin: 0 0 8px;
  width: 100%;
  float: left;

  @media (min-width: 1200px) {
    width: auto;
    float: none;
    margin: 0 0 0 5px;
  }
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  padding: 9px 15px;
  position: relative;
  transition: all 0.3s ease;

  &.active {
    &::before {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.5s;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #f5f5f5;
    transition: transform 0.5s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: 0;
    border-radius: 6px;
    z-index: -1;
    transition: all 0.3s ease;
  }
  @media (min-width: 1200px) {
    justify-content: center;
    padding: 5px 20px;
  }
`;

export const MobileHeader = styled.div`
  position: fixed;
  right: 20px;
  top: 13px;
  z-index: 99;
  display: none;

  @media screen and (max-width: 1199px) {
    display: block;
  }
`;

export const ToggleMenuButton = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  margin: 0;
  padding: 0 15px;
  border: none;
  z-index: 100;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0 6px 12px rgba(0,0,0,.1);
  background-color: rgb(255, 255, 255);
`;

export const BurgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  height: 100%;

  span {
    position: relative;
    width: 150%;
    margin-top: -4px;

    &::before {
      left: 0;
      border-radius: 3px 0 0 3px;
      content: "";
      position: absolute;
      top: 0;
      background: currentColor;
      height: 4px;
      width: 50%;
      transition: 0.25s cubic-bezier(0.6, 0, 0.3, 1);
      transform-origin: center center;
}

    &::after {
      right: 0;
      border-radius: 0 3px 3px 0;
      content: "";
      position: absolute;
      top: 0;
      background: currentColor;
      height: 4px;
      width: 50%;
      transition: 0.25s cubic-bezier(0.6, 0, 0.3, 1);
      transform-origin: center center;
}
    }
    span + span {
      margin-top: 8px;
    }
  }

  &.active {
    span:nth-of-type(1):before {
      transform: translate3d(3px, 4.5px, 0) rotate(45deg);
    }

    span:nth-of-type(1):after {
      transform: translate3d(-3px, 4.5px, 0) rotate(-45deg);
    }

    span:nth-of-type(3):before {
      transform: translate3d(3px, -5.5px, 0) rotate(-45deg);
    }

    span:nth-of-type(3):after {
      transform: translate3d(-3px, -5.5px, 0) rotate(45deg);
    }

    span:nth-of-type(2):before, span:nth-of-type(2):after {
      opacity: 0.0001;
    }

    span:nth-last-of-type(2)::before {
      transform: translateX(-200%);
    }

    span:nth-last-of-type(2)::after {
      transform: translateX(200%);
    }
    
  }
  `