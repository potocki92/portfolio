import { useLocation } from "react-router-dom";
import { AnimationVariantProps } from "../../@types/types";
import styles from "../../Common/Header/Header.stylex";
import useMotionValueScrollYFactory from "../../hooks/useMotionValueScroll";
import useScrollHandler from "../../hooks/useScroll";
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";
import { useMediaQuery } from "react-responsive";

export const MEDIA = "(min-width: 768px)";
export const getAvatarAnimationConfig = (): AnimationVariantProps => {
  const isDesktop = useMediaQuery({ query: MEDIA });
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const initialValue = {
    initialY: { max: `calc(50% + 0px)`, min: `calc(50% + -120px)` },
    initialYMedia: { max: `calc(50% + 0px)`, min: `calc(50% + -155px)` },
    initialTransform: {
      max: "translate3d(0, calc(-50% + 0px), 0) scale(1)",
      min: "translate3d(0, calc(-50% + -155px), 0) scale(0.6)",
      notHome: "translate3d(0, -50%, 0) scale(0.6)",
    },
    initialTranformMedia: {
      min: "translate3d(0, calc(-50% + -107px), 0) scale(0.6)",
    }
  } as const;
  const controls = useScrollHandler({
    onScrollUp: () => controls.start("visible"),
    onScrollDown: () => controls.start("hidden"),
    threshold: 150,
  });
  const initialY = useMotionValueScrollYFactory([
    isDesktop ? initialValue.initialY.max : initialValue.initialYMedia.max,
    isDesktop ? initialValue.initialY.min : initialValue.initialYMedia.min,
  ]);
  const initialAvatarTransform = useMotionValueScrollYFactory([
    initialValue.initialTransform.max,
    isDesktop ? initialValue.initialTransform.min : initialValue.initialTranformMedia.min,
  ]);
  const config = {
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
  return config;
};
