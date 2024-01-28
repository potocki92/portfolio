import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";
import { text } from "../../styles/globalTokens.stylex";

type Props = {
  children?: ReactNode;
};
const styles = stylex.create({
  p: {
    marginTop: "1.5rem",
    fontSize: text.sm,
    lineHeight: "1.75rem",
    textWrap: "balance",
  },
});
const Paragraph = ({ children }: React.PropsWithChildren<Props>) => {
  return <p {...stylex.props(styles.p)}>{children}</p>;
};

export default Paragraph