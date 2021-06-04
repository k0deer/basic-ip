const http = require("http");
const api = require("./api");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(api);
app.use(cors());

const server = http.createServer(app);
const port = process.env.NODE_PORT || 3000;

server.listen(
  port,
  console.log(
    `Server running in mode ${process.env.NODE_ENV} on port ${port}`
  )
);
