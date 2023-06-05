import { ProjectCardContent, ProjectCardDescription, ProjectCardImg, ProjectCardStyled, ProjectCardTitle } from "./ProjectCard.styled";

const ProjectCard = ({ projectName, description }) => {
    return (
        <ProjectCardStyled>
            <ProjectCardImg/>
            <ProjectCardContent>
                <ProjectCardTitle>{projectName}</ProjectCardTitle>
                <ProjectCardDescription>{description}</ProjectCardDescription>
            </ProjectCardContent>
        </ProjectCardStyled>
    )
}

export default ProjectCard;