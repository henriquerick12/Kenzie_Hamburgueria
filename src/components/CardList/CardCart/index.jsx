import { Container, Body } from "./index.js";

import Img from "../../../assets/hamburguer.svg";

export const CardCart = () => {
  return (
    <Container>
        <Body>
          <div className="body__img">
            <img src={Img} alt="" />
          </div>
          <div className="body__content">
            <div>
              <span>Hamburguer</span>
              <p>Sanduiches</p>
            </div>
            <div>
              <button>Remover</button>
            </div>
          </div>
        </Body>
    </Container>
  );
};
