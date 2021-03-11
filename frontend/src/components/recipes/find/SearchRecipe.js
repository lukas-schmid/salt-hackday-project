import React from "react";
import Checkboxes from "./Checkboxes";
import "./SearchRecipe.css";

const SearchRecipe = () => {
  return (
    <>
      <header className="searchRecipe__header">
        <h1>Select ingredients</h1>
      </header>
      <article className="searchRecipe__checkboxList">
        <div className="searchRecipe__checkboxList--row">
          <input
            type="checkbox"
            id="selectAll"
            name="selectAll"
            value="selectAll"
          />
          <label htmlFor="selectAll">Select All</label>
        </div>
        <Checkboxes />
      </article>
      <footer className="searchRecipe__footer">
        <button type="button">Search</button>
      </footer>
    </>
  );
};

export default SearchRecipe;
