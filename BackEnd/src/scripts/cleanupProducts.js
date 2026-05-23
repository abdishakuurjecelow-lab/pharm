import mongoose from "mongoose";
import "dotenv/config";
import Product from "../models/Product.js";

const HUMAN_CATEGORIES = [
  "Tab",
  "Cap",
  "Injection",
  "Syrup",
  "Shampoo",
  "Cream",
  "Infusion",
  "Disposal",
];

const VETERINARY_CATEGORIES = [
  "Tablet & Bollus",
  "Injection",
  "Oral Syrup",
];

function normalizeType(oldType = "", oldCategory = "", name = "") {
  const t = String(oldType).trim().toLowerCase();
  const c = String(oldCategory).trim().toLowerCase();
  const n = String(name).trim().toLowerCase();

  if (
    t === "human" ||
    ["tab", "cap", "capsule", "capsules", "syrup", "injection", "cream", "shampoo", "infusion", "disposal"].includes(c)
  ) {
    return "Human";
  }

  if (
    t === "veterinary" ||
    c === "tablet & bollus" ||
    c === "oral syrup"
  ) {
    return "Veterinary";
  }

  if (
    t === "agro & bio chemical" ||
    t === "agro" ||
    t === "bio chemical" ||
    t === "agro chemical" ||
    t === "agrochemical"
  ) {
    return "AGRO & Bio Chemical";
  }

  if (
    t === "veterinary & agro" ||
    t === "veterinary and agro"
  ) {
    // haddii category-gu veterinary u egyahay -> Veterinary
    if (
      c === "tablet & bollus" ||
      c === "oral syrup" ||
      c === "injection"
    ) {
      return "Veterinary";
    }

    // haddii category-gu madhan yahay ama agrochemical hore ahaa -> AGRO
    if (
      c === "" ||
      c === "vetinary & agrochemical" ||
      c === "veterinary & agrochemical" ||
      c === "agrochemical" ||
      c === "agro chemical"
    ) {
      return "AGRO & Bio Chemical";
    }

    // fallback
    return "AGRO & Bio Chemical";
  }

  if (
    c === "vetinary & agrochemical" ||
    c === "veterinary & agrochemical" ||
    c === "agrochemical" ||
    c === "agro chemical"
  ) {
    return "AGRO & Bio Chemical";
  }

  // fallback smart guess
  if (n.includes("bolus") || n.includes("veterinary") || n.includes("oral")) {
    return "Veterinary";
  }

  return "Human";
}

function normalizeCategory(type, oldCategory = "", name = "") {
  const c = String(oldCategory).trim().toLowerCase();
  const n = String(name).trim().toLowerCase();

  if (type === "AGRO & Bio Chemical") {
    return "";
  }

  if (type === "Human") {
    if (c === "tab" || c === "tablet" || c === "tablets") return "Tab";
    if (c === "cap" || c === "capsule" || c === "capsules") return "Cap";
    if (c === "injection" || c === "injectable") return "Injection";
    if (c === "syrup" || c === "syrub") return "Syrup";
    if (c === "shampoo") return "Shampoo";
    if (c === "cream") return "Cream";
    if (c === "infusion") return "Infusion";
    if (c === "disposal" || c === "disposable") return "Disposal";

    if (n.includes("infusion")) return "Infusion";
    if (n.includes("cream")) return "Cream";
    if (n.includes("shampoo")) return "Shampoo";
    if (n.includes("cap")) return "Cap";
    if (n.includes("syrup")) return "Syrup";
    if (n.includes("inject")) return "Injection";

    return "Tab";
  }

  if (type === "Veterinary") {
    if (
      c === "tablet & bollus" ||
      c === "tablet & bolus" ||
      c === "bollus" ||
      c === "bolus" ||
      c === "tablet" ||
      c === "tablets"
    ) {
      return "Tablet & Bollus";
    }

    if (c === "injection" || c === "injectable") {
      return "Injection";
    }

    if (
      c === "oral syrup" ||
      c === "oral syrub" ||
      c === "syrup" ||
      c === "syrub"
    ) {
      return "Oral Syrup";
    }

    if (n.includes("bolus") || n.includes("bollus") || n.includes("tablet")) {
      return "Tablet & Bollus";
    }

    if (n.includes("oral")) {
      return "Oral Syrup";
    }

    if (n.includes("inject")) {
      return "Injection";
    }

    return "Tablet & Bollus";
  }

  return "";
}

async function run() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI missing in .env");
    process.exit(1);
  }

  await mongoose.connect(uri, { dbName: "alain_pharma" });
  console.log("✅ MongoDB connected");

  const products = await Product.find();
  console.log(`📦 Found ${products.length} products`);

  let updatedCount = 0;

  for (const product of products) {
    const oldType = product.type || "";
    const oldCategory = product.category || "";
    const oldName = product.name || "";

    const newType = normalizeType(oldType, oldCategory, oldName);
    const newCategory = normalizeCategory(newType, oldCategory, oldName);

    const changed =
      product.type !== newType || (product.category || "") !== newCategory;

    if (changed) {
      product.type = newType;
      product.category = newCategory;
      await product.save();

      updatedCount++;
      console.log(
        `✅ Updated: ${product.name} | type: "${oldType}" -> "${newType}" | category: "${oldCategory}" -> "${newCategory}"`
      );
    }
  }

  console.log(`🎉 Cleanup finished. Updated ${updatedCount} product(s).`);
  await mongoose.disconnect();
  console.log("🔌 MongoDB disconnected");
}

run().catch(async (err) => {
  console.error("❌ Cleanup failed:", err);
  await mongoose.disconnect();
  process.exit(1);
});