import express from "express";
import helmet from "helmet";
import {
  generalErrorMiddleware,
  notFoundMiddleware,
} from "./common/error/errorMiddlewares";
import { loggerHttp } from "./common/logger";

const app = express();

app.use(loggerHttp());
app.use(helmet());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);
app.use(generalErrorMiddleware);

export default app;
