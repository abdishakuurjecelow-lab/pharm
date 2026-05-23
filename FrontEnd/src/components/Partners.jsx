// //new------------------------------
// import { motion } from "framer-motion";

// const logos = [
//   { src: "https://cdn.worldvectorlogo.com/logos/pfizer-5.svg", alt: "Pfizer" },
//   { src: "https://cdn.worldvectorlogo.com/logos/glaxosmithkline-2.svg", alt: "GlaxoSmithKline" },
//   { src: "https://cdn.worldvectorlogo.com/logos/bayer-4.svg", alt: "Bayer" },
//   { src: "https://cdn.worldvectorlogo.com/logos/virbac.svg", alt: "Virbac" },
//   { src: "https://cdn.worldvectorlogo.com/logos/pharmacy-syria.svg", alt: "Pharmacy" },
//   { src: "https://cdn.worldvectorlogo.com/logos/novartis-logo.svg", alt: "Novartis" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 14 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: "easeOut" },
//   },
// };

// export default function Partners() {
//   const loop = [...logos, ...logos];

//   return (
//     <section className="relative isolate bg-white py-16 sm:py-20">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.06),transparent_45%)]" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
//             Trusted Network
//           </p>

//           <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
//             Our <span className="italic text-green-600">Partners</span>
//           </h2>

//           <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
//             We value trusted relationships with well-known healthcare and veterinary brands.
//           </p>
//         </motion.div>

//         {/* Desktop marquee */}
//         <div className="mt-12 hidden overflow-hidden sm:block">
//           <ul className="flex min-w-full items-center gap-16 lg:gap-24 animate-[logoSlide_24s_linear_infinite]">
//             {loop.map((l, i) => (
//               <li
//                 key={`${l.alt}-${i}`}
//                 className="shrink-0 rounded-2xl bg-white/80 px-2 py-2"
//               >
//                 <img
//                   src={l.src}
//                   alt={l.alt}
//                   className="h-10 md:h-12 lg:h-14 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
//                   loading="lazy"
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile grid */}
//         <div className="mt-12 grid grid-cols-2 gap-6 sm:hidden">
//           {logos.map((l) => (
//             <div
//               key={l.alt}
//               className="flex items-center justify-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
//             >
//               <img
//                 src={l.src}
//                 alt={l.alt}
//                 className="h-8 opacity-80"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }