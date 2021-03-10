import React from "react";
import { Link } from "react-router-dom";

const SearchRecipeItem = () => {
  return (
    <article className="SearchRecipeItem">
      <div className="SearchRecipeItem__image">
        <img src="" alt="" />
      </div>
      <div className="SearchRecipeItem__info">
        <p className="SearchRecipeItem__info--name">Name of the recipe</p>
        <Link to="/recipe/testid">
          <button className="SearchRecipeItem__info--button" type="button">
            Open
          </button>
        </Link>
      </div>
    </article>
  );
};

export default SearchRecipeItem;
