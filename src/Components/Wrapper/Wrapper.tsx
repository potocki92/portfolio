import { ReactNode } from "react";
import { motion, MotionProps, MotionValue } from "framer-motion";
import * as stylex from "@stylexjs/stylex";

/**
 * The properties of the Wrapper component.
 * 
 * 
 */
type StyleProps = {
  customStyles?: stylex.StyleXStyles;
  initialX?: any;
  initialY?: any;
  initialTransform?: string | MotionValue<string>;
  initialTransformOrigin?: string;
  initialCSSPosition?: any;
};

type WrapperProps = {
  children?: ReactNode;
  styleProps?: StyleProps;
  motionProps?: MotionProps;
};

/**
 * Functional React component representing a wrapper with dynamic styling based on scroll position.
 *
 * @param {WrapperProps} props - The properties of the Wrapper component.
 * @returns {JSX.Element} The JSX representation of the Wrapper component.
 */
const Wrapper = ({
  children,
  styleProps,
  motionProps,
}: React.PropsWithChildren<WrapperProps>): JSX.Element => {
  const {
    customStyles,
    initialX,
    initialY,
    initialTransform,
    initialTransformOrigin,
    initialCSSPosition,
  } = styleProps || {};

  return (
    <motion.div
      id="wrapper"
      {...stylex.props(customStyles)}
      style={{
        position: initialCSSPosition,
        left: initialX,
        top: initialY,
        transform: initialTransform,
        transformOrigin: initialTransformOrigin,
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper; 
