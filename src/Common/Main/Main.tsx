import * as stylex from "@stylexjs/stylex";
import { Outlet } from "react-router-dom";

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "center",
  }
});
const Main = () => {
  return (
    <main>
      <div {...stylex.props(styles.container)}>
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
