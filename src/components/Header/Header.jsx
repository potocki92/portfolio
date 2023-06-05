import { useState } from "react"
import { HeaderLink, HeaderLogo, HeaderNav, HeaderWrapper } from "./Header.styled"

const Header = () => {
    const [isClick, setIsClick] = useState(false)
    
    const handleClickLink = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });

        setIsClick(!isClick)
    }
    return (
        <HeaderWrapper>
            <HeaderLogo>Potocki</HeaderLogo>
            <HeaderNav>
                <HeaderLink href="#profile" onClick={(e) => handleClickLink(e, "profile")}>Profile</HeaderLink>
                <HeaderLink href="#work" onClick={(e) => handleClickLink(e, "work")}>Work</HeaderLink>
                <HeaderLink href="#contact" onClick={(e) => handleClickLink(e, "contact")}>Contact</HeaderLink>
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header