// import mongoose from "mongoose";

// export default async function connectDB() {
//   const uri = process.env.MONGO_URI;
//   if (!uri) throw new Error("MONGO_URI missing in .env");
//   mongoose.set("strictQuery", true);
//   await mongoose.connect(uri);
//   console.log("✅ MongoDB connected");
// }


//LAsttttttttttttttttttttttt

// src/db.js
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("❌ Missing MONGO_URI in .env");
  process.exit(1);
}

export async function connectDB() {
  try {
    await mongoose.connect(uri, { dbName: "alain_pharma" });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  }
}
