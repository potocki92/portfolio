import * as stylex from "@stylexjs/stylex";
import { Container } from "../../Components/Container/Container"
import { SocialLink } from "../../Components/SocialLink/SocialLink"
import { SocialMedia } from "../../data/lifeApi"
import { globalTokens as $, colors } from "../../styles/globalTokens.stylex";

const styles = stylex.create({
    footer: {
        padding: '4rem'
    },
    ul: {
        display: "flex",
        gap: $.socialGap
    },  
    li: {
        width: $.socialIconSize,
        height: $.socialIconSize,
    },
    icon: {
        fill: colors.secondText
    }
})
const Footer = () =>{ 
    return (
        <footer {...stylex.props(styles.footer)}>
            <Container>
                <ul {...stylex.props(styles.ul)}>
                    {SocialMedia.map((socialProfile) => (
                        <SocialLink 
                            key={socialProfile.name}
                            href={socialProfile.link}
                            icon={socialProfile.icon}
                            style={styles.li}
                            iconStyle={styles.icon}
                        />
                    ))}
                </ul>
            </Container>
        </footer>
    )
}

export default Footer