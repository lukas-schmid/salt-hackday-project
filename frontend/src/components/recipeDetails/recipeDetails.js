import React from "react";

const RecipeDetails = () => {
  return (
    <section className="recipeDetailsPage">
      <article className="recipeDetails">
        <header className="recipeDetails__header">
          <h1 className="recipeDetails__header--h1">Recipe Title</h1>
        </header>
        <section className="recipeDetails__image">
          <img src="" alt="" />
        </section>
        <section className="recipeDetails__description">
          <p>description / ingredients etc...</p>
        </section>
        <section className="recipeDetails__missingIngredients">
          <p>list of missing ingredients</p>
        </section>
        <footer className="recipeDetails__description">
          <button type="button">Add to shopping list</button>
          <button type="button">Save</button>
        </footer>
      </article>
    </section>
  );
};

export default RecipeDetails;
