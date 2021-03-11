import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchRecipeItem = ({ searchQuery }) => {
  const convertQuerytoURL = (arr) => {
    return encodeURIComponent(arr?.join(",+"));
  };

  useEffect(() => {
    const encodedQuery = convertQuerytoURL(searchQuery);
    fetch(`http://localhost:8080/api/recipes?ingredients=${encodedQuery}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [searchQuery]);

  return (
    <article className="SearchRecipeItem">
      <div className="SearchRecipeItem__image">
        <img src="" alt="" />
      </div>
      <div className="SearchRecipeItem__info">
        <p className="SearchRecipeItem__info--name">Name of the recipe</p>
        <Link to="/recipe/testid">
          <button
            onClick={() => console.log(searchQuery)}
            className="SearchRecipeItem__info--button"
            type="button"
          >
            Open
          </button>
        </Link>
      </div>
    </article>
  );
};

export default SearchRecipeItem;
