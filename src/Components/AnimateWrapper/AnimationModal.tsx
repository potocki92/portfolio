import { AnimationVariantProps } from "../../@types/types";
import styles from "../Nav/Nav.stylex";

export const getModalAnimationConfig = (): AnimationVariantProps => {
  const config = {
    style: {
      style: styles.modal,
    },
    motion: {
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      variants: {
        hidden: {
          top: "0rem",
          opacity: 0,
          transition: { delay: 0.25 },
        },
        visible: {
          top: "2rem",
          opacity: 1,
          transition: { delay: 0.25 },
        },
      },
    },
  };
  return config;
};
