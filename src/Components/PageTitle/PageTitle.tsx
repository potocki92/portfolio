import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";
import { globalTokens as $, colors, text } from "../../styles/globalTokens.stylex";

type Props = {
  children?: ReactNode;
};

const styles = stylex.create({
  h1: {
    overflow: "hidden",
    fontWeight: 600,
    fontSize: text.h1,
    lineHeight: 1.5,
    letterSpacing: $.letterTitleSpacing,
    color: colors.primaryText
  },
});
const PageTitle = ({ children }: React.PropsWithChildren<Props>) => {
  return <h1 {...stylex.props(styles.h1)}>{children}</h1>;
};

export default PageTitle;
