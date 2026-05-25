// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const sign = (uid, role) =>
//   jwt.sign(
//     { uid, role },
//     process.env.JWT_SECRET || "alain-pharma-local-secret",
//     { expiresIn: "7d" }
//   );

// export async function signup(req, res, next) {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const exists = await User.findOne({ email });
//     if (exists) return res.status(409).json({ message: "Email already used" });

//     const hash = await bcrypt.hash(password, 10);
//     const user = await User.create({
//       name,
//       email: email.toLowerCase(),
//       password: hash,
//       role: "admin",
//     });

//     res.status(201).json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// export async function login(req, res, next) {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password required" });
//     }

//     const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const ok = await bcrypt.compare(password, user.password);
//     if (!ok) return res.status(401).json({ message: "Invalid credentials" });

//     res.json({
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//       token: sign(user._id, user.role),
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// export async function me(req, res) {
//   res.json({ user: req.user });
// }




//__________________________________


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const ADMIN_EMAIL = "alainpharma@gmail.com";

const sign = (uid, role) =>
  jwt.sign(
    { uid, role },
    process.env.JWT_SECRET || "alain-pharma-local-secret",
    { expiresIn: "7d" }
  );

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    // REQUIRED FIELDS
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    // ONLY ONE ADMIN EMAIL ALLOWED
    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      return res.status(401).json({
        message: "Unauthorized admin email",
      });
    }

    // FIND USER
    const user = await User.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // CHECK PASSWORD
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // SUCCESS LOGIN
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

      token: sign(user._id, user.role),
    });
  } catch (error) {
    next(error);
  }
}

export async function me(req, res) {
  res.json({ user: req.user });
}
