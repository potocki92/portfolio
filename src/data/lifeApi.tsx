import { useTranslation } from "react-i18next";
import { GitHubIcon } from "../Components/Icons/GitHubIcon";
import { LinkedinIcon } from "../Components/Icons/LinkedInIcon";
import { XIcon } from "../Components/Icons/XIcon";

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

export type Experience = {
  title: string;
  date: string;
  logo?: any;
  description: string;
  techStack: string[];
};

export const ExperienceExtended = (
  <>
    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sequi alias aliquid iste voluptatum totam? Repellendus.`}
  </>
);

export type Project = {
  id: number;
  title: string;
  techStack: string[];
  description: string;
  logo?: any;
  link?: {
    label: string;
    href: string;
  };
};

export const SocialMedia = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/mateusz-potocki/", icon: LinkedinIcon },
  { name: "X", link: "https://twitter.com/?lang=pl", icon: XIcon },
  { name: "GitHub", link: "https://github.com/potocki92", icon: GitHubIcon },
];
interface NavigationItemsInterface {
  href: string;
  name: string;
}
const LifeApiComponent = () => {
  const { t } = useTranslation();

  const Name = "Mateusz Potocki";
  const HeroAbout = t("hero_about") as string;

  const Titles = {
    AboutTitle: t("ABOUT_ME") as string,
    ExperienceTitle: t("EXPERIENCE") as string,
    ProjectTitle: t("PROJECTS") as string,
  };
  const Navigation: NavigationItemsInterface[] = [
    { href: "/", name: t("navigation.home") as string },
    { href: "/projects", name: t("navigation.projects") as string },
    { href: "/about", name: t("navigation.about") as string },
    { href: "/resume", name: t("navigation.resume") as string },
  ];

  const MyExperience: Experience[] = [
    {
      title: "NfHotel",
      techStack: ["AngularJs", "PHP", "SCSS", "BitBucket", "Slack", "ClickUp"],
      date: `${t("months.march")} 2024 - ${t("present")}, JELENIA GÓRA"`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.`,
    },
    {
      title: "LORO IPSUM TECH2",
      techStack: ["React", "JavaScript", "TypeScript"],
      date: `${t("months.january")} 2024 - ${t("present")}, BOLESLAWIEC`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.`,
    },
    {
      title: "LORO IPSUM TECH3",
      techStack: ["React", "JavaScript", "TypeScript"],
      date: `${t("months.january")} 2024 - ${t("present")}, BOLESLAWIEC`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sequi alias aliquid iste voluptatum totam? Repellendus.`,
    },
  ];

  const MyProjects: Project[] = [
    {
      id: 1,
      title: "Invoice",
      techStack: ["JavaScript", "React", "NodeJS", "MongoDB", "Styled-Components", "Vite"],
      description: `${t("projects.invoice.description")}`,
      link: {
        label: "github.com",
        href: "https://potocki92.github.io/invoice-vite",
      },
    },
    {
      id: 2,
      title: "IceCream Shop",
      techStack: ["JavaScript", "SASS"],
      description: `${t("projects.icecream.description")}`,
      link: {
        label: "github.com",
        href: "https://potocki92.github.io/IceCream/",
      },
    },
    {
      id: 3,
      title: "Filmoteka",
      techStack: ["JavaScript", "React", "SASS", "REST API"],
      description: `${t("projects.filmoteka.description")}`,
      link: {
        label: "github.com",
        href: "https://mateuszcharysz.github.io/goit-Filmoteka/",
      },
    },
  ];
  return {
    Name,
    HeroAbout,
    AboutExtended,
    MyExperience,
    ExperienceExtended,
    MyProjects,
    SocialMedia,
    Titles,
    Navigation,
  };
};

export default LifeApiComponent;
