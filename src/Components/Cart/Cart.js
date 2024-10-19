import React from "react";
import Modal from "../UI/Modal";

import "./Cart.css";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);
  let totalAmount = 0;
  cartCtx.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });
  const CartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <div className="cart-items">
            <span className="cart-name">Name : {item.name} </span>
            <span className="cart-quantity"> Qty : {item.quantity} </span>{" "}
            <span className="cart-price">Price : {item.price.toFixed(2)}</span>{" "}
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button onClick={props.onClose} className="button--alt">
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
