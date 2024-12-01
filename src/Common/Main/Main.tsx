import * as stylex from "@stylexjs/stylex";
import { Outlet } from "react-router-dom";
import { Social } from "../../Components/Social/Social";

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
});
const Main = () => {
  return (
    <main>
      <div {...stylex.props(styles.container)}>
        <Outlet />
        <Social></Social>
      </div>
    </main>
  );
};

export default Main;
