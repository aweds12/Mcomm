import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";

const Routers = () => {
  return (
    <Routes>
      <Route index path="/" element={<App />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/:id" element={<Product />} />
    </Routes>
  );
};

export default Routers;
