// // src/pages/GalleryPage.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const IMAGES = [
//   "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg",
//   "https://images.pexels.com/photos/12585200/pexels-photo-12585200.jpeg",
//   "https://media.istockphoto.com/id/1294954911/photo/medical-syringe-with-a-needle-and-a-bollte-with-vaccine.jpg?s=612x612&w=0&k=20&c=pEzje5dSAwJhbedTwB7oSddpvK3pOFUw-fFk13XKxgg=",
//   "https://images.pexels.com/photos/10022079/pexels-photo-10022079.jpeg",
// "https://www.iskonremedies.com/wp-content/uploads/2018/12/Veterinary-678-x-471.jpg",
  
 
  
//   "https://media.istockphoto.com/id/635949194/photo/3d-rendering-of-antibiotic-pills-in-blister-pack.jpg?s=612x612&w=0&k=20&c=PzUUGXVhDQJGARQiMnqCgGy7tQVtxCBLTb9GDJ4BfXc=",
//    "https://www.sciencepharma.com/wp-content/uploads/2024/09/forms_drugs_baner_rf-scaled.jpg",
   
//   "https://images.pexels.com/photos/30595021/pexels-photo-30595021.jpeg",
//   "https://www.verywellhealth.com/thmb/HXweuW5iQ5_fd0d6Jzoixs_wJAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/medicine-pills-463594335-ba46b2f34a764be6a9c0e56a308cb938.jpg",
  
//   "https://images.pexels.com/photos/5883856/pexels-photo-5883856.jpeg",
//   "https://png.pngtree.com/background/20230617/original/pngtree-assorted-pharmaceutical-pills-tablets-and-capsules-on-blue-background-3d-rendering-picture-image_3700317.jpg",
  
//   "https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-realistic-medicine-blister-pack-png-image_16246797.png",
// ];

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { duration: 0.45 } },
// };

// export default function GalleryPage() {
//   return (
//     <main className="relative min-h-screen bg-gradient-to-b from-white via-cyan-50/40 to-white">
//       {/* Title */}
//       <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-4 sm:pt-24">
//         <motion.h1
//           initial={{ y: -24, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-center text-[30px] sm:text-[36px] font-extrabold tracking-tight
//                      bg-gradient-to-r from-orange-500 to-blue-600
//                      bg-clip-text text-transparent"
//         >
//           Product Gallery
//         </motion.h1>

//         <motion.p
//           initial={{ y: 8, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.12, duration: 0.55 }}
//           className="mt-2 text-center text-gray-600 max-w-xl mx-auto"
//         >
//           A curated view of our veterinary & pharmaceutical visuals.
//         </motion.p>

//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           animate={{ width: 140, opacity: 1 }}
//           transition={{ delay: 0.25, duration: 0.6 }}
//           className="mx-auto mt-3 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-blue-600"
//         />
//       </section>

//       {/* Grid */}
//       <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           transition={{ staggerChildren: 0.05 }}
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
//         >
//           {IMAGES.map((src, i) => (
//             <motion.figure
//               key={i}
//               variants={item}
//               className="group relative overflow-hidden rounded-2xl
//                          border border-white/60 bg-white/80 shadow-[0_10px_25px_rgba(2,6,23,0.06)]
//                          backdrop-blur"
//             >
//               <div className="p-1.5">
//                 <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
//                   <motion.img
//                     src={src}
//                     alt=""
//                     loading="lazy"
//                     className="absolute inset-0 h-full w-full object-cover"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: 'spring', stiffness: 220, damping: 18 }}
//                   />
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
//                 </div>
//               </div>
//             </motion.figure>
//           ))}
//         </motion.div>
//       </section>
//     </main>
//   );
// }


//------------------------------------------------------------

// src/pages/GalleryPage.jsx
import React from "react";
import { motion } from "framer-motion";

// ✅ Halkan kaliya ayaan ka beddelay: isticmaal sawiradaada gudaha project-ka
// Ku dhig sawirrada folder la mid ah: public/images/gallery-1.jpg iwm.
const IMAGES = [
  "/images/ARTE-FAST.jfif",
  "/images/Tylovet.jfif",
  "/images/PLASIL.jfif",
  "/images/RELIEF TAB.jfif",
  "/images/ARTEMETHER.jfif",
  "/images/Novalgin.jfif",
  "/images/DISPOSABLE.jfif",
  "/images/AMPICILLING.jfif",
  "/images/GNYSOL.jfif",
  "/images/Pencillin.jfif",
  "/images/Top-One.jfif",
  
  "/images/FANSI TAB.jfif",
];

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-cyan-50/40 to-white">
      {/* Title */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-4 sm:pt-24">
        <motion.h1
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-[30px] sm:text-[36px] font-extrabold tracking-tight
                     bg-gradient-to-r from-orange-500 to-blue-600
                     bg-clip-text text-transparent"
        >
          Product Gallery
        </motion.h1>

        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.55 }}
          className="mt-2 text-center text-gray-600 max-w-xl mx-auto"
        >
          A curated view of our veterinary & pharmaceutical visuals.
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 140, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto mt-3 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-blue-600"
        />
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {IMAGES.map((src, i) => (
            <motion.figure
              key={i}
              variants={item}
              className="group relative overflow-hidden rounded-2xl
                         border border-white/60 bg-white/80 shadow-[0_10px_25px_rgba(2,6,23,0.06)]
                         backdrop-blur"
            >
              <div className="p-1.5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <motion.img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
