import { type ErrorObject } from "ajv";
import { formatAjvErrors } from "../utils";

const emptyAjvError: ErrorObject = {
  message: "",
  keyword: "",
  instancePath: "",
  params: {},
  schemaPath: "",
};

describe("Given the formatAjvErrors function,", () => {
  describe("When it is invoked with an array of ErrorObjects", () => {
    test("It should correctly assign the message to the message property", () => {
      const ajvErrors = [{ ...emptyAjvError, message: "This is a test error" }];
      const expectedResult = [{ message: "This is a test error", name: "" }];

      const result = formatAjvErrors(ajvErrors);

      expect(result).toEqual(expectedResult);
    });

    test("It should correctly assign the keyword to the name property", () => {
      const ajvErrors = [{ ...emptyAjvError, keyword: "testKeyword" }];
      const expectedResult = [{ message: "", name: "testKeyword" }];

      const result = formatAjvErrors(ajvErrors);

      expect(result).toEqual(expectedResult);
    });

    test("It should correctly assign the instancePath to the target property", () => {
      const ajvErrors = [{ ...emptyAjvError, instancePath: "testPath" }];
      const expectedResult = [{ message: "", name: "", target: "testPath" }];

      const result = formatAjvErrors(ajvErrors);

      expect(result).toEqual(expectedResult);
    });

    test("It should not assign instancePath to the target property if it is not present", () => {
      const ajvErrors = [{ ...emptyAjvError }];
      const expectedResult = [{ message: "", name: "" }];

      const result = formatAjvErrors(ajvErrors);

      expect(result).toEqual(expectedResult);
    });
  });
});
