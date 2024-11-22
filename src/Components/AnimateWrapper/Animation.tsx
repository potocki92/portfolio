import { ElementType, forwardRef, ReactNode, Ref } from "react";
import { motion, MotionProps, MotionValue } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import AnimateHeader from "./AnimationHeader";
import AnimateAvatar from "./AnimationAvatar";
import AnimateWrapper from "./AnimationWrapper";
import AnimateBackdrop from "./AnimationBackdrop";
import AnimateModal from "./AnimationModal";
import AnimateThemeButton from "./AnimateThemeButton";

interface StyleProps {
  style?: stylex.StyleXStyles;
  initial?: any;
  exit?: any;
  initialX?: any;
  initialY?: any;
  initialTransform?: string | MotionValue<string>;
  initialTransformOrigin?: string;
  initialCSSPosition?: any;
}

interface AnimateConfig {
  style?: StyleProps;
  motion?: MotionProps;
  motionComponent?: ElementType;
  children?: ReactNode;
  onClick?: () => void;
}

/**
 * Builder class for creating animated components with style and motion properties.
 */
class AnimateBuilder<T extends ElementType> {
  private style: StyleProps = {};
  private motion: MotionProps = {};
  private motionComponent: ElementType = motion.div;
  private children: ReactNode = null;
  private onClick?: () => void;
  private ref: Ref<T extends keyof JSX.IntrinsicAttributes ? JSX.IntrinsicAttributes[T] : T> = null;

  /**
   * Sets the style properties.
   * @param {StyleProps} style - The style properties.
   * @returns {AnimateBuilder} The builder instance.
   */
  setStyleProps(style: StyleProps): AnimateBuilder<T> {
    this.style = style;
    return this;
  }

  /**
   * Sets the motion properties.
   * @param {MotionProps} motion - The motion properties.
   * @returns {AnimateBuilder} The builder instance.
   */
  setMotionProps(motion: MotionProps): AnimateBuilder<T> {
    this.motion = motion;
    return this;
  }

  /**
   * Sets the motion component.
   * @param {T} motionComponent - The motion component.
   * @returns {AnimateBuilder} The builder instance.
   */
  setMotionComponent(motionComponent: T): AnimateBuilder<T> {
    this.motionComponent = motionComponent;
    return this;
  }

  /**
   * Sets the children nodes.
   * @param {ReactNode} children - The children nodes.
   * @returns {AnimateBuilder} The builder instance.
   */
  setChildren(children: ReactNode): AnimateBuilder<T> {
    this.children = children;
    return this;
  }

  /**
   * Sets the onClick event.
   * @param {() => void | undefined} onClick - The onClick event.
   * @returns {AnimateBuilder} The builder instance.
   */
  setOnClick(onClick: (() => void) | undefined): AnimateBuilder<T> {
    this.onClick = onClick;
    return this;
  }
  /**
   * Sets the ref.
   * @param {Ref<T extends keyof JSX.IntrinsicAttributes ? JSX.IntrinsicAttributes[T] : T>} ref - The ref.
   * @returns {AnimateBuilder} The builder instance.
   */
  setRef(
    ref: Ref<T extends keyof JSX.IntrinsicAttributes ? JSX.IntrinsicAttributes[T] : T>,
  ): AnimateBuilder<T> {
    this.ref = ref;
    return this;
  }
  /**
   * Builds and returns the animated component.
   * @returns {JSX.Element} The animated component.
   */
  build(): JSX.Element {
    const MotionComponent = this.motionComponent;

    const motionProps: MotionProps = {
      initial: this.style.initial,
      exit: this.style.exit,
      ...this.motion,
    };

    const cssStyle: React.CSSProperties = {
      position: this.style.initialCSSPosition,
      left: this.style.initialX,
      top: this.style.initialY,
      transform: this.style.initialTransform as string,
      transformOrigin: this.style.initialTransformOrigin as string,
    };
    return (
      <MotionComponent
        {...stylex.props(this.style.style)}
        ref={this.ref}
        style={cssStyle}
        onClick={this.onClick}
        {...motionProps}
      >
        {this.children}
      </MotionComponent>
    );
  }
}

/**
 * Base component for creating animated components.
 * @param {Object} props - The component props.
 * @param {AnimateConfig} props.config - The animation configuration.
 * @returns {JSX.Element} The animated component.
 */
export const AnimateBase = forwardRef<any, { config: AnimateConfig }>(({ config }, ref) => {
  const builder = new AnimateBuilder()
    .setStyleProps(config.style || {})
    .setMotionProps(config.motion || {})
    .setMotionComponent(config.motionComponent || motion.div)
    .setChildren(config.children)
    .setOnClick(config.onClick || (() => {}))
    .setRef(ref);

  return builder.build();
});

export const Animate = {
  Wrapper: AnimateWrapper,
  Header: AnimateHeader,
  Avatar: AnimateAvatar,
  Backdrop: AnimateBackdrop,
  Modal: AnimateModal,
  ThemeButton: AnimateThemeButton,
};
