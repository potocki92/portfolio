import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { TextAnimationStyled, Wrapper } from "./TextAnimation.styled";

const TextAnimation = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer"],
      typeSpeed: 50,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Wrapper data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
      <TextAnimationStyled>
        <span ref={typedRef}></span>
      </TextAnimationStyled>
    </Wrapper>
  );
};

export default TextAnimation;
