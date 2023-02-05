import logger from "../../logger";
import { handleError, InternalError } from "..";
import AppError from "../AppError";

describe("Given a handleError function", () => {
  describe("When it is called with a App Error", () => {
    test("It should call logger.error with the app error message", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const appErrorMessage = "Err message";
      const appError = new AppError("", appErrorMessage);

      handleError(appError);
      const mockMessageArgument = loggerErrorSpy?.mock?.calls?.[0]?.[0];

      expect(mockMessageArgument).toEqual(appErrorMessage);
    });

    test("It should call logger.error with the app error", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const appError = new AppError("Name", "Message");

      handleError(appError);
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toStrictEqual(appError);
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

    test("It should call logger.error with a InternalError", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const error = new Error("Err message");
      const internalErrorStatusCode = new InternalError().statusCode;

      handleError(error);
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toBeInstanceOf(InternalError);
      expect(mockMetadataArgument?.cause).toEqual(error);
      expect((mockMetadataArgument as InternalError).statusCode).toEqual(
        internalErrorStatusCode
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

    test("It should call logger.error with a InternalError", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error");
      const { statusCode, name } = new InternalError();

      handleError("");
      const mockMetadataArgument = loggerErrorSpy?.mock?.calls?.[0]?.[1];

      expect(mockMetadataArgument).toBeInstanceOf(InternalError);
      expect(mockMetadataArgument?.name).toEqual(name);
      expect((mockMetadataArgument as AppError).statusCode).toEqual(statusCode);
    });
  });
});
