import { Router } from "express";
import { showForm } from "./controller/upload.controller";
import multer from "multer";
import { FileUploadController } from "./controller/fileUpload.controller";
import { S3Service } from "../config/S3Service";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });
const s3Service = new S3Service();
const fileUploadController = new FileUploadController(s3Service);

router.get("/", showForm);
router.post(
  "/api/upload",
  upload.single("file"),
  fileUploadController.uploadFile.bind(fileUploadController)
);

export default router;
