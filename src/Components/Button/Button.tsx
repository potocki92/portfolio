import * as stylex from "@stylexjs/stylex";
import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { globalTokens as $, colors, globalStyles, text } from "../../styles/globalTokens.stylex";

const styles = stylex.create({
  button: {
    cursor: "pointer",
    borderRadius: $.borderButtonRadius,
    border: {
      default: `1px solid ${colors.border}`,
      ":hover": `1px solid ${colors.borderHover}`,
    },
    backgroundColor: colors.secondBackground,
    padding: "0.5rem",
    fontSize: text.xs,
    fontWeight: "500",
    color: colors.primaryText,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    width: $.buttonWidth,
    height: $.buttonHeight,
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
  },
});

/**
 * Props for the Button component.
 * 
 * @template T - The type of the component to render as.
 * @typedef {Object} Props
 * @property {T} [as] - The component to render as. Defaults to "button".
 * @property {React.Ref<T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T>} ref - The ref to the component.
 * @property {string} [className] - Additional class names to apply to the button.
 * @property {React.ReactNode} children - The content of the button.
 * @property {React.MouseEventHandler} [onClick] - The click event handler.
 * @property {boolean} [is] - Conditional styling flag.
 */
type Props<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithRef<T>;

/**
 * A customizable button component that can render as different HTML elements.
 * 
 * @template T - The type of the component to render as.
 * @param {Props<T>} props - The props for the button component.
 * @param {React.Ref<T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = forwardRef(
  <T extends ElementType = "button">(
    { as: Component = "button", ...props }: Props<T>,
    ref: React.Ref<T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T>,
  ) => {
    const { className, children, onClick, is, ...rest } = props;
    return (
      <Component
        className={className}
        onClick={onClick}
        {...stylex.props(styles.button, is ? globalStyles.flex : globalStyles.flexButtons)}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);

Button.displayName = "Button";
export default Button;
