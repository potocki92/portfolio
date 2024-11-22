import { motion } from "framer-motion";
import { AnimateConfig, AnimationVariantProps } from "../../@types/types";
import styles from "../Nav/Nav.stylex";
import { memo, ReactNode } from "react";
import { AnimateBase } from "./Animation";

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

const AnimateBackdrop = memo(
  ({ children, onClick }: { config?: AnimateConfig; children?: ReactNode; onClick?: any }): JSX.Element => {
    const BackdropAnimationConfig = getBackdropAnimationConfig();
    return (
      <AnimateBase config={{ ...BackdropAnimationConfig, motionComponent: motion.div, children, onClick }}/>
    );
  },
);

export default AnimateBackdrop;