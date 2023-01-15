import handleError from "./common/error/handleError";
import app from "./app";
import { startServer } from "./server";

(async () => {
  try {
    await startServer(app);
  } catch (error) {
    handleError(error);
  }
})();
