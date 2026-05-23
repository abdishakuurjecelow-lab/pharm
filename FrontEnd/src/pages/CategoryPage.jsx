import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoryPage() {
  const { slug } = useParams(); // e.g., "Tablets"
  const category = decodeURIComponent(slug);

  const all = useMemo(
    () => PRODUCTS.filter((p) => p.category === category),
    [category]
  );

  // unique strengths/sizes from products of this category
  const strengthPool = Array.from(
    new Set(all.flatMap((p) => p.strengths || []))
  );

  const [q, setQ] = useState("");
  const [sel, setSel] = useState("All");

  const filtered = useMemo(() => {
    let list = all;
    if (sel !== "All") {
      list = list.filter((p) => (p.strengths || []).includes(sel));
    }
    if (q.trim()) {
      const t = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(t) ||
          (p.tags || []).some((tag) => tag.toLowerCase().includes(t))
      );
    }
    return list;
  }, [all, sel, q]);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {category}
              </span>{" "}
              — selection
            </h1>
            <p className="text-gray-600 mt-1">
              Choose by name or filter by strength/size below.
            </p>
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name or tag…"
            className="h-11 w-full md:w-72 rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-3 outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Strength / Size chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSel("All")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              sel === "All"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow"
                : "bg-white/80 backdrop-blur border border-gray-200 text-gray-700 hover:bg-white"
            }`}
          >
            All
          </button>
          {strengthPool.map((s) => (
            <button
              key={s}
              onClick={() => setSel(s)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                sel === s
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow"
                  : "bg-white/80 backdrop-blur border border-gray-200 text-gray-700 hover:bg-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Count + back */}
        <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
          <span>{filtered.length} result(s)</span>
          <Link to="/products" className="font-semibold text-cyan-700 hover:underline">
            ← All categories
          </Link>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <p className="text-gray-600">No items found for this filter.</p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ y: 18, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="group relative"
                >
                  {/* Card without price; focus on details + strengths */}
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="relative">
                      <motion.img
                        src={p.image}
                        alt={p.name}
                        className="h-56 w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 240, damping: 20 }}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop";
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-extrabold leading-snug">{p.name}</h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.short}</p>

                      {/* strengths row */}
                      {p.strengths?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.strengths.map((s) => (
                            <span key={s} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                              {s}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          to={`/product/${p.id}`}
                          className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                        >
                          View Details →
                        </Link>
                        <span className="text-[11px] uppercase tracking-wide text-gray-500">
                          More info
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
