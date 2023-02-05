import { type Request, type Response } from "express";
import { InternalError, NotFoundError } from "../appErrors";
import {
  generalErrorMiddleware,
  notFoundMiddleware,
} from "../errorMiddlewares";
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

    test("Then it should call status method from response with InternalError status code", () => {
      const error = new Error();
      const expectedStatusCode = new InternalError().statusCode;

      generalErrorMiddleware(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method from response with InternalError name and message", () => {
      const error = new Error();
      const { name, message } = new InternalError();
      const expectedJson = {
        error: {
          name,
          message,
        },
      };

      generalErrorMiddleware(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedJson);
    });
  });

  describe("When its called with a NotFoundError", () => {
    test("Then it should call status method from res with NotFound status code", () => {
      const notFoundError = new NotFoundError();

      generalErrorMiddleware(
        notFoundError,
        req as Request,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(notFoundError.statusCode);
    });
  });

  test("Then it should call json method from res with NotFound error message and name", () => {
    const notFoundError = new NotFoundError();
    const expectedJson = {
      error: {
        name: notFoundError.name,
        message: notFoundError.message,
      },
    };

    generalErrorMiddleware(
      notFoundError,
      req as Request,
      res as Response,
      next
    );

    expect(res.json).toHaveBeenCalledWith(expectedJson);
  });
});

describe("Given a notFound middleware", () => {
  describe("When its called with request and response", () => {
    test("Then it should call method send from response with NotFoundError status code", () => {
      const expectedStatusCode = new NotFoundError().statusCode;

      notFoundMiddleware(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call method json from response with an error property with NotFoundError name and message", () => {
      const { name, message } = new NotFoundError();
      const expectedJson = {
        error: {
          name,
          message,
        },
      };

      notFoundMiddleware(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedJson);
    });
  });
});
