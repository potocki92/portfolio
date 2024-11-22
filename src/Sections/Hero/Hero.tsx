import "../../i18n";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $ } from "../../styles/globalTokens.stylex";
import { Container } from "../../Components/Container/Container";

import PageTitle from "../../Components/PageTitle/PageTitle";
import Paragraph from "../../Components/Paragraph/Paragraph";
import LifeApiComponent from "../../data/lifeApi";
import { memo, useMemo } from "react";
const MEDIA = "@media (min-width: 768px)";
const styles = stylex.create({
  container: {
    width: "100%",
    maxWidth: $.maxTitleWidth,
    position: { default: "static", [MEDIA]: "absolute" },
  },
  containerGrid: {
    gridArea: {
      default: "1/1/1/3",
    },
    height: "100px",
    position: "relative",
  },
});

const Hero = () => {
  const { Name, HeroAbout } = LifeApiComponent();

  const MemoizedPageTitle = useMemo(() => <PageTitle>{Name}</PageTitle>, [Name]);

  return (
    <>
      <Container {...stylex.props(styles.containerGrid)}>
        <div {...stylex.props(styles.container)}>
          {MemoizedPageTitle}
          <Paragraph>{HeroAbout}</Paragraph>
        </div>
      </Container>
    </>
  );
};

export default memo(Hero);
