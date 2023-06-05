import {
  HomeStyled,
  HomeText,
  HomeUnderText,
} from "./Home.styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SectionTitle } from "../Section/Section.styled";
import ProjectCard from "../ProjectCard/ProjectCard";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <HomeStyled id="profile" className="container">
        <HomeText>An ambitious<br/> Full-Stack Developer starting his career in IT.
        </HomeText>
        <HomeUnderText>
          Hi, I'm Mateusz, a web developer focused on learning new technologies and improving my skills based in Poland.
          Currently I'm looking for a job as a Junior Front-end Developer.
      </HomeUnderText>
    </HomeStyled>
  );
};

export default Home;
