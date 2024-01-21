import * as stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex";
import Button from "../Button/Button"
import { useTheme } from "../ThemeContext/ThemeContex";
import { Sun, Moon } from "react-feather";

const iconToggleSize: string =  "1rem" as const
type ToggleProps = {
    style?: StyleXStyles
}
const ToggleTheme = ({style}: React.PropsWithChildren<ToggleProps>) => {
  const { theme, toggleTheme } = useTheme();
    return (
        <>
            <Button
                {...stylex.props(style)}
                onClick={toggleTheme} 
            >
                {theme === 'light' ?  <Moon size={iconToggleSize}/> :<Sun size={iconToggleSize}/> }
            </Button>
        </>
    )
}

export default ToggleTheme