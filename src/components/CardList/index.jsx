import { Container, Head, Content, Button } from "./index";

import { CardCart } from "./CardCart/index.jsx";

export const CardList = ({ cart, setCart, handleRemoveItem }) => {
  const handleRemove = () => {
    setCart([])
  };

  const totalCart = cart.reduce((acc, prev) => {
    return acc + prev.price
  }, 0)

  return (
    <Container>
      <Head>Carrinho de compras</Head>
      <Content>
        {cart == "" ? (
          <p>Adicione um produto</p>
        ) : (
          cart.map((carts,i) => {
            return <CardCart key={i} cart={carts} setCart={setCart} handleRemoveItem={handleRemoveItem}/>;
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
