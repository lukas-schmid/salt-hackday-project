import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";

const Recipes = () => {
  return (
    <section className="recipesPage">
      <article className="recipesPage__savedRecipes">
        <Link to="/savedRecipes">
          <p>Saved recipes</p>
        </Link>
      </article>
      <article className="recipesPage__findRecipes">
        <Link to="/findRecipes">
          <p>Find new recipes</p>
        </Link>
      </article>
    </section>
  );
};

export default Recipes;
