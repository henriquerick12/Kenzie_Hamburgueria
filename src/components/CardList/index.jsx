import { Container, Head, Content, Button } from "./index";

import { CardCart } from "./CardCart/index.jsx";

export const CardList = ({ cart, totalCart, setCart }) => {
  const handleRemove = () => {
    alert("oj");
  };

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
        <Button onClick={handleRemove}>Remover todos</Button>
      </footer>
    </Container>
  );
};
