import { statusCodes } from "../../constants";
import CustomError from "../CustomError";

describe("Given a CustomError class,", () => {
  describe("When it is instantiated with a name,", () => {
    test("It should correctly assign it to the name property.", () => {
      const name = "TestError";

      const result = new CustomError(name, "");

      expect(result.name).toEqual(name);
    });
  });

  describe("When it is instantiated with a message,", () => {
    test("It should correctly assign it to the message property.", () => {
      const message = "This is a test error";

      const result = new CustomError("", message);

      expect(result.message).toEqual(message);
    });
  });

  describe("When it is instantiated with a status code,", () => {
    test("it should correctly assign it to the statusCode property.", () => {
      const statusCode = 404;

      const result = new CustomError("", "", statusCode);

      expect(result.statusCode).toEqual(statusCode);
    });
  });

  describe("When it is instantiated without a status code,", () => {
    test("It should assign internalServerError to the statusCode property.", () => {
      const defaultStatusCode = statusCodes.internalServerError;

      const result = new CustomError("", "");

      expect(result.statusCode).toEqual(defaultStatusCode);
    });
  });

  describe("When it is instantiated with a cause error,", () => {
    test("It should assign the error to the cause property.", () => {
      const causeError = new Error("Cause error");

      const result = new CustomError("", "", 404, { cause: causeError });

      expect(result.cause).toEqual(causeError);
    });
  });

  describe("When it is instantiated,", () => {
    test("It should return an instance of Error.", () => {
      const result = new CustomError("", "", 404);

      expect(result).toBeInstanceOf(Error);
    });
  });
});
