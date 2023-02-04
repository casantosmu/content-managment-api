import { isEmpty } from "../objectUtils";

describe("Given isEmpty function", () => {
  describe("When called with an empty object", () => {
    test("Then it should return true", () => {
      const object = {};
      const result = isEmpty(object);

      expect(result).toBe(true);
    });
  });

  describe("When called with an object with properties", () => {
    test("Then it should return false", () => {
      const object = { a: 1 };
      const result = isEmpty(object);
      expect(result).toBe(false);
    });
  });
});
