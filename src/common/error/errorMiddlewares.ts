import { type NextFunction, type Request, type Response } from "express";
import { statusCodes } from "../constants";
import AppError from "./AppError";
import handleError from "./handleError";

export const generalErrorMiddleware = (
  error: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  handleError(error);

  const statusCode =
    error instanceof AppError
      ? error.statusCode
      : statusCodes.internalServerError;

  const message = error instanceof AppError ? error.message : "General error";

  res.status(statusCode).json({ error: message });
};

export const notFoundMiddleware = (_req: Request, res: Response) => {
  res.status(statusCodes.notFound).json({ error: "Not found" });
};
