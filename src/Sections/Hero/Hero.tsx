import Section from "../../Components/Section/Section";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, text } from "../../styles/globalTokens.stylex";

const styles = stylex.create({
  heroContainer: {
    width: "100%",
    maxWidth: $.maxWidth,
  },
  heroHeading: {
    overflow: "hidden",
    fontWeight: "bold",
    fontSize: text.h2,
    lineHeight: "100%",
    marginBottom: "16px",
  },
});

const Hero = () => {
  return (
    <>
      <Section id="hero">
        <div {...stylex.props(styles.heroContainer)}>
          <h1 {...stylex.props(styles.heroHeading)}>John Doe</h1>
        </div>
      </Section>
    </>
  );
};

export default Hero;
