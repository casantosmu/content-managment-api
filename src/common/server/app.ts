import express from "express";
import helmet from "helmet";
import {
  generalErrorMiddleware,
  notFoundMiddleware,
} from "../error/errorMiddlewares";
import { loggerHttp } from "../logger";
import router from "../router";

const app = express();

app.use(loggerHttp());
app.use(helmet());
app.use(express.json());

app.use(router);

app.use(notFoundMiddleware);
app.use(generalErrorMiddleware);

export default app;
