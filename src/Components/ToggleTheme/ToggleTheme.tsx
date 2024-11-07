import { StyleXStyles } from "@stylexjs/stylex";
import Button from "../Button/Button";
import { useTheme } from "../ThemeContext/ThemeContex";
import { Sun, Moon } from "react-feather";
const iconToggleSize: string = "1rem" as const;
type ToggleProps = {
  style?: StyleXStyles;
};

const ToggleTheme = ({}: React.PropsWithChildren<ToggleProps>) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button onClick={toggleTheme} is={true} aria-label="Toggle Theme">
        {theme === "light" ? <Moon size={iconToggleSize} /> : <Sun size={iconToggleSize} />}
      </Button>
    </>
  );
};

export default ToggleTheme;
