// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { useSearchParams } from "react-router-dom";
// import api from "../api/client";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// const imgUrl = (p) =>
//   !p ? "/placeholder.png" : `${API}/uploads/${p}`;

// export default function ProductsPage() {

//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [cat, setCat] = useState("All");
//   const [q, setQ] = useState("");

//   const [searchParams, setSearchParams] = useSearchParams();

//   const type = searchParams.get("type");

//   useEffect(() => {

//     api.get("/products")
//       .then((r) => setItems(r.data || []))
//       .catch(() => setItems([]))
//       .finally(() => setLoading(false));

//   }, []);

//   const categories = useMemo(() => {

//     const uniq = Array.from(
//       new Set(items.map((p) => p.category).filter(Boolean))
//     );

//     return ["All", ...uniq];

//   }, [items]);

//   const filtered = useMemo(() => {

//     let list = items;

//     if (type) {
//       list = list.filter((p) => p.type === type);
//     }

//     if (cat !== "All") {
//       list = list.filter((p) => p.category === cat);
//     }

//     if (q) {
//       list = list.filter((p) =>
//         p.name.toLowerCase().includes(q.toLowerCase())
//       );
//     }

//     return list;

//   }, [items, cat, q, type]);

//   return (
//     <div className="min-h-screen">

//       <div className="pt-10 text-center">

//         <motion.h1
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-3xl font-extrabold"
//         >
//           {type ? `${type} Medicines` : "All Products"}
//         </motion.h1>

//       </div>

//       <div className="max-w-7xl mx-auto p-6">

//         {/* SEARCH */}
//         <input
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//           placeholder="Search by name..."
//           className="border rounded-xl px-4 py-2 w-72 mb-6"
//         />

//         {/* CATEGORY */}
//         <select
//           value={cat}
//           onChange={(e) => setCat(e.target.value)}
//           className="border rounded-xl px-3 py-2 mb-8 ml-4"
//         >
//           {categories.map((c) => (
//             <option key={c}>{c}</option>
//           ))}
//         </select>

//         {/* PRODUCTS */}
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//             {filtered.map((p) => (
//               <div
//                 key={p._id}
//                 className="bg-white rounded-2xl shadow hover:shadow-lg transition"
//               >
//                 <img
//                   src={imgUrl(p.image)}
//                   alt={p.name}
//                   className="w-full h-40 object-cover rounded-t-2xl"
//                 />

//                 <div className="p-4">

//                   <p className="text-sm text-gray-500">
//                     {p.category}
//                   </p>

//                   <h3 className="font-semibold">
//                     {p.name}
//                   </h3>

//                 </div>

//               </div>
//             ))}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



//New-------------------------------

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useSearchParams } from "react-router-dom";
// import api from "../api/client";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// const imgUrl = (p) => (!p ? "/placeholder.png" : `${API}/uploads/${p}`);

// export default function ProductsPage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();

//   const typeParam = searchParams.get("type") || "All";
//   const catParam = searchParams.get("cat") || "All";
//   const qParam = searchParams.get("q") || "";

//   const [cat, setCat] = useState(catParam);
//   const [q, setQ] = useState(qParam);

//   useEffect(() => {
//     setCat(catParam);
//   }, [catParam]);

//   useEffect(() => {
//     setQ(qParam);
//   }, [qParam]);

//   useEffect(() => {
//     api
//       .get("/products")
//       .then((r) => setItems(r.data || []))
//       .catch(() => setItems([]))
//       .finally(() => setLoading(false));
//   }, []);

//   const categories = useMemo(() => {
//     const base = items;

//     const byType =
//       typeParam === "All"
//         ? base
//         : base.filter((p) => p.type === typeParam);

//     const uniq = Array.from(new Set(byType.map((p) => p.category).filter(Boolean)));
//     return ["All", ...uniq];
//   }, [items, typeParam]);

//   const filtered = useMemo(() => {
//     let list = [...items];

//     if (typeParam !== "All") {
//       list = list.filter((p) => p.type === typeParam);
//     }

//     if (cat !== "All") {
//       list = list.filter((p) => p.category === cat);
//     }

