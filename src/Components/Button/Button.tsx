import * as stylex from "@stylexjs/stylex";
import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";

type Props<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithRef<T>

const Button = forwardRef(
  <T extends ElementType = 'button'>({as: Component = 'button', ...props}: Props<T>,
    ref: React.Ref<T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T>,
    ) => {
      const { className, children, onClick, style, ...rest } = props
    
      return (
      <Component 
        className={className} 
        onClick={onClick} 
        {...stylex.props(style)} 
        {...rest} 
        ref={ref}
        >
          {children}
        </Component>
    );
  },
);

Button.displayName = 'Button'
export default Button