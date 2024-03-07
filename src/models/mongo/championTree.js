import Mongoose from "mongoose";

const { Schema } = Mongoose;

const championTreeSchema = new Schema({
  species: String,
  height: Number,
  girth: Number,
  location: String,
  province: String,
});

export const ChampionTree = Mongoose.model("ChampionTree", championTreeSchema);