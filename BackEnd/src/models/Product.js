// // src/models/product.model.js
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: { type: String, default: "Tab" },
//     price: { type: Number, default: 0 },
//     discount: { type: Number, default: 0 },
//     image: { type: String, default: "" },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Product", productSchema);


//--------------------------------------------------------

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: { type: String, default: "Tab" },
//     image: { type: String, default: "" },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Product", productSchema);



// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
// {
// name: { type: String, required: true },

// category: { type: String, default: "Tab" },

// type: {
// type: String,
// enum: ["Human", "Veterinary"],
// default: "Human",
// },

// image: { type: String, default: "" },
// },
// { timestamps: true }
// );

// export default mongoose.model("Product", productSchema);


//new----------------

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    category: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      enum: ["Human", "Veterinary", "AGRO Bio Chemical"],
      default: "Human",
    },

    image: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);