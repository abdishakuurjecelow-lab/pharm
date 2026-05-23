//New------------------------------------


// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../api/client";
// import toast from "react-hot-toast";
// import { Pencil, Trash2, Plus, Search } from "lucide-react";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// const imgUrl = (p) => (!p ? "/placeholder.png" : `${API}/uploads/${p}`);

// export default function DashboardProducts() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [q, setQ] = useState("");
//   const [type, setType] = useState("All");
//   const [category, setCategory] = useState("All");

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get("/products");
//       setItems(data || []);
//     } catch {
//       toast.error("Failed to load products");
//       setItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const categories = useMemo(() => {
//     if (type === "AGRO & Bio Chemical") return ["All"];

//     const source =
//       type === "All" ? items : items.filter((p) => p.type === type);

//     const uniq = Array.from(
//       new Set(source.map((p) => p.category).filter(Boolean))
//     );

//     return ["All", ...uniq];
//   }, [items, type]);

//   const filtered = useMemo(() => {
//     let list = [...items];

//     if (type !== "All") {
//       list = list.filter((p) => p.type === type);
//     }

//     if (type !== "AGRO & Bio Chemical" && category !== "All") {
//       list = list.filter((p) => p.category === category);
//     }

//     if (q.trim()) {
//       const s = q.toLowerCase();
//       list = list.filter(
//         (p) =>
//           p.name?.toLowerCase().includes(s) ||
//           p.type?.toLowerCase().includes(s) ||
//           p.category?.toLowerCase().includes(s)
//       );
//     }

//     return list;
//   }, [items, q, type, category]);

//   const onDelete = async (id) => {
//     const ok = window.confirm("Are you sure you want to delete this product?");
//     if (!ok) return;

//     try {
//       await api.delete(`/products/${id}`);
//       toast.success("Product deleted successfully");
//       setItems((prev) => prev.filter((p) => p._id !== id));
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
//         <div>
//           <h1 className="text-3xl font-black text-slate-900">Products</h1>
//           <p className="text-slate-500 mt-1">
//             Manage all Human, Veterinary, and AGRO & Bio Chemical products.
//           </p>
//         </div>

//         <Link
//           to="/dashboard/add-product"
//           className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-400 px-5 py-3 font-semibold text-white hover:bg-green-500 transition"
//         >
//           <Plus size={18} />
//           Add Product
//         </Link>
//       </div>

//       <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm mb-6">
//         <div
//           className={`grid grid-cols-1 gap-4 ${
//             type === "AGRO & Bio Chemical" ? "md:grid-cols-2" : "md:grid-cols-3"
//           }`}
//         >
//           <div className="relative">
//             <Search
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//             />
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search products..."
//               className="w-full rounded-2xl border border-slate-200 pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
//             />
//           </div>

//           <select
//             value={type}
//             onChange={(e) => {
//               setType(e.target.value);
//               setCategory("All");
//             }}
//             className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
//           >
//             <option value="All">All Types</option>
//             <option value="Human">Human</option>
//             <option value="Veterinary">Veterinary</option>
//             <option value="AGRO & Bio Chemical">AGRO & Bio Chemical</option>
//           </select>

//           {type !== "AGRO & Bio Chemical" && (
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
//             >
//               {categories.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           )}
//         </div>
//       </div>

//       {loading ? (
//         <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm">
//           Loading products...
//         </div>
//       ) : filtered.length === 0 ? (
//         <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm border border-dashed border-slate-300">
//           No products found.
//         </div>
//       ) : (
//         <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[920px] text-left">
//               <thead className="bg-slate-50">
//                 <tr className="text-sm text-slate-600">
//                   <th className="px-6 py-4 font-semibold">Image</th>
//                   <th className="px-6 py-4 font-semibold">Name</th>
//                   <th className="px-6 py-4 font-semibold">Type</th>
//                   <th className="px-6 py-4 font-semibold">Category</th>
//                   <th className="px-6 py-4 font-semibold text-right">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filtered.map((p) => (
//                   <tr
//                     key={p._id}
//                     className="border-t border-slate-100 hover:bg-slate-50/60 transition"
//                   >
//                     <td className="px-6 py-4">
//                       <img
//                         src={imgUrl(p.image)}
//                         alt={p.name}
//                         className="h-16 w-16 rounded-2xl object-cover border border-slate-200"
//                         onError={(e) => {
//                           e.currentTarget.src = "/placeholder.png";
//                         }}
//                       />
//                     </td>

