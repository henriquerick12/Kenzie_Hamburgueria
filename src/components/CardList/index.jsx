import { Container, Head, Content } from "./index";

import { CardCart } from "./CardCart/index.jsx";
import { ButtonCards } from "../ButtonCard/index.jsx";

export const CardList = ({ cart, totalCart }) => {
  return (
    <Container>
      <Head>Carrinho de compras</Head>
      <Content>
        {cart == "" ? (
          <p>Adicione um produto</p>
        ) : (
          cart.map((carts) => {
            return <CardCart key={carts.id} cart={carts} />;
          })
        )}
      </Content>
      <footer>
        <div>
          <strong>Total</strong>
          <span>{`R$ ${totalCart.toFixed(2)}`}</span>
        </div>
        <ButtonCards name="Remover todos" />
      </footer>
    </Container>
  );
};
