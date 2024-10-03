import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="Navbar">
      <div className="Logo">
        <h1>ReactMeals</h1>
      </div>
      <div className="Cart">
        <h3>Your Cart 0</h3>
      </div>
    </nav>
  );
};

export default Header;
