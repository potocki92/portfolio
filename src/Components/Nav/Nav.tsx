import * as stylex from "@stylexjs/stylex";
import { FC, useEffect, useState } from "react";
import styles from "./Nav.stylex";

const Nav: FC<{}> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const onChange = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <nav {...stylex.props(styles.nav)}>
      <ul className="relative hidden md:flex gap-6 text-sm">
        {["Home", "Creating", "Resume", "Contact"].map((label, index) => (
          <li
            key={index}
            {...stylex.props(
              styles.item,
              activeIndex === index && styles.activeItem,
            )}
            onClick={() => onChange(index)}
          >
            <a>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
