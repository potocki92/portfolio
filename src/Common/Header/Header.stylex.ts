import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  header: {
    position: "fixed",
    top: 0,
    zIndex: 0,
    display: "flex",
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: 5,
    color: "white",
  },
  heroHeading: {
    display: "block",
    overflow: "hidden",
    fontWeight: "bold",
    lineHeight: "100%",
    textAlign: "center",
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
});

export default styles;
