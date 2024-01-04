import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    nav: {
        position: "fixed",
        height: 40,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(39, 39, 42, 0.9)",
        borderRadius: "9999px",
        padding: "0 0.75rem",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "rgba(228, 228, 231)",
      },
      
    list: {
        padding: "0.5rem 0.75rem"
    }
})
export default styles