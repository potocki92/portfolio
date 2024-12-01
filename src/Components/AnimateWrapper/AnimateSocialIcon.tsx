import { memo, ReactNode } from "react";
import { AnimateConfig, AnimationVariantProps } from "../../@types/types";
import { AnimateBase } from "./Animation";
import { motion } from "framer-motion";

export const getAnimateSocialIconConfig = (index: number, total: number): AnimationVariantProps => {
  const config = {
    style: {
      initial: { 
        opacity: 0, 
        y: 20 },
      exit: { 
        opacity: 0, 
        y: 20, 
        transition: {
        delay: 
            (total - 1 - index) * 0.1,
      }, 
    },
    },
    motion: {
      animate: { 
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.3,
        }, },
    },
  };
  return config;
};

const AnimateSocialIcon = memo(
  ({ index, total, children }: { index: number, total: number, config?: AnimateConfig; children?: ReactNode }): JSX.Element => {
    const SocialAnimationConfig = getAnimateSocialIconConfig(index, total);
    return (
      <AnimateBase config={{ ...SocialAnimationConfig, motionComponent: motion.div, children }} />
    );
  },
);

export default AnimateSocialIcon;
