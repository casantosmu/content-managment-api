import { getDb } from ".";
import { statusCodes } from "../constants";
import { AppError } from "../error";
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
        const dbConnectionError = new AppError(
          "dbConnectionError",
          "Error checking database connection",
          statusCodes.internalServerError,
          { cause: error }
        );
        reject(dbConnectionError);
      }
    })();
  });
