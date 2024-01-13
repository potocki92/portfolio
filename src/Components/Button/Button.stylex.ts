import * as stylex from "@stylexjs/stylex";
import { colors, globalTokens as $ } from "../../styles/globalTokens.stylex";

const MEDIA = "@media (min-width: 768px)";
const styles = stylex.create({
  button: (borderRadius?) => ({
    cursor: "pointer",
    borderRadius: borderRadius || $.borderRadius,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.secondBackground,
    padding: "0.5rem 1rem",
    fontSize: ".875rem",
    fontWeight: "500",
    color: colors.primaryText,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    display: { default: "block", [MEDIA]: "none" },
  }),
})
export default styles