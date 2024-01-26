export const Name = "John Doe";

export const HeroAbout =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde debitis veniam non, totam dolorum expedita?";

export const About = `I live in Bolesławiec, Poland, ....`;

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
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/mateusz-potocki/', icon: ''},

]
