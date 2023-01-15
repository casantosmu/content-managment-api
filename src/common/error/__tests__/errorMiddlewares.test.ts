import { type Request, type Response } from "express";
import statusCodes from "../../constants/statusCodes";
import CustomError from "../CustomError";
import { generalErrorMiddleware } from "../errorMiddlewares";
import handleError from "../handleError";

jest.mock("../handleError");

const req: Partial<Request> = {};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next = jest.fn();

describe("Given a generalError middleware", () => {
  describe("When its called with an Error", () => {
    test("Then it should call handle Error with the error", () => {
      const error = new Error();

      generalErrorMiddleware(error, req as Request, res as Response, next);

      expect(handleError).toHaveBeenCalledWith(error);
    });

    test("Then it should call status method from response with internalServerError", () => {
      const error = new Error();
      const expectedStatusCode = statusCodes.internalServerError;

      generalErrorMiddleware(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method from response with 'General error'", () => {
      const error = new Error();
      const expectedJson = { error: "General error" };

      generalErrorMiddleware(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedJson);
    });
  });

  describe("When its called with an Custom Error with status code forbidden", () => {
    test("Then it should call status method from res with forbidden status code", () => {
      const forbiddenStatusCode = statusCodes.forbidden;
      const error = new CustomError("", "", forbiddenStatusCode);

      generalErrorMiddleware(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(forbiddenStatusCode);
    });
  });

  test("Then it should call json method from res with 'Not allowed' as error message", () => {
    const errorMessage = "Not allowed";
    const error = new CustomError("", errorMessage, 403);
    const expectedJson = { error: errorMessage };

    generalErrorMiddleware(error, req as Request, res as Response, next);

    expect(res.json).toHaveBeenCalledWith(expectedJson);
  });
});