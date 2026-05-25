import mongoose from "mongoose";
import User from "./models/User.js";

const ALLOWED_ADMIN_EMAIL = "alainpharma@gmail.com";

async function keepOnlyAllowedAdmin() {
  await User.deleteMany({ email: { $ne: ALLOWED_ADMIN_EMAIL } });
  await User.updateOne(
    { email: ALLOWED_ADMIN_EMAIL },
    {
      $set: {
        name: "alainpharma",
        email: ALLOWED_ADMIN_EMAIL,
        role: "admin",
      },
    }
  );
}

export async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/alain_pharma";
  const dbName = process.env.MONGO_DB_NAME || "alain_pharma";

  try {
    await mongoose.connect(uri, { dbName });
    await keepOnlyAllowedAdmin();
    console.log(`MongoDB connected: ${dbName}`);
  } catch (err) {
    console.error("MongoDB error:", err.message);
    process.exit(1);
  }
}
