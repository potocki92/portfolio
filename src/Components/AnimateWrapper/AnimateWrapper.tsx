import React, { ReactNode } from "react";
import { motion, MotionProps, MotionValue } from "framer-motion";
import * as stylex from "@stylexjs/stylex";

type StyleProps = {
  style?: stylex.StyleXStyles;
  initial?: any;
  initialX?: any;
  initialY?: any;
  initialTransform?: string | MotionValue<string>;
  initialTransformOrigin?: string;
  initialCSSPosition?: any;
};

type AnimateConfig = {
  style?: StyleProps;
  motion?: MotionProps;
  motionComponent?: React.ElementType;
  children?: ReactNode;
};

class AnimateBuilder {
  private style: StyleProps = {};
  private motion: MotionProps = {};
  private motionComponent: React.ElementType = motion.div;
  private children: ReactNode = null;

  setStyleProps(style: StyleProps): AnimateBuilder {
    this.style = style;
    return this;
  }

  setMotionProps(motion: MotionProps): AnimateBuilder {
    this.motion = motion;
    return this;
  }

  setMotionComponent(motionComponent: React.ElementType): AnimateBuilder {
    this.motionComponent = motionComponent;
    return this;
  }

  setChildren(children: ReactNode): AnimateBuilder {
    this.children = children;
    return this;
  }

  build(): JSX.Element {
    return (
      <this.motionComponent
        {...stylex.props(this.style.style)}
        style={{
          position: this.style.initialCSSPosition,
          initial: this.style.initial,
          left: this.style.initialX,
          top: this.style.initialY,
          transform: this.style.initialTransform,
          transformOrigin: this.style.initialTransformOrigin,
        }}
        {...this.motion}
      >
        {this.children}
      </this.motionComponent>
    );
  }
}

const AnimateBase = ({ config }: { config: AnimateConfig }): JSX.Element => {
  const builder = new AnimateBuilder()
    .setStyleProps(config.style || {})
    .setMotionProps(config.motion || {})
    .setMotionComponent(config.motionComponent || motion.div)
    .setChildren(config.children);

  return builder.build();
};

const AnimateWrapper = ({ config, children }: { config: AnimateConfig; children?: ReactNode }): JSX.Element => {
  return <AnimateBase config={{ ...config, children }} />;
};

const AnimateHeader = ({ config, children }: { config: AnimateConfig; children?: ReactNode }): JSX.Element => {
  return <AnimateBase config={{ ...config, motionComponent: motion.header, children }} />;
};

const AnimateAvatar = ({ config, children }: { config: AnimateConfig; children?: ReactNode }): JSX.Element => {
  return <AnimateBase config={{ ...config, motionComponent: motion.div, children }} />;
};

export const Animate = {
  Wrapper: AnimateWrapper,
  Header: AnimateHeader,
  Avatar: AnimateAvatar,
};