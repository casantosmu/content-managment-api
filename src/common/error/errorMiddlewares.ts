import { type NextFunction, type Request, type Response } from "express";
import statusCodes from "../constants/statusCodes";
import CustomError from "./CustomError";
import handleError from "./handleError";

export const generalErrorMiddleware = (
  error: Error | CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  handleError(error);

  const statusCode =
    error instanceof CustomError
      ? error.statusCode
      : statusCodes.internalServerError;

  const message =
    error instanceof CustomError ? error.message : "General error";

  res.status(statusCode).json({ error: message });
};
