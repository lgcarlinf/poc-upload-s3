import envService from "../service/env";

export class Config {
  static get port() {
    return envService.getOrThrow("PORT") || 3000;
  }

  static get s3Config() {
    return {
      accessKeyId: envService.getOrThrow("AWS_ACCESS_KEY_ID"),
      secretAccessKey: envService.getOrThrow("AWS_SECRET_ACCESS_KEY"),
      region: envService.getOrThrow("S3_REGION"),
      bucket: envService.getOrThrow("S3_BUCKET"),
    };
  }
}
