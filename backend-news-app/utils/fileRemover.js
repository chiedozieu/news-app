import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Replicating __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fileRemover = (filename) => {
  const filePath = path.join(__dirname, "../uploads", filename);

  fs.unlink(filePath, function (err) {
    if (err && err.code === "ENOENT") {
      // File doesn't exist
      console.log(`File ${filename} doesn't exist, won't remove it.`);
    } else if (err) {
      // Some other error
      console.log(`Error occurred while removing file ${filename}: ${err}`);
    } else {
      console.log(`File ${filename} removed`);
    }
  });
};
