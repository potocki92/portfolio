import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "5rem"
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
        <div {...stylex.props(styles.container)}>
          <Hero />
          <About />
        </div>
      </HelmetProvider>
    </>
  );
};

export default Home;
