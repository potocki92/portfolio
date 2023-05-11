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
    transform: translateX(0);

    &.menu-open {
      transform: translateX(-100%);
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
  padding: 0;
  background: #000;
  border: none;
  cursor: pointer;
  margin-left: auto;
  cursor: pointer;
`;
