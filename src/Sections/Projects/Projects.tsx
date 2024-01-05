import { FC } from "react"
import Section from "../../Components/Section/Section"

const Projects: FC = () => {
    return (
        <Section id="projects">
            <div className="w-full flex flex-col gap-8">
                <h2 className="text-5xl font-bold">Projects</h2>
            </div>
        </Section>
    )
}

export default Projects