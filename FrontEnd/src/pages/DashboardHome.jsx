// import { Link } from "react-router-dom";

// /* Icons (same style as layout) */
// const I = {
//   products: "M4 7l8-4 8 4-8 4-8-4zm0 4l8 4 8-4M4 7v10l8 4 8-4V7",
//   add: "M12 5v14m7-7H5",
//   logout: "M15 17l5-5-5-5M20 12H9m4 7v1a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h5a2 2 0 012 2v1",
// };
// const Path = ({ d, className = "w-6 h-6" }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none">
//     <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// export default function DashboardHome() {
//   return (
//     <section className="animate-[slideIn_.35s_ease]">
//       {/* Hero */}
//       <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
//         <div className="relative px-6 py-10 sm:px-10 sm:py-12">
//           <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />
//           <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
//             Welcome to <span className="bg-[linear-gradient(90deg,#f97316,#16a34a,#06b6d4)] bg-clip-text text-transparent">Admin</span>
//           </h1>
//           <p className="mt-2 max-w-2xl text-slate-600">
//             Manage Your Products , Add New Product , Make Your Update & Delete and Logout Account Anytime.
//           </p>
//         </div>

//         {/* Quick boxes */}
//         <div className="grid gap-4 border-t border-slate-100 bg-slate-50/60 px-6 py-6 sm:grid-cols-3 sm:px-8">
//           <Card
//             to="/dashboard/products"
//             title="Products"
//             subtitle="View Products"
//             ring="ring-sky-200"
//             bg="from-sky-500 to-indigo-500"
//             icon={<Path d={I.products} className="w-6 h-6" />}
//           />
//           <Card
//             to="/dashboard/add-product"
//             title="Add Product"
//             subtitle="Add New Product"
//             ring="ring-emerald-200"
//             bg="from-emerald-500 to-teal-600"
//             icon={<Path d={I.add} className="w-6 h-6" />}
//           />
//           <Card
//             to="/login"
//             title="Logout"
//             subtitle="Logout Dashboard"
//             ring="ring-rose-200"
//             bg="from-rose-500 to-orange-500"
//             icon={<Path d={I.logout} className="w-6 h-6" />}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Card({ to, title, subtitle, icon, ring, bg }) {
//   return (
//     <Link
//       to={to}
//       className={`group relative rounded-2xl border border-slate-200 bg-white p-5 shadow transition-all hover:-translate-y-0.5 hover:shadow-lg`}
//     >
//       <div className={`mb-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${bg} p-3 text-white shadow ring-1 ${ring}`}>
//         {icon}
//       </div>
//       <p className="text-lg font-semibold text-slate-900">{title}</p>
//       <p className="text-sm text-slate-600">{subtitle}</p>
//       <span className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-teal-400/20 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />
//     </Link>
//   );
// }


//+++++++++++++++++++++++++++++++++++


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import api from "../api/client";
// import toast from "react-hot-toast";

// export default function DashboardHome() {
//   const [stats, setStats] = useState({
//     totalProducts: 0,
//     totalCategories: 0,
//   });

//   const [recent, setRecent] = useState([]);

//   useEffect(() => {
//     const loadStats = async () => {
//       try {
//         const { data } = await api.get("/products");

//         const categories = new Set(
//           data.map((p) => p.category)
//         );

//         setStats({
//           totalProducts: data.length,
//           totalCategories: categories.size,
//         });

//         // Sort newest first
//         const sorted = [...data].reverse();
//         setRecent(sorted.slice(0, 5));

//       } catch (err) {
//         toast.error("Failed to load dashboard stats");
//       }
//     };

//     loadStats();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-3xl font-black mb-8">
//         Dashboard Overview
//       </h1>

//       {/* STAT CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

//         {/* PRODUCTS */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-2xl shadow-xl p-6"
//         >
//           <h2 className="text-sm uppercase tracking-wide">
//             Total Products
//           </h2>

//           <p className="text-4xl font-black mt-2">
//             <CountUp end={stats.totalProducts} duration={1.5} />
//           </p>
//         </motion.div>

//         {/* CATEGORIES */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl p-6"
//         >
//           <h2 className="text-sm uppercase tracking-wide">
//             Categories
//           </h2>

//           <p className="text-4xl font-black mt-2">
//             <CountUp end={stats.totalCategories} duration={1.5} />
//           </p>
//         </motion.div>
//       </div>

//       {/* RECENT PRODUCTS TABLE */}
//       <div className="bg-white rounded-2xl shadow-xl p-6 dark:text-slate-900">
//         <h2 className="text-xl font-bold mb-4">
//           Recently Added Products
//         </h2>

