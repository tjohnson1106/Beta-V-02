export default `
type Story {
    _id: String
    text: String
}

type Query {
getStorys: [Story]
}

schema {
    query: Query

}
`;
