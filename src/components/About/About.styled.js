import styled from "styled-components";

export const AboutStyled = styled.section`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding-bottom: 170px;
  padding-top: 120px;
`;

export const AboutMe = styled.div`
  width: 100%;
  float: left;

  h3 {
    font-size: 45px;
    font-weight: 700;
    line-height: 1;
    color: #1a1a1a;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  display: flex;
  padding-top: 60px;
`;

export const AboutInfo = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 55px;

  h3 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 15px;
    color: #1a1a1a;
  }
  span {
    font-weight: 600;
  }
  p {
    max-width: 90%;
  }
`;
export const SkillsContainer = styled.div`
  width: 100%;
  float: left;

  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #1a1a1a;
  }
  p {
    max-width: 90%;
  }
`;

export const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding-top: 40px;
  flex-wrap: wrap;
  height: auto;
  clear: both;
  float: left;
`;
