export default {
  PORT: process.env.PORT || 3001,
  DB_URL: "mongodb://localhost/story-development",
  GRAPHQL_PATH: "/graphql",
  JWT_SECRET: "thisisasecret123"
};
