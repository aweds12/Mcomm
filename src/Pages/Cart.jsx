import { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import { Context } from "../Context";
import { ShopCart } from "../Styles";

const Cart = () => {
  const { cart, setCart } = useContext(Context);

  const deleteThisItem = (x) => {
    setCart((prev) => prev.filter((item) => item.id !== x));
  };

  return (
    <ShopCart>
      <Header />
      <div className="body">
        {localStorage.getItem("token") !== null &&
          cart?.map((item, index) => (
            <div className="card" key={index}>
              <div className="left">
                <div className="img">
                  <img src={item.thumbnail} alt="" />
                </div>

                <div>
                  <p>
                    <b>{item.title}</b>
                  </p>
                  <p>
                    ${item.price - (item.price / 100) * item.discountPercentage}{" "}
                    <small style={{ color: "#f00" }}>
                      ({item.discountPercentage}% OFF)
                    </small>
                  </p>
                </div>
              </div>

              <button onClick={() => deleteThisItem(item.id)}>Remove</button>
            </div>
          ))}
      </div>
    </ShopCart>
  );
};

export default Cart;
