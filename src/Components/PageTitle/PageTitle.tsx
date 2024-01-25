import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  style?: stylex.StyleXStyles;
};
const PageTitle = ({ children, style }: React.PropsWithChildren<Props>) => {
  return <h1 {...stylex.props(style)}>{children}</h1>;
};

export default PageTitle;
