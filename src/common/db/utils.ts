import { getDb } from ".";
import { InternalError } from "../error";
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
        const dbConnectionError = new InternalError({
          name: "testDbError",
          message: "Error checking database connection",
          options: { cause: error },
        });
        reject(dbConnectionError);
      }
    })();
  });
