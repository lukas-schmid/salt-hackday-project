import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <section className="mainPage">
      <article className="mainPage__fridge">
        <Link to="/fridge">
          <p>Your Fridge</p>
        </Link>
      </article>
      <article className="mainPage__recipes">
        <Link to="/recipes">
          <p>Recipes</p>
        </Link>
      </article>
      <article className="mainPage__shoppingList">
        <Link to="shoppinglist">
          <p>Shopping list</p>
        </Link>
      </article>
    </section>
  );
};

export default Main;
