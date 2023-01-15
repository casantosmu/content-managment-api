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
});

export default env;
