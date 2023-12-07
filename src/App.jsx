import { GlobalStyle } from "./styles/globalStyles";
import style from "./App.module.css";

import { Header } from "./components/Header/index";
import { ProductsList } from "./components/ProductList/index.jsx";
import { CardList } from "./components/CardList/index.jsx";

function App() {
  return (
    <>
      <Header />
      <main className={style.container}>
        <ProductsList />
        <CardList />
      </main>
      <GlobalStyle />
    </>
  );
}

export default App;
