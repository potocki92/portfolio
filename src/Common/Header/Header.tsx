import { motion, useAnimation, useScroll } from "framer-motion";
import { useRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";
import styles from "./Header.stylex";
import { useLocation } from "react-router-dom";
import motionValueScrollYFactory from "../../utils/motionValueScroll";
import { Nav, MobileNav } from "../../Components/Nav/Nav";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Avatar from "../../Components/Avatar/Avatar";
import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */

const initialValue = {
  initialY: { max: `145px`, min: `15px` },
  initialTransform: {
    max: "translate3d(0rem, 0, 0) scale(1)",
    min: "translate3d(.129rem, .15rem, 0) scale(0.6)",
  },
} as const;

const Header = (): JSX.Element => {
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const controls = useAnimation();
  const delta = useRef(0);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  const initialY = motionValueScrollYFactory([
    initialValue.initialY.max,
    initialValue.initialY.min,
  ]);
  const initialAvatarTransform = motionValueScrollYFactory([
    initialValue.initialTransform.max,
    initialValue.initialTransform.min,
  ]);
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
    if (val > 450) {
      controls.start("color");
    } else if (val < 450) {
      controls.start("transparent");
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
        <Wrapper
          initialY={initialY}
          initialX={$.globalXPadding}
          initialTransformOrigin="left"
          initialTransform={initialAvatarTransform}
          style={styles.avatarBackground}
          animate={controls}
          variants={{
            transparent: {
              background: colors.primaryBackground,
              border: "1px solid transparent",
            },
            color: {
              background: colors.secondBackground,
              border: `1px solid ${colors.border}`,
            },
          }}
        >
          <Avatar style={styles.avatar} />
        </Wrapper>
      )}
      {!isHomePage && (
        <Wrapper
          initialY={initialValue.initialY.min}
          initialX={$.globalXPadding}
          initialTransformOrigin="left"
          initialTransform={initialValue.initialTransform.min}
          style={styles.avatarBackground}
          initial={"color"}
          variants={{
            color: {
              background: colors.secondBackground,
              border: `1px solid ${colors.border}`,
            },
          }}
        >
          <Avatar style={styles.avatar} />
        </Wrapper>
      )}
      <Nav />
      <MobileNav />
      <ToggleTheme style={styles.button("flex")}/>
    </motion.header>
  );
};

export default Header;
