export const isEmpty = (object: Record<string, unknown>) =>
  Object.getPrototypeOf(object) === Object.prototype &&
  Object.getOwnPropertyNames(object).length === 0 &&
  Object.getOwnPropertySymbols(object).length === 0;
