// import { NavLink } from "react-router-dom";
// import { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Pill, Syringe, Droplets, Menu, X, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const timeoutRef = useRef(null);

//   const openMenu = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setOpen(true);
//   };

//   const closeMenu = () => {
//     timeoutRef.current = setTimeout(() => {
//       setOpen(false);
//     }, 220);
//   };

//   const navClass = ({ isActive }) =>
//     `px-5 py-2.5 rounded-full text-sm font-semibold transition ${
//       isActive
//         ? "bg-green-100 text-green-700 shadow-sm"
//         : "text-slate-700 hover:bg-green-50 hover:text-green-700"
//     }`;

//   return (
//     <>
//       <div className="bg-green-300 text-slate-900">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
//           <span className="text-sm sm:text-medium font-medium">
//             Welcome To Our Website
//           </span>

//           <div className="flex items-center gap-2 text-sm sm:text-medium font-medium">
//             <img
//               src="/Calanka Somalia.jpg"
//               alt="Somalia flag"
//               className="w-7 h-5 object-cover rounded-sm"
//             />
//             <span>Somalia</span>
//           </div>
//         </div>
//       </div>

//       <header className="sticky top-0 z-[999] bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
//         <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex min-h-[92px] items-center justify-between gap-4">
//             <NavLink to="/" className="flex items-center gap-4 shrink-0">
//               <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100">
//                 <img
//                   src="/logo.png"
//                   alt="AL-Ain logo"
//                   className="h-11 w-11 object-contain"
//                 />
//               </div>

//               <div>
//                 <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
//                   AL-Ain Pharmaceutical
//                 </h1>
//                 <p className="text-sm sm:text-medium text-slate-500">
//                   Human • Veterinary • Agro Bio Chemical
//                 </p>
//               </div>
//             </NavLink>

//             <ul className="hidden md:flex items-center gap-3 lg:gap-5">
//               <li>
//                 <NavLink to="/" className={navClass}>
//                   Home
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/about" className={navClass}>
//                   About
//                 </NavLink>
//               </li>

//               <li
//                 className="relative"
//                 onMouseEnter={openMenu}
//                 onMouseLeave={closeMenu}
//               >
//                 <button
//                   className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition ${
//                     open
//                       ? "bg-green-50 text-green-700"
//                       : "text-slate-700 hover:bg-green-50 hover:text-green-700"
//                   }`}
//                 >
//                   Products
//                   <ChevronDown size={16} />
//                 </button>

//                 <AnimatePresence>
//                   {open && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 8 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 top-14 w-[760px] rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
//                     >
//                       <div className="grid grid-cols-3 gap-6">
//                         {/* HUMAN */}
//                         <div className="rounded-2xl bg-green-50/70 p-4">
//                           <NavLink
//                             to="/products?type=Human"
//                             className="block text-base font-bold text-slate-900 mb-4"
//                           >
//                             Human
//                           </NavLink>

//                           <ul className="space-y-3 text-sm">
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Tablets"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Pill size={16} className="text-green-600" />
//                                 Tablets
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Capsules"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Pill size={16} className="text-green-600" />
//                                 Capsules
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Injections"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Syringe size={16} className="text-green-600" />
//                                 Injections
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Drops"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Droplets size={16} className="text-green-600" />
//                                 Drops
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Syrups"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Droplets size={16} className="text-green-600" />
//                                 Syrups
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Shampoo"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 🧴 Shampoo
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Creams"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 🧴 Creams
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Infusions"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 💧 Infusions
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Human&cat=Disposals"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 🗑 Disposals
//                               </NavLink>
//                             </li>
//                           </ul>
//                         </div>

//                         {/* VETERINARY */}
//                         <div className="rounded-2xl bg-emerald-50/70 p-4">
//                           <NavLink
//                             to="/products?type=Veterinary"
//                             className="block text-base font-bold text-slate-900 mb-4"
//                           >
//                             Veterinary
//                           </NavLink>

//                           <ul className="space-y-3 text-sm">
//                             <li>
//                               <NavLink
//                                 to="/products?type=Veterinary&cat=Tablets%20%26%20Bollus"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Pill size={16} className="text-green-600" />
//                                 Tablets & Bollus
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Veterinary&cat=Injections"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Syringe size={16} className="text-green-600" />
//                                 Injections
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink
//                                 to="/products?type=Veterinary&cat=Oral%20Syrups"
//                                 className="flex items-center gap-2 text-slate-700 hover:text-green-700"
//                               >
//                                 <Droplets size={16} className="text-green-600" />
//                                 Oral Syrups
//                               </NavLink>
//                             </li>
//                           </ul>
//                         </div>

