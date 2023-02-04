import env from "./env";

export const nodeEnv = env.NODE_ENV;
export const { isProduction } = env;
export const { isTest } = env;
export const { isDev } = env;
export const port = env.PORT;
export const logLevel = env.LOG_LEVEL;
