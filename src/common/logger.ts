import pino from "pino";
import pinoHttp from "pino-http";
import { config } from "./config";

export type LogLevels = "debug" | "info" | "warn" | "error" | "fatal";

const pinoLogger = pino({
  level: config.isTest ? "silent" : config.logLevel,
  messageKey: "message",
  errorKey: "error",
  formatters: {
    level(_label, number) {
      return { level: number };
    },
  },
});

export const loggerHttp = () =>
  pinoHttp({
    logger: pinoLogger,
  });

const logger =
  (level: LogLevels) =>
  (message: string, metadata?: Record<string, unknown> | Error) => {
    pinoLogger[level](metadata, message);
  };

export default {
  debug: logger("debug"),
  error: logger("error"),
  info: logger("info"),
  warning: logger("warn"),
  fatal: logger("fatal"),
};
