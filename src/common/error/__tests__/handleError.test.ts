import { statusCodes } from "../../constants";
import logger from "../../logger";
import { CustomError } from "..";
import { handleError } from "..";

describe("Given a handleError function", () => {
  describe("When it is instantiated with a Custom Error", () => {
    test("It should call logger.error with the custom error message", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const customErrorMessage = "Err message";
      const customError = new CustomError("", customErrorMessage);

      handleError(customError);
      const mockMessageArgument = loggerErrorSpy?.mock?.calls?.[0]?.[0];

      expect(mockMessageArgument).toEqual(customErrorMessage);
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

      expect(mockMessageArgument).toEqual(errorMessage);
    });

    test("It should call logger.error with a custom error", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const error = new Error("Err message");
      const generalErrorStatusCode = statusCodes.internalServerError;

      handleError(error);
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toBeInstanceOf(CustomError);
      expect(mockMetadataArgument?.cause).toEqual(error);
      expect((mockMetadataArgument as CustomError).statusCode).toEqual(
        generalErrorStatusCode
      );
      expect(mockMetadataArgument?.name).toEqual(error.name);
      expect(mockMetadataArgument?.message).toEqual(error.message);
      expect(mockMetadataArgument?.stack).toEqual(error.stack);
    });
  });

  describe("When it is instantiated with a string", () => {
    test("It should call logger.error with a message", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const string = "Some string";
      const expectedErrorMessage = `Error Handler received a none error instance with type - ${typeof string}, value - '${string}'`;

      handleError(string);
      const mockMessageArgument = loggerErrorSpy?.mock?.calls?.[0]?.[0];

      expect(mockMessageArgument).toEqual(expectedErrorMessage);
    });

    test("It should call logger.error with a general-error custom error", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const generalErrorName = "general-error";
      const generalErrorStatusCode = statusCodes.internalServerError;

      handleError("");
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toBeInstanceOf(CustomError);
      expect(mockMetadataArgument?.name).toEqual(generalErrorName);
      expect((mockMetadataArgument as CustomError).statusCode).toEqual(
        generalErrorStatusCode
      );
    });
  });
});
