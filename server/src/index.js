import express from "express";
import { createServer } from "http";

import "./config/db";
import constants from "./config/constants";
import mocks from "./mocks";
import middlewares from "./config/middlewares";

const app = express();

middlewares(app);



const graphqlServer = createServer(app);

mocks().then(() => {
  graphqlServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App listen on port: ${constants.PORT}`);
    }
  });
});
