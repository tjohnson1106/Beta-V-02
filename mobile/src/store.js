import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ApolloClient from "apollo-boost";
import { HttpLink, createHttpLink } from "apollo-link-http";
import thunk from "redux-thunk";

import reducers from "./reducers";

const link = createHttpLink({ uri: "http://localhost:3001/graphql" });

export const client = new ApolloClient({
  link
});

const middlewares = [client.middleware(), thunk];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);
