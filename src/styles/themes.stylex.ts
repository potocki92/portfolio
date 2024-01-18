import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/globalTokens.stylex";

// dark theme
export const dark = stylex.createTheme(colors, {
  primaryText: "rgb(228 228 231/1)",
  secondText: "rgba(212 212 216/1)",
  primaryBackground: "rgb(24 24 27/1)",
  secondBackground: "rgba(39,39,42,.9);",
  backdropBackground: "rgba(0,0,0,.8)",
  modalUnderline: "hsla(240,5%,96%,.05)",
  shadow: "0 1px 15px -2px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  border: "hsla(0 0% 50%/.2)",
  borderHover: "hsla(0 0% 100%/.2)"
});