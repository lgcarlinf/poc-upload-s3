import { IS3Service } from "../../types/IS3Service";
import { Request, Response } from "express";

export class FileUploadController {
  constructor(public s3Service: IS3Service) {
    this.s3Service = s3Service;
  }

  async uploadFile(req: Request, res: Response) {
    try {
      if (!req.file) {
        res.status(400).send("No file uploaded.");
        return;
      }

      const data = await this.s3Service.uploadFile(req.file);
      res.status(200).json({
        message: "Success",
        data,
      });
    } catch (error: any) {
      console.log("Error uploading file:", error);
      res.status(500).json({
        message: "An error occurred.",
        error: error.message,
      });
    }
  }
}
