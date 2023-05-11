import { useEffect, useState } from "react"
import { TextAnimationStyled, TypedCursor, Wrapper } from "./TextAnimation.styled"

const TextAnimation = () => {

    const [animation, setAnimation] = useState(false);
    const [written, setWritten] = useState(false)
    
    useEffect(() => {
        setAnimation(true);
    },[])

    const onAnimationEnd = () => {
        setWritten(true)
    }

    return (
        <Wrapper data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" >
            <TextAnimationStyled  className={animation ? "animated" : ""} onAnimationEnd={onAnimationEnd} delay={0}>Full Stack Developer</TextAnimationStyled>
            <TypedCursor className={written ? "animated" : ""} delay={2.5}>|</TypedCursor>
        </Wrapper>
    )
}

export default TextAnimation