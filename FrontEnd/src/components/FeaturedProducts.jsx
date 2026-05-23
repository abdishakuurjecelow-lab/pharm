import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api, { API_URL } from "../api/client";

const API = API_URL;

const imgUrl = (p) => (!p ? "/placeholder.png" : `${API}/uploads/${p}`);

export default function FeaturedProducts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        const all = res.data || [];
        setItems(all.slice(0, 8));
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-green-50/30 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700"
          >
            Featured Products
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Our Popular Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-8"
          >
            Explore trusted human, veterinary, and agro products carefully selected
            for quality and reliability.
          </motion.p>
        </div>

        {/* content */}
        {loading ? (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-52 animate-pulse bg-slate-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-20 rounded bg-slate-200 animate-pulse" />
                  <div className="h-5 w-40 rounded bg-slate-200 animate-pulse" />
                  <div className="h-4 w-28 rounded bg-slate-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            No featured products found.
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Link
                  to={`/product/${item._id}`}
                  className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imgUrl(item.image)}
                      alt={item.name}
                      className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.png";
                      }}
                    />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-slate-500">
                      {item.category || "No category"}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-slate-900 line-clamp-2">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-sm font-semibold text-green-600">
                      View details →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-2xl bg-green-400 px-7 py-3.5 font-semibold text-white transition hover:bg-green-500"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
