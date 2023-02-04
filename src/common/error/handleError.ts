import CustomError from "./CustomError";
import util from "util";
import logger from "../logger";
import { statusCodes } from "../constants";

const normalizeError = (errorToHandle: unknown): CustomError => {
  if (errorToHandle instanceof CustomError) {
    return errorToHandle;
  }

  if (errorToHandle instanceof Error) {
    const customError = new CustomError(
      errorToHandle.name,
      errorToHandle.message,
      statusCodes.internalServerError,
      { cause: errorToHandle }
    );
    customError.stack = errorToHandle.stack;
    return customError;
  }

  const inputType = typeof errorToHandle;
  return new CustomError(
    "general-error",
    `Error Handler received a none error instance with type - ${inputType}, value - ${util.inspect(
      errorToHandle
    )}`
  );
};

const handleError = (errorToHandle: unknown) => {
  const customError: CustomError = normalizeError(errorToHandle);
  logger.error(customError.message, customError);
};

export default handleError;
