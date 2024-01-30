import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $ } from "../styles/globalTokens.stylex";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "5rem",
    maxWidth: $.maxWidth
  },
  containerGrid: {
    display: "grid",
    justifyItems: "start",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "auto",
    gridColumnGap: "0px",
    gridRowGap: $.containerGap,
  },
});
const Home = () => {
  const helmetTitle = "Mateusz Potocki";
  const helmetDescription = "A passionate fullstack developer based in Boleslawiec, Poland.";

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{helmetTitle}</title>
          <meta name="description" content={helmetDescription} />
          <link rel="canonical" href="/" />
          <meta property="og:title" content={helmetTitle} />
          <meta property="og:description" content={helmetDescription} />
        </Helmet>
        <div {...stylex.props(styles.container, styles.containerGrid)}>
          <Hero />
          <About />
          <div style={{ height: "200vh", width: "100%" }}></div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Home;
