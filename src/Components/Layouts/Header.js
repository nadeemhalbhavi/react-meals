import React from "react";
import "./Header.css";
import mealsImages from "../../assests/meals.jpg";
import HeaderIconButton from "../../Components/Layouts/HeaderIconButton";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="Navbar">
        <div className="Logo">
          <h1>ReactMeals</h1>
        </div>
        <div>
          <HeaderIconButton />
        </div>
      </nav>

      <div className="main-image">
        <img src={mealsImages} alt="FoodImg" />
      </div>
    </React.Fragment>
  );
};

export default Header;
