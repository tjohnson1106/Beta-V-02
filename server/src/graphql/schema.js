export default `

scalar Date

type Status {
    message: String!
}

type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
}

type Story {
    _id: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!
}

type Query {
    getStory(_id: ID!): Story
    getStorys: [Story]
}

type Mutation {
    createStory(text: String!): Story
    updateStory(_id: ID!,  text: String, email: String): Story
    deleteStory(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
    login(email: String!, password: String!): User
}

schema {
    query: Query
    mutation: Mutation
}
`;
