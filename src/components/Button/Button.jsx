import { ButtonStyled } from "./Button.styled";

const Button = ({ style, text, openModal }) => {
  return (
    <ButtonStyled style={style} onClick={openModal}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
