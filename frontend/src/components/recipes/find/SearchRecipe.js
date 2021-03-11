import React, { useEffect, useState } from "react";
import Checkboxes from "./Checkboxes";
import { getLocalStorage } from "../../../helperFunctions/helperFunctions";
import "./SearchRecipe.css";

const SearchRecipe = ({ handleSearchQuery }) => {
  const [availableFood, setAvailableFood] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (e) => {
    const id = e.target.id;
    const name = e.target.value;
    const isChecked = e.target.checked;
    if (!checkedItems.some((item) => item.id === id)) {
      setCheckedItems([...checkedItems, { id, name, isChecked }]);
    } else {
      const index = checkedItems.findIndex((obj) => obj.id === id);
      const newArray = [...checkedItems];
      const item = { id, name, isChecked };
      newArray[index] = item;
      setCheckedItems(newArray);
    }
  };

  const searchRecipe = () => {
    handleSearchQuery(
      checkedItems.filter((isChecked) => isChecked.isChecked === true)
    );
  };

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
        <Checkboxes isChecked={handleChange} items={availableFood} />
      </article>
      <footer className="searchRecipe__footer">
        <button onClick={searchRecipe} type="button">
          Search
        </button>
      </footer>
    </>
  );
};

export default SearchRecipe;
