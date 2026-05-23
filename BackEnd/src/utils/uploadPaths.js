import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const backendRoot = path.resolve(__dirname, "../..");
export const projectRoot = path.resolve(backendRoot, "..");
export const primaryUploadDir = path.join(backendRoot, "uploads");

export const uploadDirs = [
  primaryUploadDir,
  path.join(projectRoot, "uploads"),
  path.join(backendRoot, "public", "uploads"),
  path.join(projectRoot, "public", "uploads"),
  path.join(projectRoot, "FrontEnd", "public", "uploads"),
].filter((dir, index, dirs) => dirs.indexOf(dir) === index);

export function ensureUploadDir() {
  if (!fs.existsSync(primaryUploadDir)) {
    fs.mkdirSync(primaryUploadDir, { recursive: true });
  }
}

export function findUploadFile(filename = "") {
  const safeName = path.basename(filename);

  for (const dir of uploadDirs) {
    const filePath = path.join(dir, safeName);
    if (fs.existsSync(filePath)) return filePath;
  }

  return null;
}
