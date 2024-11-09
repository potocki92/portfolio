import { Container } from "../../Components/Container/Container";
import PageTitle from "../../Components/PageTitle/PageTitle";
import LifeApiComponent, { AboutExtended } from "../../data/lifeApi";
import Paragraph from "../../Components/Paragraph/Paragraph";
import * as stylex from "@stylexjs/stylex";
import { memo, useMemo } from "react";

const styles = stylex.create({
  containerGrid: {
    gridArea: { default: "2/1/3/3" },
  },
});
const About = () => {
  const { Titles } = LifeApiComponent();

  const memoizedPageTitle = useMemo(
    () => <PageTitle>{Titles.AboutTitle}</PageTitle>,
    [Titles.AboutTitle],
  );

  return (
    <Container {...stylex.props(styles.containerGrid)}>
      <div>
        {memoizedPageTitle}
        <Paragraph>{AboutExtended}</Paragraph>
      </div>
    </Container>
  );
};

export default memo(About);
