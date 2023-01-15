import statusCodes, { type StatusCodes } from "../constants/statusCodes";

class CustomError extends Error {
  constructor(
    override readonly name: string,
    override readonly message: string,
    readonly statusCode: StatusCodes = statusCodes.internalServerError,
    erroOptions?: ErrorOptions
  ) {
    super(name, erroOptions);
  }
}

export default CustomError;
