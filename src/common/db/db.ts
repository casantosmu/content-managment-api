import pgPromise, { type IInitOptions } from "pg-promise";
import type pg from "pg-promise/typescript/pg-subset";
import { dbConfig } from "../config";
import attachDbLogger from "./dbLogger";

const initOptions: IInitOptions = {};
attachDbLogger(initOptions);
const pgp = pgPromise(initOptions);

const config: pg.IConnectionParameters = {
  ...dbConfig,
  allowExitOnIdle: true,
};

let db: pgPromise.IDatabase<Record<string, unknown>> | undefined;

export const getDb = () => {
  if (!db) {
    db = pgp(config);
  }

  return db;
};

export const stopDb = async () => {
  if (db) {
    await db.$pool.end();
    db = undefined;
  }
};
