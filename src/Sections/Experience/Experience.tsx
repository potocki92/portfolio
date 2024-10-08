import * as stylex from "@stylexjs/stylex";
import { Card } from "../../Components/Card/Card";
import { Container } from "../../Components/Container/Container";
import PageTitle from "../../Components/PageTitle/PageTitle";
import LifeApiComponent from "../../data/lifeApi";
import { globalTokens as $, colors, text } from "../../styles/globalTokens.stylex";

export const MEDIA = "@media (min-width: 768px)";
const styles = stylex.create({
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    marginTop: "2rem",
  },
  card: {
    display: "grid",
    gridTemplateColumns: { default: "repeat(2, 1fr)", [MEDIA]: "repeat(2, 1fr)" },
    gridTemplateRows: { default: "2rem 2rem auto auto", [MEDIA]: "2rem auto auto" },
    rowGap: { default: "1rem", [MEDIA]: "1.5rem" },
  },
  cardTitle: {
    textAlign: "start",
    fontSize: text.h5,
    gridArea: { default: "1/1/1/3", [MEDIA]: "1/1/1/2" },
  },
  cardDate: {
    textAlign: { default: "start", [MEDIA]: "end" },
    fontSize: text.sm,
    gridArea: { default: "2/1/2/3", [MEDIA]: "1/2/1/2" },
  },
  cardDescription: {
    gridArea: { default: "3/1/3/3", [MEDIA]: "2/1/2/3" },
    fontSize: text.sm,
  },
  cardUl: {
    display: "flex",
    gap: "0.5rem",
    gridArea: { default: "4/1/4/3", [MEDIA]: "3/1/3/3" },
    flexDirection: { default: "column", [MEDIA]: "row" },
  },
  cardLi: {
    border: `1px solid ${colors.borderLi}`,
    borderRadius: $.borderLi,
    padding: "0.5rem 1.25rem",
    width: "max-content",
  },
});
const Experience = () => {
  const { Titles, MyExperience } = LifeApiComponent();
  return (
    <Container>
      <PageTitle>{Titles.ExperienceTitle}</PageTitle>
      <Card style={styles.cardWrapper}>
        {MyExperience.map((Experience) => (
          <Card key={Experience.title} style={styles.card}>
            <Card.Title style={styles.cardTitle}>{Experience.title}</Card.Title>
            <Card.Date style={styles.cardDate}>{Experience.date}</Card.Date>
            <Card.Description style={styles.cardDescription}>
              {Experience.description}
            </Card.Description>
            <Card.Tech style={styles.cardUl}>
              {Experience.techStack.map((stack) => (
                <Card.TechItem key={stack} style={styles.cardLi}>
                  {stack}
                </Card.TechItem>
              ))}
            </Card.Tech>
          </Card>
        ))}
      </Card>
    </Container>
  );
};

export default Experience;
