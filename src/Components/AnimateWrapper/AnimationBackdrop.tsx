import { AnimationVariantProps } from "../../@types/types";
import styles from "../Nav/Nav.stylex";

export const getBackdropAnimationConfig = (): AnimationVariantProps => {
  const config = {
    style: {
      initial: "hidden",
      exit: "hidden",
      style: styles.backdrop,
    },
    motion: {
      animate: "visible",
      variants: {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      },
    },
  };
  return config;
};
