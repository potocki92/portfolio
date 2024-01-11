import * as stylex from "@stylexjs/stylex";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { globalTokens as $, colors } from "./styles/globalTokens.stylex";
import { useState } from "react";
import { dark } from "./styles/themes.stylex";

const styles = stylex.create({
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: $.backgroundColor,
    color: colors.primaryText
  },
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
   button: {
    zIndex: 1000
   }
})


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <div {...stylex.props( styles.base, darkMode ? styles.body : dark)}>
       <button {...stylex.props(styles.button)} onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
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
