import { Helmet, HelmetProvider } from "react-helmet-async";
import Section from "../Components/Section/Section";

const Projects = () => {
    const helmetTitle = 'Projects';
    const helmetDescription = "Projects I've created while aiming to make my mark on the world.";

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{helmetTitle}</title>
                    <meta name="description" content={helmetDescription} />
                    <link rel="canonical" href="/projects"/>
                    <meta property="og:title" content={helmetTitle} />
                    <meta property="og:description" content={helmetDescription} />
                </Helmet>
            
                <Section />
            </HelmetProvider>
        </>
    )
}

export default Projects