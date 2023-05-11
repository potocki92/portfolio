import { useEffect, useState } from "react";
import {
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  MenuList,
  MobileHeader,
  SidebarInner,
  StyledHeaderMenu,
  ToggleMenuButton,
} from "./HeaderMenu.styled";

const HeaderMenu = () => {
  const [isClick, setIsClick] = useState(true);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const targetLink = document.querySelector(`a[href="#${section.id}"]`);
          targetLink.classList.add("active");

          const otherLinks = document.querySelectorAll(
            `a:not([href="#${section.id}"])`
          );
          otherLinks.forEach((link) => {
            link.classList.remove("active");
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <MobileHeader>
        <ToggleMenuButton onClick={handleClick}></ToggleMenuButton>
      </MobileHeader>
      <StyledHeaderMenu className={isClick ? "menu-open" : ""}>
        <SidebarInner>
          <Logo>Potocki</Logo>
          <Menu>
            <MenuList>
              <MenuItem>
                <MenuLink href="#home">Home</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#about">About</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink>Portfolio</MenuLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </SidebarInner>
      </StyledHeaderMenu>
    </>
  );
};

export default HeaderMenu;
