import { Container } from "./styles";

const imgBanner = "https://img.terabyteshop.com.br/banner/1629.jpg";

export const Banner = () => {
  return (
    <Container>
      <img src={imgBanner} alt="banner promoção 70%" />
    </Container>
  );
};
