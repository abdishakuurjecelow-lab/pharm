// import { useEffect, useRef, useState } from "react";
// import api from "../api/client";

// const CATS = ["Tab", "Cap", "Injection", "Syrub", "Vetinary Meicine"];
// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";
// const imgSrc = (src) => (src?.startsWith("/uploads") ? `${API}${src}` : src);

// export default function EditProductModal({ open, product, onClose, onSaved }) {
//   const [form, setForm] = useState({
//     name: "",
//     category: CATS[0],
//     price: "",
//     oldPrice: "",
//   });
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [err, setErr] = useState("");
//   const [saving, setSaving] = useState(false);

//   const firstInputRef = useRef(null);

//   // boot modal with product data
//   useEffect(() => {
//     if (!open || !product) return;
//     setForm({
//       name: product.name ?? "",
//       category: product.category ?? CATS[0],
//       price: product.price ?? "",
//       oldPrice: product.oldPrice ?? "",
//     });
//     setFile(null);
//     setPreview("");
//     setErr("");
//     // focus first field
//     setTimeout(() => firstInputRef.current?.focus(), 50);
//   }, [open, product]);

//   // preview new image
//   useEffect(() => {
//     if (!file) return setPreview("");
//     const url = URL.createObjectURL(file);
//     setPreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [file]);

//   // close on ESC
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose?.();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, onClose]);

//   async function onSubmit(e) {
//     e.preventDefault();
//     if (!product) return;
//     setSaving(true);
//     setErr("");

//     try {
//       if (file) {
//         const fd = new FormData();
//         fd.append("name", form.name);
//         fd.append("category", form.category);
//         fd.append("price", form.price);
//         if (form.oldPrice) fd.append("oldPrice", form.oldPrice);
//         fd.append("image", file);
//         await api.put(`/products/${product._id}`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       } else {
//         await api.put(`/products/${product._id}`, {
//           name: form.name,
//           category: form.category,
//           price: form.price,
//           oldPrice: form.oldPrice || undefined,
//         });
//       }

//       toast("Updated");
//       onSaved?.();  // reload list from parent
//       onClose?.();
//     } catch (e) {
//       setErr(e?.response?.data?.message || "Update failed");
//     } finally {
//       setSaving(false);
//     }
//   }

//   if (!open || !product) return null;

//   return (
//     <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
//       {/* overlay */}
//       <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />

//       {/* dialog */}
//       <form
//         onSubmit={onSubmit}
//         className="relative z-[9999] w-full max-w-2xl animate-[slideIn_.35s_ease] rounded-2xl border border-slate-200 bg-white p-5 shadow-xl"
//       >
//         <div className="mb-3 flex items-center justify-between">
//           <h2 className="text-lg font-semibold">Edit product</h2>
//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-lg px-2 py-1 text-slate-500 transition hover:bg-slate-100"
//             aria-label="Close"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//           <input
//             ref={firstInputRef}
//             className="rounded-lg border px-3 py-2"
//             placeholder="Name"
//             value={form.name}
//             onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
//             required
//           />
//           <select
//             className="rounded-lg border px-3 py-2"
//             value={form.category}
//             onChange={(e) => setForm((v) => ({ ...v, category: e.target.value }))}
//           >
//             {CATS.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//           <input
//             className="rounded-lg border px-3 py-2"
//             type="number"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={(e) => setForm((v) => ({ ...v, price: e.target.value }))}
//             required
//           />
//           <input
//             className="rounded-lg border px-3 py-2"
//             type="number"
//             step="0.01"
//             placeholder="Old price (optional)"
//             value={form.oldPrice}
//             onChange={(e) => setForm((v) => ({ ...v, oldPrice: e.target.value }))}
//           />
//           <input
//             className="rounded-lg border px-3 py-2 sm:col-span-2"
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files?.[0] || null)}
//           />
//         </div>

//         {err && <p className="mt-3 text-sm text-rose-600">{err}</p>}

