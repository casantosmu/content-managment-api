import Ajv from "ajv";
import addFormats from "ajv-formats";

const createValidator = () =>
  addFormats(new Ajv({ allErrors: true }), [
    "date-time",
    "time",
    "date",
    "email",
    "hostname",
    "ipv4",
    "ipv6",
    "uri",
    "uri-reference",
    "uuid",
    "uri-template",
    "json-pointer",
    "relative-json-pointer",
    "regex",
  ]);

const validator = createValidator();

export default validator;
