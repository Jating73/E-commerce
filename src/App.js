import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import { cartContext } from "./context/Context";
import Filter from "./components/Filter/Filter";
import Modal from "./components/Modal/Modal";

function App() {
  const { data, setData, prod, setProd, search, setSearch, modal, setModal } =
    React.useContext(cartContext);

  const fetchApi = async () => {
    let { data } = await axios.get("https://dummyjson.com/products");
    setData(data.products);
    // setProd(data)
    // console.log(data);
    // https://fakestoreapi.com/products
    // https://api.escuelajs.co/api/v1/products
    // https://dummyjson.com/products
  };
  // console.log(prod)

  React.useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/product-info" element={<Modal modal={modal} />} />
          <Route path="/" element={<Home data={data} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
