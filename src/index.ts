import { testDb } from "./common/db";
import { handleError, InternalError } from "./common/error";
import { startServer } from "./common/server";

(async () => {
  try {
    await startServer();
    await testDb();
  } catch (error) {
    const startUpError = new InternalError({
      name: "startUpError",
      options: { cause: error },
    });
    handleError(startUpError);
  }
})();
