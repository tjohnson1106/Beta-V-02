import GraphQLDate from "graphql-date";

import StoryResolvers from "./story-resolvers";

export default {
  Date: GraphQLDate,
  Query: {
    getStory: StoryResolvers.getStory,
    getStorys: StoryResolvers.getStorys
  },
  Mutation: {
    createStory: StoryResolvers.createStory,
    updateStory: StoryResolvers.updateStory,
    deleteStory: StoryResolvers.deleteStory
  }
};
