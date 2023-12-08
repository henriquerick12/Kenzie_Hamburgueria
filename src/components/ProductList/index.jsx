import { Container } from "./index";

import { Cards } from "./Cards/index.jsx";

export const ProductsList = ({ product, handleClick }) => {
  return (
    <Container>
      {product.map((products) => {
        return <Cards key={products.id} product={products} handleClick={handleClick} />;
      })}
    </Container>
  );
};