//                     <td className="px-6 py-4">
//                       <h3 className="font-bold text-slate-900">{p.name}</h3>
//                     </td>

//                     <td className="px-6 py-4">
//                       <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
//                         {p.type}
//                       </span>
//                     </td>

//                     <td className="px-6 py-4 text-slate-600">
//                       {p.category || "No category"}
//                     </td>

//                     <td className="px-6 py-4">
//                       <div className="flex items-center justify-end gap-3">
//                         <Link
//                           to={`/dashboard/edit-product/${p._id}`}
//                           className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
//                         >
//                           <Pencil size={16} />
//                           Edit
//                         </Link>

//                         <button
//                           onClick={() => onDelete(p._id)}
//                           className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 transition"
//                         >
//                           <Trash2 size={16} />
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api, { uploadUrl } from "../api/client";
import toast from "react-hot-toast";
import { Pencil, Trash2, Plus, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardProducts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");

  const loadProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setItems(data || []);
    } catch {
      toast.error("Failed to load products");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const categories = useMemo(() => {
    if (type === "AGRO Bio Chemical") return ["All"];

    const source =
      type === "All" ? items : items.filter((p) => p.type === type);

    const uniq = Array.from(
      new Set(source.map((p) => p.category).filter(Boolean))
    );

    return ["All", ...uniq];
  }, [items, type]);

  const filtered = useMemo(() => {
    let list = [...items];

    if (type !== "All") list = list.filter((p) => p.type === type);
    if (type !== "AGRO Bio Chemical" && category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(s) ||
          p.type?.toLowerCase().includes(s) ||
          p.category?.toLowerCase().includes(s)
      );
    }

    return list;
  }, [items, q, type, category]);

  const onDelete = async (id) => {
    const ok = window.confirm("Are you sure?");
    if (!ok) return;

    try {
      await api.delete(`/products/${id}`);
      toast.success("Deleted");
      setItems((prev) => prev.filter((p) => p._id !== id));
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="w-full px-4 md:px-8 py-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Products
          </h1>
          <p className="text-slate-500 text-sm">
            Manage all products
          </p>
        </div>

        <Link
          to="/dashboard/add-product"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-semibold transition"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* FILTER */}
      <div className="bg-white rounded-2xl shadow-sm border p-4 mb-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border focus:ring-2 focus:ring-green-300"
            />
          </div>

          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setCategory("All");
            }}
            className="rounded-xl border px-4 py-2.5"
          >
            <option>All</option>
            <option>Human</option>
            <option>Veterinary</option>
            <option>AGRO Bio Chemical</option>
          </select>

          {type !== "AGRO Bio Chemical" && (
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border px-4 py-2.5"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="bg-white p-6 rounded-xl text-center">
          Loading...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white p-6 rounded-xl text-center text-gray-500">
          No products found
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border overflow-hidden"
        >
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((p, i) => (
                  <motion.tr
                    key={p._id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      <img
                        src={uploadUrl(p.image)}
                        className="w-14 h-14 rounded-lg object-cover border"
                      />
                    </td>

                    <td className="px-4 py-3 font-semibold">
                      {p.name}
                    </td>

                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        {p.type}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-gray-500">
                      {p.category}
                    </td>

                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/dashboard/edit-product/${p._id}`}
                          className="px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-100"
                        >
                          <Pencil size={14} />
                        </Link>

                        <button
                          onClick={() => onDelete(p._id)}
                          className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}
