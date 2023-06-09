import { ProjectCardContent, ProjectCardDescription, ProjectCardImg, ProjectCardStyled, ProjectCardTitle } from "./ProjectCard.styled";

const ProjectCard = ({ projectName, description, projectImg }) => {
    return (
        <ProjectCardStyled>
            <ProjectCardImg src={projectImg}/>
            <ProjectCardContent>
                <ProjectCardTitle>{projectName}</ProjectCardTitle>
                <ProjectCardDescription>{description}</ProjectCardDescription>
            </ProjectCardContent>
        </ProjectCardStyled>
    )
}

export default ProjectCard;