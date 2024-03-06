import Mongoose from "mongoose";

const { Schema } = Mongoose;

const userTreeSchema = new Schema({
  title: String,
  location: String,
  height: Number,
  girth: Number,
  description: String,
  provinceid: {
    type: Schema.Types.ObjectId,
    ref: "Province",
  },
  // Added userid here rather than in province
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const userTree = Mongoose.model("UserTree", userTreeSchema);