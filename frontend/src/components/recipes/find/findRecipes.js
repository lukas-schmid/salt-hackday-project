import React from "react";
import SearchRecipes from "./SearchRecipe";
import SearchResults from "./SearchResults";

const FindRecipes = () => {
  // useState with boolean here to render SearchRecipes or when ingredients selected -> SearchResult
  return (
    <section className="findRecipes">
      <SearchRecipes />
      <SearchResults />
    </section>
  );
};

export default FindRecipes;
