import { ReactNode, forwardRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import deviceHeightInfo from "../../utils/deviceHeightInfo";

type WrapperProps = {
  children?: ReactNode;
  style?: stylex.StyleXStyles;
};

const maxHeight: number = deviceHeightInfo();

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((props, ref) => {
  const { children, style } = props;

  const { scrollY } = useViewportScroll();
  const initialY = useTransform(
    scrollY,
    [0, 500],
    [`${maxHeight / 3}px `, `25px`],
  );

  return (
    <motion.div
      ref={ref}
      style={{
        ...stylex.props(style),
        position: "fixed",
        left: "50%",
        top: initialY,
        transform: "translate(-50%)",
      }}
    >
      {children}
    </motion.div>
  );
});

export default Wrapper;
