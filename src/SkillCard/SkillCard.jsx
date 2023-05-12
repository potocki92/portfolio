import { SkillCardStyled } from "./SkillCard.styled";

const SkillCard = ({ name }) => {
  return (
    <SkillCardStyled>
      <span>{name}</span>
    </SkillCardStyled>
  );
};

export default SkillCard;
