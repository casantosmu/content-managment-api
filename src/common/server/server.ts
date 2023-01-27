import { type Express } from "express";
import { type AddressInfo } from "net";
import { type Server } from "http";
import { config } from "../config";
import logger from "../logger";

let connection: Server;

export const startServer = async (app: Express) =>
  new Promise((resolve, reject) => {
    connection = app.listen(config.port, () => {
      const address = connection.address() as AddressInfo;
      logger.info(`Server is listening to PORT ${address.port}`);
      resolve(address);
    });

    connection.once("error", (error) => {
      reject(error);
    });
  });

export const stopWebServer = async () =>
  new Promise<void>((resolve) => {
    if (connection !== undefined) {
      connection.close(() => {
        resolve();
      });
    }
  });
