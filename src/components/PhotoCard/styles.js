import styled from "styled-components";

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 000;
  margin-top: 35px;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  box-shadow: 010px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
  border: 0;
  background-color: transparent;
`;
