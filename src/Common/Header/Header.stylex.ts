import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, colors, text } from "../../styles/globalTokens.stylex";

const MEDIA = "@media (min-width: 768px)";

const styles = stylex.create({
  header: {
    position: "fixed",
    top: 0,
    zIndex: 10,
    display: "flex",
    gap:".5rem",
    height: "auto",
    width: "100%",
    maxWidth: "1200px",
    alignItems: "center",
    justifyContent: "end",
    padding: "2rem 1.5rem",
  },
  heroHeading: {
    display: "block",
    overflow: "hidden",
    fontWeight: "bold",
    lineHeight: "100%",
    textAlign: "center",
  },
  headerWrapper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%)",
  },
  transform: {
    position: "absolute",
    left: 15,
    transform: "translateX(0%)",
  },
  fontSize: (fontSize) => ({
    fontSize,
    transition: "font-size 1s",
  }),
  button: (display) =>  ({
    height: "100%",
    cursor: "pointer",
    borderRadius: $.borderButtonRadius,
    border: {
      default: `1px solid ${colors.border}`,
      ":hover": `1px solid ${colors.borderHover}`,
    },
    backgroundColor: colors.secondBackground,
    padding: "0.5rem 1rem",
    fontSize: text.sm,
    fontWeight: "500",
    color: colors.primaryText,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    display: display || { default: "flex", [MEDIA]: "none" },
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
  }),
  glassEffectText: {
    backdropFilter: "blur(7.1px)",
  },
  avatarBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    width: $.avatarCircleSize,
    height: $.avatarCircleSize,
    backdropFilter: "blur(8px)",
    borderRadius: $.borderRadius,
    },
  avatar: {
    cursor: "pointer",
    width: $.avatarSize,
    height: $.avatarSize,
    zIndex: 100,
    objectFit: "cover",
    borderRadius: $.borderRadius,
    boxShadow: colors.avatarShadow
  },
});

export default styles;
