import React, { useState } from "react";
import SearchRecipes from "./SearchRecipe";
import SearchResults from "./SearchResults";

const FindRecipes = () => {
  // useState with boolean here to render SearchRecipes or when ingredients selected -> SearchResult
  const [searchQuery, setSearchQuery] = useState([]);

  const handleSearchQuery = (query) => {
    const items = query.map((obj) => obj.name);
    setSearchQuery(items);
  };
  return (
    <section className="findRecipes">
      {searchQuery.length === 0 ? (
        <SearchRecipes handleSearchQuery={handleSearchQuery} />
      ) : (
        <SearchResults query={searchQuery} />
      )}
    </section>
  );
};

export default FindRecipes;
