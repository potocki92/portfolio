import * as stylex from "@stylexjs/stylex";
import { colors, text } from "../../styles/globalTokens.stylex";

const styles = stylex.create({
  p: {
    marginTop: "1.5rem",
    fontSize: text.sm,
    lineHeight: "1.75rem",
    textWrap: "balance",
    color: colors.secondText,
  },
});
const Paragraph = ({
  as: Component = "p",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType }>) => {
  return <Component {...stylex.props(styles.p)}>{children}</Component>;
};

export default Paragraph;
