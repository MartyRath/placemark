import Mongoose from "mongoose";

const { Schema } = Mongoose;

const userTreeSchema = new Schema({
  title: String,
  location: String,
  height: Number,
  girth: Number,
  description: String,
  province: String,  // As provinces are simple strings, will not use ref from Province
  // Added userid here rather than in province
  userid: {
    type: Schema.Types.ObjectId, // Refers to object in other collection
    ref: "User", // Refers to object type: User
  },
});

export const UserTree = Mongoose.model("UserTree", userTreeSchema);