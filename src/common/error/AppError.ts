import { statusCodes, type StatusCodes } from "../constants";

class AppError extends Error {
  constructor(
    override readonly name: string,
    override readonly message: string,
    readonly statusCode: StatusCodes = statusCodes.internalServerError,
    erroOptions?: ErrorOptions
  ) {
    super(name, erroOptions);
  }
}

export default AppError;
