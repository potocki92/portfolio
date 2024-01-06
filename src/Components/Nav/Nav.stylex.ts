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
  button: {
    borderRadius: "9999px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(39, 39, 42, 0.9)",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    color: "rgba(228, 228, 231)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    backdropBlur: "10px",
    display: "block",
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  popover: {
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  mobiePanel: {
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
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  bottomMargin: {
    marginBottom:"1rem",
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
    display: "block",
    padding: "0.5rem 0rem",
    ":hover": {
      color: "rgba(251 37 118/1)",
    },
    userSelect: "none",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
    
    "@media (min-width: 768px)": {
      padding: "0.5rem 0.75rem",
    },
  },
  activeItem: {
    color: "rgba(251 37 118/1)",
  },
});
export default styles;
