import { memo, ReactNode } from "react";
import { AnimateConfig, AnimationVariantProps } from "../../@types/types";
import styles from "../Nav/Nav.stylex";
import { AnimateBase } from "./Animation";
import { motion } from "framer-motion";

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

const AnimateModal = memo(
  ({ children, onClick }: { config?: AnimateConfig; children?: ReactNode; onClick?: any }): JSX.Element => {
    const ModalAnimationConfig = getModalAnimationConfig();
    return (
      <AnimateBase config={{ ...ModalAnimationConfig, motionComponent: motion.div, children, onClick }} />
    );
  },
);

export default AnimateModal;