var express = require("express");
var router = express.Router();

/* GET all recipes by ingredients. */
router.get("/recipes/", function (req, res, next) {
  res.send("Backend for salt-hackday-project - get spoonacualar data");
});

/* GET recipes by ID. */
router.get("/recipes/:id/", function (req, res, next) {
  const id = req.params.id;
  res.send(`Get recipe by ID - example: ${id}`);
});

module.exports = router;
