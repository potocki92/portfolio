import { GitHubIcon } from "../Components/Icons/GitHubIcon";
import { LinkedinIcon } from "../Components/Icons/LinkedInIcon";
import { XIcon } from "../Components/Icons/XIcon";

export const Name = "John Doe";

export const HeroAbout =
  "Passionate Software Engineer with a focus on React Native development, dedicated to crafting elegant and user-friendly mobile applications.";

export const AboutTitle = "About Me"
export const AboutExtended = (
  <>
    {`As a passionate software engineer, I thrive on the intricate dance between logic and
    creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React
    Native, where I seamlessly blend technology with innovation.`}
    <br />
    <br />
    {`With a fervor for crafting elegant solutions, 
    I navigate the ever-evolving landscape of software development. 
    My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible`}
  </>
);

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo?: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyProjects: Project[] = [
  {
    title: "Invoice",
    techStack: ["JavaScript", "React", "NodeJS", "MongoDB", "Styled-Components", "Vite"],
    description: "A platform to create invoices.",
    link: {
      label: "github.com",
      href: "https://potocki92.github.io/invoice-vite",
    },
  },
  {
    title: "IceCream Shop",
    techStack: ["JavaScript", "SASS"],
    description:
      "A fully responsive website was built using the BEM methodology and the SASS preprocessor.",
    link: {
      label: "github.com",
      href: "https://potocki92.github.io/IceCream/",
    },
  },
  {
    title: "Filmoteka",
    techStack: ["JavaScript", "React", "SASS", "REST API"],
    description:
      "Application for choosing a movie. I worked on modal CSS, connecting it with localStorage, creating a dynamic gallery, and conducting HTML + CSS testing.",
    link: {
      label: "github.com",
      href: "https://mateuszcharysz.github.io/goit-Filmoteka/",
    },
  },
];

export const SocialMedia = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/mateusz-potocki/", icon: LinkedinIcon },
  { name: "X", link: "https://twitter.com/?lang=pl", icon: XIcon },
  { name: "GitHub", link: "https://github.com/potocki92", icon: GitHubIcon },
];
