import { statusCodes } from "../../constants";
import AppError from "../AppError";
import { InternalError } from "../appErrors";

describe("Given a InternalError class", () => {
  describe("When instantiated", () => {
    test("Then it should be an instance of AppError", () => {
      const internalServerError = new InternalError();

      expect(internalServerError).toBeInstanceOf(AppError);
    });

    test("Then it should have a default status code of 500 (internal server error)", () => {
      const internalServerError = new InternalError();

      expect(internalServerError.statusCode).toEqual(
        statusCodes.internalServerError
      );
    });
  });

  describe("When instantiated with 'baseError' as the name", () => {
    test("The name property of the internalServerError instance should equal 'baseError'", () => {
      const errorName = "baseError";

      const internalServerError = new InternalError({
        name: errorName,
      });

      expect(internalServerError.name).toEqual(errorName);
    });
  });

  describe("When instantiated without providing the name", () => {
    test("The name property of the internalServerError instance should be 'internalError'", () => {
      const internalServerError = new InternalError();

      expect(internalServerError.name).toEqual("internalError");
    });
  });

  describe("When instantiated with a custom message", () => {
    test("The message property of the internalServerError instance should equal the custom message", () => {
      const customMessage = "A custom internal error has occurred";

      const internalServerError = new InternalError({
        message: customMessage,
      });

      expect(internalServerError.message).toEqual(customMessage);
    });
  });

  describe("When instantiated without providing the message", () => {
    test("The message property of the internalServerError instance should be 'An internal error has occurred'", () => {
      const internalServerError = new InternalError();

      expect(internalServerError.message).toEqual(
        "An internal error has occurred"
      );
    });
  });

  describe("When instantiated with errorOptions", () => {
    test("The errorOptions property of the internalServerError instance should equal the provided errorOptions", () => {
      const errorOptions = { cause: new Error() };

      const internalServerError = new InternalError({
        options: errorOptions,
      });

      expect(internalServerError.options).toEqual(errorOptions);
    });
  });
});
