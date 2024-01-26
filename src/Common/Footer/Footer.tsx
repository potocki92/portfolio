import { Container } from "../../Components/Container/Container"
import { SocialMedia } from "../../data/lifeApi"

const Footer = () =>{ 
    return (
        <footer className=" px-3">
            <Container>
                <div>
                    {SocialMedia.map((socialProfile) => (
                        <></>
                    ))}
                </div>
            </Container>
        </footer>
    )
}

export default Footer