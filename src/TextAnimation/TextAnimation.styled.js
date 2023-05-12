import styled, { keyframes } from "styled-components";

const writeAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkAnimation = keyframes`
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  color: #1a1a1a;
  margin: 10px 0 12px;
`;

export const TextAnimationStyled = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  height: 100%;
  width: 100%;
  display: inline-block;
  overflow: hidden;
  letter-spacing: 0.06em;
  width: 0;

  &.animated {
    animation: ${writeAnimation} 2s linear forwards;
    animation-delay: ${({ delay }) => delay}s;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const TypedCursor = styled.span`
  font-weight: 700;
  line-height: 1.2;
  font-size: 36px;

  &.animated {
    animation: ${blinkAnimation} 1s step-end infinite;
    color: #000;
  }
`;
