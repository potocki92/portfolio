import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";
import { colors, text } from "../../styles/globalTokens.stylex";

type Props = {
  children?: ReactNode;
};
const styles = stylex.create({
  p: {
    marginTop: "1.5rem",
    fontSize: text.sm,
    lineHeight: "1.75rem",
    textWrap: "balance",
    color: colors.secondText
  },
});
const Paragraph = ({ children }: React.PropsWithChildren<Props>) => {
  return <p {...stylex.props(styles.p)}>{children}</p>;
};

export default Paragraph