
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, text } from "../../styles/globalTokens.stylex";
import { Container } from "../../Components/Container/Container";

const styles = stylex.create({
  heroContainer: {
    width: "100%",
    maxWidth: $.maxWidth,
  },
  heroHeading: {
    overflow: "hidden",
    fontWeight: "bold",
    fontSize: text.h3,
    lineHeight: "100%",
  },
});

const Hero = () => {
  return (
    <>
      <Container>
        <div {...stylex.props(styles.heroContainer)}>
          <h1 {...stylex.props(styles.heroHeading)}>John Doe</h1>
        </div>
      </Container>
    </>
  );
};

export default Hero;
