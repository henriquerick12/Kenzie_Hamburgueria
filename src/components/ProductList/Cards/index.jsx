import { Container, Content, Head, Body, Button } from "./index";

export const Cards = ({ product, handleClick }) => {
  return (
    <Container>
      <Content>
        <Head>
          <img src={product.img} />
        </Head>
        <Body>
          <h3>{product.name}</h3>
          <span>{product.category}</span>
          <span>{`R$ ${product.price.toFixed(2)}`}</span>
          <Button onClick={(e) => handleClick(e)} id={product.id}>
            Adicionar
          </Button>
        </Body>
      </Content>
    </Container>
  );
};
