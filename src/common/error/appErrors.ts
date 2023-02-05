import { statusCodes } from "../constants";
import AppError from "./AppError";

type ErrorProps = {
  name?: string;
  message?: string;
  options?: ErrorOptions;
};

export type ErrorDetail = {
  name: string;
  message: string;
  target?: string;
};

type ErrorOptionsWithErrorDetails = {
  details?: ErrorDetail[];
} & ErrorOptions;

type ErrorPropsWithErrorDetails = {
  options?: ErrorOptionsWithErrorDetails;
} & ErrorProps;

export class InternalError extends AppError {
  constructor({ name, message, options }: ErrorProps = {}) {
    super(
      name ?? "internalError",
      message ?? "An internal error has occurred",
      statusCodes.internalError,
      options
    );
  }
}

export class NotFoundError extends AppError {
  constructor({ name, message, options }: ErrorProps = {}) {
    super(
      name ?? "notFoundError",
      message ?? "Resource not found",
      statusCodes.notFound,
      options
    );
  }
}

export class BadRequestError extends AppError {
  constructor({ name, message, options }: ErrorPropsWithErrorDetails = {}) {
    super(
      name ?? "badRequestError",
      message ?? "Bad request",
      statusCodes.badRequest,
      options
    );
  }
}