//                         {/* AGRO */}
//                         <div className="rounded-2xl bg-lime-50/70 p-4">
//                           <NavLink
//                             to="/products?type=AGRO%20Bio%20Chemical"
//                             className="block text-base font-bold text-slate-900 mb-4"
//                           >
//                             AGRO Bio Chemical
//                           </NavLink>

//                           <p className="text-sm text-slate-600 leading-7">
//                             Agro Bio Chemical products do not use category
//                             filtering. You can browse all products directly from
//                             this section.
//                           </p>

//                           <NavLink
//                             to="/products?type=AGRO%20Bio%20Chemical"
//                             className="mt-4 inline-flex rounded-xl bg-green-400 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition"
//                           >
//                             View AGRO Products
//                           </NavLink>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </li>

//               <li>
//                 <NavLink to="/contact" className={navClass}>
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>

//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="md:hidden inline-flex items-center justify-center rounded-2xl border border-slate-200 p-3 text-slate-700"
//             >
//               {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>

//           <AnimatePresence>
//             {mobileOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -8 }}
//                 className="md:hidden pb-5"
//               >
//                 <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-lg space-y-2">
//                   <NavLink
//                     to="/"
//                     className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-green-50"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Home
//                   </NavLink>

//                   <NavLink
//                     to="/about"
//                     className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-green-50"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     About
//                   </NavLink>

//                   <NavLink
//                     to="/products"
//                     className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-green-50"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Products
//                   </NavLink>

//                   <NavLink
//                     to="/products?type=Human&cat=Tablets"
//                     className="block rounded-2xl px-4 py-3 bg-green-50 text-slate-700"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Human Tablets
//                   </NavLink>

//                   <NavLink
//                     to="/products?type=Human&cat=Drops"
//                     className="block rounded-2xl px-4 py-3 bg-green-50 text-slate-700"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Human Drops
//                   </NavLink>

//                   <NavLink
//                     to="/products?type=Veterinary&cat=Tablets%20%26%20Bollus"
//                     className="block rounded-2xl px-4 py-3 bg-green-50 text-slate-700"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Veterinary Tablets & Bollus
//                   </NavLink>

//                   <NavLink
//                     to="/products?type=AGRO%20Bio%20Chemical"
//                     className="block rounded-2xl px-4 py-3 bg-green-50 text-slate-700"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     AGRO Bio Chemical
//                   </NavLink>

//                   <NavLink
//                     to="/contact"
//                     className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-green-50"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Contact Us
//                   </NavLink>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </nav>
//       </header>
//     </>
//   );
// }




