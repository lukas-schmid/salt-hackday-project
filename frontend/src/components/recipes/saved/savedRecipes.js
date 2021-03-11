import React, { useEffect, useState } from "react";
import SavedRecipeItem from "./SavedRecipeItem";
import "./SavedRecipes.css";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("savedRecipes")) {
      setSavedRecipes(JSON.parse(localStorage.getItem("savedRecipes")));
    }
  }, []);
  return (
    <section className="savedRecipes">
      <header className="savedRecipes__header">
        <h1>Saved Recipes</h1>
      </header>
      <section className="savedRecipeList">
        <SavedRecipeItem recipes={savedRecipes} />
      </section>
    </section>
  );
};

export default SavedRecipes;
