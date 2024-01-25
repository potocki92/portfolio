import { FC } from "react";
import {Container} from "../../Components/Container/Container";

const Projects: FC = () => {
  return (
    <Container id="projects">
      <div className="w-full flex flex-col gap-8">
        <h2 className="text-5xl font-bold">Projects</h2>
      </div>
    </Container>
  );
};

export default Projects;
