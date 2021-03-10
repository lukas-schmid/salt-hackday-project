import React from "react";
import { Link } from "react-router-dom";

const SavedRecipeItem = () => {
  return (
    <article className="savedRecipe">
      <div className="savedRecipe__image">
        <img src="" alt="" />
      </div>
      <div className="savedRecipe__info">
        <p className="savedRecipe__info--name">Name of the recipe</p>
        <Link to="/recipe/testid">
          <button className="savedRecipe__info--button" type="button">
            Open
          </button>
        </Link>
      </div>
    </article>
  );
};

export default SavedRecipeItem;
