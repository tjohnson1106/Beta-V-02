import Story from "../../models/Story";
import { requireAuth } from "../../services/auth";

export default {
  getStory: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      Story.findById(_id);
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
      return Story.create(args);
    } catch (error) {
      throw error;
    }
  },
  updateStory: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      return Story.findByIdAndUpdate(_id, rest);
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
