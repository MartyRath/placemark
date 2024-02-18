import Mongoose from "mongoose";

const { Schema } = Mongoose;

const provinceSchema = new Schema({
  title: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Province = Mongoose.model("Province", provinceSchema);