import StoryResolvers from "./story-resolvers";

export default {
  Query: {
    getStory: StoryResolvers.getStory,
    getStorys: StoryResolvers.getStorys
  }
};
