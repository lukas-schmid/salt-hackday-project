import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  getLocalStorage,
  storeLocalStorage,
} from "../../helperFunctions/helperFunctions";
import "./RecipeDetails.css";

const RecipeDetails = ({ match }) => {
  const [apiResponse, setApiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = match.params.id;
  useEffect(() => {
    fetch(`http://localhost:8080/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
        setIsLoading(false);
      });
  }, [id]);

  const saveRecipe = () => {
    const recipeData = apiResponse;
    recipeData.missing = getLocalStorage("missing");

    if (!localStorage.getItem("savedRecipes")) {
      storeLocalStorage("savedRecipes", JSON.stringify([recipeData]));
    } else {
      const currentStorage = JSON.parse(localStorage.getItem("savedRecipes"));
      storeLocalStorage(
        "savedRecipes",
        JSON.stringify([...currentStorage, recipeData])
      );
    }
  };

  const addToShoppingList = () => {
    const missingIngredients = getLocalStorage("missing");
    const shoppingListObjArr = missingIngredients.map((item) => {
      return {
        name: item,
        done: false,
      };
    });
    if (localStorage.getItem("shoppingList")) {
      const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));
      const strValue = shoppingList.concat(shoppingListObjArr);
      storeLocalStorage("shoppingList", JSON.stringify(strValue));
    } else {
      //const strValue = missingIngredients.join(",");
      storeLocalStorage("shoppingList", JSON.stringify(shoppingListObjArr));
    }
  };

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
          <h3 className="recipeDetails__description--header">Ingredients</h3>
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
          <h3 className="recipeDetails__description--header">Instructions</h3>
          {apiResponse.analyzedInstructions?.length === 0 ? (
            <p>{apiResponse.instructions}</p>
          ) : (
            apiResponse.analyzedInstructions[0].steps.map((step, index) => {
              return <p key={index}>{step.step}</p>;
            })
          )}
        </section>
        <section className="recipeDetails__missingIngredients">
          <h3 className="recipeDetails__description--header">
            Missing Ingredients
          </h3>
          <ul>
            {getLocalStorage("missing").map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
        <footer className="recipeDetails__buttons">
          <button onClick={() => addToShoppingList()} type="button">
            Add to shopping list
          </button>
          <button
            onClick={() => {
              saveRecipe();
            }}
            type="button"
          >
            Save
          </button>
        </footer>
      </article>
    </section>
  );
};

export default withRouter(RecipeDetails);
