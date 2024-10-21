import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, UpdateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    UpdateItems([...items, item]);
    console.log(" inside addItemToCartHandler");
  };
  const removeItemFromCartHandler = (id) => {
    UpdateItems((prevState) => {
      const exisitingItemIndex = prevState.findIndex((item) => item.id === id);
      const existingItem = prevState[exisitingItemIndex];
      if (existingItem) {
        if (existingItem.quantity <= 1) {
          return prevState.filter((item) => item.id !== id);
        } else {
          const newUpdatedItems = [...prevState];
          newUpdatedItems[exisitingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
          return newUpdatedItems;
        }
      }
      return prevState;
    });
  };

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
