import { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import deviceHeightInfo from "../../utils/deviceHeightInfo";
import motionValueScrollYFactory from "../../utils/motionValueScroll";

type WrapperProps = {
  children?: ReactNode;
  style?: stylex.StyleXStyles;
};

const maxHeight: number = deviceHeightInfo();
/**
 * Functional React component representing a wrapper with dynamic styling based on scroll position.
 *
 * @param {WrapperProps} props - The properties of the Wrapper component.
 * @returns {JSX.Element} The JSX representation of the Wrapper component.
 */
const Wrapper = ((props: WrapperProps) => {
  const { children, style } = props;
  const { scrollY } = useScroll();

  const initialY = motionValueScrollYFactory(scrollY, [
    `${maxHeight / 3}px`,
    `25px`,
  ]);
  const initialX = motionValueScrollYFactory(scrollY, [
    `calc(50% + 0rem)`,
    `calc(0% + 1.5rem)`,
  ]);
  const initialTransform = motionValueScrollYFactory(scrollY, [
    `translate(-50%)`,
    "translate(0%)",
  ]);

  return (
    <motion.div
      id="wrapper"
      style={{
        ...stylex.props(style),
        position: "absolute",
        left: initialX,
        top: initialY,
        transform: initialTransform,
      }}
    >
      {children}
    </motion.div>
  );
});

export default Wrapper;
