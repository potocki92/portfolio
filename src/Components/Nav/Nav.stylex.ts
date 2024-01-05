import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  nav: {
    position: "fixed",
    height: 40,
    display: "none",
    "@media (min-width: 768px)": {
      display: "flex",
    },
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(39, 39, 42, 0.9)",
    borderRadius: "9999px",
    padding: "0 0.75rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "rgba(228, 228, 231)",
  },
  navMobile: {
    display: "flex",
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  list: {
    position: "relative",
    display: "none",
    gap: "1.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",

    "@media (min-width: 768px)": {
      display: "flex",
    },
  },
  item: {
    cursor: "pointer",
    padding: "0.5rem 0.75rem",
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
});
export default styles;
