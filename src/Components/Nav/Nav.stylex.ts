import * as stylex from "@stylexjs/stylex";
import { colors, globalTokens as $ } from "../../styles/globalTokens.stylex";

const MEDIA = "@media (min-width: 768px)";
const styles = stylex.create({
  nav: {
    position: "fixed",
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
  button: {
    borderRadius: $.borderRadius,
    border: `1px solid ${colors.border}`,
    backgroundColor: "rgba(39, 39, 42, 0.9)",
    padding: "0.5rem 1rem",
    fontSize: ".875rem",
    fontWeight: "500",
    color: "rgba(228, 228, 231)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    display: { default: "block", [MEDIA]: "none" },
  },
  popover: {
    [MEDIA]: {
      display: "none",
    },
  },
  overlay: {
    position: "fixed",
    inset: "0px",
    zIndex: 50,
    backgroundColor: "rgba(39 39 42/0.4)",
    backdropFilter: "blur(4px)",
  },
  panel: {
    color: "rgba(212 212 216/1)",
    zIndex: 50,
    position: "fixed",
    top: "2rem",
    left: "1rem",
    right: "1rem",
    transformOrigin: "top",
    borderRadius: "1.5rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(39, 39, 42, 0.9)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    [MEDIA]: {
      display: "none",
    },
  },
  bottomMargin: {
    marginBottom: "1rem",
  },
  list: {
    position: "relative",
    display: { default: "block", [MEDIA]: "flex" },
    gap: "1.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    margin: { default: "-0.5rem 0", [MEDIA]: "0" },
  },
  item: {
    cursor: "pointer",
    display: "block",
    padding: { default: "'0.5rem 0rem", [MEDIA]: "0.5rem 0.75rem" },
    ":hover": {
      color: "rgba(251 37 118/1)",
    },
    userSelect: "none",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
  },
  activeItem: {
    color: "rgba(251 37 118/1)",
  },
  underline: {
    borderBottom: { default: "1px solid hsla(240,5%,96%,.05)", [MEDIA]: "none" },
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between"
  },
});

export default styles;
