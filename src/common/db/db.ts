import pgPromise from "pg-promise";
import type pg from "pg-promise/typescript/pg-subset";
import { dbConfig } from "../config";
import logger from "../logger";

const pgp = pgPromise();

const options: pg.IConnectionParameters = {
  ...dbConfig,
  allowExitOnIdle: true,
};

let db: pgPromise.IDatabase<Record<string, unknown>> | undefined;

export const getDb = () => {
  if (!db) {
    db = pgp(options);
    logger.info("Database connection initialized");
  }

  return db;
};

export const stopDb = async () => {
  if (db) {
    await db.$pool.end();
    db = undefined;
    logger.info("Database connection has been successfully closed");
  }
};
