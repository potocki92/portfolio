import * as stylex from "@stylexjs/stylex";
const Button = ({ 
    onClick, 
    children,
    style, 
   }: React.PropsWithChildren<{ onClick: () => void, props?: React.HTMLAttributes<HTMLButtonElement>, style?: stylex.StyleXStyles}>) => {
    return (
      <button onClick={onClick} {...stylex.props(style)}>{children}</button>
    )
  }

export default Button