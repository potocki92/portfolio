import Section from "../Components/Section/Section";
import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
    const helmetTitle = 'About';
    const helmetDescription = 'A few words about me.';

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{helmetTitle}</title>
                    <meta name="description" content={helmetDescription} />
                    <link rel="canonical" href="/about"/>
                    <meta property="og:title" content={helmetTitle} />
                    <meta property="og:description" content={helmetDescription} />
                </Helmet>
                <Section />
            </HelmetProvider>
        </>
    )
}

export default About