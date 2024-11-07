import { MotionProps, MotionValue } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

export type AnimationVariantProps = {
  style?: {
    initial?: string | undefined;
    initialY?: string | MotionValue<string>;
    initialX?: string | MotionValue<string>;
    initialTransformOrigin?: string;
    initialTransform?: string | MotionValue<string>;
    initialCSSPosition?: undefined | string | MotionValue<string>;
    style?: stylex.StyleXStyles;
  };
  motion?: {
    animate?: any;
    variants?: {
      transparent?: Record<string, string | number>;
      color?: Record<string, string | number>;
      visible?: Record<string, string | number | {}>;
      hidden?: Record<string, string | number | {}>;
    };
  };
};

export interface StyleProps {
  style?: stylex.StyleXStyles;
  initial?: any;
  initialX?: any;
  initialY?: any;
  initialTransform?: string | MotionValue<string>;
  initialTransformOrigin?: string;
  initialCSSPosition?: any;
}

export interface AnimateConfig {
  style?: StyleProps;
  motion?: MotionProps;
  motionComponent?: React.ElementType;
  children?: ReactNode;
}
