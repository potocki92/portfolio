import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/globalTokens.stylex";

// dark theme
export const darkTheme = stylex.createTheme(colors, {
  primaryText: "rgb(255 255 255/1)",
  secondText: "rgba(229 231 235/1)",
  primaryBackground: "rgb(24 24 27/1)",
  secondBackground: "rgba(39,39,42,.9);",
  backdropBackground: "rgba(0,0,0,.8)",
  modalUnderline: "hsla(240,5%,96%,.05)",
  shadow: "0 1px 15px -2px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  avatarShadow: `rgb(70, 70, 70) 0px 0px 0px 0px, rgba(70, 70, 70, 1) 0px 0px 0px 1px, hsla(0,0%,100%,.1) 0px 0px 0px 0px`,
  border: "hsla(0 0% 50%/.2)",
  borderHover: "hsla(0 0% 100%/.2)",
});
export const lightTheme = stylex.createTheme(colors, {
  primaryText: "rgb(39 39 42/1)",
  secondText: "rgba(63 63 70/1)",
  primaryBackground: "rgb(244 244 245/1)",
  secondBackground: "hsla(0,0%,100%,.9)",
  backdropBackground: "rgba(39,39,42,.4)",
  modalUnderline: "#e5e7eb",
  shadow: "0 1px 15px -2px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  avatarShadow:
    "rgb(47, 47, 50) 0px 0px 0px 0px, rgba(47, 47, 50, 0.2) 0px 0px 0px 1px, rgba(47, 47, 50) 0px 0px 0px 0px",
  transparentAvatarShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
  border: "hsla(0 0% 100%/.9)",
  borderLi: "hsla(0 0% 50%/.2)",
  borderHover: "hsla(0 0% 100%/.9)",
  cardLiBackground: "transparent",
});
