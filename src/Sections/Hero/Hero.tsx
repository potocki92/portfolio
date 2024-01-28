import * as stylex from "@stylexjs/stylex";
import { globalTokens as $ } from "../../styles/globalTokens.stylex";
import { Container } from "../../Components/Container/Container";
import { HeroAbout, Name } from "../../data/lifeApi";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paragraph from "../../Components/Paragraph/Paragraph";

const styles = stylex.create({
  container: {
    width: "100%",
    maxWidth: $.maxTitleWidth,
  },
});

const Hero = () => {
  return (
    <>
      <Container>
        <div {...stylex.props(styles.container)}>
          <PageTitle>{Name}</PageTitle>
          <Paragraph>{HeroAbout}</Paragraph>
        </div>
      </Container>
    </>
  );
};

export default Hero;