//     if (q.trim()) {
//       const search = q.toLowerCase();
//       list = list.filter(
//         (p) =>
//           p.name?.toLowerCase().includes(search) ||
//           p.category?.toLowerCase().includes(search) ||
//           p.type?.toLowerCase().includes(search)
//       );
//     }

//     return list;
//   }, [items, cat, q, typeParam]);

//   const updateParams = (next = {}) => {
//     const params = new URLSearchParams(searchParams);

//     Object.entries(next).forEach(([key, value]) => {
//       if (!value || value === "All") {
//         params.delete(key);
//       } else {
//         params.set(key, value);
//       }
//     });

//     setSearchParams(params);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-10 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ y: -18, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-3xl sm:text-4xl font-extrabold text-slate-900"
//           >
//             {typeParam !== "All" ? `${typeParam} Products` : "All Products"}
//           </motion.h1>

//           <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
//             Discover trusted pharmaceutical products from AL-Ain Pharmaceutical Company.
//           </p>
//         </div>

//         {/* FILTERS */}
//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8">
//           <div className="grid md:grid-cols-3 gap-4">
//             <input
//               value={q}
//               onChange={(e) => {
//                 setQ(e.target.value);
//                 updateParams({ q: e.target.value });
//               }}
//               placeholder="Search by name, category, or type..."
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
//             />

//             <select
//               value={typeParam}
//               onChange={(e) => updateParams({ type: e.target.value, cat: "All" })}
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
//             >
//               <option value="All">All Types</option>
//               <option value="Human">Human</option>
//               <option value="Veterinary">Veterinary</option>
//             </select>

//             <select
//               value={cat}
//               onChange={(e) => {
//                 setCat(e.target.value);
//                 updateParams({ cat: e.target.value });
//               }}
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
//             >
//               {categories.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* CATEGORY CHIPS */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           {categories.map((c) => (
//             <button
//               key={c}
//               onClick={() => {
//                 setCat(c);
//                 updateParams({ cat: c });
//               }}
//               className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
//                 cat === c
//                   ? "bg-green-500 text-white shadow"
//                   : "bg-white border border-gray-200 text-slate-700 hover:bg-green-50"
//               }`}
//             >
//               {c}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCTS */}
//         {loading ? (
//           <div className="text-center py-20 text-slate-500">Loading products...</div>
//         ) : filtered.length === 0 ? (
//           <div className="rounded-3xl bg-white border border-dashed border-gray-300 p-16 text-center text-slate-500">
//             No products found.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filtered.map((p, i) => (
//               <motion.div
//                 key={p._id}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.35, delay: i * 0.03 }}
//               >
//                 <Link
//                   to={`/product/${p._id}`}
//                   className="block bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition"
//                 >
//                   <img
//                     src={imgUrl(p.image)}
//                     alt={p.name}
//                     className="w-full h-52 object-cover"
//                     onError={(e) => {
//                       e.currentTarget.src = "/placeholder.png";
//                     }}
//                   />

//                   <div className="p-5">
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
//                         {p.type}
//                       </span>
//                       <span className="text-xs text-slate-500">{p.category}</span>
//                     </div>

//                     <h3 className="font-bold text-slate-900 text-lg line-clamp-2">
//                       {p.name}
//                     </h3>

//                     <p className="mt-3 text-sm font-medium text-green-600">
//                       View details →
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


//new-------------------

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useSearchParams } from "react-router-dom";
// import api from "../api/client";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// const imgUrl = (p) => (!p ? "/placeholder.png" : `${API}/uploads/${p}`);

// export default function ProductsPage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();

//   const typeParam = searchParams.get("type") || "All";
//   const catParam = searchParams.get("cat") || "All";
//   const qParam = searchParams.get("q") || "";

//   const [cat, setCat] = useState(catParam);
//   const [q, setQ] = useState(qParam);

//   useEffect(() => {
//     setCat(catParam);
//   }, [catParam]);

//   useEffect(() => {
//     setQ(qParam);
//   }, [qParam]);

//   useEffect(() => {
//     api
//       .get("/products")
//       .then((r) => setItems(r.data || []))
//       .catch(() => setItems([]))
//       .finally(() => setLoading(false));
//   }, []);

//   const categories = useMemo(() => {
//     const base = items;

//     const byType =
//       typeParam === "All"
//         ? base
//         : base.filter(
//             (p) => p.type?.toLowerCase() === typeParam.toLowerCase()
//           );

