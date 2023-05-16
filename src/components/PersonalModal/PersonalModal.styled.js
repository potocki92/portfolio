import styled from "styled-components";

export const PersonalModalPortal = styled.div`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.3s ease;
  z-index: 99;

  &.show {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background: #fff;
  overflow: initial;
  border-radius: 4px;
  outline: none;
`;

export const ModalInner = styled.div`
  height: 75vh;
  width: 968px;
  overflow-y: auto;

  @media (max-width: 420px) {
    width: 320px;
  }
  @media (min-width: 421px) {
    width: 360px;
  }

  @media (min-width: 768px) {
    width: 560px;
  }
  @media (min-width: 992px) {
    width: 700px;
  }
`;

export const Description = styled.div`
  padding: 0 50px;
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  overflow-y: scroll;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 50px;
  flex: 0 0 auto;
  width: 50%;

  @media screen and (max-width: 1199px) {
    width: 100%;
    margin-top: 30px;
  }

  h3 {
    font-size: 25px;
    margin-bottom: 35px;
    border-bottom: 2px dashed #ddd;
    padding-bottom: 10px;
    display: inline-block;
  }
`;

export const CloseModal = styled.button`
  border: none;
  display: flex;
  width: 45px;
  height: 45px;
  position: absolute;
  z-index: 4;
  right: -5px;
  top: -60px;
  border-radius: 50%;
  cursor: pointer;
`;
