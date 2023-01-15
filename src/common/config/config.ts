import env from "./env";

const config = {
  nodeEnv: env.NODE_ENV,
  isProduction: env.isProduction,
  isTest: env.isTest,
  isDev: env.isDev,
  port: env.PORT,
};

export default config;
