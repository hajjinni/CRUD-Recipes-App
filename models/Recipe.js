//import the mongoose
const mongoose = require("mongoose");
//create the schemma
const recipeSchema = new mongoose.Schema({

  title: {
    type: String,
    required: [true, "Recipe title is required"]
  },

  ingredients: {
    type: [String],
    required: true
  },

  instructions: {
    type: String,
    required: true
  },

  cookingTime: {
    type: Number
  },

  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    default: "Easy"
  }

}, { timestamps: true });

//create the model
const Recipe=mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;