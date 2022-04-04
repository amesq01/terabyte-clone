import {
  Container,
  Content,
  SocialNetWorks,
  WrapperFacebook,
  WrapperTwitter,
  WrapperInstagram,
  WrapperYT,
  AccountLinks,
  MyAccount,
  IconWrapper,
  CallCenter,
  Span,
} from "./styles";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaUserAlt,
  FaComment,
} from "react-icons/fa";

export const TopHeader = () => {
  return (
    <Container>
      <Content>
        <SocialNetWorks>
          <WrapperFacebook>
            <FaFacebookF />
          </WrapperFacebook>
          <WrapperTwitter>
            <FaTwitter />
          </WrapperTwitter>
          <WrapperInstagram>
            <FaInstagram />
          </WrapperInstagram>
          <WrapperYT>
            <FaYoutube />
          </WrapperYT>
        </SocialNetWorks>
        <AccountLinks>
          <MyAccount>
            <IconWrapper>
              <FaUserAlt />
            </IconWrapper>
            <Span>Minha Conta</Span>
          </MyAccount>
          <CallCenter>
            <IconWrapper>
              <FaComment />
            </IconWrapper>
            <Span>Central de Atendimento</Span>
          </CallCenter>
        </AccountLinks>
      </Content>
    </Container>
  );
};