//         {recent.length === 0 ? (
//           <p className="text-slate-500">
//             No recent products.
//           </p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="border-b text-slate-600 text-sm">
//                   <th className="py-3">Image</th>
//                   <th>Name</th>
//                   <th>Category</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {recent.map((p) => (
//                   <tr
//                     key={p._id}
//                     className="border-b hover:bg-slate-50 transition"
//                   >
//                     <td className="py-3">
//                       <img
//                         src={`${import.meta.env.VITE_API_URL || "https://al-ainpharma.com"}/uploads/${p.image}`}
//                         className="w-14 h-14 rounded-lg object-cover"
//                         alt={p.name}
//                         onError={(e) =>
//                           (e.currentTarget.src = "/placeholder.png")
//                         }
//                       />
//                     </td>
//                     <td className="font-semibold">{p.name}</td>
//                     <td className="text-slate-600">
//                       {p.category}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


//new---------------------

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulating an API call for products
//     setTimeout(() => {
//       setProducts([]); // No products initially, replace with actual API call
//       setLoading(false);
//     }, 1500);
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-6">
//       {/* Dashboard Overview Section */}
//       <section className="mx-auto max-w-7xl">
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Dashboard Overview</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Total Products Card */}
//           <motion.div
//             className="bg-gradient-to-r from-green-400 to-green-600 text-white p-8 rounded-lg shadow-lg text-center"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-xl font-semibold">Total Products</h3>
//             <p className="text-4xl font-bold">42</p>
//           </motion.div>

//           {/* Categories Card */}
//           <motion.div
//             className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-8 rounded-lg shadow-lg text-center"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-xl font-semibold">Categories</h3>
//             <p className="text-4xl font-bold">8</p>
//           </motion.div>

//           {/* Recently Added Products Card */}
//           <motion.div
//             className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-xl font-semibold">Recently Added</h3>
//             <p className="text-4xl font-bold">Tumcido</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Recently Added Products (Optional) */}
//       <section className="py-12 px-6 md:px-16 bg-white mt-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold text-gray-800 text-center"
//         >
//           Recently Added Products
//         </motion.h2>
        
//         {products.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="mt-8 text-center text-gray-500"
//           >
//             <p>No products available.</p>
//           </motion.div>
//         ) : (
//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {products.map((product, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <img src={product.image} alt={product.name} className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" />
//                 <h4 className="text-lg font-semibold">{product.name}</h4>
//                 <p className="text-gray-500 text-sm">{product.category}</p>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Dashboard;

//New---------------------------------


// import React, { useState, useEffect, useMemo } from "react";
// import { motion } from "framer-motion";
// import { Package, Layers3, ShieldCheck } from "lucide-react";
// import api from "../api/client";

// export default function DashboardHome() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const { data } = await api.get("/products");
//         setProducts(data || []);
//       } catch {
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, []);

//   const totalProducts = products.length;

//   const totalCategories = useMemo(() => {
//     const unique = new Set(
//       products.map((p) => p.category).filter(Boolean)
//     );
//     return unique.size;
//   }, [products]);

//   const totalTypes = useMemo(() => {
//     const unique = new Set(
//       products.map((p) => p.type).filter(Boolean)
//     );
//     return unique.size;
//   }, [products]);

//   const cards = [
//     {
//       title: "Total Products",
//       value: totalProducts,
//       note: "All products in your inventory",
//       icon: <Package size={22} />,
//       style:
//         "from-emerald-500 via-green-500 to-teal-500",
//     },
//     {
//       title: "Categories",
//       value: totalCategories,
//       note: "Organized product categories",
//       icon: <Layers3 size={22} />,
//       style:
//         "from-violet-500 via-purple-500 to-fuchsia-500",
//     },
//     {
//       title: "Product Types",
//       value: totalTypes,
//       note: "Human, Veterinary, AGRO & Bio Chemical",
//       icon: <ShieldCheck size={22} />,
//       style:
//         "from-sky-500 via-cyan-500 to-blue-500",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <div className="mx-auto max-w-7xl">
//         {/* Top Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           className="mb-8"
//         >
//           <p className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
//             Admin Dashboard
//           </p>

//           <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
//             Dashboard Overview
//           </h1>

//           <p className="mt-3 max-w-2xl text-slate-500 text-sm md:text-base leading-7">
//             Monitor your products, categories, and inventory structure from one clean dashboard.
//           </p>
//         </motion.div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {cards.map((card, i) => (
//             <motion.div
//               key={card.title}
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45, delay: i * 0.08 }}
//               className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
//             >
//               <div
//                 className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${card.style}`}
//               />