//     const uniq = Array.from(
//       new Set(byType.map((p) => p.category).filter(Boolean))
//     );

//     return ["All", ...uniq];
//   }, [items, typeParam]);

//   const filtered = useMemo(() => {
//     let list = [...items];

//     if (typeParam !== "All") {
//       list = list.filter(
//         (p) => p.type?.toLowerCase() === typeParam.toLowerCase()
//       );
//     }

//     if (cat !== "All") {
//       list = list.filter((p) => p.category === cat);
//     }

//     if (q.trim()) {
//       const search = q.toLowerCase();
//       list = list.filter(
//         (p) =>
//           p.name?.toLowerCase().includes(search) ||
//           p.category?.toLowerCase().includes(search) ||
//           p.type?.toLowerCase().includes(search)
//       );
//     }

//     return list;
//   }, [items, cat, q, typeParam]);

//   const updateParams = (next = {}) => {
//     const params = new URLSearchParams(searchParams);

//     Object.entries(next).forEach(([key, value]) => {
//       if (!value || value === "All") {
//         params.delete(key);
//       } else {
//         params.set(key, value);
//       }
//     });

//     setSearchParams(params);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-10 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ y: -18, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-3xl sm:text-4xl font-extrabold text-slate-900"
//           >
//             {typeParam !== "All" ? `${typeParam} Products` : "All Products"}
//           </motion.h1>

//           <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
//             Discover trusted pharmaceutical products from AL-Ain Pharmaceutical Company.
//           </p>
//         </div>

//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8">
//           <div className="grid md:grid-cols-3 gap-4">
//             <input
//               value={q}
//               onChange={(e) => {
//                 setQ(e.target.value);
//                 updateParams({ q: e.target.value });
//               }}
//               placeholder="Search by name, category, or type..."
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
//             />

//             <select
//               value={typeParam}
//               onChange={(e) => updateParams({ type: e.target.value, cat: "All" })}
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
//             >
//               <option value="All">All Types</option>
//               <option value="Human">Human</option>
//               <option value="Veterinary & Agro">Veterinary & Agro</option>
//             </select>

//             <select
//               value={cat}
//               onChange={(e) => {
//                 setCat(e.target.value);
//                 updateParams({ cat: e.target.value });
//               }}
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
//             >
//               {categories.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-3 mb-8">
//           {categories.map((c) => (
//             <button
//               key={c}
//               onClick={() => {
//                 setCat(c);
//                 updateParams({ cat: c });
//               }}
//               className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
//                 cat === c
//                   ? "bg-green-400 text-white shadow"
//                   : "bg-white border border-gray-200 text-slate-700 hover:bg-green-50"
//               }`}
//             >
//               {c}
//             </button>
//           ))}
//         </div>

//         {loading ? (
//           <div className="text-center py-20 text-slate-500">Loading products...</div>
//         ) : filtered.length === 0 ? (
//           <div className="rounded-3xl bg-white border border-dashed border-gray-300 p-16 text-center text-slate-500">
//             No products found.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filtered.map((p, i) => (
//               <motion.div
//                 key={p._id}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.35, delay: i * 0.03 }}
//               >
//                 <Link
//                   to={`/product/${p._id}`}
//                   className="block bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition"
//                 >
//                   <img
//                     src={imgUrl(p.image)}
//                     alt={p.name}
//                     className="w-full h-52 object-cover"
//                     onError={(e) => {
//                       e.currentTarget.src = "/placeholder.png";
//                     }}
//                   />

//                   <div className="p-5">
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
//                         {p.type}
//                       </span>
//                       <span className="text-xs text-slate-500">{p.category}</span>
//                     </div>

//                     <h3 className="font-bold text-slate-900 text-lg line-clamp-2">
//                       {p.name}
//                     </h3>

//                     <p className="mt-3 text-sm font-medium text-green-600">
//                       View details →
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useSearchParams } from "react-router-dom";
// import api from "../api/client";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// const imgUrl = (p) => (!p ? "/placeholder.png" : `${API}/uploads/${p}`);

// export default function ProductsPage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();

//   const typeParam = searchParams.get("type") || "All";
//   const catParam = searchParams.get("cat") || "All";
//   const qParam = searchParams.get("q") || "";

