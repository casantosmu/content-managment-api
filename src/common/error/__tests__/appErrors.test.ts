import { statusCodes } from "../../constants";
import AppError from "../AppError";
import { BadRequestError, InternalError, NotFoundError } from "../appErrors";

describe("Given a InternalError class", () => {
  describe("When instantiated", () => {
    test("Then it should be an instance of AppError", () => {
      const internalError = new InternalError();

      expect(internalError).toBeInstanceOf(AppError);
    });

    test("Then it should have a default status code of 500 (internal error)", () => {
      const internalError = new InternalError();

      expect(internalError.statusCode).toEqual(statusCodes.internalError);
    });
  });

  describe("When instantiated with 'baseError' as the name", () => {
    test("The name property of the internalError instance should equal 'baseError'", () => {
      const errorName = "baseError";

      const internalError = new InternalError({ name: errorName });

      expect(internalError.name).toEqual(errorName);
    });
  });

  describe("When instantiated without providing the name", () => {
    test("The name property of the internalError instance should be 'internalError'", () => {
      const internalError = new InternalError();

      expect(internalError.name).toEqual("internalError");
    });
  });

  describe("When instantiated with a custom message", () => {
    test("The message property of the internalError instance should equal the custom message", () => {
      const customMessage = "A custom internal error has occurred";

      const internalError = new InternalError({ message: customMessage });

      expect(internalError.message).toEqual(customMessage);
    });
  });

  describe("When instantiated without providing the message", () => {
    test("The message property of the internalError instance should be 'An internal error has occurred'", () => {
      const internalError = new InternalError();

      expect(internalError.message).toEqual("An internal error has occurred");
    });
  });

  describe("When instantiated with options", () => {
    test("The options property of the internalError instance should equal the provided options", () => {
      const options = { cause: new Error() };

      const internalError = new InternalError({ options });

      expect(internalError.options).toEqual(options);
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

describe("Given a BadRequestError class", () => {
  describe("When instantiated", () => {
    test("Then it should be an instance of AppError", () => {
      const badRequestError = new BadRequestError();

      expect(badRequestError).toBeInstanceOf(AppError);
    });

    test("Then it should have a default status code of 400 (bad request)", () => {
      const badRequestError = new BadRequestError();

      expect(badRequestError.statusCode).toEqual(statusCodes.badRequest);
    });
  });

  describe("When instantiated with 'invalidRequest' as the name", () => {
    test("The name property of the badRequestError instance should equal 'invalidRequest'", () => {
      const errorName = "invalidRequest";

      const badRequestError = new BadRequestError({ name: errorName });

      expect(badRequestError.name).toEqual(errorName);
    });
  });

  describe("When instantiated without providing the name", () => {
    test("The name property of the badRequestError instance should be 'badRequestError'", () => {
      const badRequestError = new BadRequestError();

      expect(badRequestError.name).toEqual("badRequestError");
    });
  });

  describe("When instantiated with a custom message", () => {
    test("The message property of the badRequestError instance should equal the custom message", () => {
      const customMessage = "A custom bad request error has occurred";

      const badRequestError = new BadRequestError({ message: customMessage });

      expect(badRequestError.message).toEqual(customMessage);
    });
  });

  describe("When instantiated without providing the message", () => {
    test("The message property of the badRequestError instance should be 'Bad request'", () => {
      const badRequestError = new BadRequestError();

      expect(badRequestError.message).toEqual("Bad request");
    });
  });

  describe("When instantiated with options", () => {
    test("The options property of the badRequestError instance should equal the provided options", () => {
      const options = { cause: new Error() };

      const badRequestError = new BadRequestError({ options });

      expect(badRequestError.options).toEqual(options);
    });
  });
});
