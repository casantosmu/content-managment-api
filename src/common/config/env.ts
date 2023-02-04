/* eslint-disable @typescript-eslint/naming-convention */
import dotenv from "dotenv";
import { cleanEnv, num, str } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "production", "test"],
    default: "development",
  }),
  PORT: num({
    default: 3000,
  }),
  LOG_LEVEL: str({
    choices: ["debug", "info", "warn", "error", "fatal"],
    default: "info",
    devDefault: "debug",
    desc: "Specifies the level of detail of the log messages that are written to the log.",
  }),
  DB_PORT: num(),
  DB_HOST: str(),
  DB_NAME: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
});

export default env;