//   const [cat, setCat] = useState(catParam);
//   const [q, setQ] = useState(qParam);

//   useEffect(() => {
//     setCat(catParam);
//   }, [catParam]);

//   useEffect(() => {
//     setQ(qParam);
//   }, [qParam]);

//   useEffect(() => {
//     api
//       .get("/products")
//       .then((r) => setItems(r.data || []))
//       .catch(() => setItems([]))
//       .finally(() => setLoading(false));
//   }, []);

//   const categories = useMemo(() => {
//     if (typeParam === "AGRO & Bio Chemical") return ["All"];

//     const base =
//       typeParam === "All"
//         ? items
//         : items.filter((p) => p.type?.toLowerCase() === typeParam.toLowerCase());

//     const uniq = Array.from(
//       new Set(base.map((p) => p.category).filter(Boolean))
//     );

//     return ["All", ...uniq];
//   }, [items, typeParam]);

//   const filtered = useMemo(() => {
//     let list = [...items];

//     if (typeParam !== "All") {
//       list = list.filter(
//         (p) => p.type?.toLowerCase() === typeParam.toLowerCase()
//       );
//     }

//     if (typeParam !== "AGRO & Bio Chemical" && cat !== "All") {
//       list = list.filter((p) => p.category === cat);
//     }

//     if (q.trim()) {
//       const search = q.toLowerCase();
//       list = list.filter(
//         (p) =>
//           p.name?.toLowerCase().includes(search) ||
//           p.category?.toLowerCase().includes(search) ||
//           p.type?.toLowerCase().includes(search)
//       );
//     }

//     return list;
//   }, [items, cat, q, typeParam]);

//   const updateParams = (next = {}) => {
//     const params = new URLSearchParams(searchParams);

//     Object.entries(next).forEach(([key, value]) => {
//       if (!value || value === "All") {
//         params.delete(key);
//       } else {
//         params.set(key, value);
//       }
//     });

//     setSearchParams(params);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-10 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ y: -18, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-3xl sm:text-4xl font-extrabold text-slate-900"
//           >
//             {typeParam !== "All" ? `${typeParam} Products` : "All Products"}
//           </motion.h1>

//           <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
//             Discover trusted pharmaceutical, veterinary, and agro products from AL-Ain Pharmaceutical Company.
//           </p>
//         </div>

//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8">
//           <div
//             className={`grid gap-4 ${
//               typeParam === "AGRO & Bio Chemical" ? "md:grid-cols-2" : "md:grid-cols-3"
//             }`}
//           >
//             <input
//               value={q}
//               onChange={(e) => {
//                 setQ(e.target.value);
//                 updateParams({ q: e.target.value });
//               }}
//               placeholder="Search by name, category, or type..."
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
//             />

//             <select
//               value={typeParam}
//               onChange={(e) => updateParams({ type: e.target.value, cat: "All" })}
//               className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
//             >
//               <option value="All">All Types</option>
//               <option value="Human">Human</option>
//               <option value="Veterinary">Veterinary</option>
//               <option value="AGRO & Bio Chemical">AGRO & Bio Chemical</option>
//             </select>

//             {typeParam !== "AGRO & Bio Chemical" && (
//               <select
//                 value={cat}
//                 onChange={(e) => {
//                   setCat(e.target.value);
//                   updateParams({ cat: e.target.value });
//                 }}
//                 className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
//               >
//                 {categories.map((c) => (
//                   <option key={c} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//         </div>

//         {typeParam !== "AGRO & Bio Chemical" && (
//           <div className="flex flex-wrap gap-3 mb-8">
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => {
//                   setCat(c);
//                   updateParams({ cat: c });
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
//                   cat === c
//                     ? "bg-green-400 text-white shadow"
//                     : "bg-white border border-gray-200 text-slate-700 hover:bg-green-50"
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         )}

//         {loading ? (
//           <div className="text-center py-20 text-slate-500">Loading products...</div>
//         ) : filtered.length === 0 ? (
//           <div className="rounded-3xl bg-white border border-dashed border-gray-300 p-16 text-center text-slate-500">
//             No products found.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filtered.map((p, i) => (
//               <motion.div
//                 key={p._id}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.35, delay: i * 0.03 }}
//               >
//                 <Link
//                   to={`/product/${p._id}`}
//                   className="block bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition"
//                 >
//                   <img
//                     src={imgUrl(p.image)}
//                     alt={p.name}
//                     className="w-full h-52 object-cover"
//                     onError={(e) => {
//                       e.currentTarget.src = "/placeholder.png";
//                     }}
//                   />

