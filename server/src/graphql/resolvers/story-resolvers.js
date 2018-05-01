import Story from "../../models/Story";

export default {
  getStory: (_, { _id }) => Story.findById(_id),
  getStorys: () => Story.find({})
};
