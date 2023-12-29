import * as stylex from "@stylexjs/stylex";
import { FC } from "react";

const styles = stylex.create({
    nav: (height?) => ({
        height: 40,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(39,39,42,.9)",
        borderRadius: "9999px",
        padding: "0 0.75rem",
        border: "1px solid hsla(0,0%,100%,.1)",
        color: "rgba(228, 228, 231)"
    }),
    list: {
        padding: "0.5rem 0.75rem"
    }
})

const Nav: FC<{height: number}> = ({height}) => {
    console.log(height);
    
    return (
        <nav {...stylex.props(styles.nav(height))}>
            <ul className="relative hidden md:flex gap-6 text-sm">
                <li {...stylex.props(styles.list)}>
                    <a>Home</a></li>
                <li {...stylex.props(styles.list)}><a>Creating</a></li>
                <li {...stylex.props(styles.list)}><a>Resume</a></li>
                <li {...stylex.props(styles.list)}><a>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav