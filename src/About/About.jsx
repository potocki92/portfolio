import SkillCard from "../SkillCard/SkillCard";
import {
  AboutContent,
  AboutInfo,
  AboutMe,
  AboutStyled,
  Skills,
  SkillsContainer,
} from "./About.styled";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiFigma, SiStyledcomponents } from "react-icons/si"

import HtmlImg from "../assets/FaHtml5.png"
import CssImg from "../assets/FaCss3Alt.png"

const libraries = [
  FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs,SiFigma, SiStyledcomponents
]

const imgLibraries = [
  HtmlImg, CssImg
]

const About = () => {
  return (
    <AboutStyled id="about">
      <div className="container">
        <AboutMe>
          <h3>About Me</h3>
        </AboutMe>
        <AboutContent>
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <AboutInfo>
              <h3>
                Hi, Im <span>Mateusz Potocki</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur rem modi quaerat impedit officia accusamus deleniti
                animi recusandae! Atque, voluptatibus.
              </p>
            </AboutInfo>
            <SkillsContainer>
              <h3>What is my skills?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
                provident?
              </p>
              <Skills 
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100">

                {libraries.map((Library, index) => (
                  <SkillCard key={index} skillIcon={<Library size={52}/>} />
                ))}
                {/* {
                  imgLibraries.map((img, index) => (
                    <SkillCard key={index} skillIcon={img}/>
                  ))
                } */}
              </Skills>
            </SkillsContainer>
          </div>
        </AboutContent>
      </div>
    </AboutStyled>
  );
};

export default About;
