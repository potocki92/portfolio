import { AnimationVariantProps } from "../../@types/types";
import styles from "../../Common/Header/Header.stylex";
import useScrollHandler from "../../hooks/useScroll";

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
