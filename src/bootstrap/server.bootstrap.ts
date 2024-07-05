import http from "http";
import app from "../app";
import { IBootstrap } from "./bootstrap.interface";
import { Config } from "../config/Config";

const PORT = Config.port || 3000;

export default class ServerBootstrap implements IBootstrap {
  static initialize() {
    throw new Error("Method not implemented.");
  }
  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(app);

      server
        .listen(PORT)
        .on("listening", () => {
          resolve(true);
          console.log(`Server is running on port ${PORT}`);
        })
        .on("error", reject);
    });
  }
}
