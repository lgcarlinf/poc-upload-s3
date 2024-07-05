import express, { Application } from "express";
import router from "./upload/upload.route.ts";
import cors from "cors";

class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.mountRoutes();
    this.cors();
  }

  mountRoutes(): void {
    this.expressApp.use("/", router);
  }

  cors(): void {
    this.expressApp.use(cors());
  }
}

export default new App().expressApp;
