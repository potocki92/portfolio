import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, text } from "../../styles/globalTokens.stylex";
import { Container } from "../../Components/Container/Container";
import { HeroAbout, Name } from "../../data/lifeApi";
import PageTitle from "../../Components/PageTitle/PageTitle";

const styles = stylex.create({
  heroContainer: {
    width: "100%",
    maxWidth: $.maxWidth,
  },
  heroHeading: {
    overflow: "hidden",
    fontWeight: "bold",
    fontSize: text.h3,
    lineHeight: 1,
  },
  p: {
    marginTop: "1.5rem",
    fontSize: text.sm,
    lineHeight: "1.75rem",
    textWrap: "balance",
  },
});

const Hero = () => {
  return (
    <>
      <Container>
        <div {...stylex.props(styles.heroContainer)}>
          <PageTitle style={styles.heroHeading}>{Name}</PageTitle>
          <p {...stylex.props(styles.p)}>{HeroAbout}</p>
        </div>
      </Container>
    </>
  );
};

export default Hero;
