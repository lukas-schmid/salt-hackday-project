import React from "react";

const SearchRecipeItem = () => {
  return (
    <article className="SearchRecipeItem">
      <div className="SearchRecipeItem__image">
        <img src="" alt="" />
      </div>
      <div className="SearchRecipeItem__info">
        <p className="SearchRecipeItem__info--name">Name of the recipe</p>
        <button className="SearchRecipeItem__info--button" type="button">
          Open
        </button>
      </div>
    </article>
  );
};

export default SearchRecipeItem;
