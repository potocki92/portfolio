import { SkillCardStyled } from "./SkillCard.styled";
const SkillCard = ({ skillIcon }) => {
  return (
    <SkillCardStyled 
      >
      {skillIcon}
    </SkillCardStyled>
  );
};

export default SkillCard;
