import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const RecipeDetails = ({ match }) => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    const id = match.params.id;
    fetch(`http://localhost:8080/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
    //.then((data) => setApiResponse(data));
  }, [match.params.id]);

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

export default withRouter(RecipeDetails);
