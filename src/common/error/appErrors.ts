import { statusCodes } from "../constants";
import AppError from "./AppError";

type ErrorProps = {
  name?: string;
  message?: string;
  options?: ErrorOptions;
};

export class InternalError extends AppError {
  constructor({ name, message, options }: ErrorProps = {}) {
    super(
      name ?? "internalError",
      message ?? "An internal error has occurred",
      statusCodes.internalServerError,
      options
    );
  }
}