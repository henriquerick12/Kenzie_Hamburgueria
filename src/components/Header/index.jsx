import Logo from "../../assets/logo.svg";

import { Container, Search, Content } from "./styles.js";
import { ButtonCards } from '../ButtonCard/index.jsx'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />
        <Search>
          <input type="text" placeholder="Digite sua Pesquisa" />
          <ButtonCards name="Pesquisar" size={true}/>
        </Search>
      </Content>
    </Container>
  );
};
