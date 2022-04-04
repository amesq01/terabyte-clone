import styled from "styled-components";

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
  margin-left: 30px;
  img {
    width: 100%;
  }
  p {
    opacity: 0;
  }
  span {
    &:hover {
      & ~ p {
        opacity: 1;
      }
    }
  }
`;
