import * as stylex from "@stylexjs/stylex";
import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { globalTokens as $, colors, globalStyles, text } from "../../styles/globalTokens.stylex";

const styles = stylex.create({
  button: ({
    cursor: "pointer",
    borderRadius: $.borderButtonRadius,
    border: {
      default: `1px solid ${colors.border}`,
      ":hover": `1px solid ${colors.borderHover}`,
    },
    backgroundColor: colors.secondBackground,
    padding: "0.5rem 1rem",
    fontSize: text.sm,
    fontWeight: "500",
    color: colors.primaryText,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
  }), 
});

type Props<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithRef<T>;

const Button = forwardRef(
  <T extends ElementType = "button">(
    { as: Component = "button", ...props }: Props<T>,
    ref: React.Ref<T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T>,
  ) => {
    const { className, children, onClick, is,  ...rest } = props;
    console.log(is);
    
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