//               <div className="p-6 md:p-7">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <p className="text-sm font-semibold text-slate-500">
//                       {card.title}
//                     </p>
//                     <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
//                       {loading ? "..." : card.value}
//                     </h2>
//                   </div>

//                   <div
//                     className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r text-white shadow-sm ${card.style}`}
//                   >
//                     {card.icon}
//                   </div>
//                 </div>

//                 <p className="mt-5 text-sm leading-6 text-slate-500">
//                   {card.note}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Info Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45, delay: 0.2 }}
//           className="mt-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
//         >
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h3 className="text-2xl font-black text-slate-900">
//                 Inventory Summary
//               </h3>
//               <p className="mt-2 text-slate-500 leading-7 max-w-2xl">
//                 This dashboard gives you a quick overview of your current stock structure. Use the Products page to edit, remove, or review all listed items.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4 md:min-w-[280px]">
//               <div className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
//                   Human
//                 </p>
//                 <p className="mt-2 text-2xl font-black text-slate-900">
//                   {loading
//                     ? "..."
//                     : products.filter((p) => p.type === "Human").length}
//                 </p>
//               </div>

//               <div className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
//                   Veterinary
//                 </p>
//                 <p className="mt-2 text-2xl font-black text-slate-900">
//                   {loading
//                     ? "..."
//                     : products.filter((p) => p.type === "Veterinary").length}
//                 </p>
//               </div>

//               <div className="col-span-2 rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
//                   AGRO & Bio Chemical
//                 </p>
//                 <p className="mt-2 text-2xl font-black text-slate-900">
//                   {loading
//                     ? "..."
//                     : products.filter((p) => p.type === "AGRO & Bio Chemical").length}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Package, Layers3, ShieldCheck } from "lucide-react";
import api from "../api/client";

export default function DashboardHome() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data || []);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const totalProducts = products.length;

  const totalCategories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category).filter(Boolean));
    return unique.size;
  }, [products]);

  const totalTypes = useMemo(() => {
    const unique = new Set(products.map((p) => p.type).filter(Boolean));
    return unique.size;
  }, [products]);

  const cards = [
    {
      title: "Total Products",
      value: totalProducts,
      note: "All products in your inventory",
      icon: <Package size={22} />,
      style: "from-emerald-500 via-green-500 to-teal-500",
    },
    {
      title: "Categories",
      value: totalCategories,
      note: "Organized product categories",
      icon: <Layers3 size={22} />,
      style: "from-violet-500 via-purple-500 to-fuchsia-500",
    },
    {
      title: "Product Types",
      value: totalTypes,
      note: "Human, Veterinary, AGRO Bio Chemical",
      icon: <ShieldCheck size={22} />,
      style: "from-sky-500 via-cyan-500 to-blue-500",
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <p className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
            Admin Dashboard
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            Dashboard Overview
          </h1>

          <p className="mt-3 max-w-2xl text-slate-500 text-sm md:text-base leading-7">
            Monitor your products, categories, and inventory structure from one clean dashboard.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${card.style}`}
              />

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {card.title}
                    </p>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                      {loading ? "..." : card.value}
                    </h2>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r text-white shadow-sm ${card.style}`}
                  >
                    {card.icon}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  {card.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Section - Improved only */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
        >
          <div className="grid grid-cols-1 gap-8 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Left text */}
            <div className="relative">
              <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-emerald-100/40 blur-3xl" />

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="relative"
              >
                <p className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  Inventory Report
                </p>

                <h3 className="mt-5 text-2xl md:text-4xl font-black tracking-tight text-slate-900">
                  Inventory Summary
                </h3>

                <p className="mt-4 max-w-2xl text-slate-500 leading-8 text-base md:text-medium">
                  This dashboard gives you a quick overview of your current stock structure.
                  Use the Products page to edit, remove, or review all listed items.
                </p>
              </motion.div>
            </div>

            {/* Right stat boxes */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 p-5 text-center shadow-sm"
              >
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                  Human
                </p>
                <p className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                  {loading
                    ? "..."
                    : products.filter((p) => p.type === "Human").length}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-50 p-5 text-center shadow-sm"
              >
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
                  Veterinary
                </p>
                <p className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                  {loading
                    ? "..."
                    : products.filter((p) => p.type === "Veterinary").length}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="col-span-2 rounded-[28px] border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-fuchsia-50 p-5 text-center shadow-sm"
              >
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-violet-600">
                  AGRO Bio Chemical
                </p>
                <p className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                  {loading
                    ? "..."
                    : products.filter((p) => p.type === "AGRO Bio Chemical").length}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
