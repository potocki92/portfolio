import ProjectCard from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../Section/Section.styled";
import { ProjectSection } from "./Project.styled";
import WebStudio from "../../images/WebStudio.png"
import IceCream from "../../images/IceCream.png"
import Filmoteka from "../../images/Filmoteka.png"
import Invoice from "../../images/Invoice.png"

const Project = () => {
    return (
      <ProjectSection id="work" className="container">
        <SectionTitle>Selected Work</SectionTitle>
        <ProjectCard projectName={"WebStudio"} description={"My first responsive website."} projectImg={WebStudio}/>
        <ProjectCard projectName={"IceCream"} description={"Group project an ice cream shop website."} projectImg={IceCream}/>
        <ProjectCard projectName={"Filmoteka"} description={"Group project a movie website."} projectImg={Filmoteka}/>
        <ProjectCard projectName={"Invoice"} description={"Creating invoices with a database."} projectImg={Invoice}/>
      </ProjectSection>
    );
}

export default Project;