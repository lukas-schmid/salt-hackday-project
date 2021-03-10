import React from "react";

const SavedRecipeItem = () => {
  return (
    <article className="savedRecipe">
      <div className="savedRecipe__image">
        <img src="" alt="" />
      </div>
      <div className="savedRecipe__info">
        <p className="savedRecipe__info--name">Name of the recipe</p>
        <button className="savedRecipe__info--button" type="button">
          Open
        </button>
      </div>
    </article>
  );
};

export default SavedRecipeItem;
