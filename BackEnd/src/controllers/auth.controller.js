// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const sign = (uid, role) =>
//   jwt.sign({ uid, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

// export async function signup(req, res, next) {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password)
//       return res.status(400).json({ message: "All fields required" });

//     const exists = await User.findOne({ email });
//     if (exists) return res.status(409).json({ message: "Email already used" });

//     const hash = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hash, role: "admin" });
//     res.status(201).json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (e) { next(e); }
// }

// export async function login(req, res, next) {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });
//     const ok = await bcrypt.compare(password, user.password);
//     if (!ok) return res.status(401).json({ message: "Invalid credentials" });

//     res.json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (e) { next(e); }
// }

// export async function me(req, res) {
//   res.json({ user: req.user });
// }


//================================

// // src/controllers/auth.controller.js
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const sign = (uid, role) =>
//   jwt.sign({ uid, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

// export async function signup(req, res, next) {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password)
//       return res.status(400).json({ message: "All fields required" });

//     const exists = await User.findOne({ email });
//     if (exists) return res.status(409).json({ message: "Email already used" });

//     const hash = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hash, role: "admin" });

//     res.status(201).json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (e) {
//     next(e);
//   }
// }

// export async function login(req, res, next) {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const ok = await bcrypt.compare(password, user.password);
//     if (!ok) return res.status(401).json({ message: "Invalid credentials" });

//     res.json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (e) {
//     next(e);
//   }
// }

// // ✅ Tani waa export-ka kaa maqan
// export async function me(req, res) {
//   // req.user waxa uu ka yimaadaa middleware-ka auth
//   res.json({ user: req.user });
// }


//Lastttttttttttttttttttttttttttttt


// // src/controllers/auth.controller.js
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const sign = (uid, role) =>
//   jwt.sign({ uid, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

// export async function signup(req, res, next) {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password)
//       return res.status(400).json({ message: "All fields required" });

//     const exists = await User.findOne({ email });
//     if (exists) return res.status(409).json({ message: "Email already used" });

//     const hash = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hash, role: "admin" });

//     return res.status(201).json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (e) { next(e); }
// }

// export async function login(req, res, next) {
//   try {
//     const { email, password } = req.body;

//     // ⚠️ SOO XULO PASSWORD-KA
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const ok = await bcrypt.compare(password, user.password);
//     if (!ok) return res.status(401).json({ message: "Invalid credentials" });

//     return res.json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (e) { next(e); }
// }

// export async function me(req, res) {
//   return res.json({ user: req.user });
// }


//-------------------------------

// src/controllers/auth.controller.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const sign = (uid, role) =>
  jwt.sign({ uid, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

export async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "Email already used" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, role: "admin" });
    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token: sign(user._id, user.role),
    });
  } catch (e) {
    next(e);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token: sign(user._id, user.role),
    });
  } catch (e) {
    next(e);
  }
}

export async function me(req, res) {
  res.json({ user: req.user });
}
