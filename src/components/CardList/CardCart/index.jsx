import { Container, Body } from "./index.js";

export const CardCart = ({ cart }) => {
  return (
    <Container>
      <Body>
        <div className="body__img">
          <img src={cart.img} />
        </div>
        <div className="body__content">
          <div>
            <span>{cart.name}</span>
            <p>{cart.category}</p>
          </div>
          <div>
            <button>Remover</button>
          </div>
        </div>
      </Body>
    </Container>
  );
};
