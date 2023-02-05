import { type NextFunction, type Request, type Response } from "express";
import AppError from "./AppError";
import { InternalError, NotFoundError } from "./appErrors";
import handleError from "./handleError";

export const isPublicError = (error: Error | AppError): error is AppError =>
  error instanceof AppError && !(error instanceof InternalError);

export const generalErrorMiddleware = (
  error: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  handleError(error);

  const { message, name, statusCode } = isPublicError(error)
    ? error
    : new InternalError();

  res.status(statusCode).json({
    error: {
      name,
      message,
    },
  });
};

export const notFoundMiddleware = (_req: Request, res: Response) => {
  const { name, message, statusCode } = new NotFoundError();

  res.status(statusCode).json({
    error: {
      name,
      message,
    },
  });
};
