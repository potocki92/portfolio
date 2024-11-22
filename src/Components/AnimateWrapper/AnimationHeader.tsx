import { motion } from "framer-motion";
import { AnimateConfig, AnimationVariantProps } from "../../@types/types";
import styles from "../../Common/Header/Header.stylex";
import useScrollHandler from "../../hooks/useScroll";
import { AnimateBase } from "./Animation";
import { memo, ReactNode } from "react";

export const getHeaderAnimationConfig = (): AnimationVariantProps => {
  const controls = useScrollHandler({
    onScrollUp: () => controls.start("visible"),
    onScrollDown: () => controls.start("hidden"),
    threshold: 150,
  });
  const config = {
    style: { style: styles.header },
    motion: {
      animate: controls,
      variants: {
        visible: { top: "0px", transition: { duration: 1 } },
        hidden: { top: "-100px", transition: { duration: 1 } },
      },
    },
  };
  return config;
};

/**
 * Header component for creating animated header elements.
 * @param {Object} props - The component props.
 * @param {AnimateConfig} props.config - The animation configuration.
 * @param {ReactNode} [props.children] - The children nodes.
 * @returns {JSX.Element} The animated component.
 */
const AnimateHeader = memo(
  ({ children }: { config?: AnimateConfig; children?: ReactNode }): JSX.Element => {
    const HeaderAnimationConfig = getHeaderAnimationConfig();
    return (
      <AnimateBase config={{ ...HeaderAnimationConfig, motionComponent: motion.div, children }} />
    );
  },
);

export default AnimateHeader;
