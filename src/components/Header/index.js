import {
  Container,
  Content,
  Logo,
  Categories,
  Search,
  AccountInfo,
  CartIcon,
  HorizontalLine,
  CategoryList,
  Input,
  SearchButton,
  Badge,
  AccountDropDown,
  MyAccountSettings,
  WishList,
  BadgeWishList,
  CallCenter,
} from "./styles";

import {
  FaChevronDown,
  FaSearch,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";

const imgLogo = "https://img.terabyteshop.com.br/terabyte-logo.svg";

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={imgLogo} height={50} />
        </Logo>
        <HorizontalLine />
        <Categories>
          <span>Compre por</span>
          <CategoryList>
            <strong>DEPARTAMENTO</strong>
            <FaChevronDown color="white" />
          </CategoryList>
        </Categories>
        <Search>
          <Input placeholder="Pesquise o seu produto" />
          <SearchButton>
            <FaSearch color="white" />
          </SearchButton>
        </Search>
        <AccountInfo>
          <AccountDropDown>
            <MyAccountSettings>
              <FaUserAlt size={12} color="#666666" />
              <span>Minha Conta</span>
            </MyAccountSettings>
            <WishList>
              <FaUserAlt size={12} color="#666666" />
              <span>Lista de desejos</span>
              <BadgeWishList>0</BadgeWishList>
            </WishList>
            <CallCenter>
              <FaUserAlt size={12} color="#666666" />
              <span>Central de Atendimentos</span>
            </CallCenter>
          </AccountDropDown>
          <FaUserAlt color="white" />
          <strong>Gamers</strong>
          <FaChevronDown color="white" />
        </AccountInfo>
        <HorizontalLine />
        <CartIcon>
          <FaShoppingCart color="white" size={22} />
          <Badge>2</Badge>
        </CartIcon>
      </Content>
    </Container>
  );
};
