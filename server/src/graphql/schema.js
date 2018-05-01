export default `

type Status {
    message: String!
}

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
    updateStory(_id: ID!,  text: String, email: String): Story
    deleteStory(_id: ID!): Status
}

schema {
    query: Query
    mutation: Mutation
}
`;
