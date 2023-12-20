import { Container, Content } from "./styles.js";

import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/logo.svg";

export const Header = ({ cart, handleShowCart }) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />

        <i>
          <FaCartShopping
            className="icon"
            size={25}
            onClick={() => handleShowCart()}
          />
          <span className="icon__count">{cart.length}</span>
        </i>
      </Content>
    </Container>
  );
};
