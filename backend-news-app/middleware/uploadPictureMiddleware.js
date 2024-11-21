import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Replicating __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); // Resolving uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Setting filename with timestamp
  },
});

const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1, // 1 MB limit
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".webp") {
      return cb(new Error("File type is not supported")); // Restricting file types
    }
    cb(null, true);
  },
});

export { uploadPicture };
