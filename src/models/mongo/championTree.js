import Mongoose from "mongoose";

const { Schema } = Mongoose;

const championTreeSchema = new Schema({
  species: String,
  height: Number,
  girth: Number,
  location: String,
  province: {
    type: String, // Refers to object in other collection
    ref: "Province" // Refers to object type: Province
  },
});

export const ChampionTree = Mongoose.model("ChampionTree", championTreeSchema);