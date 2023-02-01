import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const Ctx = ({ children }) => {
  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  try {
    const Fetch = async () => {
      const users = await axios.get("https://dummyjson.com/users");

      if (localStorage.getItem("token") !== null && user === undefined) {
        setUser(
          users.data.users.filter(
            (x) => x.id === parseInt(localStorage.getItem("userid"))
          )[0]
        );
      }
    };
    Fetch();
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    try {
      const Fetch = async () => {
        const prods = await axios.get("https://dummyjson.com/products");

        setProducts(prods.data.products);
      };
      Fetch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const mergedProducts = cart?.reduce((acc, prod) => {
    const existingProduct = acc.find((p) => p.id === prod.id);
    if (existingProduct) {
      existingProduct.price = prod.price;
    } else {
      acc.push(prod);
    }
    return acc;
  }, []);

  useEffect(() => {
    setCart(mergedProducts);
  }, [cart.length]);

  return (
    <Context.Provider value={{ user, setUser, products, cart, setCart }}>
      {children}
    </Context.Provider>
  );
};
