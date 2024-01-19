import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";
const styles = stylex.create({
  header: {
    position: "fixed",
    top: 0,
    zIndex: 10,
    display: "flex",
    height: "auto",
    width: "100%",
    maxWidth: "1200px",
    alignItems: "baseline",
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
  glassEffectContainer: (height) => ({
    position: "absolute",
    height,
    width: "100%",
    transition: "backdrop-filter 0.3s",
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
    width: $.avatarSize,
    height: $.avatarSize,
    zIndex: 100,
    objectFit: "cover",
    borderRadius: $.borderRadius,
  },
});

export default styles;
