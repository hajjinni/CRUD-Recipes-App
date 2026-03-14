//import the model
const Recipe = require("../models/Recipe");
const asyncHandler = require("../utils/asyncHandler");


//Create a new recipe.
exports.createRecipe = asyncHandler(async (req, res) => {
const recipe = await Recipe.create(req.body);
res.status(201).json({
success: true,
data: recipe
});

});


// Retrieve all recipes.
exports.getAllRecipes = asyncHandler(async (req, res) => {
const recipes = await Recipe.find();
res.json({
success: true,
count: recipes.length,
data: recipes
});

});


// Retrieve a single recipe by ID.
exports.getRecipeById = asyncHandler(async (req, res) => {
const recipe = await Recipe.findById(req.params.id);
if (!recipe) {
return res.status(404).json({ message: "Recipe not found" });
}
res.json(recipe);

});


// Update a recipe by ID.
exports.updateRecipe = asyncHandler(async (req, res) => {
const recipe = await Recipe.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true, runValidators: true }
);
if (!recipe) {
return res.status(404).json({ message: "Recipe not found" });
}
res.json(recipe);

});


// Delete a recipe by ID.
exports.deleteRecipe = asyncHandler(async (req, res) => {
const recipe = await Recipe.findByIdAndDelete(req.params.id);
if (!recipe) {
return res.status(404).json({ message: "Recipe not found" });
}
res.json({
success: true,
message: "Recipe deleted"
});

});