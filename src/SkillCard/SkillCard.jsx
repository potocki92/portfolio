import { SkillCardStyled } from "./SkillCard.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <SkillCardStyled>
      <span>{skillName}</span>
      <FontAwesomeIcon icon={skillIcon}></FontAwesomeIcon>
    </SkillCardStyled>
  );
};

export default SkillCard;
