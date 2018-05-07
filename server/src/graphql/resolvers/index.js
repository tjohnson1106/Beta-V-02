import GraphQLDate from "graphql-date";

import StoryResolvers from "./story-resolvers";
import UserResolvers from "./user-resolver";
import User from "../../models/User";

export default {
  Date: GraphQLDate,
  Story: {
    user: ({ user }) => User.findById(user)
  },
  Query: {
    getStory: StoryResolvers.getStory,
    getStorys: StoryResolvers.getStorys,
    me: UserResolvers.me
  },
  Mutation: {
    createStory: StoryResolvers.createStory,
    updateStory: StoryResolvers.updateStory,
    deleteStory: StoryResolvers.deleteStory,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};
