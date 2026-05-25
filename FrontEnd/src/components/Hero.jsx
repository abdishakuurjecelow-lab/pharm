// // src/components/HeroSplit.jsx
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function HeroSplit() {
//   const subtitle =
//     "Delivering Trusted Human, Vetinary and Agrochemical Products That Advance Health and Productivity.";

//   const images = ["/mockup1.jpg", "/mockup2.jpg", "/mockup3.jpg"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden pt-28 pb-16 sm:pt-28 sm:pb-24 bg-gray-300"
//     >
//       <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:px-12 md:grid-cols-2">
//         {/* LEFT */}
//         <div className="text-center md:text-left">
//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.05, duration: 0.55 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight"
//           >
//             <motion.span
//               initial={{ backgroundPosition: "0% 50%" }}
//               animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//               style={{ backgroundSize: "200% 200%" }}
//               className="bg-gradient-to-r from-orange-500 via-cyan-500 to-blue-600 
//                          bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]"
//             >
//               AL-AIN PHARMACEUTICAL COMPANY 
//             </motion.span>
//           </motion.h1>

//           <motion.div
//             initial={{ scaleX: 0, opacity: 0 }}
//             animate={{ scaleX: 1, opacity: 1 }}
//             transition={{ delay: 0.15, duration: 0.5 }}
//             className="mx-auto md:mx-0 mt-3 h-1 w-40 origin-left rounded-full 
//                        bg-gradient-to-r from-orange-500 via-cyan-500 to-blue-600"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-5 max-w-xl text-base sm:text-lg text-gray-800/90 md:mx-0 mx-auto"
//           >
//             {subtitle}
//           </motion.p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             {/* ✅ Explore Products now goes to /products */}
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/products"
//               className="inline-flex items-center justify-center rounded-xl 
//                          bg-gradient-to-r from-orange-500 to-blue-600 px-6 py-3 
//                          font-semibold text-white shadow-md transition-all duration-300"
//             >
//               Explore Products
//             </motion.a>

//             {/* ✅ Contact Us remains the same */}
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-xl border border-black/10 
//                          px-6 py-3 font-semibold bg-white/90 hover:bg-white text-gray-800 
//                          shadow-sm transition-all duration-300"
//             >
//               Contact Us
//             </motion.a>
//           </div>
//         </div>

//         {/* RIGHT: Slider */}
//         <div className="relative flex justify-center md:justify-end">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 0.25, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="pointer-events-none absolute -top-8 -right-8 h-64 w-64 
//                        rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-3xl"
//           />

//           <div className="relative w-[24rem] h-[26rem] overflow-hidden rounded-2xl shadow-xl border border-black/10">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={index}
//                 src={images[index]}
//                 alt={`Mockup ${index + 1}`}
//                 className="absolute inset-0 h-full w-full object-cover"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.7 }}
//               />
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// ----------------------------------------------------------------------


// // src/components/HeroSplit.jsx
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function HeroSplit() {
//   const subtitle =
//     "Delivering Trusted Human, Vetinary and Agrochemical Products That Advance Health and Productivity.";

//   const images = [
//     "/hero/hero1.jpg",
//     "/hero/hero2.jpg",
//     "/hero/hero3.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="relative h-screen w-full overflow-hidden">
//       {/* BACKGROUND SLIDER */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0, scale: 1.04 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.4, ease: "easeInOut" }}
//           style={{
//             backgroundImage: `url(${images[index]})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </AnimatePresence>

//       {/* OVERLAY (opacity yar) */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* CENTER CONTENT */}
//       <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
//         <div className="max-w-4xl">
//           {/* ONE LINE TITLE */}
//           <motion.h1
//             initial={{ y: 25, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-2xl sm:text-4xl lg:text-4xl font-extrabold uppercase text-white whitespace-nowrap"
//           >
//             <motion.span
//               initial={{ backgroundPosition: "0% 50%" }}
//               animate={{
//                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               }}
//               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//               style={{ backgroundSize: "200% 200%" }}
//               className="bg-white 
//                          bg-clip-text text-transparent"
//             >
//               AL-AIN PHARMACEUTICAL COMPANY
//             </motion.span>
//           </motion.h1>

//           {/* LINE */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="mx-auto mt-4 h-1 w-44 origin-center rounded-full 
//                        bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500"
//           />

//           {/* SUBTITLE */}
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mx-auto mt-6 max-w-2xl text-base sm:text-xl text-white/90"
//           >
//             {subtitle}
//           </motion.p>

//           {/* BUTTONS */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/products"
//               className="rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 
//                          px-7 py-3 font-semibold text-white shadow-lg"
//             >
//               Explore Products
//             </motion.a>

//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/contact"
//               className="rounded-xl bg-white/90 px-7 py-3 
//                          font-semibold text-gray-900 shadow-lg"
//             >
//               Contact Us
//             </motion.a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


//++++++++++++++++++++++++++



// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function HeroSplit() {
//   const subtitle =
//     "Delivering Trusted Human, Vetinary and Agrochemical Products That Advance Health and Productivity.";

//   const images = [
//     "/hero/hero1.jpg",
//     "/hero/hero2.jpg",
//     "/hero/hero3.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.3 }}
//           style={{
//             backgroundImage: `url(${images[index]})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </AnimatePresence>

//       <div className="absolute inset-0 bg-black/30" />

//       <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
//         <div className="max-w-4xl">
//           <h1 className="text-4xl font-extrabold text-white uppercase">
//             AL-AIN PHARMACEUTICAL COMPANY
//           </h1>

//           <div className="mx-auto mt-4 h-1 w-44 bg-blue-500 rounded-full" />

//           <p className="mt-6 text-white/90 text-lg">
//             {subtitle}
//           </p>

//           <div className="mt-10 flex gap-4 justify-center">
//             <a
//               href="/products"
//               className="px-7 py-3 rounded-xl bg-orange-500 text-white font-semibold"
//             >
//               Explore Products
//             </a>
//             <a
//               href="/contact"
//               className="px-7 py-3 rounded-xl bg-white text-gray-900 font-semibold"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function HeroSection() {
//   const subtitle = '';

//   // 3 images array (use your images here)
//   const images = [
//     "/hero/hero1.jpg", // Add new image paths here
//     "/hero/hero2.jpg",
//     "/hero/hero3.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="relative h-screen w-full overflow-hidden">
//       {/* BACKGROUND SLIDER */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0, scale: 1.04 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.4, ease: 'easeInOut' }}
//           style={{
//             backgroundImage: `url(${images[index]})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//       </AnimatePresence>

//       {/* OVERLAY (opacity yar) */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* TEXT (Positioned Top Left) */}
//       <div className="absolute top-36 left-28 text-white font-semibold text-3xl sm:text-4xl">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 1 }}
//           className="bg-clip-text text-transparent text-white"
//         >
//           Quality You Can Trust
//         </motion.h1>
//       </div>

//       {/* Optional subtitle (optional positioning below main text) */}
//       <div className="absolute top-24 left-10 text-white font-medium text-lg sm:text-xl">
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 1 }}
//         >
//           {subtitle}
//         </motion.p>
//       </div>
//     </section>
//   );
// }


