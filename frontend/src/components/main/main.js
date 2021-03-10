import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to="/fridge">
        <h1>Fridge</h1>
      </Link>
      <Link to="/recipes">
        <h1>Recipes</h1>
      </Link>
      <Link to="shoppinglist">
        <h1>Shopping list</h1>
      </Link>
    </div>
  );
};

export default Main;
