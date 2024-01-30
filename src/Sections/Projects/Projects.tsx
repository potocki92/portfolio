import {Container} from "../../Components/Container/Container";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { ProjectTitle } from "../../data/lifeApi";

const Projects = () => {
  return (
    <Container>
      <div>
        <PageTitle>{ProjectTitle}</PageTitle>
      </div>
    </Container>
  );
};

export default Projects;
