import { Router as expressRouter } from "express";
import v1Router from "./v1Router";

const router = expressRouter();

router.use("/v1", v1Router);

export default router;
