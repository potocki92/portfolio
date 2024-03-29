import { GitHubIcon } from "../Components/Icons/GitHubIcon";
import { LinkedinIcon } from "../Components/Icons/LinkedInIcon";
import { XIcon } from "../Components/Icons/XIcon";

export const Name = "John Doe";

export const HeroAbout =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cupiditate eligendi? Quibusdam vel delectus laudantium.";

export const AboutTitle = "ABOUT ME";
export const AboutExtended = (
  <>
    {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Accusamus fuga asperiores quam rerum quae error praesentium quos facilis, ad quis, doloremque omnis veritatis officia impedit.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Accusamus fuga asperiores quam rerum quae error praesentium quos facilis, ad quis, doloremque omnis veritatis officia impedit. 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Accusamus fuga asperiores quam rerum quae error praesentium quos facilis, ad quis, doloremque omnis veritatis officia impedit`}
    <br />
    <br />
    {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Accusamus fuga asperiores quam rerum quae error praesentium quos facilis, ad quis, doloremque omnis veritatis officia impedit.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Accusamus fuga asperiores quam rerum quae error praesentium quos facilis, ad quis, doloremque omnis veritatis officia impedit. 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Accusamus fuga asperiores quam rerum quae error praesentium quos facilis, ad quis, doloremque omnis veritatis officia impedit`}
  </>
);

export const ExperienceTitle = "EXPERIENCE";

export type Experience = {
  title: string;
  date: string;
  logo?: any;
  description: string;
  techStack: string[];
};
export const MyExperience: Experience[] = [
  {
    title: "LORO IPSUM TECH",
    techStack: ["React", "JavaScript", "TypeScript"],
    date: "JAUARY 2024 - PRESENT, BOLESLAWIEC",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.`,
  },
  {
    title: "LORO IPSUM TECH2",
    techStack: ["React", "JavaScript", "TypeScript"],
    date: "JAUARY 2024 - PRESENT, BOLESLAWIEC",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.`,
  },
  {
    title: "LORO IPSUM TECH3",
    techStack: ["React", "JavaScript", "TypeScript"],
    date: "JAUARY 2024 - PRESENT, BOLESLAWIEC",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.`,
  },
];
export const ExperienceExtended = (
  <>
    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.`}
  </>
);

export const ProjectTitle = "PROJECTS";
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
