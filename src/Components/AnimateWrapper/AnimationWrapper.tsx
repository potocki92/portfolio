import { memo, ReactNode, useEffect, useRef, useState } from "react";
import { AnimationVariantProps } from "../../@types/types";
import styles from "../../Common/Header/Header.stylex";
import useScrollHandler from "../../hooks/useScroll";
import { AnimateBase } from "./Animation";

export const getWrapperAnimationConfig = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  isStatic: boolean,
  setIsStatic: React.Dispatch<React.SetStateAction<boolean>>,
): AnimationVariantProps => {
  const controls = useScrollHandler({
    onScrollUp: () => controls.start("visible"),
    onScrollDown: () => controls.start("hidden"),
    threshold: 150,
  });
  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsStatic(true);
        } else {
          setIsStatic(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [wrapperRef, setIsStatic]);

  const config = {
    style: { style: styles.avatarWrapper },
    motion: {
      animate: controls,
      variants: {
        visible: {
          top: "0px",
          transition: { duration: 1 },
          position: isStatic ? "sticky" : "relative",
        },
        hidden: { top: "-100px", transition: { duration: 1 } },
      },
    },
  };

  return config;
};

/**
 * Wrapper component for creating animated components.
 * @param {Object} props - The component props.
 * @param {AnimateConfig} props.config - The animation configuration.
 * @param {ReactNode} [props.children] - The children nodes.
 * @returns {JSX.Element} The animated component.
 */
const AnimateWrapper = memo(({ children }: { children?: ReactNode }): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isStatic, setIsStatic] = useState(false);
  const WrapperAnimationConfig = getWrapperAnimationConfig(wrapperRef, isStatic, setIsStatic);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsStatic(true);
        } else {
          setIsStatic(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <AnimateBase ref={wrapperRef} config={{ ...WrapperAnimationConfig, children }} />;
});

export default AnimateWrapper;
