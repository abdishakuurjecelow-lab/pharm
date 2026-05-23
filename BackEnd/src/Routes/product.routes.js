// import { Router } from "express";
// import { auth } from "../middlewares/auth.js";
// import upload from "../middlewares/upload.js";
// import {
//   listProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } from "../controllers/product.controller.js";

// const router = Router();

// // ✅ GET /api/products - list all products
// router.get("/", listProducts);

// // ✅ GET /api/products/:id - get one product
// router.get("/:id", getProductById);

// // ✅ POST /api/products - create new product (auth + upload)
// router.post("/", auth, upload.single("image"), createProduct);

// // ✅ PATCH /api/products/:id - update product (auth + upload)
// router.patch("/:id", auth, upload.single("image"), updateProduct);

// // ✅ DELETE /api/products/:id - delete product (auth)
// router.delete("/:id", auth, deleteProduct);

// export default router;


//-----------------------------------------


import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

// ✅ GET /api/products - list all products
router.get("/", listProducts);

// ✅ GET /api/products/:id - get one product
router.get("/:id", getProductById);

// ✅ POST /api/products - create new product (auth + upload)
router.post("/", auth, upload.single("image"), createProduct);

// ✅ PATCH /api/products/:id - update product (auth + upload)
router.patch("/:id", auth, upload.single("image"), updateProduct);
router.put("/:id", auth, upload.single("image"), updateProduct);

// ✅ DELETE /api/products/:id - delete product (auth)
router.delete("/:id", auth, deleteProduct);

export default router;
  
