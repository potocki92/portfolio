import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/globalTokens.stylex";

// dark theme
export const dark = stylex.createTheme(colors, {
  primaryText: "rgba(244 244 245/1)",
  primaryBackground: "rgb(24 24 27/1)",
  secondBackground: "rgba(39,39,42,.9)",
  shadow: "0 1px 15px -2px rgb(39,39,42,.05), 0 4px 6px -4px rgb(39,39,42,.05)",
  border: "hsla(0 0% 100%/.1)"
});
