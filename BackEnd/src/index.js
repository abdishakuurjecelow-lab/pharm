import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./Routes/product.routes.js";
import authRoutes from "./Routes/auth.routes.js";
import { connectDB } from "./db.js";
import { findUploadFile, uploadDirs } from "./utils/uploadPaths.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendRoot = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(backendRoot, ".env") });

const app = express();

const allowedOrigins = (
  process.env.CORS_ORIGINS ||
  "https://al-ainpharma.com,http://al-ainpharma.com,http://localhost:5173,http://127.0.0.1:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

for (const uploadDir of uploadDirs) {
  app.use("/uploads", express.static(uploadDir));
  app.use("/api/uploads", express.static(uploadDir));
}

function sendUpload(req, res, next) {
  const filePath = findUploadFile(req.params.filename);
  if (!filePath) return next();
  return res.sendFile(filePath);
}

app.get("/uploads/:filename", sendUpload);
app.get("/api/uploads/:filename", sendUpload);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use((err, _req, res, _next) => {
  console.error(err.message || err);
  res.status(500).json({ message: err.message || "Server error" });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`API ready on http://localhost:${PORT}`));
});
