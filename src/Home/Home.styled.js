import styled from "styled-components";

export const HomeStyled = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  background-color: #f5f8fc;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HomeContent = styled.div`
  padding: 100px 20px;
`;

export const HomeImgContent = styled.div`
  opacity: 1;
  transform: translateZ(0);
  margin: 0 auto 15px;
  transition-duration: 1.2s;
  background-color: #fff;
  width: 200px;
  height: 200px;
`;

export const HomeExtra = styled.div`
  position: relative;
  opacity: 1;
  visibility: visible;
  left: 0;
  transition-delay: 0.8s;
  transition: all 1s ease;

  .hello {
    color: #666;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const ButtonCv = styled.button`
  cursor: pointer;
  margin-top: 25px;
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  border-radius: 30px;
  border: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  padding: 12px 35px 13px;
  transition: all 0.3s ease;
  background-color: #fff;

  &:hover {
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    color: #fff;
    border: none;
  }
`;
