import {
  S3Client,
  ObjectCannedACL,
  CompleteMultipartUploadCommandOutput,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { Config } from "./Config";
import { IS3Service } from "../types/IS3Service";

export class S3Service implements IS3Service {
  s3Client: S3Client;
  constructor() {
    const { accessKeyId, secretAccessKey, region } = Config.s3Config;
    this.s3Client = new S3Client({
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
      region,
    });
  }
  async uploadFile(
    file: Express.Multer.File
  ): Promise<CompleteMultipartUploadCommandOutput> {
    const { bucket } = Config.s3Config;

    const uploadParams = {
      client: this.s3Client,
      params: {
        ACL: "public-read" as ObjectCannedACL,
        Bucket: bucket,
        Key: `uploads/${Date.now().toString()}-${file.originalname}`,
        Body: file.buffer,
      },
      tags: [],
      queueSize: 4,
      partSize: 1024 * 1024 * 5,
      leavePartsOnError: false,
    };

    const upload = new Upload(uploadParams);
    return upload.done();
  }
}
