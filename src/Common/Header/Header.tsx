import { motion, useViewportScroll, useTransform, useAnimation } from "framer-motion";
import Logo from "../../Components/Logo/Logo";
import * as stylex from "@stylexjs/stylex";
import styles from "./Header.stylex";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Nav from "../../Components/Nav/Nav";
import { useRef } from "react";
import motionValueScrollYFactory from "../../utils/motionValueScroll";

/**
 * Header component representing the header of a webpage with dynamic animations and styling.
*
* @component
* @returns {JSX.Element} The JSX representation of the header component.
*/
const Header = (): JSX.Element => {
  const controls = useAnimation();
  const delta = useRef(0);
  const lastScrollY = useRef(0);
  const { scrollY } = useViewportScroll();
  // Define initial values for logo font size based on scroll position.
  const initialYLogo = motionValueScrollYFactory(scrollY,["clamp(1.3rem, 18vw, 18rem)", "clamp(1.3rem, 2vw, 18rem)"]);
  // Define initial values for hero heading font size based on scroll position.
  const initialYSpan = motionValueScrollYFactory(scrollY,["clamp(0.5rem, 6.6vw, 6.7rem)", "clamp(0.49rem, 0.75vw, 6.7rem)"]);

  // This event handler is triggered whenever the scroll position changes.
  scrollY.onChange((val) => {
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }
    if (delta.current >= 10 && val > 650) {
      controls.start("hidden");
    } else if (delta.current <= -10 || val < 200) {
      controls.start("visible");
    }
    lastScrollY.current = val;
  });

  return (
    <motion.header 
    initial="visible"
      animate={controls}
      variants={{
        visible: { top: "0px" },
        hidden: { top: "-100px" }
      }}
    {...stylex.props(styles.header)}>
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
    </motion.header>
  );
};

export default Header;
