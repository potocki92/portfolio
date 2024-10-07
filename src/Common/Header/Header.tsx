import { MotionValue, motion, useAnimation, useScroll } from "framer-motion";
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
import LanguageButton from "../../Components/LanguageButton/LanguageButton";
/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */

const initialValue = {
  initialY: { max: `calc(50% + 0px)`, min: `calc(50% + 13px)` },
  initialTransform: {
    max: "translate3d(0, calc(-50% + 0px), 0) scale(1)",
    min: "translate3d(0, calc(-50% + 13px), 0) scale(0.6)",
    notHome: "translate3d(0, -50%, 0) scale(0.6)",
  },
} as const;

const Header = () => {
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
    delta.current =
      val >= lastScrollY.current
        ? Math.min(delta.current + diff, 10)
        : Math.max(delta.current - diff, -10);

    if (delta.current >= 10 && val > 525) {
      controls.start("hidden");
    } else if (delta.current <= -10 || val < 200) {
      controls.start("visible");
    }

    controls.start(val > 120 ? "color" : "transparent");

    lastScrollY.current = val;
  });

  type AnimationVariantProps = {
    initial: string | undefined;
    initialY: string | MotionValue<string>;
    initialX: string | MotionValue<string>;
    initialTransformOrigin: string;
    initialTransform: string | MotionValue<string>;
    initialPosition: string;
    style: stylex.StyleXStyles;
    variants: {
      transparent: Record<string, string | number>;
      color: Record<string, string | number>;
    };
  };
  const AnimationVariants: AnimationVariantProps = {
    initial: isHomePage ? "transparent" : "color",
    initialY: isHomePage ? initialY : initialValue.initialY.max,
    initialX: isHomePage ? $.avatarLeft : "2rem",
    initialTransformOrigin: "left",
    initialTransform: isHomePage ? initialAvatarTransform : initialValue.initialTransform.notHome,
    initialPosition: isHomePage ? "sticky" : "absolute",
    style: styles.avatarBackground,
    variants: {
      transparent: {
        background: colors.primaryBackground,
        border: "1px solid transparent",
        visibility: "hidden",
        boxShadow: colors.transparentAvatarShadow,
      },
      color: {
        background: colors.secondBackground,
        border: `1px solid ${colors.border}`,
        visibility: "visible",
        boxShadow: colors.avatarShadow,
      },
    },
  };
  const VisibleVariants = {
    variants: {
      visible: { top: "0px" },
      hidden: { top: "-100px" },
    },
  };
  return (
    <>
      <motion.header animate={controls} {...VisibleVariants} {...stylex.props(styles.header)}>
        {!isHomePage && (
          <Wrapper {...AnimationVariants}>
            <Avatar style={styles.avatar} />
          </Wrapper>
        )}
        <Nav />
        <MobileNav />
        <ToggleTheme />
        <LanguageButton />
      </motion.header>
      {isHomePage && (
        <motion.div animate={controls} {...VisibleVariants} {...stylex.props(styles.avatarWrapper)}>
          <Wrapper animate={controls} {...AnimationVariants}>
            <Avatar style={styles.avatar} />
          </Wrapper>
        </motion.div>
      )}
    </>
  );
};

export default Header;
