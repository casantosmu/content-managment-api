import AppError from "./AppError";
import util from "util";
import logger from "../logger";
import { InternalError } from "./appErrors";

const normalizeError = (errorToHandle: unknown): AppError => {
  if (errorToHandle instanceof AppError) {
    return errorToHandle;
  }

  if (errorToHandle instanceof Error) {
    const appError = new InternalError({
      name: errorToHandle.name,
      message: errorToHandle.message,
      options: { cause: errorToHandle },
    });
    appError.stack = errorToHandle.stack;
    return appError;
  }

  const inputType = typeof errorToHandle;
  return new InternalError({
    message: `Error Handler received a none error instance with type - ${inputType}, value - ${util.inspect(
      errorToHandle
    )}`,
  });
};

const handleError = (errorToHandle: unknown) => {
  const appError: AppError = normalizeError(errorToHandle);
  logger.error(appError.message, appError);
};

export default handleError;
