/*require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});*/

import express, { Express } from "express";

import routes from "./routes";

class AppController {
  express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

const app = new AppController().express;

export default app;
