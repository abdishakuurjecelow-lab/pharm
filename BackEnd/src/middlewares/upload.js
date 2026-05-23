// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const uploadDir = path.join(__dirname, "..", "..", "uploads");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadDir),
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname).toLowerCase();
//     const base = path.basename(file.originalname, ext).replace(/\s+/g, "-");
//     cb(null, `${base}-${Date.now()}${ext}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (/^image\/(png|jpe?g|webp|gif)$/.test(file.mimetype)) cb(null, true);
//   else cb(new Error("Only image files are allowed"));
// };

// export const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });


//+++++++++++++++++++++++++++++++++++++++++++++++


// import multer from "multer";
// import path from "path";
// import fs from "fs";

// function ensureDir(dir) {
//   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
// }

// export function uploadFeature() {
//   const dir = path.join(process.cwd(), "public", "uploads", "feature");
//   ensureDir(dir);

//   const storage = multer.diskStorage({
//     destination: (_req, _file, cb) => cb(null, dir),
//     filename: (_req, file, cb) => {
//       const ext = path.extname(file.originalname);
//       const name = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
//       cb(null, name);
//     },
//   });

//   const fileFilter = (_req, file, cb) => {
//     if (/^image\//.test(file.mimetype)) cb(null, true);
//     else cb(new Error("Only images are allowed"), false);
//   };

//   return multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
// }


//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// // src/middlewares/upload.js
// import multer from "multer";
// import path from "path";
// import fs from "fs";

// function ensureDir(dir) {
//   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
// }

// export function uploadFeature() {
//   const dir = path.join(process.cwd(), "public", "uploads", "feature");
//   ensureDir(dir);

//   const storage = multer.diskStorage({
//     destination: (_req, _file, cb) => cb(null, dir),
//     filename: (_req, file, cb) => {
//       const ext = path.extname(file.originalname);
//       const name = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
//       cb(null, name);
//     },
//   });

//   const fileFilter = (_req, file, cb) => {
//     if (/^image\//.test(file.mimetype)) cb(null, true);
//     else cb(new Error("Only images are allowed"), false);
//   };

//   return multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
// }


//----------------------------------

// src/middlewares/upload.js
import multer from "multer";
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, "uploads"),
  filename: (_, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_")),
});

const fileFilter = (_, file, cb) => {
  if (file.mimetype.startsWith("image/")) return cb(null, true);
  cb(new Error("Only images are allowed"));
};

export default multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
