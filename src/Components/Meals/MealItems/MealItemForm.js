import "./MealItemForm.css";
import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  console.log("reinitial CartCtx", cartCtx);
  const addItemToCart = (event) => {
    event.preventDefault();
    // will update the cart context here
    const quantity = document.getElementById("amount" + props.id).value;
    cartCtx.addItem({ ...props.items, quantity: quantity });
    console.log("Added item to cart", cartCtx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {console.log("inside render", cartCtx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
