// src/pages/ProductAdmin.jsx
import { useEffect, useState } from "react";
import api from "../api/client";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

export default function ProductAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [loading, setLoading] = useState(false);

  async function load() {
    const { data } = await api.get("/products?category=All&limit=100");
    setItems(data.items);
  }
  useEffect(() => {
    load();
  }, []);

  async function add(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/products", form);
      setForm({ name: "", price: "" });
      await load();
    } finally {
      setLoading(false);
    }
  }

  async function del(id) {
    if (!confirm("Delete product?")) return;
    await api.delete(`/products/${id}`);
    await load();
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Products</h2>

      {/* Add form */}
      <form
        onSubmit={add}
        className="mb-6 flex gap-3 rounded-lg bg-white p-4 shadow"
      >
        <input
          className="flex-1 rounded border px-3 py-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          className="w-32 rounded border px-3 py-2"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button
          disabled={loading}
          className="flex items-center gap-2 rounded bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-700"
        >
          <FiPlus /> Add
        </button>
      </form>

      {/* Product list */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((p) => (
          <div
            key={p._id}
            className="rounded-lg bg-white p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-slate-600">${p.price}</p>
            <div className="mt-3 flex gap-2">
              <button className="flex items-center gap-1 rounded bg-slate-500 px-3 py-1 text-white hover:bg-slate-600">
                <FiEdit /> Edit
              </button>
              <button
                onClick={() => del(p._id)}
                className="flex items-center gap-1 rounded bg-rose-600 px-3 py-1 text-white hover:bg-rose-700"
              >
                <FiTrash2 /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
