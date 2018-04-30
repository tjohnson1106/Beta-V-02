import express from "express";
import bodyParser from "body-parser";

import "../config/db";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json()); // body-parser acts as the json parser middleware

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen on port: ${PORT}`);
  }
});