import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, Syringe, Droplets, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef(null);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 220);
  };

  const closeMobile = () => setMobileOpen(false);

  const navClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-semibold transition ${
      isActive
        ? "bg-green-100 text-green-700 shadow-sm"
        : "text-slate-700 hover:bg-green-50 hover:text-green-700"
    }`;

  return (
    <>
      <div className="bg-green-300 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
          <span className="text-sm sm:text-medium font-medium">
            Welcome To Our Website
          </span>

          <div className="flex items-center gap-2 text-sm sm:text-medium font-medium">
            <img
              src="/Calanka Somalia.jpg"
              alt="Somalia flag"
              className="w-7 h-5 object-cover rounded-sm"
            />
            <span>Somalia</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-[999] bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[92px] items-center justify-between gap-4">
            <NavLink to="/" className="flex items-center gap-4 shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100">
                <img
                  src="/logo.png"
                  alt="AL-Ain logo"
                  className="h-11 w-11 object-contain"
                />
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  AL-Ain Pharmaceutical
                </h1>
                <p className="text-sm sm:text-medium text-slate-500">
                  Human • Veterinary • Agro Bio Chemical
                </p>
              </div>
            </NavLink>

            <ul className="hidden md:flex items-center gap-3 lg:gap-5">
              <li>
                <NavLink to="/" className={navClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navClass}>
                  About
                </NavLink>
              </li>

              <li
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <button
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                    open
                      ? "bg-green-50 text-green-700"
                      : "text-slate-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  Products
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-14 w-[760px] rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        <div className="rounded-2xl bg-green-50/70 p-4">
                          <NavLink
                            to="/products?type=Human"
                            className="block text-base font-bold text-slate-900 mb-4"
                          >
                            Human
                          </NavLink>

                          <ul className="space-y-3 text-sm">
                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Tablets"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Pill size={16} className="text-green-600" />
                                Tablets
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Capsules"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Pill size={16} className="text-green-600" />
                                Capsules
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Injections"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Syringe size={16} className="text-green-600" />
                                Injections
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Drops"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Droplets size={16} className="text-green-600" />
                                Drops
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Syrups"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Droplets size={16} className="text-green-600" />
                                Syrups
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Shampoo"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                🧴 Shampoo
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Creams"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                🧴 Creams
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Infusions"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                💧 Infusions
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Human&cat=Disposals"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                🗑 Disposals
                              </NavLink>
                            </li>
                          </ul>
                        </div>

                        <div className="rounded-2xl bg-emerald-50/70 p-4">
                          <NavLink
                            to="/products?type=Veterinary"
                            className="block text-base font-bold text-slate-900 mb-4"
                          >
                            Veterinary
                          </NavLink>

                          <ul className="space-y-3 text-sm">
                            <li>
                              <NavLink
                                to="/products?type=Veterinary&cat=Tablets%20%26%20Bollus"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Pill size={16} className="text-green-600" />
                                Tablets & Bollus
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Veterinary&cat=Injections"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Syringe size={16} className="text-green-600" />
                                Injections
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/products?type=Veterinary&cat=Oral%20Syrups"
                                className="flex items-center gap-2 text-slate-700 hover:text-green-700"
                              >
                                <Droplets size={16} className="text-green-600" />
                                Oral Syrups
                              </NavLink>
                            </li>
                          </ul>
                        </div>

                        <div className="rounded-2xl bg-lime-50/70 p-4">
                          <NavLink
                            to="/products?type=AGRO%20Bio%20Chemical"
                            className="block text-base font-bold text-slate-900 mb-4"
                          >
                            AGRO Bio Chemical
                          </NavLink>

                          <p className="text-sm text-slate-600 leading-7">
                            Browse our Agro Bio Chemical products directly from
                            this section.
                          </p>

                          <NavLink
                            to="/products?type=AGRO%20Bio%20Chemical"
                            className="mt-4 inline-flex rounded-xl bg-green-400 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition"
                          >
                            View AGRO Products
                          </NavLink>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <NavLink to="/contact" className={navClass}>
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-2xl border border-slate-200 p-3 text-slate-700 shadow-sm transition hover:bg-green-50"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="md:hidden pb-6"
              >
                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white/95 backdrop-blur-xl p-5 shadow-2xl">
                  <div className="space-y-3">
                    <NavLink
                      to="/"
                      className="flex items-center rounded-2xl px-4 py-3 text-[17px] font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700"
                      onClick={closeMobile}
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="/about"
                      className="flex items-center rounded-2xl px-4 py-3 text-[17px] font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700"
                      onClick={closeMobile}
                    >
                      About
                    </NavLink>

                    <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-800">
                          Products
                        </h3>

                        <ChevronDown size={20} className="text-green-700" />
                      </div>

                      <div className="space-y-3">
                        <NavLink
                          to="/products?type=Human"
                          className="flex items-center rounded-2xl bg-white px-4 py-3 text-[16px] font-medium text-slate-700 shadow-sm transition hover:scale-[1.02] hover:bg-green-100"
                          onClick={closeMobile}
                        >
                          💊 Human
                        </NavLink>

                        <NavLink
                          to="/products?type=Veterinary"
                          className="flex items-center rounded-2xl bg-white px-4 py-3 text-[16px] font-medium text-slate-700 shadow-sm transition hover:scale-[1.02] hover:bg-green-100"
                          onClick={closeMobile}
                        >
                          🐄 Veterinary
                        </NavLink>

                        <NavLink
                          to="/products?type=AGRO%20Bio%20Chemical"
                          className="flex items-center rounded-2xl bg-white px-4 py-3 text-[16px] font-medium text-slate-700 shadow-sm transition hover:scale-[1.02] hover:bg-green-100"
                          onClick={closeMobile}
                        >
                          🌱 Agro Biochemical
                        </NavLink>
                      </div>
                    </div>

                    <NavLink
                      to="/contact"
                      className="flex items-center rounded-2xl px-4 py-3 text-[17px] font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700"
                      onClick={closeMobile}
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}