import { useEffect, useState } from "react";
import {
  BurgerIcon,
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
  const [isClick, setIsClick] = useState(false);
  const handleBurgerClick = () => {
    setIsClick(!isClick);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({behavior: "smooth"})
   
    setIsClick(false)
  }
  
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
        <ToggleMenuButton onClick={handleBurgerClick} >
          <BurgerIcon className={isClick ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerIcon>
        </ToggleMenuButton>
      </MobileHeader>
      <StyledHeaderMenu className={isClick ? "menu-open" : ""}>
        <SidebarInner>
          <Logo>Potocki</Logo>
          <Menu>
            <MenuList>
              <MenuItem>
                <MenuLink href="#home" onClick={(e) => handleLinkClick(e, "home")}>Home</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#about" onClick={(e) => handleLinkClick(e, "about")}>About</MenuLink>
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
