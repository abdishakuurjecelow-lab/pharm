// // src/components/MaterialsSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const stats = [
//   { label: "Years of experience", value: "33+" },
//   { label: "Happy clients", value: "100k" },
//   { label: "Our Products", value: "300k+" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
//   }),
// };

// export default function MaterialsSection() {
//   return (
//     <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//       {/* card bg */}
//       <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-xl">
//         {/* decorative blob */}
//         <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

//         {/* content grid */}
//         <div className="grid grid-cols-1 gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-14">
//           {/* text side */}
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="flex flex-col justify-center"
//           >
//             <motion.h2
//               variants={fadeUp}
//               className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
//             >
//               We Produce High-quality Medicine.
//             </motion.h2>

//             <motion.p
//               variants={fadeUp}
//               custom={1}
//               className="mt-4 text-slate-600 leading-relaxed"
//             >
//               Our commitment to the careful selection of top-quality materials
//               and reliable suppliers ensures our customers get a wide range of
//               premium options you can trust.
//             </motion.p>

//             <motion.div variants={fadeUp} custom={2} className="mt-6">
//               <a
//                 href="#learn-more"
//                 className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-2.5 font-semibold text-white shadow-sm transition hover:bg-cyan-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
//               >
//                 Learn more
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* image side */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="relative"
//           >
//             <motion.div
//               // subtle floating loop
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="rounded-2xl bg-white/60 p-2 shadow-[0_10px_40px_rgba(2,6,23,0.10)] backdrop-blur"
//             >
//               <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
//                 <img
//                   src="/materi.png"
//                   alt="Interior"
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* stats */}
//         <div className="border-t border-slate-200 px-6 pb-8 pt-6 sm:px-8">
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//             {stats.map((s, i) => (
//               <motion.div
//                 key={s.label}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.4 }}
//                 custom={i}
//                 className="rounded-2xl bg-white/70 p-4 text-center shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
//                   {s.value}
//                 </div>
//                 <div className="mt-1 text-sm font-medium text-slate-600">
//                   {s.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



//new--------------------------------


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years of experience", value: "20+" },
  { label: "Happy clients", value: "100k+" },
  { label: "Our Products", value: "1k+" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
  }),
};

export default function MaterialsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        {/* decorative */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="grid grid-cols-1 gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
          {/* text side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex w-fit rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700"
            >
              About Our Company
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              We deliver high-quality medicine with care and consistency.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-base sm:text-lg text-slate-600 leading-8"
            >
              Our commitment to careful product selection, trusted manufacturers,
              and reliable supply ensures customers receive dependable
              pharmaceutical and veterinary solutions they can confidently use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
              >
                Learn More
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View Products
              </Link>
            </motion.div>
          </motion.div>

          {/* image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[28px] bg-white/70 p-3 shadow-[0_16px_45px_rgba(2,6,23,0.10)] backdrop-blur"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <img
                  src="/materi.png"
                  alt="AL-Ain products"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/hero/hero2.jpg";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* stats */}
        <div className="border-t border-slate-200 px-6 pb-8 pt-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={i}
                className="rounded-3xl bg-white/80 p-5 text-center shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm sm:text-base font-medium text-slate-600">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}