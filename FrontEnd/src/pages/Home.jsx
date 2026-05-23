// import React from "react";
// import { motion } from "framer-motion";
// import Hero from "../components/Hero";
// import GalleryPage from "./GalleryPage";
// import MaterialsSection from "./MaterialsSection";
// import Partners from "../components/Partners";
// const fadeUp = {
//   hidden: { y: 18, opacity: 0 },
//   show: (i = 0) => ({
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: i * 0.08 },
//   }),
// };

// const CATEGORIES = [
//   { name: "Tabs", img: "/prod/albendazole.jpg", to: "/products/category/Tabs" },
//   { name: "Injection", img: "/prod/ivermectin.jpg", to: "/products/category/Injection" },
//   { name: "Drops", img: "/prod/eyedrops.jpg", to: "/products/category/Drop" },
//   { name: "Syrup", img: "/prod/syrup.jpg", to: "/products/category/Syrub" },
// ];

// export default function Home() {
//   return (
//     <main className="bg-gray-50">
//       {/* HERO */}
//       <Hero />

//       <Partners />

//       <MaterialsSection />

//       <GalleryPage />

   
//       {/* CTA CONTACT */}
//       <section id="contact" className="relative py-16">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50" />
//         <div className="mx-auto max-w-5xl rounded-3xl border border-white/40 bg-white/80 p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur px-4 sm:px-6 lg:px-8">
//           <motion.h3
//             initial={{ y: 12, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl sm:text-3xl font-extrabold"
//           >
//             Ready to partner with{" "}
//             <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//               AL-Ain
//             </span>
//             ?
//           </motion.h3>
//           <motion.p
//             initial={{ y: 12, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.06 }}
//             className="mt-2 text-gray-600 max-w-2xl mx-auto"
//           >
//             Bulk orders, distribution & compliance support—waan kuu joognaa 24/7.
//           </motion.p>
//           <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
//             <a
//               href="/products"
//               className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow hover:opacity-90 transition"
//             >
//               Browse Products
//             </a>
//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold hover:bg-gray-50 transition"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


//New------------------------------------------

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Hero from "../components/Hero";
// import GalleryPage from "./GalleryPage";
// import MaterialsSection from "./MaterialsSection";
// import Partners from "../components/Partners";

// export default function Home() {
//   return (
//     <main className="bg-white">
//       <Hero />

//       <Partners />

//       <MaterialsSection />

//       <GalleryPage />

//       {/* CTA CONTACT */}
//       <section className="relative py-16 sm:py-20 lg:py-24">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
//             <div className="grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
//               <div>
//                 <motion.p
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.45 }}
//                   className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700"
//                 >
//                   Work With AL-Ain Pharmaceutical
//                 </motion.p>

//                 <motion.h3
//                   initial={{ y: 12, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.05 }}
//                   className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
//                 >
//                   Ready to partner with{" "}
//                   <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
//                     AL-Ain
//                   </span>
//                   ?
//                 </motion.h3>

//                 <motion.p
//                   initial={{ y: 12, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.55, delay: 0.1 }}
//                   className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-8"
//                 >
//                   We support bulk orders, professional distribution, and trusted
//                   pharmaceutical supply for human and veterinary needs across Somalia.
//                 </motion.p>

//                 <motion.div
//                   initial={{ y: 12, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.55, delay: 0.15 }}
//                   className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
//                 >
//                   <Link
//                     to="/products"
//                     className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-200 transition hover:opacity-95"
//                   >
//                     Browse Products
//                   </Link>

//                   <Link
//                     to="/contact"
//                     className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
//                   >
//                     Contact Us
//                   </Link>
//                 </motion.div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, x: 24 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="relative"
//               >
//                 <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-emerald-100 blur-3xl" />
//                 <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-cyan-100 blur-3xl" />

//                 <div className="relative rounded-[28px] bg-slate-50 p-3 shadow-inner ring-1 ring-slate-100">
//                   <img
//                     src="/hero/hero3.jpg"
//                     alt="AL-Ain Pharmaceutical"
//                     className="h-[280px] w-full rounded-3xl object-cover lg:h-[340px]"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import MaterialsSection from "./MaterialsSection";
import GalleryPage from "./GalleryPage";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      

      <MaterialsSection />

      <FeaturedProducts />

      <GalleryPage />

      {/* CTA CONTACT */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
            <div className="grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700"
                >
                  Work With AL-Ain Pharmaceutical
                </motion.p>

                <motion.h3
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
                >
                  Ready to partner with{" "}
                  <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                    AL-Ain
                  </span>
                  ?
                </motion.h3>

                <motion.p
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-8"
                >
                  We support bulk orders, trusted distribution, and dependable
                  pharmaceutical supply for human, veterinary, and agro  bio
                  chemical needs across Somalia.
                </motion.p>

                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                  className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-400 to-emerald-400 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-200 transition hover:opacity-95"
                  >
                    Browse Products
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-emerald-100 blur-3xl" />
                <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-lime-100 blur-3xl" />

                <div className="relative rounded-[28px] bg-slate-50 p-3 shadow-inner ring-1 ring-slate-100">
                  <img
                    src="/hero/hero3.jpg"
                    alt="AL-Ain Pharmaceutical"
                    className="h-[280px] w-full rounded-3xl object-cover lg:h-[340px]"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.png";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}