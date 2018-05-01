export default `
type Story {
    _id: ID!
    text: String!
}

type Query {
    getStory(_id: ID!): Story
getStorys: [Story]
}

type Mutation {
    createStory(text: String!): Story 
}

schema {
    query: Query
    mutation: Mutation
}
`;
