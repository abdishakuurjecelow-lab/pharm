// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-slate-950 text-white">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_28%)]" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <div className="flex items-center gap-3">
//               <img
//                 src="/logo.png"
//                 alt="AL-Ain logo"
//                 className="h-12 w-12 object-contain rounded-full bg-white p-1"
//               />
//               <div>
//                 <h3 className="text-lg font-extrabold">
//                   AL-Ain Pharmaceutical
//                 </h3>
//                 <p className="text-sm text-slate-300">
//                   Human • Veterinary • AGRO Bio Chemical
//                 </p>
//               </div>
//             </div>

//             <p className="max-w-sm text-sm leading-6 text-slate-300">
//               Trusted pharmaceutical solutions for human health, veterinary care,
//               and AGRO Bio Chemical support across Somalia.
//             </p>

//             <a
//               href="https://www.facebook.com/share/176wy4LsJ9/?mibextid=wwXIfr"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-green-400"
//             >
//               <FaFacebookF />
//             </a>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-bold">Quick Links</h4>
//             <ul className="mt-4 space-y-3 text-sm text-slate-300">
//               <li><Link to="/" className="hover:text-green-300 transition">Home</Link></li>
//               <li><Link to="/about" className="hover:text-green-300 transition">About Us</Link></li>
//               <li><Link to="/products" className="hover:text-green-300 transition">Products</Link></li>
//               <li><Link to="/contact" className="hover:text-green-300 transition">Contact Us</Link></li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-bold">Browse Types</h4>
//             <ul className="mt-4 space-y-3 text-sm text-slate-300">
//               <li>
//                 <Link
//                   to="/products?type=Human"
//                   className="hover:text-green-300 transition"
//                 >
//                   Human Products
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/products?type=Veterinary"
//                   className="hover:text-green-300 transition"
//                 >
//                   Veterinary Products
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/products?type=AGRO%20Bio%20Chemical"
//                   className="hover:text-green-300 transition"
//                 >
//                   AGRO  Bio Chemical
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-bold">Contact Info</h4>
//             <ul className="mt-4 space-y-4 text-sm text-slate-300">
//               <li className="flex items-start gap-3">
//                 <FaPhoneAlt className="mt-1 text-green-300" />
//                 <span>Landline: 655315</span>
//               </li>

//               <li className="flex items-start gap-3">
//                 <FaWhatsapp className="mt-1 text-green-300" />
//                 <a
//                   href="https://wa.me/252615896669"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="hover:text-green-300 transition"
//                 >
//                   +252 615896669
//                 </a>
//               </li>

//               <li className="flex items-start gap-3">
//                 <FaEnvelope className="mt-1 text-green-300" />
//                 <a
//                   href="mailto:al-ainpharma@gmail.com"
//                   className="hover:text-green-300 transition break-all"
//                 >
//                   al-ainpharma@gmail.com
//                 </a>
//               </li>

//               <li className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="mt-1 text-green-300" />
//                 <span>Mogadishu, Somalia</span>
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
//           <p>
//             © {new Date().getFullYear()} AL-Ain Pharmaceutical Company. All rights reserved.
//           </p>
//           <p>Built for trusted healthcare, veterinary, and agro supply.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }



//________________________________________________________________________________________


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="AL-Ain logo"
                className="h-12 w-12 object-contain rounded-full bg-white p-1"
              />
              <div>
                <h3 className="text-lg font-extrabold">
                  AL-Ain Pharmaceutical
                </h3>
                <p className="text-sm text-slate-300">
                  Human • Veterinary • AGRO Bio Chemical
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-300">
              Trusted pharmaceutical solutions for human health, veterinary care,
              and AGRO Bio Chemical support across Somalia.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/share/176wy4LsJ9/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-green-400 hover:text-slate-950"
              >
                <FaFacebookF />
              </a>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-green-300 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-300 transition">About Us</Link></li>
              <li><Link to="/products" className="hover:text-green-300 transition">Products</Link></li>
              <li><Link to="/contact" className="hover:text-green-300 transition">Contact Us</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold">Browse Types</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  to="/products?type=Human"
                  className="hover:text-green-300 transition"
                >
                  Human Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?type=Veterinary"
                  className="hover:text-green-300 transition"
                >
                  Veterinary Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?type=AGRO%20Bio%20Chemical"
                  className="hover:text-green-300 transition"
                >
                  AGRO Bio Chemical
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold">Contact Info</h4>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-green-300" />
                <span>Landline: 655315</span>
              </li>

              <li className="flex items-start gap-3">
                <FaWhatsapp className="mt-1 text-green-300" />
                <a
                  href="https://wa.me/252615896669"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-300 transition"
                >
                  +252 615896669
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-green-300" />
                <a
                  href="mailto:aphco655315@gmail.com"
                  className="hover:text-green-300 transition break-all"
                >
                  aphco655315@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-green-300" />
                <span>Mogadishu, Somalia</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} AL-Ain Pharmaceutical Company. All rights reserved.
          </p>
          <p>Built for trusted healthcare, veterinary, and agro supply.</p>
        </div>
      </div>
    </footer>
  );
}



