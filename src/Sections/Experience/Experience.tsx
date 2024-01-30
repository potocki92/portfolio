import { Container } from "../../Components/Container/Container"
import PageTitle from "../../Components/PageTitle/PageTitle"
import Paragraph from "../../Components/Paragraph/Paragraph"
import { ExperienceExtended, ExperienceTitle } from "../../data/lifeApi"

const Experience = () => {
    return (
        <Container>
            <div>
                <PageTitle>{ExperienceTitle}</PageTitle>
                <Paragraph>{ExperienceExtended}</Paragraph>
            </div>
        </Container>
    )
}

export default Experience