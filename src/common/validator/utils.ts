import { type ErrorObject } from "ajv";
import { type ErrorDetail } from "../error/";

export const formatAjvErrors = (ajvErrors: ErrorObject[]): ErrorDetail[] =>
  ajvErrors.map((ajvError) => ({
    message: ajvError.message!,
    name: ajvError.keyword,
    ...(ajvError.instancePath && { target: ajvError.instancePath }),
  }));
