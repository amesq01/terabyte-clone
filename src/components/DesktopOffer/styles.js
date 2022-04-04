import styled, { keyframes } from "styled-components";

const upDown = keyframes`
  from {transform: translateY(0px) }
  to {transform: translateY(-30px) }
 
`;
const opacity = keyframes`
  from {opacity:0 }
  to {opacity:1 }
 
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;

  justify-content: center;
`;
export const Content = styled.div`
  width: 70%;
  max-width: 1024px;

  display: flex;
`;

export const ItemWrapper = styled.div`
  animation: ${upDown} 3s, ${opacity} 10s;
`;
