import React from "react";
import SearchRecipeItem from "./SearchRecipeItem";
import "./SearchResults.css";

const SearchResults = () => {
  return (
    <>
      <header className="searchResult__header">
        <h1>Best Matching Results</h1>
      </header>
      <SearchRecipeItem />
    </>
  );
};

export default SearchResults;
