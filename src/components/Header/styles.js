import styled, { keyframes } from "styled-components";

const animationDropDown = keyframes`
  from { transform: translateY(20px)}
  to { transform: translateY(0)}
  

`;

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
  justify-content: center;
`;

export const Input = styled.input`
  height: 70%;
  flex: 1;
  max-width: 750px;
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
  position: relative;

  strong {
    color: #fff;
    margin: 0 10px;
    font-weight: normal;
  }
  &:hover {
    div {
      display: flex;
    }
  }
`;

export const AccountDropDown = styled.div`
  display: flex;
  width: 170px;

  background-color: #fff;
  position: absolute;
  bottom: -92px;
  left: -12px;
  z-index: 1000;

  flex-direction: column;
  padding: 5px 0;

  animation: ${animationDropDown} 0.3s;
  display: none;
`;
export const MyAccountSettings = styled.div`
  color: #666666;
  font-size: 12px;
  padding: 5px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
  span {
    margin-left: 5px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
  }
`;
export const WishList = styled.div`
  color: #666666;
  font-size: 12px;

  display: flex;
  padding: 5px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);

  span {
    margin-left: 5px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
  }
`;
export const BadgeWishList = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

  background-color: red;

  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
`;

export const CallCenter = styled.div`
  color: #666666;
  font-size: 12px;

  display: flex;
  padding: 5px;

  span {
    margin-left: 5px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
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
