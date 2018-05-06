/*eslint-disable no-param-reassign */

import bodyParser from "body-parser";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "../graphql/schema";
import resolvers from "../graphql/resolvers";
import constants from "./constants";
import { decodeToken } from "../services/auth";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });
  
  
  async function auth(req, res, next) {
    try {
      const token = req.headers.authorization;
      if (token != null) {
        const user = await decodeToken(token);
        req.user = user;
         
      } else {
        req.user = null;
      }
    } catch (error) {
      throw error;
      
    }
  }


export default app => {


app.use(bodyParser.json()); // body-parser acts as the json parser middleware

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
  })
);

app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress({
    schema
  })
);
}