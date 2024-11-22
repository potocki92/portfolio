import * as stylex from "@stylexjs/stylex";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import Projects from "./Pages/Projects";
import { colors } from "./styles/globalTokens.stylex";
import { lightTheme, darkTheme } from "./styles/themes.stylex";
import { ThemeProvider, useTheme } from "./Components/ThemeContext/ThemeContex";
import Layout from "./Layout/Layout";

const styles = stylex.create({
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: colors.primaryBackground,
    color: colors.primaryText,
  },
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    zIndex: 1000,
  },
});

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
function AppContent() {
  const { theme } = useTheme();

  return (
    <div {...stylex.props(theme === "dark" ? darkTheme : lightTheme, styles.base, styles.body)}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
