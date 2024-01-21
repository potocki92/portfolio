import * as stylex from "@stylexjs/stylex";
import { colors, globalTokens as $, text } from "../../styles/globalTokens.stylex";

const MEDIA = "@media (min-width: 768px)";

const styles = stylex.create({
  nav: {
    // position: "fixed",
    height: 40,
    display: { default: "none", [MEDIA]: "flex" },
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.secondBackground,
    boxShadow: colors.shadow,
    borderRadius: $.borderRadius,
    padding: "0 0.75rem",
    border: `1px solid ${colors.border}`,
    color: colors.primaryText,
  },
  backdrop: {
    position: "fixed",
    inset: "0px",
    zIndex: 50,
    backgroundColor: colors.backdropBackground,
    backdropFilter: "blur(4px)",
  },
  modal: {
    overflow: "hidden",
    color: colors.secondText,
    zIndex: 50,
    position: "fixed",
    left: "1rem",
    right: "1rem",
    transformOrigin: "top",
    borderRadius: "1.5rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: colors.primaryBackground,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    [MEDIA]: {
      display: "none",
    },
  },
  bottomMargin: {
    marginBottom: "1rem",
  },
  ul: {
    position: "relative",
    display: { default: "block", [MEDIA]: "flex" },
    gap: "1.5rem",
    fontSize: text.p,
    lineHeight: "1.25rem",
    margin: { default: "-0.5rem 0", [MEDIA]: "0" },
  },
  a: {
    fontSize: text.sm,
    lineHeight: "1.75rem",
    cursor: "pointer",
    display: "block",
    padding: { default: "0.5rem 0rem", [MEDIA]: "0.5rem 0.75rem" },
    color: {
      default: colors.secondText,
      ":hover":"rgba(251 37 118/1)"
    },
    userSelect: "none",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
  },
  active: {
    color: "rgba(251 37 118/1)",
  },
  underline: {
    borderBottom: { default: `1px solid ${colors.modalUnderline}`, [MEDIA]: "none" },
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
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
    display: { default: "flex", [MEDIA]: "none" },
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
  },
  navButton: {
    color: colors.secondText,
    height: "1.5rem",
    width: "1.5rem",
    padding: "0.25rem",
    margin: "-0.25rem",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  mobileButtonWrapper: {
    display: "flex",
    gap: "0.5rem"
  },
  h2: {
    fontSize: text.sm,
    lineHeight: "1.5rem",
    fontWeight: "500",
  },
});

export default styles;
