import { motion, useViewportScroll, useTransform } from "framer-motion";
import Logo from "../../Components/Logo/Logo";
import * as stylex from "@stylexjs/stylex";
import styles from "./Header.stylex";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Nav from "../../Components/Nav/Nav";
/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */
const Header = (): JSX.Element => {

  const { scrollY } = useViewportScroll();
  const initialYLogo = useTransform(
    scrollY,
    [0, 500],
    ["clamp(1.3rem, 18vw, 18rem)", "clamp(1.3rem, 3.8vw, 18rem)"],
  );
  const initialYSpan = useTransform(scrollY, [0, 500], ["clamp(0.5rem, 6.6vw, 6.7rem)", "clamp(0.5rem, 1.5vw, 6.7rem)"]);
  return (
    <header {...stylex.props(styles.header)}>
      <Wrapper style={styles.headerWrapper}>
        <motion.div
          style={{
            fontSize: initialYLogo,
          }}
        >
          <Logo />
        </motion.div>
        <motion.div
          style={{
            fontSize: initialYSpan,
          }}
        >
          <span {...stylex.props(styles.heroHeading)}>FULLSTACK DEVELOPER</span>
        </motion.div>
      </Wrapper>
      <Nav />
    </header>
  );
};

export default Header;
