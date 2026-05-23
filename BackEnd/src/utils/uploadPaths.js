import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const backendRoot = path.resolve(__dirname, "../..");
export const projectRoot = path.resolve(backendRoot, "..");
export const primaryUploadDir = path.join(backendRoot, "uploads");
const cwd = process.cwd();

export const uploadDirs = [
  primaryUploadDir,
  path.join(cwd, "uploads"),
  path.join(cwd, "BackEnd", "uploads"),
  path.join(projectRoot, "uploads"),
  path.join(backendRoot, "public", "uploads"),
  path.join(projectRoot, "public", "uploads"),
  path.join(cwd, "public", "uploads"),
  path.join(projectRoot, "FrontEnd", "public", "uploads"),
].filter((dir, index, dirs) => dirs.indexOf(dir) === index);

const recursiveSearchRoots = [
  backendRoot,
  projectRoot,
  cwd,
].filter((dir, index, dirs) => dirs.indexOf(dir) === index);

export function ensureUploadDir() {
  if (!fs.existsSync(primaryUploadDir)) {
    fs.mkdirSync(primaryUploadDir, { recursive: true });
  }
}

function findFileRecursive(dir, safeName, depth = 0) {
  if (depth > 4 || !fs.existsSync(dir)) return null;

  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return null;
  }

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isFile() && entry.name === safeName) return entryPath;

    if (
      entry.isDirectory() &&
      !["node_modules", ".git", "dist"].includes(entry.name)
    ) {
      const found = findFileRecursive(entryPath, safeName, depth + 1);
      if (found) return found;
    }
  }

  return null;
}

export function findUploadFile(filename = "") {
  const safeName = path.basename(filename);

  for (const dir of uploadDirs) {
    const filePath = path.join(dir, safeName);
    if (fs.existsSync(filePath)) return filePath;
  }

  for (const root of recursiveSearchRoots) {
    const found = findFileRecursive(root, safeName);
    if (found) return found;
  }

  return null;
}

export function uploadUrl(filename = "") {
  const safeName = path.basename(filename);
  return safeName ? `/api/uploads/${encodeURIComponent(safeName)}` : "";
}

export function debugUploadSearch(filename = "") {
  const safeName = path.basename(filename);
  const foundPath = findUploadFile(safeName);

  return {
    filename: safeName,
    found: Boolean(foundPath),
    foundPath,
    directPaths: uploadDirs.map((dir) => path.join(dir, safeName)),
    searchedDirs: uploadDirs,
    recursiveSearchRoots,
  };
}
