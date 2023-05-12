import {
  ButtonCv,
  HomeContent,
  HomeExtra,
  HomeImgContent,
  HomeStyled,
} from "./Home.styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TextAnimation from "../TextAnimation/TextAnimation";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <HomeStyled id="home">
      <HomeContent data-aos="fade-up" data-aos-duration="1200">
        <HomeImgContent></HomeImgContent>
        <HomeExtra>
          <h5
            className="hello"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            Hello, I'm Mateusz Potocki
          </h5>
          <TextAnimation />
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            I'm Full-stack React Developer based in Poland.
          </p>
        </HomeExtra>
        <ButtonCv >
          Download CV
        </ButtonCv>
      </HomeContent>
    </HomeStyled>
  );
};

export default Home;
