var express = require("express");
var router = express.Router();
require("dotenv").config();
const { fetchData } = require("../helperFunctions/helperFunctions");

const key = process.env.API_KEY;
const baseURL = "https://api.spoonacular.com/recipes";

/* GET all recipes by ingredients. */
router.get("/recipes/", async (req, res, next) => {
  // query params banana%2C%2Bmilk%2C%2Bchocolate
  try {
    const query = req.query.ingredients;
    const url = `${baseURL}/findByIngredients?ingredients=${query}&apiKey=${key}`;
    const recipes = await fetchData(url);
    if (recipes.length === 0) {
      next({ message: "could not fetch data" });
    } else {
      res.json(recipes);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

/* GET recipes by ID. */
router.get("/recipes/:id/", async (req, res, next) => {
  // id 200313 = should be Chocolate Cinnamon Ice Cream
  // "id": 200313,
  // "title": "Chocolate Cinnamon Ice Cream",
  try {
    const id = req.params.id;
    const url = `${baseURL}/${id}/information?includeNutrition=false&apiKey=${key}`;
    const recipe = await fetchData(url);
    if (recipe.code === 404) {
      next({ message: "could not fetch data" });
    } else {
      res.json(recipe);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
