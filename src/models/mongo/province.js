import Mongoose from "mongoose";

const { Schema } = Mongoose;

const provinceSchema = new Schema({
  title: String,
});

export const Province = Mongoose.model("Province", provinceSchema);