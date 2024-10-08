import { RiShoppingCartFill } from "@remixicon/react";
import "./HeaderIconButton.css";

const HeaderIconButton = (props) => {
  return (
    <button onClick={props.onCartClick} className="Cart">
      <RiShoppingCartFill className="icon" /> Your Cart{" "}
      <span className="cart-number">0</span>
    </button>
  );
};

export default HeaderIconButton;
