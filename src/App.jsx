import * as stylex from "@stylexjs/stylex";
import Layout from "./Layout/Layout";

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
})
function App() {
  return (
    <div {...stylex.props(styles.base)}>
      <Layout/>
    </div>
  );
}

export default App;
