import { ButtonCards } from "../../ButtonCard/index.jsx";
import { Container, Content, Head, Body } from "./index";

import Img from "../../../assets/img-1.svg";

export const Cards = () => {
  return (
    <Container>
      <Content>
        <Head>
          <img src={Img} />
        </Head>
        <Body>
          <h3>Hamburguer</h3>
          <span>Sanduíches</span>
          <span>R$ 14.00</span>
          <ButtonCards name="Adicionar" size={true} />
        </Body>
      </Content>
    </Container>
  );
};
