import { GlobalStyle } from "./styles/globalStyles";
import style from "./App.module.css";
import { api } from "./api/api.js";

import { Header } from "./components/Header/index";
import { ProductsList } from "./components/ProductList/index.jsx";
import { CardList } from "./components/CardList/index.jsx";
import { useEffect, useState } from "react";

function App() {
  const [product, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  

  const getProducts = () => {
    api
      .get()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = (e) => {
    const productCart = product.find((find) => {
      return e.target.id == find.id;
    });

    const newCart = [...cart, productCart];

    setCart(newCart);
  };

  return (
    <>
      <Header />
      <main className={style.container}>
        <ProductsList product={product} handleClick={handleClick} />
        <CardList cart={cart} setCart={setCart}/>
      </main>
      <GlobalStyle />
    </>
  );
}

export default App;
