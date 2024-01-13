import { motion, useAnimation, useScroll } from "framer-motion";
import Logo from "../../Components/Logo/Logo";
import * as stylex from "@stylexjs/stylex";
import styles from "./Header.stylex";
import Wrapper from "../../Components/Wrapper/Wrapper";
import { Nav, MobileNav } from "../../Components/Nav/Nav";
import { useRef } from "react";
import motionValueScrollYFactory from "../../utils/motionValueScroll";
import { useLocation } from "react-router-dom";
import deviceHeightInfo from "../../utils/deviceHeightInfo";

/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */
const maxHeight: number = deviceHeightInfo();

const initialValue = {
  initialYLogo: {max: "clamp(1.3rem, 18vw, 18rem)", min: "clamp(1.3rem, 2vw, 18rem)"},
  initialYSpan: {max: "clamp(0.5rem, 6.6vw, 6.7rem)", min: "clamp(0.49rem, 0.75vw, 6.7rem)"},
  initialY:{ max: `${maxHeight / 3}px`, min:`32px`},
  initialX: { max: `calc(50% + 0rem)`, min: `calc(0% + 1.5rem)`},
  initialTransform : { max: `translate(-50%)`, min: "translate(0%)"},
} as const

const Header = (): JSX.Element => {
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const controls = useAnimation();
  const delta = useRef(0);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();
  
  const initialYLogo = motionValueScrollYFactory([initialValue.initialYLogo.max, initialValue.initialYLogo.min]);
  const initialYSpan = motionValueScrollYFactory([initialValue.initialYSpan.max, initialValue.initialYSpan.min]);
  const initialY = motionValueScrollYFactory([initialValue.initialY.max, initialValue.initialY.min]);
  const initialX = motionValueScrollYFactory([initialValue.initialX.max,initialValue.initialX.min]);
  const initialTransform = motionValueScrollYFactory([initialValue.initialTransform.max, initialValue.initialTransform.min]);

  scrollY.on("change", (val) => {
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
      initial={isHomePage ? "visible" : undefined}
      animate={controls}
      variants={{
        visible: { top: "0px" },
        hidden: { top: "-100px" },
      }}
      {...stylex.props(styles.header)}
    >
      {isHomePage && (
        <Wrapper initialTransform={initialTransform} initialX={initialX} initialY={initialY} style={styles.headerWrapper}>
          <motion.div
            initial={isHomePage ? "visible" : undefined}
            style={{
              fontSize: initialYLogo,
            } as unknown as React.CSSProperties}
          >
            <Logo />
          </motion.div>
          <motion.div
            style={{
              fontSize: initialYSpan,
            } as unknown as React.CSSProperties}
          >
            <span {...stylex.props(styles.heroHeading)}>FULLSTACK DEVELOPER</span>
          </motion.div>
        </Wrapper>)}
        {!isHomePage && (
        <Wrapper 
          initialTransform={initialValue.initialTransform.min}
          initialX={initialValue.initialX.min} 
          initialY={initialValue.initialY.min} 
          style={styles.headerWrapper}
        >
          <div
            style={{
              fontSize: initialValue.initialYLogo.min,
            } as unknown as React.CSSProperties}
          >
            <Logo />
          </div>
          <div
            style={{
              fontSize: initialValue.initialYSpan.min,
            } as unknown as React.CSSProperties}
          >
            <span {...stylex.props(styles.heroHeading)}>FULLSTACK DEVELOPER</span>
          </div>
        </Wrapper>)}
      <Nav/>
      <MobileNav/>
    </motion.header>
  );
};

export default Header;
