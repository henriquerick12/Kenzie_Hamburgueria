import { Container, Search, Content, Button } from "./styles.js";

import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />
        <Search>
          <input type="text" placeholder="Digite sua Pesquisa" />
          <Button>Pesquisar</Button>
        </Search>
        <i>
          <FaCartShopping className="icon" size={25} />
          <span className="icon__count">1</span>
        </i>
      </Content>
    </Container>
  );
};
