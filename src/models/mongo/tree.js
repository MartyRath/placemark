import Mongoose from "mongoose";

const { Schema } = Mongoose;

const treeSchema = new Schema({
  species: String,
  height: Number,
  girth: Number,
  county: String,
  provinceid: {
    type: Schema.Types.ObjectId,
    ref: "Province",
  },
});

export const Tree = Mongoose.model("Tree", treeSchema);