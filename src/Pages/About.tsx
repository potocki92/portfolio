import { Helmet, HelmetProvider } from "react-helmet-async";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $ } from "../styles/globalTokens.stylex";
import About from "../Sections/About/About";
import Experience from "../Sections/Experience/Experience";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: $.containerGap,
    maxWidth: $.maxWidth,
  },
});
const AboutPage = () => {
  const helmetTitle = "About";
  const helmetDescription = "A few words about me.";

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{helmetTitle}</title>
          <meta name="description" content={helmetDescription} />
          <link rel="canonical" href="/about" />
          <meta property="og:title" content={helmetTitle} />
          <meta property="og:description" content={helmetDescription} />
        </Helmet>
        <div {...stylex.props(styles.container)}>
          <About />
          <Experience />
        </div>
      </HelmetProvider>
    </>
  );
};

export default AboutPage;
