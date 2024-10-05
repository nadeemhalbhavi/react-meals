import "./AvailableMeals.css";

const dummyMeals = [
  {
    dishName: "Spaghetti Carbonara",
    summary:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    price: 14.99,
  },
  {
    dishName: "Grilled Salmon",
    summary:
      "Fresh Atlantic salmon fillet grilled to perfection, served with seasonal vegetables.",
    price: 18.5,
  },
  {
    dishName: "Chicken Tikka Masala",
    summary:
      "Tender chicken in a creamy tomato-based curry sauce, served with basmati rice.",
    price: 15.99,
  },
  {
    dishName: "Vegetarian Buddha Bowl",
    summary:
      "Nutritious bowl filled with quinoa, roasted vegetables, avocado, and tahini dressing.",
    price: 13.5,
  },
  {
    dishName: "BBQ Pulled Pork Sandwich",
    summary:
      "Slow-cooked pulled pork in tangy barbecue sauce, served on a brioche bun with coleslaw.",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = dummyMeals.map((meal) => (
    <li>
      <h3>{meal.dishName}</h3>
      <p>{meal.summary}</p>
      <p className="price">Price: ${meal.price}</p>
      {/* <button>Add to Cart</button> */}
      <hr />
    </li>
  ));
  return (
    <div className="meals-list">
      <ul>{mealsList}</ul>;
    </div>
  );
};

export default AvailableMeals;
