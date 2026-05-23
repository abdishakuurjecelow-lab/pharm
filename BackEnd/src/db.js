import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/alain_pharma";
  const dbName = process.env.MONGO_DB_NAME || "alain_pharma";

  try {
    await mongoose.connect(uri, { dbName });
    console.log(`MongoDB connected: ${dbName}`);
  } catch (err) {
    console.error("MongoDB error:", err.message);
    process.exit(1);
  }
}
