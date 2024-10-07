import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

const dummyMeals = [
  {
    id: 1,
    dishName: "Spaghetti Carbonara",
    summary:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    price: 14.99,
  },
  {
    id: 2,
    dishName: "Grilled Salmon",
    summary:
      "Fresh Atlantic salmon fillet grilled to perfection, served with seasonal vegetables.",
    price: 18.5,
  },
  {
    id: 3,
    dishName: "Chicken Tikka Masala",
    summary:
      "Tender chicken in a creamy tomato-based curry sauce, served with basmati rice.",
    price: 15.99,
  },
  {
    id: 4,
    dishName: "Vegetarian Buddha Bowl",
    summary:
      "Nutritious bowl filled with quinoa, roasted vegetables, avocado, and tahini dressing.",
    price: 13.5,
  },
  {
    id: 5,
    dishName: "BBQ Pulled Pork Sandwich",
    summary:
      "Slow-cooked pulled pork in tangy barbecue sauce, served on a brioche bun with coleslaw.",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = dummyMeals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.dishName}
      description={meal.summary}
      price={meal.price}
    />
  ));
  return (
    <div className="meals-list">
      <Card>
        <ul>{mealsList}</ul>;
      </Card>
    </div>
  );
};

export default AvailableMeals;
