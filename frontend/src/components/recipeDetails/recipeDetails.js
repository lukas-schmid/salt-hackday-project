import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const RecipeDetails = ({ match }) => {
  const [apiResponse, setApiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = match.params.id;
    fetch(`http://localhost:8080/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
        setIsLoading(false);
        console.log(data);
      });
  }, [match.params.id]);

  return isLoading ? (
    <p>loading...</p>
  ) : (
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
            {apiResponse.extendedIngredients?.length === 0 ? (
              <p>no ingredients available</p>
            ) : (
              apiResponse.extendedIngredients?.map((ingredient, index) => {
                return <li key={index}>{ingredient.original}</li>;
              })
            )}
          </ul>
        </section>
        <section className="recipeDetails__description">
          <button
            onClick={() =>
              console.log(apiResponse.analyzedInstructions.length === 0)
            }
          >
            test
          </button>
          {apiResponse.analyzedInstructions.length === 0 ? (
            <p>{apiResponse.instructions}</p>
          ) : (
            apiResponse.analyzedInstructions[0].steps.map((step, index) => {
              return <p key={index}>{step.step}</p>;
            })
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
