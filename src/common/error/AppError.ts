import { statusCodes, type StatusCodes } from "../constants";

class AppError extends Error {
  constructor(
    override readonly name: string,
    override readonly message: string,
    readonly statusCode: StatusCodes = statusCodes.internalServerError,
    readonly options?: ErrorOptions
  ) {
    super(name, options);
  }
}

export default AppError;
