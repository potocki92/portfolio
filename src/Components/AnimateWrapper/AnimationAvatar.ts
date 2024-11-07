import { useLocation } from "react-router-dom";
import { AnimationVariantProps } from "../../@types/types";
import styles from "../../Common/Header/Header.stylex";
import useMotionValueScrollYFactory from "../../hooks/useMotionValueScroll";
import useScrollHandler from "../../hooks/useScroll";
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";

export const getAvatarAnimationConfig = (): AnimationVariantProps => {
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const initialValue = {
    initialY: { max: `calc(50% + 0px)`, min: `calc(50% + -120px)` },
    initialTransform: {
      max: "translate3d(0, calc(-50% + 0px), 0) scale(1)",
      min: "translate3d(0, calc(-50% + -120px), 0) scale(0.6)",
      notHome: "translate3d(0, -50%, 0) scale(0.6)",
    },
  } as const;
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
