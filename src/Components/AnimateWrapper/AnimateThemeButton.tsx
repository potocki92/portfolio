import { memo, ReactNode } from "react";
import { AnimationVariantProps } from "../../@types/types";
import { AnimateBase } from "./Animation";
import { motion } from "framer-motion";

export const getThemeAnimationConfig = (): AnimationVariantProps => {
  const config = {
    style: {
      initial: { opacity: 0, rotate: 90 },
      exit: { opacity: 0, rotate: 90 },
    },
    motion: {
      animate: { opacity: 1, rotate: 0 },
      variants: {
        visible: { opacity: 1, rotate: 0 },
        hidden: { opacity: 0, rotate: 90 },
      },
      transition: { duration: 0.2 },
    },
  };
  return config;
};
const AnimateThemeButton = memo(({ children }: { children?: ReactNode }): JSX.Element => {
  const ThemeAnimationConfig = getThemeAnimationConfig();
  return (
    <AnimateBase config={{ ...ThemeAnimationConfig, motionComponent: motion.div, children }} />
  );
});

export default AnimateThemeButton;
