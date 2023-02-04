import { statusCodes, type StatusCodes } from "../constants";

class AppError extends Error {
  constructor(
    override readonly name: string,
    override readonly message: string,
    readonly statusCode: StatusCodes = statusCodes.internalServerError,
    errorOptions?: ErrorOptions
  ) {
    super(name, errorOptions);
  }
}

export default AppError;
