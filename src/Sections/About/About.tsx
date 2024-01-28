import { Container } from "../../Components/Container/Container";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { AboutExtended, AboutTitle } from "../../data/lifeApi";
import Paragraph from "../../Components/Paragraph/Paragraph";

const About = () => {
  return (
    <Container id="about">
      <div>
        <PageTitle>{AboutTitle}</PageTitle>
        <Paragraph>{AboutExtended}</Paragraph>
      </div>
    </Container>
  );
};

export default About;
