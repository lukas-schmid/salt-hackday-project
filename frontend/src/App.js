import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Fridge from "./components/fridge/Fridge";
import Recipes from "./components/recipes/Recipes";
import SavedRecipes from "./components/recipes/saved/SavedRecipes";
import FindRecipes from "./components/recipes/find/FindRecipes";
import ShoppingList from "./components/shoppingList/Shopping";
import RecipeDetails from "./components/recipeDetails/RecipeDetails";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/fridge">
              <Fridge />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/savedRecipes">
              <SavedRecipes />
            </Route>
            <Route path="/findRecipes">
              <FindRecipes />
            </Route>
            <Route path="/shoppinglist">
              <ShoppingList />
            </Route>
            <Route path="/recipes/:id">
              <RecipeDetails />
            </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
