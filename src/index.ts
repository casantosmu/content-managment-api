import handleError from "./common/error/handleError";
import { startServer } from "./common/server/server";

(async () => {
  try {
    await startServer();
  } catch (error) {
    handleError(error);
  }
})();
