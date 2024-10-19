import React from "react";
import Modal from "../UI/Modal";

import "./Cart.css";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);
  let totalAmount = 0;
  //For showing total amount in cart dropdown.
  cartCtx.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });
  //For displaying items in cart.
  const CartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <li className="cart-item" key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <div className="summary">
              <span className="price">${item.price.toFixed(2)} </span>
              <span className="amount">x {item.quantity}</span>
            </div>
          </div>
          <div className="actions">
            <button>-</button>
            <button>+</button>
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
        <span>{totalAmount.toFixed(2)}</span>
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
