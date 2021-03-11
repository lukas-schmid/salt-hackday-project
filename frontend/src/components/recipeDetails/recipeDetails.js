import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const RecipeDetails = ({ match }) => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    const id = match.params.id;
    fetch(`http://localhost:8080/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
        console.log(data);
      });
  }, [match.params.id]);

  return (
    <section className="recipeDetailsPage">
      <article className="recipeDetails">
        <header className="recipeDetails__header">
          <h1 className="recipeDetails__header--h1">{apiResponse.title}</h1>
        </header>
        <section className="recipeDetails__image">
          <img src={apiResponse.image} alt={apiResponse.title} />
        </section>
        <section className="recipeDetails__ingredients">
          <ul>
            {apiResponse.extendedIngredients.length === 0
              ? null
              : apiResponse.extendedIngredients.map((ingredient, index) => {
                  return <li key={index}>{ingredient.original}</li>;
                })}
          </ul>
        </section>
        <section className="recipeDetails__description">
          {apiResponse.analyzedInstructions.length !== 0 ? (
            apiResponse.analyzedInstructions[0]?.steps.map((step, index) => {
              return <p key={index}>{step.step}</p>;
            })
          ) : (
            <p>{apiResponse.instructions}</p>
          )}
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
