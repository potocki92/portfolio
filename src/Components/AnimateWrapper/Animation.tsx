import React, { ReactNode } from "react";
import { motion, MotionProps, MotionValue } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import { getHeaderAnimationConfig } from "./AnimationHeader";
import { getAvatarAnimationConfig } from "./AnimationAvatar";
import { getWrapperAnimationConfig } from "./AnimationWrapper";

interface StyleProps {
  style?: stylex.StyleXStyles;
  initial?: any;
  initialX?: any;
  initialY?: any;
  initialTransform?: string | MotionValue<string>;
  initialTransformOrigin?: string;
  initialCSSPosition?: any;
}

interface AnimateConfig {
  style?: StyleProps;
  motion?: MotionProps;
  motionComponent?: React.ElementType;
  children?: ReactNode;
}

/**
 * Builder class for creating animated components with style and motion properties.
 */
class AnimateBuilder {
  private style: StyleProps = {};
  private motion: MotionProps = {};
  private motionComponent: React.ElementType = motion.div;
  private children: ReactNode = null;

  /**
   * Sets the style properties.
   * @param {StyleProps} style - The style properties.
   * @returns {AnimateBuilder} The builder instance.
   */
  setStyleProps(style: StyleProps): AnimateBuilder {
    this.style = style;
    return this;
  }

  /**
   * Sets the motion properties.
   * @param {MotionProps} motion - The motion properties.
   * @returns {AnimateBuilder} The builder instance.
   */
  setMotionProps(motion: MotionProps): AnimateBuilder {
    this.motion = motion;
    return this;
  }

  /**
   * Sets the motion component.
   * @param {React.ElementType} motionComponent - The motion component.
   * @returns {AnimateBuilder} The builder instance.
   */
  setMotionComponent(motionComponent: React.ElementType): AnimateBuilder {
    this.motionComponent = motionComponent;
    return this;
  }

  /**
   * Sets the children nodes.
   * @param {ReactNode} children - The children nodes.
   * @returns {AnimateBuilder} The builder instance.
   */
  setChildren(children: ReactNode): AnimateBuilder {
    this.children = children;
    return this;
  }

  /**
   * Builds and returns the animated component.
   * @returns {JSX.Element} The animated component.
   */
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

/**
 * Base component for creating animated components.
 * @param {Object} props - The component props.
 * @param {AnimateConfig} props.config - The animation configuration.
 * @returns {JSX.Element} The animated component.
 */
const AnimateBase = ({ config }: { config: AnimateConfig }): JSX.Element => {
  const builder = new AnimateBuilder()
    .setStyleProps(config.style || {})
    .setMotionProps(config.motion || {})
    .setMotionComponent(config.motionComponent || motion.div)
    .setChildren(config.children);

  return builder.build();
};

/**
 * Wrapper component for creating animated components.
 * @param {Object} props - The component props.
 * @param {AnimateConfig} props.config - The animation configuration.
 * @param {ReactNode} [props.children] - The children nodes.
 * @returns {JSX.Element} The animated component.
 */
const AnimateWrapper = ({
  children,
}: {
  children?: ReactNode;
}): JSX.Element => {
  const WrapperAnimationConfig = getWrapperAnimationConfig();
  return <AnimateBase config={{ ...WrapperAnimationConfig, children }} />;
};

/**
 * Header component for creating animated header elements.
 * @param {Object} props - The component props.
 * @param {AnimateConfig} props.config - The animation configuration.
 * @param {ReactNode} [props.children] - The children nodes.
 * @returns {JSX.Element} The animated component.
 */
const AnimateHeader = ({
  children,
}: {
  config?: AnimateConfig;
  children?: ReactNode;
}): JSX.Element => {
  const HeaderAnimationConfig = getHeaderAnimationConfig();
  return (
    <AnimateBase config={{ ...HeaderAnimationConfig, motionComponent: motion.header, children }} />
  );
};

/**
 * Avatar component for creating animated avatar elements.
 * @param {Object} props - The component props.
 * @param {AnimateConfig} props.config - The animation configuration.
 * @param {ReactNode} [props.children] - The children nodes.
 * @returns {JSX.Element} The animated component.
 */
const AnimateAvatar = ({ children }: { children?: ReactNode }): JSX.Element => {
  const AvatarAnimationConfig = getAvatarAnimationConfig();
  return (
    <AnimateBase config={{ ...AvatarAnimationConfig, motionComponent: motion.div, children }} />
  );
};

export const Animate = {
  Wrapper: AnimateWrapper,
  Header: AnimateHeader,
  Avatar: AnimateAvatar,
};
