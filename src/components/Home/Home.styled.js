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
  width: 100%;
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
margin-top: 25px;
font-weight: 0;
font-size: 14px;
color: #666;
background-color: transparent;
padding: 10px 30px;
border: 2px solid #666;
box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
border-radius: 50px;
transition : 336ms;
transform: translateY(0);
cursor: pointer;
&:hover {
  transition : 336ms;
  padding: 10px 30px;
  transform : translateY(-4px);
  background-color: #666;
  color: #fff;
  border: solid 2px #666;
  }
`;


