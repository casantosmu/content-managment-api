import express from "express";
import { config } from "./common/config";
import logger from "./common/logger";

const app = express();
const { port } = config;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
