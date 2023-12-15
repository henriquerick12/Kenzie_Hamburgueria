import Logo from "../../assets/logo.svg";

import { Container, Search, Content, Button } from "./styles.js";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />
        <Search>
          <input type="text" placeholder="Digite sua Pesquisa" />
          <Button>Pesquisar</Button>
        </Search>
      </Content>
    </Container>
  );
};
