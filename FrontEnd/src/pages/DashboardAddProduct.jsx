// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../api/client";
// import toast from "react-hot-toast";

// const CATS = [
//   "Tab",
//   "Syrup",
//   "Injection",
//   "Cap",
//   "Vetinary & Agrochemical",
//   "Shampoo",
//   "Cream",
// ];

// export default function DashboardAddProduct() {
//   const { id } = useParams();
//   const isEdit = Boolean(id);
//   const nav = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     category: CATS[0],
//     type: "Human",
//     image: "",
//   });

//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(isEdit);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!isEdit) return;

//     (async () => {
//       try {
//         const { data } = await api.get(`/products/${id}`);

//         setForm({
//           name: data.name ?? "",
//           category: data.category ?? CATS[0],
//           type: data.type ?? "Human",
//           image: data.image ?? "",
//         });

//       } catch {
//         toast.error("Product not found");
//         nav("/dashboard/products");
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [isEdit, id, nav]);

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     setSaving(true);

//     try {

//       const fd = new FormData();

//       fd.append("name", form.name.trim());
//       fd.append("category", form.category);
//       fd.append("type", form.type);

//       if (file) fd.append("image", file);

//       if (isEdit) {

//         await api.patch(`/products/${id}`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         toast.success("Product updated successfully");

//       } else {

//         await api.post(`/products`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         toast.success("Product added successfully");

//       }

//       nav("/dashboard/products");

//     } catch {
//       toast.error("Save failed");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const imgSrc =
//     file
//       ? URL.createObjectURL(file)
//       : form.image
//       ? `${import.meta.env.VITE_API_URL || "https://al-ainpharma.com"}/uploads/${form.image}`
//       : "";

//   if (loading)
//     return <div className="p-10 text-center text-slate-500">Loading…</div>;

//   return (
//     <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 p-6">

//       <form
//         onSubmit={onSubmit}
//         className="bg-white rounded-2xl shadow p-6 space-y-4"
//       >

//         <h1 className="text-3xl font-black">
//           {isEdit ? "Edit product" : "Add product"}
//         </h1>

//         <input
//           name="name"
//           placeholder="Product name"
//           value={form.name}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//           required
//         />

//         <select
//           name="category"
//           value={form.category}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//         >
//           {CATS.map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>

//         {/* NEW TYPE SELECT */}
//         <select
//           name="type"
//           value={form.type}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//         >
//           <option value="Human">Human Medicine</option>
//           <option value="Veterinary">Veterinary Medicine</option>
//         </select>

//         <div>
//           <label className="block text-sm font-medium">
//             Product image
//           </label>

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button
//           disabled={saving}
//           className="w-full py-3 rounded-xl font-semibold text-white bg-teal-600"
//         >
//           {saving ? "Saving…" : "Add product"}
//         </button>
//       </form>

//       {/* LIVE PREVIEW */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">

//         {imgSrc ? (
//           <img
//             src={imgSrc}
//             className="w-full h-64 object-cover"
//             alt="Preview"
//           />
//         ) : (
//           <div className="h-64 grid place-items-center text-slate-400">
//             No image
//           </div>
//         )}

//         <div className="p-5">
//           <p className="text-xs text-slate-400">{form.category}</p>
//           <h3 className="text-lg font-bold">{form.name || "Product name"}</h3>
//         </div>

//       </div>
//     </div>
//   );
// }


//new------------------------------

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../api/client";
// import toast from "react-hot-toast";

// const CATS = [
//   "Tab",
//   "Syrup",
//   "Injection",
//   "Cap",
//   "Cream",
//   "Shampoo",
// ];

// const TYPES = ["Human", "Veterinary & Agro"];

// export default function DashboardAddProduct() {
//   const { id } = useParams();
//   const isEdit = Boolean(id);
//   const nav = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     category: CATS[0],
//     type: TYPES[0],
//     image: "",
//   });

//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(isEdit);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!isEdit) return;

//     (async () => {
//       try {
//         const { data } = await api.get(`/products/${id}`);

//         setForm({
//           name: data.name ?? "",
//           category: data.category ?? CATS[0],
//           type: data.type ?? TYPES[0],
//           image: data.image ?? "",
//         });
//       } catch {
//         toast.error("Product not found");
//         nav("/dashboard/products");
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [isEdit, id, nav]);

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       const fd = new FormData();
//       fd.append("name", form.name.trim());
//       fd.append("category", form.category);
//       fd.append("type", form.type);

//       if (file) fd.append("image", file);

//       if (isEdit) {
//         await api.patch(`/products/${id}`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         toast.success("Product updated successfully");
//       } else {
//         await api.post(`/products`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         toast.success("Product added successfully");
//       }

//       nav("/dashboard/products");
//     } catch {
//       toast.error("Save failed");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const imgSrc = file
//     ? URL.createObjectURL(file)
//     : form.image
//     ? `${import.meta.env.VITE_API_URL || "https://al-ainpharma.com"}/uploads/${form.image}`
//     : "";

