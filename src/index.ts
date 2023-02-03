import { testDb } from "./common/db";
import handleError from "./common/error/handleError";
import { startServer } from "./common/server/server";

(async () => {
  try {
    await startServer();
    await testDb();
  } catch (error) {
    handleError(error);
  }
})();
