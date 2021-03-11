import React from "react";
import SavedRecipeItem from "./SavedRecipeItem";
import "./SavedRecipes.css";

const SavedRecipes = () => {
  return (
    <section className="savedRecipes">
      <SavedRecipeItem />
    </section>
  );
};

export default SavedRecipes;
