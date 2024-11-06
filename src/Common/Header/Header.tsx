import { MotionValue, motion } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";
import styles from "./Header.stylex";
import { useLocation } from "react-router-dom";
import useMotionValueScrollYFactory from "../../hooks/useMotionValueScroll";
import { Nav, MobileNav } from "../../Components/Nav/Nav";
import { Animate } from "../../Components/AnimateWrapper/AnimateWrapper";
import Avatar from "../../Components/Avatar/Avatar";
import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import LanguageButton from "../../Components/LanguageButton/LanguageButton";
import useScrollHandler from "../../hooks/useScroll";
/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */

const initialValue = {
  initialY: { max: `calc(50% + 0px)`, min: `calc(50% + -120px)` },
  initialTransform: {
    max: "translate3d(0, calc(-50% + 0px), 0) scale(1)",
    min: "translate3d(0, calc(-50% + -120px), 0) scale(0.6)",
    notHome: "translate3d(0, -50%, 0) scale(0.6)",
  },
} as const;

const Header = () => {
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const controls = useScrollHandler({
    onScrollUp: () => controls.start("visible"),
    onScrollDown: () => controls.start("hidden"),
    threshold: 150,
  });

  const initialY = useMotionValueScrollYFactory([
    initialValue.initialY.max,
    initialValue.initialY.min,
  ]);
  const initialAvatarTransform = useMotionValueScrollYFactory([
    initialValue.initialTransform.max,
    initialValue.initialTransform.min,
  ]);

  type AnimationVariantProps = {
    style?: {
      initial?: string | undefined;
      initialY?: string | MotionValue<string>;
      initialX?: string | MotionValue<string>;
      initialTransformOrigin?: string;
      initialTransform?: string | MotionValue<string>;
      initialCSSPosition?: undefined | string | MotionValue<string>;
      style?: stylex.StyleXStyles;
    };
    motion?: {
      animate?: any;
      variants?: {
        transparent?: Record<string, string | number>;
        color?: Record<string, string | number>;
      };
    };
  };

  const AvatarAnimationConfig: AnimationVariantProps = {
    style: {
      initial: isHomePage ? "transparent" : "color",
      initialY: isHomePage ? initialY : initialValue.initialY.max,
      initialX: isHomePage ? $.avatarLeft : "2rem",
      initialTransformOrigin: "left",
      initialTransform: isHomePage ? initialAvatarTransform : initialValue.initialTransform.notHome,
      initialCSSPosition: isHomePage ? "sticky" : "absolute",
      style: styles.avatarBackground,
    },
    motion: {
      animate: controls,
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
    },
  };
  const HeaderAnimationVariants = {
    style: { style: styles.header },
    motion: {
      animate: controls,
      variants: {
        visible: { top: "0px", transition: { duration: 1 } },
        hidden: { top: "-100px", transition: { duration: 1 } },
      },
    },
  };

  const AvatarWrapperAnimationConfig = {
    style: { style: styles.avatarWrapper },
    motion: {
      animate: controls,
      variants: {
        visible: { top: "172px", transition: { duration: 1 } },
        hidden: { top: "-100px", transition: { duration: 1 } },
      },
    },
  };

  return (
    <>
      <Animate.Header config={{ ...HeaderAnimationVariants }}>
        {!isHomePage && (
          <Animate.Avatar config={{ ...AvatarAnimationConfig }}>
            <Avatar style={styles.avatar} />
          </Animate.Avatar>
        )}
        <Nav />
        <MobileNav />
        <ToggleTheme />
        <LanguageButton />
      </Animate.Header>
      {isHomePage && (
        <Animate.Wrapper config={{ ...AvatarWrapperAnimationConfig }}>
          <Animate.Avatar config={{ ...AvatarAnimationConfig }}>
            <Avatar style={styles.avatar} />
          </Animate.Avatar>
        </Animate.Wrapper>
      )}
    </>
  );
};

export default Header;
