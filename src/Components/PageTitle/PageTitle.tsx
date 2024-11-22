import * as stylex from "@stylexjs/stylex";
import { memo, ReactNode } from "react";
import { globalTokens as $, colors, text } from "../../styles/globalTokens.stylex";

type Props = {
  children?: ReactNode;
};

const MEDIA = "@media (min-width: 768px)";
const styles = stylex.create({
  title: {
    overflow: "hidden",
    fontWeight: 600,
    fontSize: { default: text.h2, [MEDIA]: text.h1 },
    lineHeight: 1.5,
    letterSpacing: $.letterTitleSpacing,
    color: colors.primaryText,
  },
});
const PageTitle = memo(({ children }: React.PropsWithChildren<Props>) => {
  return <h1 {...stylex.props(styles.title)}>{children}</h1>;
});

export default PageTitle;
