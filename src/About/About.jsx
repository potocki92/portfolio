import SkillCard from "../SkillCard/SkillCard";
import {
  AboutContent,
  AboutInfo,
  AboutMe,
  AboutStyled,
  Skills,
  SkillsContainer,
} from "./About.styled";

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
              <Skills>
                <SkillCard name="HTML5"/>
                <SkillCard name="CSS3"/>
                <SkillCard name="JavaScript"/>
                <SkillCard name="React.Js"/>
                <SkillCard name="Figma"/>
                <SkillCard name="Styled Components"/>
                <SkillCard name="Node.Js"/>
              </Skills>
            </SkillsContainer>
          </div>
        </AboutContent>
      </div>
    </AboutStyled>
  );
};

export default About;
