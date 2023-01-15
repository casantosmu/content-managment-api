import express from "express";
import { config } from "./common/config";

const app = express();
const { port } = config;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
