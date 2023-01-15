import statusCodes from "../../constants/statusCodes";
import logger from "../../logger";
import CustomError from "../CustomError";
import handleError from "../handleError";

describe("Given a handleError function", () => {
  describe("When it is instantiated with a Custom Error", () => {
    test("It should call logger.error with the custom error message", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const customErrorMessage = "Err message";
      const customError = new CustomError("", customErrorMessage);

      handleError(customError);
      const mockMessageArgument = loggerErrorSpy?.mock?.calls?.[0]?.[0];

      expect(mockMessageArgument).toBe(customErrorMessage);
    });

    test("It should call logger.error with the custom error", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const customError = new CustomError("Name", "Message");

      handleError(customError);
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toStrictEqual(customError);
    });
  });

  describe("When it is instantiated with a Error", () => {
    test("It should call logger.error with the error message", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const errorMessage = "Err message";
      const error = new Error(errorMessage);

      handleError(error);
      const mockMessageArgument = loggerErrorSpy?.mock?.calls?.[0]?.[0];

      expect(mockMessageArgument).toBe(errorMessage);
    });

    test("It should call logger.error with a custom error", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const error = new Error("Err message");

      handleError(error);
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toBeInstanceOf(CustomError);
      expect(mockMetadataArgument?.cause).toBe(error);
      expect(mockMetadataArgument?.name).toBe(error.name);
      expect(mockMetadataArgument?.message).toBe(error.message);
      expect(mockMetadataArgument?.stack).toBe(error.stack);
    });
  });

  describe("When it is instantiated with a string", () => {
    test("It should call logger.error with a message", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const string = "Some string";
      const expectedErrorMessage = `Error Handler received a none error instance with type - ${typeof string}, value - '${string}'`;

      handleError(string);
      const mockMessageArgument = loggerErrorSpy?.mock?.calls?.[0]?.[0];

      expect(mockMessageArgument).toBe(expectedErrorMessage);
    });

    test("It should call logger.error with a general-error custom error", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const generalErrorName = "general-error";
      const generalErrorStatusCode = statusCodes.internalServerError;

      handleError("");
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toBeInstanceOf(CustomError);
      expect(mockMetadataArgument?.name).toBe(generalErrorName);
      expect((mockMetadataArgument as CustomError).statusCode).toBe(
        generalErrorStatusCode
      );
    });
  });
});
