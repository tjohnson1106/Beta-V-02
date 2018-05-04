import mongoose, { Schema } from "mongoose";

const StorySchema = new Schema(
  {
    text: String
  },
  { timestamps: true }
);

export default mongoose.model("Story", StorySchema);
