import React, { useEffect, useState } from "react";
import Checkboxes from "./Checkboxes";
import { getLocalStorage } from "../../../helperFunctions/helperFunctions";
import "./SearchRecipe.css";

const SearchRecipe = () => {
  const [availableFood, setAvailableFood] = useState([]);

  useEffect(() => {
    setAvailableFood(getLocalStorage("fridge"));
  }, []);

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
        <Checkboxes items={availableFood} />
      </article>
      <footer className="searchRecipe__footer">
        <button type="button">Search</button>
      </footer>
    </>
  );
};

export default SearchRecipe;
