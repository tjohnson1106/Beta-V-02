import mongoose, { Schema } from "mongoose";

const StorySchema = new Schema({
  text: String
});

export default mongoose.model("Story", "StorySchema");
