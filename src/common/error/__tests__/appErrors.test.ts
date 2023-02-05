import { statusCodes } from "../../constants";
import AppError from "../AppError";
import { InternalError, NotFoundError } from "../appErrors";

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

      const internalServerError = new InternalError({ name: errorName });

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

      const internalServerError = new InternalError({ message: customMessage });

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

  describe("When instantiated with options", () => {
    test("The options property of the internalServerError instance should equal the provided options", () => {
      const options = { cause: new Error() };

      const internalServerError = new InternalError({ options });

      expect(internalServerError.options).toEqual(options);
    });
  });
});

describe("Given a NotFoundError class", () => {
  describe("When instantiated", () => {
    test("Then it should be an instance of AppError", () => {
      const notFoundError = new NotFoundError();

      expect(notFoundError).toBeInstanceOf(AppError);
    });

    test("Then it should have a default status code of 404 (not found)", () => {
      const notFoundError = new NotFoundError();

      expect(notFoundError.statusCode).toEqual(statusCodes.notFound);
    });
  });

  describe("When instantiated with 'resourceMissing' as the name", () => {
    test("The name property of the notFoundError instance should equal 'resourceMissing'", () => {
      const errorName = "resourceMissing";

      const notFoundError = new NotFoundError({ name: errorName });

      expect(notFoundError.name).toEqual(errorName);
    });
  });

  describe("When instantiated without providing the name", () => {
    test("The name property of the notFoundError instance should be 'notFoundError'", () => {
      const notFoundError = new NotFoundError();

      expect(notFoundError.name).toEqual("notFoundError");
    });
  });

  describe("When instantiated with a custom message", () => {
    test("The message property of the notFoundError instance should equal the custom message", () => {
      const customMessage = "A custom not found error has occurred";

      const notFoundError = new NotFoundError({ message: customMessage });

      expect(notFoundError.message).toEqual(customMessage);
    });
  });

  describe("When instantiated without providing the message", () => {
    test("The message property of the notFoundError instance should be 'Resource not found'", () => {
      const notFoundError = new NotFoundError();

      expect(notFoundError.message).toEqual("Resource not found");
    });
  });

  describe("When instantiated with options", () => {
    test("The options property of the notFoundError instance should equal the provided options", () => {
      const options = { cause: new Error() };

      const notFoundError = new NotFoundError({ options });

      expect(notFoundError.options).toEqual(options);
    });
  });
});
