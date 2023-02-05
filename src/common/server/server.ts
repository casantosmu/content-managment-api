import { type Server } from "http";
import app from "./app";
import { type AddressInfo } from "net";
import { config } from "../config";
import logger from "../logger";
import { InternalError } from "../error";

let connection: Server;

export const startServer = async () =>
  new Promise((resolve, reject) => {
    connection = app.listen(config.port, () => {
      const address = connection.address() as AddressInfo;
      logger.info(`Server is listening to PORT ${address.port}`);
      resolve(address);
    });

    connection.once("error", (error) => {
      const startServerError = new InternalError({
        name: "startServerError",
        options: { cause: error },
      });
      reject(startServerError);
    });
  });

export const stopServer = async () =>
  new Promise<void>((resolve) => {
    if (connection !== undefined) {
      connection.close(() => {
        resolve();
      });
    }
  });
