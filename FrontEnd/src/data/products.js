// src/data/products.js
export const PRODUCTS = [
  // ---- Tablets / Tabs ----
  {
    id: "amoxicillin-tabs",
    name: "Amoxicillin (Tabs)",
    category: "Tabs",
    image: "/prod/amox.jpg",
    short: "Broad‑spectrum antibiotic for livestock.",
    strengths: ["250mg", "500mg", "1g"],
    tags: ["antibiotic", "vet", "oral"],
  },
  {
    id: "albendazole-tabs",
    name: "Albendazole (Tabs)",
    category: "Tabs",
    image: "/prod/albendazole.jpg",
    short: "Anthelmintic tablets for internal parasites.",
    strengths: ["200mg", "400mg"],
    tags: ["dewormer", "oral"],
  },

  // ---- Capsules / Cap ----
  {
    id: "doxy-cap",
    name: "Doxycycline (Cap)",
    category: "Cap",
    image: "/prod/doxy.jpg",
    short: "Tetracycline class antibiotic capsule.",
    strengths: ["100mg"],
    tags: ["antibiotic", "oral"],
  },

  // ---- Injection ----
  {
    id: "ivermectin-inj",
    name: "Ivermectin (Injection)",
    category: "Injection",
    image: "/prod/ivermectin.jpg",
    short: "Parasiticide for cattle, sheep & goats.",
    strengths: ["1%"],
    tags: ["parasite", "injectable"],
  },

  // ---- Drops ----
  {
    id: "gentamicin-drops",
    name: "Gentamicin (Drops)",
    category: "Drop",
    image: "/prod/eyedrops.jpg",
    short: "Ophthalmic drops for eye infections.",
    strengths: ["0.3%"],
    tags: ["ophthalmic", "topical"],
  },

  // ---- Syrup ----
  {
    id: "multivit-syrup",
    name: "Multi‑Vitamin Syrup",
    category: "Syrub",
    image: "/prod/syrup.jpg",
    short: "Palatable multi‑vitamin support.",
    strengths: ["100mL", "200mL"],
    tags: ["supplement", "oral"],
  },

  // ---- Scalp Vein Set ----
  {
    id: "scalp-vein-sets",
    name: "Scalp Vein Set",
    category: "Scalp vein set",
    image: "/prod/scalp.jpg",
    short: "Flexible winged infusion set.",
    strengths: ["21G", "23G", "25G"],
    tags: ["device", "infusion"],
  },

  // ---- Butterfly ----
  {
    id: "butterfly-needle",
    name: "Butterfly Needle",
    category: "Butterfly",
    image: "/prod/butterfly.jpg",
    short: "Winged butterfly needle for venipuncture.",
    strengths: ["21G", "23G", "25G"],
    tags: ["device", "needle"],
  },

  // ---- Cream ----
  {
    id: "gentamicin-cream",
    name: "Gentamicin Cream",
    category: "Cream",
    image: "/prod/cream.jpg",
    short: "Topical antibacterial cream.",
    strengths: ["15g", "30g"],
    tags: ["topical"],
  },

  // ---- Shampoo ----
  {
    id: "med-shampoo",
    name: "Medicated Shampoo",
    category: "Shampoo",
    image: "/prod/shampoo.jpg",
    short: "Anti‑parasitic & soothing care.",
    strengths: ["250mL", "500mL"],
    tags: ["care", "topical"],
  },

  // ---- Soap ----
  {
    id: "med-soap",
    name: "Medicated Soap",
    category: "Soap",
    image: "/prod/soap.jpg",
    short: "Hygienic cleansing bar.",
    strengths: ["75g", "100g"],
    tags: ["hygiene", "topical"],
  },
];
