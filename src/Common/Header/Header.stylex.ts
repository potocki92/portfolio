import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";

const styles = stylex.create({
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    gap: ".5rem",
    height: "auto",
    width: "100%",
    maxWidth: $.maxWidth,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: `2rem ${$.globalYPadding}`,
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
  glassEffectText: {
    backdropFilter: "blur(7.1px)",
  },
  avatarBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    left: 0,
    width: $.avatarCircleSize,
    height: $.avatarCircleSize,
    backdropFilter: "blur(8px)",
    borderRadius: $.borderRadius,
    boxShadow: colors.avatarShadow,
    visibility: "hidden",
  },
  avatar: {
    cursor: "pointer",
    width: $.avatarSize,
    height: $.avatarSize,
    objectFit: "cover",
    borderRadius: $.borderRadius,
    boxShadow: colors.avatarShadow,
    visibility: "visible",
  },
  avatarWrapper: {
    zIndex: 1,
    width: "100%",
    height: "125px",
    position: "relative",
    maxWidth: $.maxWidth,
    padding: `0 ${$.globalYPadding}`,
  },
});

export default styles;
