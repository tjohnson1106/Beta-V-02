import Story from "../../models/Story";
import { requireAuth } from "../../services/auth";

export default {
  getStory: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Story.findById(_id);
    } catch (error) {
      throw error;
    }
  },
  getStorys: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Story.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
  createStory: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Story.create({ ...args, user: user._id });
    } catch (error) {
      throw error;
    }
  },
  updateStory: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      const story = await Story.findOne({ _id, user: user._id });

      if (!story) {
        throw new Error("Not found");
      }

      Object.entries(rest).forEach(([key, value]) => {
        story[key] = value;
      });
      return story.save();
    } catch (error) {
      throw error;
    }
  },
  deleteStory: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      await Story.findByIdAndRemove(_id);
      return {
        message: "Delete Successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
