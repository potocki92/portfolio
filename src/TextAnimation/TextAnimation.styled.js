import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  margin: 10px 0 12px;

  @media (max-width: 250px) {
    max-width: 200px; /* maksymalna szerokość kontenera przy rozdzielczości 250px */
  }
`;

export const TextAnimationStyled = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  height: 100%;
  max-width: fit-content;
  

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;