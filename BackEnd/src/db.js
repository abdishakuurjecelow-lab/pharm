import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/alain_pharma";
const dbName = process.env.MONGO_DB_NAME || "alain_pharma";

export async function connectDB() {
  try {
    await mongoose.connect(uri, { dbName });
    console.log(`MongoDB connected: ${dbName}`);
  } catch (err) {
    console.error("MongoDB error:", err.message);
    process.exit(1);
  }
}
