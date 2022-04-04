import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background-color: #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  padding: 0 20px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HorizontalLine = styled.div`
  height: 100%;
  width: 1px;
  background-color: #000;
  margin: 0 30px;
`;
export const Categories = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    color: white;
  }
`;

export const CategoryList = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  strong {
    color: white;
    margin-right: 10px;
  }
`;
export const Search = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
  flex: 1;
`;

export const Input = styled.input`
  height: 70%;
  flex: 1;
  border: none;
  padding: 0 10px;
  font-size: 14px;

  &:focus {
    //box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
export const SearchButton = styled.div`
  height: 70%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5800;
`;
export const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;

  strong {
    color: #fff;
    margin: 0 10px;
    font-weight: normal;
  }
`;
export const CartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 0 18px 0 0;
`;

export const Badge = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: red;
  right: 0;
  top: 7px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
