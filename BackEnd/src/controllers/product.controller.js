// import Product from "../models/Product.js";
// import fs from "fs";
// import path from "path";

// const uploadPath = path.join(process.cwd(), "uploads");

// export async function listProducts(req, res) {
// try {
// const items = await Product.find().sort({ createdAt: -1 });
// res.json(items);
// } catch (err) {
// res.status(500).json({ message: "Server error" });
// }
// }

// export async function getProductById(req, res) {
// try {
// const product = await Product.findById(req.params.id);
// if (!product) return res.status(404).json({ message: "Product not found" });
// res.json(product);
// } catch {
// res.status(500).json({ message: "Server error" });
// }
// }

// export async function createProduct(req, res) {
// try {

// const { name, category, type } = req.body;

// const image = req.file ? req.file.filename : "";

// const product = await Product.create({
// name,
// category,
// type,
// image,
// });

// res.status(201).json(product);

// } catch {
// res.status(500).json({ message: "Server error" });
// }
// }

// export async function updateProduct(req, res) {

// try {

// const { id } = req.params;

// const { name, category, type } = req.body;

// const image = req.file ? req.file.filename : undefined;

// const product = await Product.findById(id);

// if (!product) return res.status(404).json({ message: "Product not found" });

// if (image && product.image) {

// const oldPath = path.join(uploadPath, product.image);

// if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);

// }

// if (typeof name === "string") product.name = name;
// if (typeof category === "string") product.category = category;
// if (typeof type === "string") product.type = type;
// if (image) product.image = image;

// await product.save();

// res.json(product);

// } catch (err) {
// res.status(500).json({ message: "Server error" });
// }
// }

// export async function deleteProduct(req, res) {

// try {

// const { id } = req.params;

// const product = await Product.findById(id);

// if (!product) return res.status(404).json({ message: "Product not found" });

// if (product.image) {

// const imgPath = path.join(uploadPath, product.image);

// if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);

// }

// await product.deleteOne();

// res.json({ message: "Deleted successfully" });

// } catch {

// res.status(500).json({ message: "Server error" });

// }

// }


//new--------------------

// import Product from "../models/Product.js";
// import fs from "fs";
// import path from "path";

// const uploadPath = path.join(process.cwd(), "uploads");

// const HUMAN_CATEGORIES = [
//   "Tab",
//   "Cap",
//   "Injection",
//   "Syrup",
//   "Shampoo",
//   "Cream",
//   "Infusion",
//   "Disposal",
// ];

// const VETERINARY_CATEGORIES = [
//   "Tablet & Bollus",
//   "Injection",
//   "Oral Syrup",
// ];

// const TYPES = ["Human", "Veterinary", "AGRO & Bio Chemical"];

// function normalizeCategory(type, category) {
//   if (type === "AGRO & Bio Chemical") return "";

//   if (type === "Human") {
//     return HUMAN_CATEGORIES.includes(category) ? category : "Tab";
//   }

//   if (type === "Veterinary") {
//     return VETERINARY_CATEGORIES.includes(category)
//       ? category
//       : "Tablet & Bollus";
//   }

//   return "";
// }

// export async function listProducts(req, res) {
//   try {
//     const items = await Product.find().sort({ createdAt: -1 });
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// }

// export async function getProductById(req, res) {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch {
//     res.status(500).json({ message: "Server error" });
//   }
// }

// export async function createProduct(req, res) {
//   try {
//     const { name, category = "", type = "Human" } = req.body;

//     if (!name?.trim()) {
//       return res.status(400).json({ message: "Product name is required" });
//     }

//     if (!TYPES.includes(type)) {
//       return res.status(400).json({ message: "Invalid product type" });
//     }

//     const image = req.file ? req.file.filename : "";
//     const safeCategory = normalizeCategory(type, category);

//     const product = await Product.create({
//       name: name.trim(),
//       category: safeCategory,
//       type,
//       image,
//     });

//     res.status(201).json(product);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// }

// export async function updateProduct(req, res) {
//   try {
//     const { id } = req.params;
//     const { name, category = "", type } = req.body;
//     const image = req.file ? req.file.filename : undefined;

//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     if (image && product.image) {
//       const oldPath = path.join(uploadPath, product.image);
//       if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
//     }

//     if (typeof name === "string" && name.trim()) {
//       product.name = name.trim();
//     }

//     if (typeof type === "string" && TYPES.includes(type)) {
//       product.type = type;
//       product.category = normalizeCategory(type, category);
//     } else if (typeof category === "string") {
//       product.category = normalizeCategory(product.type, category);
//     }

//     if (image) {
//       product.image = image;
//     }

//     await product.save();

//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// }

// export async function deleteProduct(req, res) {
//   try {
//     const { id } = req.params;

//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     if (product.image) {
//       const imgPath = path.join(uploadPath, product.image);
//       if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
//     }

//     await product.deleteOne();

//     res.json({ message: "Deleted successfully" });
//   } catch {
//     res.status(500).json({ message: "Server error" });
//   }
// }



import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

const uploadPath = path.join(process.cwd(), "uploads");

const HUMAN_CATEGORIES = [
  "Tablets",
  "Capsules",
  "Injections",
  "Drops",
  "Syrups",
  "Shampoo",
  "Creams",
  "Infusions",
  "Disposals",
];

const VETERINARY_CATEGORIES = [
  "Tablets & Bollus",
  "Injections",
  "Oral Syrups",
];

const TYPES = ["Human", "Veterinary", "AGRO Bio Chemical"];

function normalizeCategory(type, category) {
  if (type === "AGRO Bio Chemical") return "";

  if (type === "Human") {
    return HUMAN_CATEGORIES.includes(category) ? category : "Tablets";
  }

  if (type === "Veterinary") {
    return VETERINARY_CATEGORIES.includes(category)
      ? category
      : "Tablets & Bollus";
  }

  return "";
}

export async function listProducts(req, res) {
  try {
    const items = await Product.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
}

export async function createProduct(req, res) {
  try {
    const { name, category = "", type = "Human" } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ message: "Product name is required" });
    }

    if (!TYPES.includes(type)) {
      return res.status(400).json({ message: "Invalid product type" });
    }

    const image = req.file ? req.file.filename : "";
    const safeCategory = normalizeCategory(type, category);

    const product = await Product.create({
      name: name.trim(),
      category: safeCategory,
      type,
      image,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { name, category = "", type } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (image && product.image) {
      const oldPath = path.join(uploadPath, product.image);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    if (typeof name === "string" && name.trim()) {
      product.name = name.trim();
    }

    if (typeof type === "string" && TYPES.includes(type)) {
      product.type = type;
      product.category = normalizeCategory(type, category);
    } else if (typeof category === "string") {
      product.category = normalizeCategory(product.type, category);
    }

    if (image) {
      product.image = image;
    }

    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.image) {
      const imgPath = path.join(uploadPath, product.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await product.deleteOne();

    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
}