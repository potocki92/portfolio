import { Container } from "../../Components/Container/Container";
import PageTitle from "../../Components/PageTitle/PageTitle";
import LifeApiComponent, { AboutExtended } from "../../data/lifeApi";
import Paragraph from "../../Components/Paragraph/Paragraph";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  containerGrid: {
    gridArea: { default: "2/1/3/3" },
  },
});
const About = () => {
  const { AboutTitle } = LifeApiComponent();
  return (
    <Container {...stylex.props(styles.containerGrid)}>
      <div>
        <PageTitle>{AboutTitle}</PageTitle>
        <Paragraph>{AboutExtended}</Paragraph>
      </div>
    </Container>
  );
};

export default About;
