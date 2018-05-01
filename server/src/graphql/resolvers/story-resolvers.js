import Story from "../../models/Story";

export default {
  getStory: (_, { _id }) => Story.findById(_id),
  getStorys: () => Story.find({}),
  createStory: (_, args) => Story.create(args),
  updateStory: (_, { _id, ...rest }) => Story.findByIdAndUpdate(_id, rest),
  deleteStory: async (_, { _id }) => {
    try {
      await Story.findByIdAndRemove(_id);
      return {
        message: "Delete Successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
