import stylex from "@stylexjs/stylex";
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";
export const styles = stylex.create({
  socialButton: {
    position: "fixed",
    bottom: "0px",
    left: "0px",
    padding: `${$.globalYPadding}`,
    zIndex: 100,
  },
  socialWrapper: {
    position: "fixed",
    bottom: "37px",
    left: "0px",
    padding: `${$.globalYPadding}`,
    gap: "5px",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    width: $.socialIconSize,
    height: $.socialIconSize,
  },
  icon: {
    fill: colors.secondText,
  },
});
