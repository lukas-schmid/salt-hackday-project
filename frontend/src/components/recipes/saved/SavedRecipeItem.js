import React from "react";
import { Link } from "react-router-dom";

const SavedRecipeItem = ({ recipes }) => {
  return recipes.length === 0 ? (
    <p>no recipes saved</p>
  ) : (
    recipes.map((recipe) => {
      return (
        <article className="savedRecipe">
          <div className="savedRecipe__image">
            <img src={recipe.image} alt={recipe.title} />
          </div>
          <div className="savedRecipe__info">
            <p className="savedRecipe__info--name">{recipe.title}</p>
            <Link to={`/recipe/${recipe.id}`}>
              <button className="savedRecipe__info--button" type="button">
                Open
              </button>
            </Link>
          </div>
        </article>
      );
    })
  );
};

export default SavedRecipeItem;
