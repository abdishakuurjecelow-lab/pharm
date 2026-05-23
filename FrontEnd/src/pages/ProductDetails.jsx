// //New----------------------------------


// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import api from "../api/client";
// import { motion } from "framer-motion";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api
//       .get(`/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch(() => setProduct(null))
//       .finally(() => setLoading(false));
//   }, [id]);

//   const imageSrc = product?.image
//     ? `${API}/uploads/${product.image}`
//     : "/placeholder.png";

//   if (loading) {
//     return (
//       <div className="grid min-h-screen place-items-center bg-gray-50 text-slate-500">
//         Loading product...
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="grid min-h-screen place-items-center bg-gray-50 px-4">
//         <div className="rounded-3xl bg-white p-10 shadow-sm border border-gray-100 text-center max-w-lg">
//           <h2 className="text-2xl font-bold text-slate-900">Product not found</h2>
//           <p className="mt-3 text-slate-600">
//             The product you are looking for is not available right now.
//           </p>
//           <Link
//             to="/products"
//             className="mt-6 inline-flex rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition"
//           >
//             Back to Products
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-14 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <Link
//             to="/products"
//             className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition"
//           >
//             ← Back to Products
//           </Link>
//         </div>

//         <div className="grid items-center gap-10 lg:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.45 }}
//             className="overflow-hidden rounded-[28px] bg-white shadow-xl border border-gray-100"
//           >
//             <img
//               src={imageSrc}
//               alt={product.name}
//               className="h-[320px] sm:h-[460px] w-full object-cover"
//               onError={(e) => {
//                 e.currentTarget.src = "/placeholder.png";
//               }}
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.45 }}
//             className="space-y-6"
//           >
//             <div className="flex flex-wrap items-center gap-3">
//               <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
//                 {product.type}
//               </span>
//               <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
//                 {product.category}
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
//               {product.name}
//             </h1>

//             <p className="text-lg text-slate-600 leading-8">
//               This product is part of our trusted pharmaceutical range. AL-Ain
//               Pharmaceutical Company is committed to supplying quality products
//               with dependable service and professional support.
//             </p>

//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
//                 <p className="text-sm text-slate-500">Product Type</p>
//                 <h3 className="mt-2 text-lg font-bold text-slate-900">{product.type}</h3>
//               </div>

//               <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
//                 <p className="text-sm text-slate-500">Category</p>
//                 <h3 className="mt-2 text-lg font-bold text-slate-900">{product.category}</h3>
//               </div>
//             </div>

//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
//               >
//                 Contact For Details
//               </Link>

//               <a
//                 href="https://wa.me/252615896669"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-gray-50"
//               >
//                 WhatsApp Us
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

//new------------------------------------------


// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import api from "../api/client";
// import { motion } from "framer-motion";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api
//       .get(`/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch(() => setProduct(null))
//       .finally(() => setLoading(false));
//   }, [id]);

//   const imageSrc = product?.image
//     ? `${API}/uploads/${product.image}`
//     : "/placeholder.png";

//   if (loading) {
//     return (
//       <div className="grid min-h-screen place-items-center bg-gray-50 text-slate-500">
//         Loading product...
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="grid min-h-screen place-items-center bg-gray-50 px-4">
//         <div className="rounded-3xl bg-white p-10 shadow-sm border border-gray-100 text-center max-w-lg">
//           <h2 className="text-2xl font-bold text-slate-900">
//             Product not found
//           </h2>
//           <p className="mt-3 text-slate-600">
//             The product you are looking for is not available right now.
//           </p>
//           <Link
//             to="/products"
//             className="mt-6 inline-flex rounded-2xl bg-green-400 px-6 py-3 font-semibold text-white hover:bg-green-500 transition"
//           >
//             Back to Products
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-14 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <Link
//             to="/products"
//             className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition"
//           >
//             ← Back to Products
//           </Link>
//         </div>

//         <div className="grid items-center gap-10 lg:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.45 }}
//             className="overflow-hidden rounded-[28px] bg-white shadow-xl border border-gray-100"
//           >
//             <img
//               src={imageSrc}
//               alt={product.name}
//               className="h-[320px] sm:h-[460px] w-full object-cover"
//               onError={(e) => {
//                 e.currentTarget.src = "/placeholder.png";
//               }}
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.45 }}
//             className="space-y-6"
//           >
//             <div className="flex flex-wrap items-center gap-3">
//               <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
//                 {product.type}
//               </span>
//               <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
//                 {product.category}
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
//               {product.name}
//             </h1>

//             <p className="text-lg text-slate-600 leading-8">
//               This product is part of our trusted pharmaceutical range. AL-Ain
//               Pharmaceutical Company is committed to supplying quality products
//               with dependable service and professional support.
//             </p>

//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
//                 <p className="text-sm text-slate-500">Product Type</p>
//                 <h3 className="mt-2 text-lg font-bold text-slate-900">
//                   {product.type}
//                 </h3>
//               </div>

//               <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
//                 <p className="text-sm text-slate-500">Category</p>
//                 <h3 className="mt-2 text-lg font-bold text-slate-900">
//                   {product.category}
//                 </h3>
//               </div>
//             </div>

//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center rounded-2xl bg-green-400 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
//               >
//                 Contact For Details
//               </Link>

//               <a
//                 href="https://wa.me/252615896669"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-gray-50"
//               >
//                 WhatsApp Us
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api, { API_URL } from "../api/client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const API = API_URL;
const WHATSAPP_NUMBER = "252615896669";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  const imageSrc = product?.image
    ? `${API}/uploads/${product.image}`
    : "/placeholder.png";

  const whatsappText = product
    ? `Hello, I want to order this product:

Product Name: ${product.name}
Type: ${product.type}
Category: ${product.category || "No category"}

Company: AL-Ain Pharmaceutical`
    : "";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappText
  )}`;

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center bg-gray-50 text-slate-500">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="grid min-h-screen place-items-center bg-gray-50 px-4">
        <div className="rounded-3xl bg-white p-10 shadow-sm border border-gray-100 text-center max-w-lg">
          <h2 className="text-2xl font-bold text-slate-900">
            Product not found
          </h2>
          <p className="mt-3 text-slate-600">
            The product you are looking for is not available right now.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-2xl bg-green-400 px-6 py-3 font-semibold text-white hover:bg-green-500 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition"
          >
            ← Back to Products
          </Link>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-[28px] bg-white shadow-xl border border-gray-100"
          >
            <img
              src={imageSrc}
              alt={product.name}
              className="h-[320px] sm:h-[460px] w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.png";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {product.type}
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {product.category || "No category"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-lg text-slate-600 leading-8">
              This product is part of our trusted range. AL-Ain Pharmaceutical
              Company is committed to supplying quality products with dependable
              service and professional support.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-slate-500">Product Type</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {product.type}
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-slate-500">Category</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {product.category || "No category"}
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-400 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
              >
                <FaWhatsapp size={18} />
                Order on WhatsApp
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
