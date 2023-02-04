import { getDb } from ".";
import { CustomError } from "../error";
import logger from "../logger";

export const testDb = async () =>
  new Promise<void>((resolve, reject) => {
    (async () => {
      try {
        const connection = await getDb().connect();
        await connection.done();

        logger.info("Database connection check completed successfully");
        resolve();
      } catch (error) {
        const dbConnectionError = new CustomError(
          "dbConnectionError",
          "Error checking database connection",
          500,
          { cause: error }
        );
        reject(dbConnectionError);
      }
    })();
  });
