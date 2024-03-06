import Mongoose from "mongoose";

const { Schema } = Mongoose;

const provinceSchema = new Schema({
  title: String,
  // Removed userid as that is attached to userTrees instead
});

export const Province = Mongoose.model("Province", provinceSchema);