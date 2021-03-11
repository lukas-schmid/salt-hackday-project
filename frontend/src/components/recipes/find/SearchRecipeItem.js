import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storeLocalStorage } from "../../../helperFunctions/helperFunctions";

const SearchRecipeItem = ({ searchQuery }) => {
  const [apiResponse, setApiResponse] = useState([]);
  const convertQuerytoURL = (arr) => {
    return encodeURIComponent(arr?.join(",+"));
  };

  useEffect(() => {
    const encodedQuery = convertQuerytoURL(searchQuery);
    fetch(`http://localhost:8080/api/recipes?ingredients=${encodedQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
      });
  }, [searchQuery]);

  const saveMissingIngredients = (id) => {
    const recipe = apiResponse.filter((obj) => obj.id === id);
    const missingIngredients =
      recipe[0].missedIngredients.length === 0
        ? null
        : recipe[0].missedIngredients.map((ingredient) => ingredient.name);
    const strValue = missingIngredients?.join(",");
    storeLocalStorage("missing", strValue);
  };

  return apiResponse.length === 0
    ? null
    : apiResponse.map((data) => {
        return (
          <article key={data.id} className="SearchRecipeItem">
            <div className="SearchRecipeItem__image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="SearchRecipeItem__info">
              <p className="SearchRecipeItem__info--name">{data.title}</p>
              <Link
                to={`/recipe/${data.id}`}
                onClick={() => saveMissingIngredients(data.id)}
              >
                <button
                  className="SearchRecipeItem__info--button"
                  type="button"
                >
                  Open
                </button>
              </Link>
            </div>
          </article>
        );
      });
};

export default SearchRecipeItem;
