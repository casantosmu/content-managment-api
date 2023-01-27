import { Router as expressRouter } from "express";

const v1Router = expressRouter();

v1Router.use("/", (_req, res) => {
  res.send("Hello World!");
});

export default v1Router;
