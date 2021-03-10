import React from "react";
import Checkboxes from "./Checkboxes";

const SearchRecipe = () => {
  return (
    <>
      <header className="searchRecipe__header">
        <h1>Select ingredients</h1>
      </header>
      <article className="searchRecipe__checkboxList">
        <input
          type="checkbox"
          id="selectAll"
          name="selectAll"
          value="selectAll"
        />
        <label htmlFor="selectAll">Select All</label>
        <Checkboxes />
      </article>
      <footer className="searchRecipe__footer">
        <button type="button">Search</button>
      </footer>
    </>
  );
};

export default SearchRecipe;
