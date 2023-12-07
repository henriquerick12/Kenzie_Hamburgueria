import { Container, Head, Content } from "./index";

import { CardCart } from "./CardCart/index.jsx";
import { ButtonCards } from "../ButtonCard/index.jsx";

export const CardList = () => {
  return (
    <Container>
      <Head>Carrinho de compras</Head>
      <Content>
        <CardCart />
        <CardCart />
        <CardCart />
      </Content>
      <footer>
        <div>
          <strong>Total</strong>
          <span>R$ 40,00</span>
        </div>
        <ButtonCards name="Remover todos"/>
      </footer>
    </Container>
  );
};
