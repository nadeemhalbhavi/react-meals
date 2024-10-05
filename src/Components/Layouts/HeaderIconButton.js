import { RiShoppingCartFill } from "@remixicon/react";
import "./HeaderIconButton.css";

const HeaderIconButton = () => {
  return (
    <button className="Cart">
      <RiShoppingCartFill className="icon" /> Your Cart{" "}
      <span className="cart-number">0</span>
    </button>
  );
};

export default HeaderIconButton;