//   if (loading) {
//     return <div className="p-10 text-center text-slate-500">Loading…</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 p-6">
//       <form
//         onSubmit={onSubmit}
//         className="bg-white rounded-2xl shadow p-6 space-y-4"
//       >
//         <h1 className="text-3xl font-black">
//           {isEdit ? "Edit Product" : "Add Product"}
//         </h1>

//         <input
//           name="name"
//           placeholder="Product name"
//           value={form.name}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//           required
//         />

//         <select
//           name="type"
//           value={form.type}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//         >
//           {TYPES.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>

//         <select
//           name="category"
//           value={form.category}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//         >
//           {CATS.map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>

//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Product image
//           </label>

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button
//           disabled={saving}
//           className="w-full py-3 rounded-xl font-semibold text-white bg-green-500 hover:bg-green-600 transition"
//         >
//           {saving ? "Saving…" : isEdit ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       <div className="bg-white rounded-2xl shadow overflow-hidden">
//         {imgSrc ? (
//           <img
//             src={imgSrc}
//             className="w-full h-64 object-cover"
//             alt="Preview"
//           />
//         ) : (
//           <div className="h-64 grid place-items-center text-slate-400">
//             No image
//           </div>
//         )}

//         <div className="p-5">
//           <p className="text-xs text-slate-400">{form.type}</p>
//           <p className="text-xs text-slate-500 mt-1">{form.category}</p>
//           <h3 className="text-lg font-bold mt-2">
//             {form.name || "Product name"}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../api/client";
// import toast from "react-hot-toast";

// const TYPES = ["Human", "Veterinary", "AGRO & Bio Chemical"];

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

// export default function DashboardAddProduct() {
//   const { id } = useParams();
//   const isEdit = Boolean(id);
//   const nav = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     category: "Tab",
//     type: "Human",
//     image: "",
//   });

//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(isEdit);
//   const [saving, setSaving] = useState(false);

//   const currentCategories = useMemo(() => {
//     if (form.type === "Human") return HUMAN_CATEGORIES;
//     if (form.type === "Veterinary") return VETERINARY_CATEGORIES;
//     return [];
//   }, [form.type]);

//   useEffect(() => {
//     if (!isEdit) return;

//     (async () => {
//       try {
//         const { data } = await api.get(`/products/${id}`);

//         setForm({
//           name: data.name ?? "",
//           category: data.category ?? "",
//           type: data.type ?? "Human",
//           image: data.image ?? "",
//         });
//       } catch {
//         toast.error("Product not found");
//         nav("/dashboard/products");
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [isEdit, id, nav]);

//   useEffect(() => {
//     if (form.type === "Human") {
//       if (!HUMAN_CATEGORIES.includes(form.category)) {
//         setForm((f) => ({ ...f, category: "Tab" }));
//       }
//     } else if (form.type === "Veterinary") {
//       if (!VETERINARY_CATEGORIES.includes(form.category)) {
//         setForm((f) => ({ ...f, category: "Tablet & Bollus" }));
//       }
//     } else if (form.type === "AGRO & Bio Chemical") {
//       if (form.category !== "") {
//         setForm((f) => ({ ...f, category: "" }));
//       }
//     }
//   }, [form.type, form.category]);

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       const fd = new FormData();

//       fd.append("name", form.name.trim());
//       fd.append("type", form.type);

//       if (form.type !== "AGRO & Bio Chemical") {
//         fd.append("category", form.category);
//       } else {
//         fd.append("category", "");
//       }

//       if (file) fd.append("image", file);

//       if (isEdit) {
//         await api.patch(`/products/${id}`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         toast.success("Product updated successfully");
//       } else {
//         await api.post(`/products`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         toast.success("Product added successfully");
//       }

//       nav("/dashboard/products");
//     } catch {
//       toast.error("Save failed");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const imgSrc = file
//     ? URL.createObjectURL(file)
//     : form.image
//     ? `${import.meta.env.VITE_API_URL || "https://al-ainpharma.com"}/uploads/${form.image}`
//     : "";

//   if (loading) {
//     return <div className="p-10 text-center text-slate-500">Loading…</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 p-6">
//       <form
//         onSubmit={onSubmit}
//         className="bg-white rounded-2xl shadow p-6 space-y-4"
//       >
//         <h1 className="text-3xl font-black">
//           {isEdit ? "Edit Product" : "Add Product"}
//         </h1>

//         <input
//           name="name"
//           placeholder="Product name"
//           value={form.name}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//           required
//         />

//         <select
//           name="type"
//           value={form.type}
//           onChange={onChange}
//           className="w-full border rounded-xl px-4 py-3"
//         >
//           {TYPES.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>

