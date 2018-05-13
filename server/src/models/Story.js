import mongoose, { Schema } from "mongoose";

const StorySchema = new Schema(
  {
    text: {
      type: String,
      minlength: [5, "Needs to be longer"],
      maxlength: [144, "Too much data"]
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    favoriteCount: {
      type: Number,
      default: 0
    },
    imageUrl: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Story", StorySchema);
