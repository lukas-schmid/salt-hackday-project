import React from "react";
import SearchRecipeItem from "./SearchRecipeItem";
import "./SearchResults.css";

const SearchResults = ({ query }) => {
  return (
    <>
      <header className="searchResult__header">
        <h1>Best Matching Results</h1>
      </header>
      <SearchRecipeItem searchQuery={query} />
    </>
  );
};

export default SearchResults;
