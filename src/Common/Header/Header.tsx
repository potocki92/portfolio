import styles from "./Header.stylex";
import { useLocation } from "react-router-dom";
import { Nav, MobileNav } from "../../Components/Nav/Nav";
import { Animate } from "../../Components/AnimateWrapper/Animation";
import Avatar from "../../Components/Avatar/Avatar";

const Header = () => {
  const location = useLocation();
  let isHomePage = location.pathname === "/";

  return (
    <>
      <Animate.Header>
        {!isHomePage && (
          <Animate.Avatar>
            <Avatar style={styles.avatar} />
          </Animate.Avatar>
        )}
        <Nav />
        <MobileNav />
      </Animate.Header>
      {isHomePage && (
        <Animate.Wrapper>
          <Animate.Avatar>
            <Avatar style={styles.avatar} />
          </Animate.Avatar>
        </Animate.Wrapper>
      )}
    </>
  );
};

export default Header;