//         {/* preview row */}
//         <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <div>
//             <p className="mb-1 text-sm font-medium text-slate-600">Current</p>
//             <div className="grid h-40 place-items-center overflow-hidden rounded-xl bg-slate-50">
//               <img
//                 src={imgSrc(product.image)}
//                 alt={product.name}
//                 className="h-full w-full object-contain"
//               />
//             </div>
//           </div>
//           <div>
//             <p className="mb-1 text-sm font-medium text-slate-600">New (optional)</p>
//             <div className="grid h-40 place-items-center overflow-hidden rounded-xl bg-slate-50">
//               {preview ? (
//                 <img src={preview} alt="new" className="h-full w-full object-contain" />
//               ) : (
//                 <p className="text-slate-400 text-sm">No new image</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mt-5 flex items-center justify-end gap-2">
//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50"
//           >
//             Cancel
//           </button>
//           <button
//             disabled={saving}
//             className="rounded-xl bg-teal-600 px-4 py-2 font-semibold text-white shadow hover:bg-teal-700 disabled:opacity-50"
//           >
//             {saving ? "Saving..." : "Save changes"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// /* mini toast */
// function toast(msg) {
//   const el = document.createElement("div");
//   el.textContent = msg;
//   el.className =
//     "fixed left-1/2 top-6 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-2 text-sm text-white shadow z-[9999]";
//   document.body.appendChild(el);
//   setTimeout(() => {
//     el.style.transition = "opacity .4s ease";
//     el.style.opacity = "0";
//     setTimeout(() => el.remove(), 400);
//   }, 1200);
// }


//+++++++++++++++++++++++++++++++++


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/client";
// import toast from "react-hot-toast";

// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

// export default function DashboardEditProduct() {
//   const { id } = useParams();
//   const nav = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     category: "",
//     price: "",
//     image: ""
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     load();
//   }, [id]);

//   async function load() {
//     try {
//       const { data } = await api.get(`/products/${id}`);
//       setForm(data);
//     } catch {
//       toast.error("Product not found");
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const fd = new FormData();
//       fd.append("name", form.name);
//       fd.append("category", form.category);
//       fd.append("price", form.price);

//       if (file) {
//         fd.append("image", file);
//       }

//       await api.put(`/products/${id}`, fd, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       toast.success("Updated");
//       nav("/dashboard/products");
//     } catch {
//       toast.error("Update failed");
//     }
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
//         Edit Product
//       </h1>

//       <div className="grid md:grid-cols-2 gap-10">

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl space-y-6"
//         >
//           <input
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="w-full p-3 rounded-xl border dark:bg-slate-700 dark:text-white"
//             placeholder="Name"
//           />

//           <input
//             value={form.category}
//             onChange={(e) =>
//               setForm({ ...form, category: e.target.value })
//             }
//             className="w-full p-3 rounded-xl border dark:bg-slate-700 dark:text-white"
//             placeholder="Category"
//           />

//           <input
//             type="number"
//             value={form.price}
//             onChange={(e) =>
//               setForm({ ...form, price: e.target.value })
//             }
//             className="w-full p-3 rounded-xl border dark:bg-slate-700 dark:text-white"
//             placeholder="Price"
//           />

//           <input
//             type="file"
//             onChange={(e) =>
//               setFile(e.target.files[0])
//             }
//           />

//           <button className="w-full py-3 rounded-xl bg-teal-600 text-white">
//             Update Product
//           </button>
//         </form>

//         <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl flex items-center justify-center">
//           {form.image && (
//             <img
//               src={`${API}/uploads/${form.image}`}
//               className="max-h-80 object-contain"
//               alt="preview"
//             />
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

//LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/client"; // Ensure this is the correct path
import toast from "react-hot-toast";

const CATS = ["Tablets", "Cap", "Injection", "Syrup", "Veterinary Medicine"];
export default function DashboardEditProduct() {
  const { id } = useParams(); // Get product ID from URL
  const [form, setForm] = useState({
    name: "",
    category: CATS[0],
    price: "",
    oldPrice: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  // Fetch product data on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setForm(res.data); // Set form data from product API response
      } catch (error) {
        toast.error("Failed to load product details");
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url); // Set image preview
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("oldPrice", form.oldPrice);
    if (file) formData.append("image", file);

    try {
      await api.put(`/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Product updated successfully");
      navigate("/dashboard/products"); // Redirect back to product list
    } catch (e) {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Edit Product</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
          required
        />
        <select
          className="w-full p-3 border rounded"
          value={form.category}
          onChange={(e) => setForm((v) => ({ ...v, category: e.target.value }))}
        >
          {CATS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className="w-full p-3 border rounded"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm((v) => ({ ...v, price: e.target.value }))}
          required
        />
        <input
          className="w-full p-3 border rounded"
          type="number"
          placeholder="Old Price"
          value={form.oldPrice}
          onChange={(e) => setForm((v) => ({ ...v, oldPrice: e.target.value }))}
        />
        <input
          className="w-full p-3 border rounded"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-cover"
            />
          </div>
        )}
        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate("/dashboard/products")}
            className="w-full py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="w-full py-2 bg-teal-600 text-white rounded"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
