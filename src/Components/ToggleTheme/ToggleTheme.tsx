import { StyleXStyles } from "@stylexjs/stylex";
import Button from "../Button/Button";
import { useTheme } from "../ThemeContext/ThemeContex";
import { memo, useMemo } from "react";
import { Sun, Moon } from "lucide-react";
import { Animate } from "../AnimateWrapper/Animation";
const iconToggleSize: string = "1rem" as const;
type ToggleProps = {
  style?: StyleXStyles;
};

const ToggleTheme = ({}: React.PropsWithChildren<ToggleProps>) => {
  const { theme, toggleTheme } = useTheme();
  const memoizedMoon = useMemo(() => <Moon size={iconToggleSize} />, [iconToggleSize]);
  const memoizedSun = useMemo(() => <Sun size={iconToggleSize} />, [iconToggleSize]);

  return (
    <>
      <Button
        onClick={toggleTheme}
        is={true}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        <Animate.ThemeButton key={theme === "dark" ? "dark" : "light"}>
          {theme === "dark" ? memoizedSun : memoizedMoon}
        </Animate.ThemeButton>
      </Button>
    </>
  );
};

export default memo(ToggleTheme);
