import { Maybe } from "../types";
import { IEnv } from "./env.interface";
import dotenv from "dotenv";

interface EnvVars {
  [key: string]: Maybe<string>;
}

export class Env implements IEnv {
  constructor(private envVars: EnvVars = process.env) {
    this.loadDotEnv();
  }

  private getEnv(key: string): Maybe<string> {
    return this.envVars[key];
  }

  getOrThrow(key: string): string {
    const value = this.getEnv(key);
    if (!value) {
      throw new Error(`Environment variable not found`);
    }
    return value;
  }

  private loadDotEnv(): void {
    dotenv.config();
  }
}

export default new Env();
