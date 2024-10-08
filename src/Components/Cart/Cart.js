import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const CartItem = (
    <ul className="cart-items">
      {[{ id: "c1", name: "sushi", amount: "2", price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
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
