import { memo, ReactNode } from "react";
import { AnimateConfig, AnimationVariantProps } from "../../@types/types";
import { styles } from "../Social/Social.stylex";
import { AnimateBase } from "./Animation";
import { motion } from "framer-motion";

export const getAnimateSocialConfig = (): AnimationVariantProps => {
  const config = {
    style: {
      initial: { opacity: 0 },
      exit: { opacity: 0 },
      style: styles.socialWrapper,
    },
    motion: {
      animate: { opacity: 1 },
    },
  };
  return config;
};

const AnimateSocial = memo(
  ({ children }: { config?: AnimateConfig; children?: ReactNode }): JSX.Element => {
    const SocialAnimationConfig = getAnimateSocialConfig();
    return (
      <AnimateBase config={{ ...SocialAnimationConfig, motionComponent: motion.div, children }} />
    );
  },
);

export default AnimateSocial;
