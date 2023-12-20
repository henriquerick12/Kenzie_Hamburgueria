import { useEffect, useState } from "react";
import { Header } from "./components/Header/index";
import { ProductsList } from "./components/ProductList/index.jsx";
import { CardList } from "./components/CardList/index.jsx";

import { api } from "./api/api.js";
import { GlobalStyle } from "./styles/globalStyles";
import style from "./App.module.css";

function App() {
  const [product, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showcart, setShowCart] = useState(false);

  const getProducts = async () => {
    await api
      .get()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleShowCart = () => {
    setShowCart(!showcart)
  }

  const handleClick = (e) => {
    const productCart = product.find((find) => {
      return e.target.id == find.id;
    });

    const newCart = [...cart, productCart];

    setCart(newCart);
  };

  const handleRemoveItem = (id) => {
    const findItem = cart.filter((element) => {
      return element.id !== id;
    });

    setCart(findItem);
  };

  return (
    <>
      <Header handleShowCart={handleShowCart} cart={cart}/>
      <main className={style.container}>
        <ProductsList product={product} handleClick={handleClick} />
        <CardList
          showcart={showcart}
          cart={cart}
          setCart={setCart}
          handleRemoveItem={handleRemoveItem}
        />
      </main>
      <GlobalStyle />
    </>
  );
}

export default App;
