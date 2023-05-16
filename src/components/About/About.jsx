import SkillCard from "../SkillCard/SkillCard";
import {
  AboutContent,
  AboutInfo,
  AboutMe,
  AboutStyled,
  Skills,
  SkillsContainer,
} from "./About.styled";
import { iconLibraries } from "../../utils/iconLibraries";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import PersonalModal from "../PersonalModal/PersonalModal";
import { createPortal } from "react-dom";

const About = () => {
  const [showModal, setShowModal] = useState(false);

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
                data-aos-delay="100"
              >
                {iconLibraries.map((Library, index) => (
                  <SkillCard key={index} skillIcon={<Library size={52} />} />
                ))}
              </Skills>
            </SkillsContainer>
          </div>
        </AboutContent>
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <Button
            style={{
              borderRadius: "6px",
              padding: "12px 20px",
              marginTop: "10px",
              fontSize: "16px",
              letterSpacing: "0.4px",
            }}
            text={"See More"}
            openModal={() => setShowModal(true)}
          ></Button>
          {showModal &&
            createPortal(
              <PersonalModal
                onClose={() => setShowModal(false)}
                className={showModal ? "show" : ""}
              />,
              document.body
            )}
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
