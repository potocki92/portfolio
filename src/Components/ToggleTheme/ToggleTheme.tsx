import { StyleXStyles } from "@stylexjs/stylex";
import Button from "../Button/Button";
import { useTheme } from "../ThemeContext/ThemeContex";
import { Sun, Moon } from "react-feather";
import { memo, useMemo } from "react";
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
      <Button onClick={toggleTheme} is={true} aria-label="Toggle Theme">
        {theme === "light" ? memoizedMoon : memoizedSun}
      </Button>
    </>
  );
};

export default memo(ToggleTheme);
