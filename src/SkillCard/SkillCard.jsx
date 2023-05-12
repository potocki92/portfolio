import { SkillCardStyled } from "./SkillCard.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({ skillIcon }) => {
  return (
    <SkillCardStyled>
      {skillIcon}
    </SkillCardStyled>
  );
};

export default SkillCard;
