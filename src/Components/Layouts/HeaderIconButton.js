import { useContext } from "react";
import { RiShoppingCartFill } from "@remixicon/react";
import "./HeaderIconButton.css";
import CartContext from "../../store/CartContext";

const HeaderIconButton = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity += Number(item.quantity);
  });
  return (
    <button onClick={props.onCartClick} className="Cart">
      <RiShoppingCartFill className="icon" /> Your Cart
      <span className="cart-number">{quantity}</span>
    </button>
  );
};

export default HeaderIconButton;
