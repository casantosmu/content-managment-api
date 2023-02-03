import env from "./env";

export const port = env.DB_PORT;
export const host = env.DB_HOST;
export const database = env.DB_NAME;
export const user = env.DB_USER;
export const password = env.DB_PASSWORD;
export const maxConnections = 10;
export const idleTimeoutMillis = 30000;
