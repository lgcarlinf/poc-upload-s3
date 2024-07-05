import { CompleteMultipartUploadCommandOutput } from "@aws-sdk/client-s3";

export interface IS3Service {
  uploadFile(
    file: Express.Multer.File
  ): Promise<CompleteMultipartUploadCommandOutput>;
}
