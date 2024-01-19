import Button from "../Button/Button"
import { useTheme } from "../ThemeContext/ThemeContex";
import styles from "../Nav/Nav.stylex";
import { Sun, Moon } from "react-feather";

const iconToggleSize: string =  "1rem" as const
const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
    return (
        <>
            <Button
                style={styles.button}
                onClick={toggleTheme} 
            >
                {theme === 'light' ?  <Moon size={iconToggleSize}/> :<Sun size={iconToggleSize}/> }
            </Button>
        </>
    )
}

export default ToggleTheme