//new--------------------------------

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function HeroSection() {
//   const slides = [
//     {
//       image: "/hero/hero1.jpg",
//       title: "Quality You Can Trust",
//       text: "Reliable pharmaceutical, veterinary, and agro solutions delivered with professionalism and care.",
//     },
//     {
//       image: "/hero/hero2.jpg",
//       title: "Trusted Healthcare Supply",
//       text: "We provide dependable products for communities, professionals, and partners across Somalia.",
//     },
//     {
//       image: "/hero/hero3.jpg",
//       title: "Human • Veterinary • Agro",
//       text: "A strong distribution network, quality products, and long-term customer confidence.",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section id="home" className="relative min-h-[78vh] sm:min-h-[84vh] w-full overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0, scale: 1.04 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           style={{
//             backgroundImage: `url(${slides[index].image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-900/20" />
//       <div className="absolute inset-0 bg-black/25" />

//       {/* Content */}
//       <div className="relative mx-auto flex min-h-[78vh] sm:min-h-[84vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl text-white">
//           <motion.p
//             key={`tag-${index}`}
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45 }}
//             className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
//           >
//             AL-Ain Pharmaceutical Company
//           </motion.p>

//           <motion.h1
//             key={`title-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
//           >
//             {slides[index].title}
//           </motion.h1>

