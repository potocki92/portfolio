import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import changeLanguage from "../../utils/changeLanguage";
import Button from "../Button/Button";

/**
 * A button component that toggles the language between multiple options.
 *
 * @component
 * @returns {JSX.Element} The rendered LanguageButton component.
 */
const LanguageButton = (): JSX.Element => {
  const { i18n } = useTranslation();
  const languages = ["pl", "en"];
  const [languageIndex, setLanguageIndex] = useState(0);

  useEffect(() => {
    const systemLanguage = navigator.language.split("-")[0]; // Get the primary language code
    const index = languages.indexOf(systemLanguage);
    if (index !== -1) {
      setLanguageIndex(index);
      changeLanguage(systemLanguage);
      i18n.changeLanguage(systemLanguage);
    }
  }, []);

  /**
   * Handles the click event to toggle the language.
   */
  const handleClick = () => {
    const newIndex = (languageIndex + 1) % languages.length;
    const newLanguage = languages[newIndex];
    changeLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    setLanguageIndex(newIndex);
  };

  return (
    <Button onClick={handleClick} is={true}>
      <span>{languages[(languageIndex + 1) % languages.length].toUpperCase()}</span>
    </Button>
  );
};

export default LanguageButton;
