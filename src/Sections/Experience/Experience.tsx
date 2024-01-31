import { Card } from "../../Components/Card/Card";
import { Container } from "../../Components/Container/Container";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { ExperienceTitle, MyExperience } from "../../data/lifeApi";

const Experience = () => {
  return (
    <Container>
      <div>
        {
          // TODO: div as card component -> 'created new component'
        }
        <PageTitle>{ExperienceTitle}</PageTitle>
        {MyExperience.map((Experience) => (
            <Card key={Experience.title}>
                <Card.Title>{Experience.title}</Card.Title>
                <Card.Date>{Experience.date}</Card.Date>
                <Card.Description>{Experience.description}</Card.Description>
                <Card.Tech>{Experience.techStack.map((stack) => (
                    <Card.TechItem key={stack}>{stack}</Card.TechItem>
                ))}</Card.Tech>
            </Card>
        //   <Paragraph>{Experience.description}</Paragraph>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
