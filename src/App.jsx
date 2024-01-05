import * as stylex from "@stylexjs/stylex";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

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
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home/>
            }
          />
          <Route
            path="/about"
            element={
              <About/>
            }
          />
          <Route
            path="/resume"
            element={
              <Home/>
            }
          />
          <Route
            path="/projects"
            element={
              <Projects/>
            }
          />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