//                   <div className="p-5">
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
//                         {p.type}
//                       </span>
//                       <span className="text-xs text-slate-500">
//                         {p.category || "No category"}
//                       </span>
//                     </div>

//                     <h3 className="font-bold text-slate-900 text-lg line-clamp-2">
//                       {p.name}
//                     </h3>

//                     <p className="mt-3 text-sm font-medium text-green-600">
//                       View details →
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import api, { productImageUrl } from "../api/client";

export default function ProductsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const typeParam = searchParams.get("type") || "All";
  const catParam = searchParams.get("cat") || "All";
  const qParam = searchParams.get("q") || "";

  const [cat, setCat] = useState(catParam);
  const [q, setQ] = useState(qParam);

  useEffect(() => {
    setCat(catParam);
  }, [catParam]);

  useEffect(() => {
    setQ(qParam);
  }, [qParam]);

  useEffect(() => {
    api
      .get("/products")
      .then((r) => setItems(r.data || []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    if (typeParam === "AGRO Bio Chemical") return ["All"];

    const base =
      typeParam === "All"
        ? items
        : items.filter((p) => p.type?.toLowerCase() === typeParam.toLowerCase());

    const uniq = Array.from(
      new Set(base.map((p) => p.category).filter(Boolean))
    );

    return ["All", ...uniq];
  }, [items, typeParam]);

  const filtered = useMemo(() => {
    let list = [...items];

    if (typeParam !== "All") {
      list = list.filter(
        (p) => p.type?.toLowerCase() === typeParam.toLowerCase()
      );
    }

    if (typeParam !== "AGRO Bio Chemical" && cat !== "All") {
      list = list.filter((p) => p.category === cat);
    }

    if (q.trim()) {
      const search = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(search) ||
          p.category?.toLowerCase().includes(search) ||
          p.type?.toLowerCase().includes(search)
      );
    }

    return list;
  }, [items, cat, q, typeParam]);

  const updateParams = (next = {}) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(next).forEach(([key, value]) => {
      if (!value || value === "All") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h1
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900"
          >
            {typeParam !== "All" ? `${typeParam} Products` : "All Products"}
          </motion.h1>

          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Discover trusted pharmaceutical, veterinary, and agro products from AL-Ain Pharmaceutical Company.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8">
          <div
            className={`grid gap-4 ${
              typeParam === "AGRO Bio Chemical" ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                updateParams({ q: e.target.value });
              }}
              placeholder="Search by name, category, or type..."
              className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

            <select
              value={typeParam}
              onChange={(e) => updateParams({ type: e.target.value, cat: "All" })}
              className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="All">All Types</option>
              <option value="Human">Human</option>
              <option value="Veterinary">Veterinary</option>
              <option value="AGRO Bio Chemical">AGRO Bio Chemical</option>
            </select>

            {typeParam !== "AGRO Bio Chemical" && (
              <select
                value={cat}
                onChange={(e) => {
                  setCat(e.target.value);
                  updateParams({ cat: e.target.value });
                }}
                className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {typeParam !== "AGRO Bio Chemical" && (
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  updateParams({ cat: c });
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  cat === c
                    ? "bg-green-400 text-white shadow"
                    : "bg-white border border-gray-200 text-slate-700 hover:bg-green-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="text-center py-20 text-slate-500">Loading products...</div>
        ) : filtered.length === 0 ? (
          <div className="rounded-3xl bg-white border border-dashed border-gray-300 p-16 text-center text-slate-500">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
              >
                <Link
                  to={`/product/${p._id}`}
                  className="block bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="w-full h-72 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-4 border-b border-gray-100">
                    <img
                      src={productImageUrl(p)}
                      alt={p.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.png";
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                        {p.type}
                      </span>
                      <span className="text-xs text-slate-500">
                        {p.category || "No category"}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-lg line-clamp-2">
                      {p.name}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-green-600">
                      View details →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
