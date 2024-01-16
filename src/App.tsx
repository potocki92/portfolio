import * as stylex from "@stylexjs/stylex";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { globalTokens as $, colors } from "./styles/globalTokens.stylex";
import { dark } from "./styles/themes.stylex";
import { ThemeProvider, useTheme } from "./Components/ThemeContext/ThemeContex";
import Layout from "./Layout/Layout";

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
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div {...stylex.props(styles.base, theme === "light" ? styles.body : dark)}>
      <button {...stylex.props(styles.button)} onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
