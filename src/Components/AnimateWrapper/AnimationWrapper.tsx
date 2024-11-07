import { AnimationVariantProps } from "../../@types/types";
import styles from "../../Common/Header/Header.stylex";
import useScrollHandler from "../../hooks/useScroll";
import { globalTokens as $ } from "../../styles/globalTokens.stylex";

export const getWrapperAnimationConfig = (): AnimationVariantProps => {
  const controls = useScrollHandler({
    onScrollUp: () => controls.start("visible"),
    onScrollDown: () => controls.start("hidden"),
    threshold: 150,
  });
  const config = {
    style: { style: styles.avatarWrapper },
    motion: {
      animate: controls,
      variants: {
        visible: { top: $.avatarWrapperTop, transition: { duration: 1 } },
        hidden: { top: "-100px", transition: { duration: 1 } },
      },
    },
  };

  return config;
};
