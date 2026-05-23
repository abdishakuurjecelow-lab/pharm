// // src/index.js
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";

// import connectDB from "./lib/db.js";
// import authRoutes from "./routes/auth.routes.js";          // /api/auth/...
// import productRoutes from "./routes/v1/product.routes.js";  // /api/products/...

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ CORS — ku dar labada host ee Vite isticmaalo
// const ALLOWED = ["http://localhost:5173", "http://127.0.0.1:5173"];
// app.use(
//   cors({
//     origin: (origin, cb) => cb(null, !origin || ALLOWED.includes(origin)),
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );
// // ✅ ka jawaab preflight
// app.options("*", cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

// // static uploads (haddii sawirro isticmaasho)
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// // routes
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);


// // health check (ikhtiyaari)
// app.get("/api/health", (req, res) => res.json({ ok: true }));


// connectDB().then(() => {
//   app.listen(PORT, () =>
//     console.log(`API running at http://localhost:${PORT}`)
//   );
// });


//Lasttttttttttttttttttttttttttttttttt

// // src/index.js
// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import path from "path";
// import { fileURLToPath } from "url";

// import { connectDB } from "./db.js";
// import authRoutes from "./Routes/v1/auth.routes.js";
// const app = express();

// // utils for static path on ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

// // static uploads
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// // routes
// app.use("/api/auth", authRoutes);


// app.get("/health", (_req, res) => res.json({ ok: true }));

// app.use((err, _req, res, _next) => {
//   console.error(err);
//   res.status(500).json({ message: err.message || "Server error" });
// });

// const PORT = process.env.PORT || 5000;

// // DB marka ay ku xirmaan kaddib bilow server-ka
// connectDB().then(() => {
//   app.listen(PORT, () =>
//     console.log(`🚀 API ready on http://localhost:${PORT}`)
//   );
// });


//-----------------------------------------

// // src/index.js
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import path from "path";
// import { fileURLToPath } from "url";
// import "dotenv/config";
// import productRoutes from "./routes/product.routes.js";
// import { connectDB } from "./db.js";
// import authRoutes from "./routes/auth.routes.js"; // ← sax path-kan

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

// // optional: uploads
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// // ✅ halkan waa muhiim
// app.use("/api/auth", authRoutes);
// // src/index.js
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);


// // test route
// app.get("/health", (req, res) => res.json({ ok: true }));

// const PORT = process.env.PORT || 5000;
// connectDB().then(() => {
//   app.listen(PORT, () => console.log(`✅ API ready on http://localhost:${PORT}`));
// });



//new------------------------

import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config";

import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./db.js";

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

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`✅ API ready on http://localhost:${PORT}`));
});