//           <motion.p
//             key={`text-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.65, delay: 0.08 }}
//             className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-200 leading-8"
//           >
//             {slides[index].text}
//           </motion.p>

//           <motion.div
//             key={`actions-${index}`}
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.65, delay: 0.14 }}
//             className="mt-8 flex flex-col sm:flex-row gap-4"
//           >
//             <Link
//               to="/products"
//               className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-900/20 transition hover:bg-green-600"
//             >
//               Explore Products
//             </Link>

//             <Link
//               to="/contact"
//               className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
//             >
//               Contact Us
//             </Link>
//           </motion.div>

//           {/* Indicators */}
//           <div className="mt-10 flex items-center gap-3">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`h-2.5 rounded-full transition-all ${
//                   i === index ? "w-10 bg-green-400" : "w-2.5 bg-white/60 hover:bg-white"
//                 }`}
//                 aria-label={`Go to slide ${i + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


//-------------------------------



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const slides = [
    {
      image: "/hero/hero1.jpg",
      title: "Quality You Can Trust",
      text: "Reliable pharmaceutical and veterinary supply for communities, professionals, and partners across Somalia.",
    },
    {
      image: "/hero/hero2.jpg",
      title: "Trusted Healthcare Supply",
      text: "We deliver dependable products with professional support, strong distribution, and long-term customer confidence.",
    },
    {
      image: "/hero/hero3.jpg",
      title: "Human • Veterinary • AGRO",
      text: "A trusted company focused on quality products, reliable service, and sustainable partnerships.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[72vh] sm:min-h-[78vh] lg:min-h-[82vh]">
        {/* BACKGROUND IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${slides[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-900/35 to-slate-900/10" />
        <div className="absolute inset-0 bg-black/10" />

        {/* LIGHT GREEN GLOW */}
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-green-300/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />

        {/* CONTENT */}
        <div className="relative mx-auto flex min-h-[72vh] sm:min-h-[78vh] lg:min-h-[82vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              key={`tag-${index}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 inline-flex rounded-full border border-white/25 bg-white/12 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm"
            >
              AL-Ain Pharmaceutical Company
            </motion.p>

            <motion.h1
              key={`title-${index}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[0.95] text-white drop-shadow-sm"
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              key={`text-${index}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-100"
            >
              {slides[index].text}
            </motion.p>

            <motion.div
              key={`buttons-${index}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-2xl bg-green-400 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-900/15 transition hover:bg-green-500"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/16"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* INDICATORS */}
            <div className="mt-10 flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all ${
                    i === index
                      ? "h-3 w-14 bg-green-300"
                      : "h-3 w-3 bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



//-----------------------------------------------------------------


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function HeroSection() {
//   const slides = [
//     {
//       image: "/hero/hero1.jpg",
//       title: "Trusted Human Medicine",
//     },
//     {
//       image: "/hero/hero2.jpg",
//       title: "Reliable Veterinary Care",
//     },
//     {
//       image: "/hero/hero3.jpg",
//       title: "Advanced AGRO Bio Chemical",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="relative h-[68vh] sm:h-[78vh] lg:h-[86vh] w-full overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             className="absolute inset-0 w-full h-full"
//             initial={{ opacity: 0.2, scale: 1.03 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0.2, scale: 1.01 }}
//             transition={{ duration: 0.9, ease: "easeInOut" }}
//             style={{
//               backgroundImage: `url(${slides[index].image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//         </AnimatePresence>

//         {/* soft overlay only */}
//         <div className="absolute inset-0 bg-black/12" />

//         {/* content */}
//         <div className="relative mx-auto flex h-full max-w-7xl items-start px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
//           <div className="max-w-3xl">
//             <motion.h1
//               key={`title-${index}`}
//               initial={{ opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55 }}
//               className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight"
//             >
//               {slides[index].title}
//             </motion.h1>
//           </div>
//         </div>

//         {/* indicators */}
//         <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`rounded-full transition-all duration-300 ${
//                 i === index
//                   ? "h-3 w-3 bg-orange-400"
//                   : "h-3 w-3 bg-white/80 hover:bg-white"
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

