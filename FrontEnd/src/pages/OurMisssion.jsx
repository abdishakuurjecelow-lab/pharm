// import React from "react";
// import { motion } from "framer-motion";
// import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

// const cards = [
//   {
//     title: "Mission",
//     icon: <FaBullseye className="text-green-600  text-2xl" />,
//     desc: "To be the trusted leader in providing high-quality healthcare for people, animals, and agriculture across East Africa and beyond.",
//   },
//   {
//     title: "Vision",
//     icon: <FaEye className="text-emerald-600 text-2xl" />,
//     desc: "To deliver safe, effective, and high-quality medicines that meet the needs of customers andstakeholders, while adhering to international standards and best practices.",
//   },
//   {
//     title: "Values",
//     icon: <FaHandshake className="text-lime-600 text-2xl" />,
//     desc: "Ensure consistent supply of high-quality medicines compliant with international standards. Contribute to the improvement of public health in East Africa and beyond Collaborate with government and healthcare organizations. Uphold Islamic values and Somali cultural principles. Support communities during emergencies and natural disasters.",
//   },
// ];

// export default function OurMisssion() {
//   return (
//     <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
//             Vision • Mission • Values
//           </p>

//           <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
//             What drives us every day at{" "}
//             <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
//               AL-Ain Pharma
//             </span>
//           </h2>

//           <p className="mt-4 text-slate-600 leading-7">
//             Our purpose is built on trust, reliable service, and a strong commitment
//             to human medicine, veterinary care, and agricultural support.
//           </p>
//         </motion.div>

//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7">
//           {cards.map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.12 }}
//               className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
//             >
//               <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400" />
//               <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-50 blur-2xl" />

//               <div className="relative">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 mb-5">
//                   {item.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold text-slate-900">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 text-slate-600 leading-8 text-base">
//                   {item.desc}
//                 </p>

//                 <div className="mt-8 h-1.5 w-28 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





//----------------------------

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const cards = [
  {
    title: "Mission",
    icon: <FaBullseye className="text-green-600  text-2xl" />,
    desc: "To be the trusted leader in providing high-quality healthcare for people, animals, and agriculture across East Africa and beyond.",
  },
  {
    title: "Vision",
    icon: <FaEye className="text-emerald-600 text-2xl" />,
    desc: "To deliver safe, effective, and high-quality medicines that meet the needs of customers andstakeholders, while adhering to international standards and best practices.",
  },
  {
    title: "Values",
    icon: <FaHandshake className="text-lime-600 text-2xl" />,
    desc: "Ensure consistent supply of high-quality medicines compliant with international standards. Contribute to the improvement of public health in East Africa and beyond Collaborate with government and healthcare organizations. Uphold Islamic values and Somali cultural principles. Support communities during emergencies and natural disasters.",
  },
];

export default function OurMisssion() {
  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            Vision • Mission • Values
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            What drives us every day at{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
              AL-Ain Pharma
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7">
          {cards.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-[28px] border bg-white p-8 shadow"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}