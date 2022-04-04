import { useState } from "react";
import { data } from "../../constants";
import { Container, Content, Description, Price, ItemWrapper } from "./styles";

export const DesktopOffer = () => {
  const [database, setDataBase] = useState(data);
  return (
    <Container>
      <Content>
        {database.map((item, index) => {
          return (
            <ItemWrapper>
              <img src={item.photo} />
              <span>{item.description}</span>
              <p>{item.price}</p>
            </ItemWrapper>
          );
        })}
      </Content>
    </Container>
  );
};
