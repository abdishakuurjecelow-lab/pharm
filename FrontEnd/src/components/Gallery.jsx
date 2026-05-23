// import React from "react";
// import { motion } from "framer-motion";

// const IMAGES = [
//   "/",
//   "/gallery/2.jpg",
//   "/gallery/3.jpg",
//   "/gallery/4.jpg",
//   "/gallery/5.jpg",
//   "/gallery/6.jpg",
//   "/gallery/7.jpg",
//   "/gallery/8.jpg",
//   "/gallery/9.jpg",
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.08, delayChildren: 0.12 },
//   },
// };
// const card = {
//   hidden: { y: 18, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
// };

// export default function Gallery() {
//   return (
//     <section className="relative py-14 sm:py-16 lg:py-20">
//       {/* subtle bg */}
//       <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 sm:mb-10">
//           <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//             Our Gallery View
//           </span>
//         </h2>

//         {/* grid responsive, equal height cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-80px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
//         >
//           {IMAGES.map((src, i) => (
//             <motion.div
//               key={i}
//               variants={card}
//               className="group rounded-3xl overflow-hidden bg-white/80 border border-white/50 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur"
//             >
//               {/* wrapper keeps all same height across breakpoints */}
//               <div className="relative h-[42vh] sm:h-[46vh] lg:h-[50vh]">
//                 <motion.img
//                   src={src}
//                   alt=""
//                   loading="lazy"
//                   className="absolute inset-0 h-full w-full object-cover"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 250, damping: 20 }}
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop";
//                   }}
//                 />
//                 {/* clean highlight on hover (no text) */}
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


//new------------------------

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IMAGES = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const card = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function GalleryPage() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700"
          >
            Product Showcase
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Product Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-8"
          >
            A curated view of our pharmaceutical and veterinary product range.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              variants={card}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_38px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-[250px] sm:h-[280px] lg:h-[300px] overflow-hidden">
                <motion.img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop";
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}