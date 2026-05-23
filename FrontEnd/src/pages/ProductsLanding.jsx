import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { motion } from "framer-motion";

const ORDER = [
  "Tablets", "Capsules", "Injections", "Drop", "Syrups",
  "Scalp vein set", "Butterfly", "Cream", "Shampoo", "Soap",
];

export default function ProductsLanding() {
  const byCategory = ORDER.map((cat) => {
    const list = PRODUCTS.filter((p) => p.category === cat);
    return { cat, count: list.length, image: list[0]?.image || "" };
  });

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Product Categories
            </span>
          </h1>
          <p className="mt-2 text-gray-600">
            Tablets • Capsules • Injections • Drops • Syrups • Devices & Topicals
          </p>
        </div>

        {/* Categories grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {byCategory.map(({ cat, count, image }, i) => (
            <motion.div
              key={cat}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative"
            >
              <Link to={`/products/category/${encodeURIComponent(cat)}`} className="block">
                <div className="overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={image || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"}
                      alt={cat}
                      className="h-48 w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop";
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold">{cat}</h3>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        {count} item(s)
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <motion.span whileHover={{ x: 4 }} className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        View {cat} →
                      </motion.span>
                      <span className="text-[11px] uppercase tracking-wide text-gray-500">Click to open</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
