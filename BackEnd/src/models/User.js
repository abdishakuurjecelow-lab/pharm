// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name:  { type: String, required: true, trim: true },
//     email: { type: String, required: true, unique: true, lowercase: true },
//     password: { type: String, required: true, minlength: 6 },
//     role: { type: String, enum: ["admin","user"], default: "admin" }
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);


// //====================

// // import mongoose from "mongoose";

// // const userSchema = new mongoose.Schema(
// //   {
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true, select: false },
// //     role: { type: String, default: "admin" },
// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.model("User", userSchema);


// //------------------------------------------------------

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true, select: false },
//     role: { type: String, default: "admin" }, // user | admin
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);


//last--------------

// src/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    // ⚠️ select:false → lama keenayo ilaa aad si gaar ah u dalbato
    password: { type: String, required: true, select: false },
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
