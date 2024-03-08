import Mongoose from "mongoose";

const { Schema } = Mongoose;

const userTreeSchema = new Schema({
  title: String,
  location: String,
  height: Number,
  girth: Number,
  description: String,
  province: {
    type: String, // Refers to object in other collection
    ref: "Province" // Refers to object type: Province
  },  
  userid: {
    type: Schema.Types.ObjectId, // Refers to object in other collection
    ref: "User", // Refers to object type: User
  },
});

export const UserTree = Mongoose.model("UserTree", userTreeSchema);