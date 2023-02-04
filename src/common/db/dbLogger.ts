import pgMonitor from "pg-monitor";
import { type IInitOptions } from "pg-promise";
import logger, { type LogLevels } from "../logger";

const attachDbLogger = (initOptions: IInitOptions) => {
  pgMonitor.attach(initOptions);
  pgMonitor.setLog((_, info) => {
    const { colorText, event, text, time, ...restInfo } = info;
    const eventUpperCase = event.toUpperCase();

    const logMessage = `DATABASE ${eventUpperCase}: ${text}`;
    const logLevel: LogLevels = eventUpperCase === "ERROR" ? "error" : "info";

    logger[logLevel](logMessage, restInfo);
    info.display = false;
  });
};

export default attachDbLogger;