//         {form.type !== "AGRO & Bio Chemical" && (
//           <select
//             name="category"
//             value={form.category}
//             onChange={onChange}
//             className="w-full border rounded-xl px-4 py-3"
//           >
//             {currentCategories.map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         )}

//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Product image
//           </label>

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button
//           disabled={saving}
//           className="w-full py-3 rounded-xl font-semibold text-white bg-green-400 hover:bg-green-500 transition"
//         >
//           {saving ? "Saving…" : isEdit ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       <div className="bg-white rounded-2xl shadow overflow-hidden">
//         {imgSrc ? (
//           <img
//             src={imgSrc}
//             className="w-full h-64 object-cover"
//             alt="Preview"
//           />
//         ) : (
//           <div className="h-64 grid place-items-center text-slate-400">
//             No image
//           </div>
//         )}

//         <div className="p-5">
//           <p className="text-xs text-slate-400">{form.type}</p>
//           <p className="text-xs text-slate-500 mt-1">
//             {form.type === "AGRO & Bio Chemical" ? "No category" : form.category}
//           </p>
//           <h3 className="text-lg font-bold mt-2">
//             {form.name || "Product name"}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api, { uploadUrl } from "../api/client";
import toast from "react-hot-toast";

const TYPES = ["Human", "Veterinary", "AGRO Bio Chemical"];

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

export default function DashboardAddProduct() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "Tablets",
    type: "Human",
    image: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  const currentCategories = useMemo(() => {
    if (form.type === "Human") return HUMAN_CATEGORIES;
    if (form.type === "Veterinary") return VETERINARY_CATEGORIES;
    return [];
  }, [form.type]);

  useEffect(() => {
    if (!isEdit) return;

    (async () => {
      try {
        const { data } = await api.get(`/products/${id}`);

        setForm({
          name: data.name ?? "",
          category: data.category ?? "",
          type: data.type ?? "Human",
          image: data.image ?? "",
        });
      } catch {
        toast.error("Product not found");
        nav("/kaalay/products");
      } finally {
        setLoading(false);
      }
    })();
  }, [isEdit, id, nav]);

  useEffect(() => {
    if (form.type === "Human") {
      if (!HUMAN_CATEGORIES.includes(form.category)) {
        setForm((f) => ({ ...f, category: "Tablets" }));
      }
    } else if (form.type === "Veterinary") {
      if (!VETERINARY_CATEGORIES.includes(form.category)) {
        setForm((f) => ({ ...f, category: "Tablets & Bollus" }));
      }
    } else if (form.type === "AGRO Bio Chemical") {
      if (form.category !== "") {
        setForm((f) => ({ ...f, category: "" }));
      }
    }
  }, [form.type, form.category]);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const fd = new FormData();

      fd.append("name", form.name.trim());
      fd.append("type", form.type);

      if (form.type !== "AGRO Bio Chemical") {
        fd.append("category", form.category);
      } else {
        fd.append("category", "");
      }

      if (file) fd.append("image", file);

      if (isEdit) {
        await api.patch(`/products/${id}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product updated successfully");
      } else {
        await api.post(`/products`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product added successfully");
      }

      nav("/kaalay/products");
    } catch {
      toast.error("Save failed");
    } finally {
      setSaving(false);
    }
  };

  const imgSrc = file
    ? URL.createObjectURL(file)
    : form.image
    ? uploadUrl(form.image)
    : "";

  if (loading) {
    return <div className="p-10 text-center text-slate-500">Loading…</div>;
  }

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 p-6">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-2xl shadow p-6 space-y-4"
      >
        <h1 className="text-3xl font-black">
          {isEdit ? "Edit Product" : "Add Product"}
        </h1>

        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={onChange}
          className="w-full border rounded-xl px-4 py-3"
          required
        />

        <select
          name="type"
          value={form.type}
          onChange={onChange}
          className="w-full border rounded-xl px-4 py-3"
        >
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {form.type !== "AGRO Bio Chemical" && (
          <select
            name="category"
            value={form.category}
            onChange={onChange}
            className="w-full border rounded-xl px-4 py-3"
          >
            {currentCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">
            Product image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button
          disabled={saving}
          className="w-full py-3 rounded-xl font-semibold text-white bg-green-400 hover:bg-green-500 transition"
        >
          {saving ? "Saving…" : isEdit ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            className="w-full h-64 object-cover"
            alt="Preview"
          />
        ) : (
          <div className="h-64 grid place-items-center text-slate-400">
            No image
          </div>
        )}

        <div className="p-5">
          <p className="text-xs text-slate-400">{form.type}</p>
          <p className="text-xs text-slate-500 mt-1">
            {form.type === "AGRO Bio Chemical" ? "No category" : form.category}
          </p>
          <h3 className="text-lg font-bold mt-2">
            {form.name || "Product name"}
          </h3>
        </div>
      </div>
    </div>
  );
}
