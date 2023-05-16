import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin-top: 25px;
  font-weight: 0;
  font-size: 14px;
  color: #666;
  background-color: transparent;
  padding: 10px 30px;
  border: 2px solid #666;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 336ms;
  transform: translateY(0);
  cursor: pointer;
  &:hover {
    transition: 336ms;
    padding: 10px 30px;
    transform: translateY(-4px);
    background-color: #666;
    color: #fff;
    border: solid 2px #666;
  }
`;
