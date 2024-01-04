import * as stylex from "@stylexjs/stylex";
import { FC } from "react";
import styles from "./Nav.stylex";


const Nav: FC<{height?: number}> = ({height}) => {
    return (
        <nav {...stylex.props(styles.nav)}>
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