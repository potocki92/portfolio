import * as stylex from "@stylexjs/stylex";
const Button = ({ 
    onClick, 
    children,
    style, 
    borderRadius,
   }: React.PropsWithChildren<{ onClick: () => void, props?: React.HTMLAttributes<HTMLButtonElement>, style?: stylex.StyleXStyles, borderRadius?: string}>) => {
    return (
      <button onClick={onClick} {...stylex.props(style)}>{children}</button>
    )
  }

export default Button