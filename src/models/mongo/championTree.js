import Mongoose from "mongoose";

const { Schema } = Mongoose;

const championTreeSchema = new Schema({
  title: String,
  height: Number,
  girth: Number,
  location: String,
  provinceid: {
    type: Schema.Types.ObjectId,
    ref: "Province",
  },
});

export const ChampionTree = Mongoose.model("ChampionTree", championTreeSchema);