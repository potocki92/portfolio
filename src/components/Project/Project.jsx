import ProjectCard from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../Section/Section.styled";
import { ProjectSection } from "./Project.styled";

const Project = () => {
    return (
      <ProjectSection id="work" className="container">
        <SectionTitle>Selected Work</SectionTitle>
        <ProjectCard projectName={"WebStudio"} description={"My first responsive website."}/>
        <ProjectCard projectName={"IceCream"} description={"Group project an ice cream shop website."}/>
        <ProjectCard projectName={"Filmoteka"} description={"Group project a movie website."}/>
        <ProjectCard projectName={"Invoice"} description={"Creating invoices with a database."}/>
      </ProjectSection>
    );
}

export default Project;