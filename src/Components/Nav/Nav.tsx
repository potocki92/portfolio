import { FC } from "react";

const Nav: FC = () => {
    return (
        <nav className="px-[60px] flex items-center justify-between top-0 left-0 right-0">
            <ul className="relative hidden md:flex gap-6">
                <li>
                    <a>about</a></li>
                <li><a>projects</a></li>
                <li><a>contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav