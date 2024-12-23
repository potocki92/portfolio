import * as stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex";
import { colors, text } from "../../styles/globalTokens.stylex";
import { memo } from "react";

const styles = stylex.create({
  p: {
    fontSize: text.sm,
    lineHeight: "1.75rem",
    color: colors.secondText,
  },
});
const Paragraph = memo(({
  as: Component = "p",
  children,
  style
}: React.PropsWithChildren<{ as?: React.ElementType; style?: StyleXStyles }>) => {
  return <Component {...stylex.props(styles.p, style)}>{children}</Component>;
});

export default Paragraph;
