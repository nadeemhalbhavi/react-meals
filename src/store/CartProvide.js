import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, UpdateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    UpdateItems([...items, item]);
    console.log(" inside addItemToCartHandler");
  };
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "I am accessible to anywhere ",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {console.log("Inside cartContext.Provider", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
