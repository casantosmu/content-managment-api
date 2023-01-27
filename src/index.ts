import handleError from "./common/error/handleError";
import app from "./common/server/app";
import { startServer } from "./common/server/server";

(async () => {
  try {
    await startServer(app);
  } catch (error) {
    handleError(error);
  }
})();
