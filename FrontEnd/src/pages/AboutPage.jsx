// import React from "react";
// import { motion } from "framer-motion";
// import { FaPills, FaSyringe, FaMedkit } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import OurMission from "../pages/OurMisssion";

// const AboutPage = () => {
//   const features = [
//     {
//       title: "Certified Quality",
//       icon: <FaMedkit size={28} className="text-green-600" />,
//       desc: "Batch-tested and professionally sourced products you can trust.",
//     },
//     {
//       title: "Wide Range",
//       icon: <FaPills size={28} className="text-emerald-600" />,
//       desc: "Human medicines, veterinary products, and agro solutions for multiple needs.",
//     },
//     {
//       title: "Reliable Supply",
//       icon: <FaSyringe size={28} className="text-lime-600" />,
//       desc: "Strong stock availability, dependable service, and smooth distribution support.",
//     },
//   ];

//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* ✅ Hero Section */}
//       <section className="relative w-full h-[34vh] md:h-[40vh] mb-10 flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/hero/About.jpg"
//             alt="About AL-Ain Pharmaceutical"
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.currentTarget.src = "/hero/hero1.jpg";
//             }}
//           />
//         </div>

//         <div className="absolute inset-0 bg-slate-950/55" />
//         <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 via-emerald-500/10 to-lime-400/10" />

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative text-center text-white px-4 max-w-4xl"
//         >
//           <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm mb-4">
//             About AL-Ain Pharmaceutical
//           </p>

//           <h1 className="text-3xl md:text-5xl font-extrabold">
//             Trusted Human, Veterinary & Agro Solutions
//           </h1>

//           <p className="mt-3 text-sm md:text-lg text-white/85 max-w-2xl mx-auto">
//             Quality products, dependable service, and long-term partnership across Somalia.
//           </p>
//         </motion.div>
//       </section>

//       {/* ✅ Why Choose Us / Our Value */}
//       <section className="py-14 px-6 md:px-16 bg-white">
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
//             Why Choose Us
//           </p>

//           <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
//             Why Choose{" "}
//             <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
//               AL-Ain Pharmaceutical
//             </span>
//             ?
//           </h2>

//           <p className="mt-4 text-slate-600 leading-7">
//             Reliable, compliant, and affordable products for human medicine,
//             veterinary care, and agricultural support — backed by professional service
//             and trusted supply.
//           </p>
//         </motion.div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.12 }}
//               className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
//             >
//               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400" />

//               <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
//                 {f.icon}
//               </div>

//               <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>

//               <p className="text-slate-600 text-sm leading-7 mt-3">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Our Mission */}
//       <OurMission />

//       {/* ✅ Our Story */}
//       <section className="py-14 px-6 md:px-16 bg-slate-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl font-bold text-slate-900"
//           >
//             Our <span className="text-green-600">Story</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="mt-4 text-slate-600 leading-relaxed"
//           >
//             AL-AIN Pharmaceutical Company is a partnership company engaged in the importation and distribution of high-quality medicines sourced from international markets, with the aim of meeting the healthcare needs of the Somali community. The company provides a wide range of products, including human, veterinary, and agricultural medicines.
// Founded in 2006, the company was established during a critical period following the collapse of central government institutions in Somalia, when access to quality medicines was severely limited. Its headquarters is located in Mogadishu.
// AL-AIN operates multiple branches in different cities across Somalia, as well as in South Sudan under the name Tawakal Pharmaceutical. The company continues to pursue strategic expansion across the region.
//           </motion.p>
//         </div>
//       </section>

     

//       {/* ✅ Contact CTA */}
//       <section className="py-14 px-6 md:px-16 bg-slate-950 text-white text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold"
//         >
//           Get in Touch
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="mt-3 text-slate-300 max-w-2xl mx-auto"
//         >
//           Questions about compliance, bulk orders, or distribution? Reach out —
//           our support team is here 24/7 to help.
//         </motion.p>

//         <Link to="/contact">
//           <motion.button
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35 }}
//             className="mt-6 px-6 py-3 bg-green-400 text-slate-950 font-semibold rounded-xl hover:bg-green-500 transition-all"
//           >
//             Contact Us
//           </motion.button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;




//==========================================


// import React from "react";
// import { motion } from "framer-motion";
// import { FaPills, FaSyringe, FaMedkit } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import OurMission from "../pages/OurMisssion";

// const AboutPage = () => {
//   const features = [
//     {
//       title: "Certified Quality",
//       icon: <FaMedkit size={28} className="text-green-600" />,
//       desc: "Batch-tested and professionally sourced products you can trust.",
//     },
//     {
//       title: "Wide Range",
//       icon: <FaPills size={28} className="text-emerald-600" />,
//       desc: "Human medicines, veterinary products, and agro solutions for multiple needs.",
//     },
//     {
//       title: "Reliable Supply",
//       icon: <FaSyringe size={28} className="text-lime-600" />,
//       desc: "Strong stock availability, dependable service, and smooth distribution support.",
//     },
//   ];

//   const certificates = [
//     {
//       title: "COMMERCIAL LICENSE",
//       image: "/certificates/cert1.jpg",
//     },
//     {
//       title: "CERTIFICATE OF INCORPORATION",
//       image: "/certificates/cert2.jpg",
//     },
//     {
//       title: "BUSINESS PERMIT",
//       image: "/certificates/cert3.jpg",
//     },
//   ];

//   return (
//     <div className="bg-slate-50 min-h-screen">
//       <section className="relative w-full h-[34vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="/hero/About.jpg"
//           alt="About"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />

//         <h1 className="relative text-white text-3xl md:text-5xl font-bold">
//           About AL-Ain Pharmaceutical
//         </h1>
//       </section>

//       <section className="py-14 px-6 md:px-16 bg-white">
//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -6 }}
//               className="bg-white p-7 rounded-2xl shadow border"
//             >
//               <div className="mb-4">{f.icon}</div>
//               <h3 className="font-bold text-lg">{f.title}</h3>
//               <p className="text-sm mt-2 text-gray-600">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <OurMission />

//       <section className="py-14 px-6 md:px-16 text-center">
//         <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>

//         <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-8">
//           AL-AIN Pharmaceutical Company is a partnership company engaged in the importation and distribution of high-quality medicines sourced from international markets, with the aim of meeting the healthcare needs of the Somali community. The company provides a wide range of products, including human, veterinary, and agricultural medicines. Founded in 2006, the company was established during a critical period following the collapse of central government institutions in Somalia, when access to quality medicines was severely limited. Its headquarters is located in Mogadishu.
//  AL-AIN operates multiple branches in different cities across Somalia, as well as in South Sudan under the name Tawakal Pharmaceutical. The company continues to pursue strategic expansion across the region.
//         </p>
//       </section>

//       {/* CERTIFICATES - RESPONSIVE CENTERED */}
//       <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-20 items-start">
//             <div className="text-center ">
//               <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 uppercase">
//                 Certifi<span className="text-black">cations</span>
//               </h2>
//               <p className="mt-3 text-slate-600 leading-7">
//                 Certified quality and trusted standards.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
//               {certificates.map((cert, i) => (
//                 <motion.a
//                   key={i}
//                   href={cert.image}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.12 }}
//                   className="group block w-full max-w-[420px]"
//                 >
//                   <div className="w-full bg-white flex items-center justify-center">
//                     <img
//                       src={cert.image}
//                       alt={cert.title}
//                       className="w-full h-auto object-contain transition duration-300 group-hover:scale-[1.02]"
//                     />
//                   </div>

//                   <h3 className="mt-4 text-center font-semibold text-slate-900">
//                     {cert.title}
//                   </h3>
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-14 text-center bg-slate-950 text-white">
//         <h2 className="text-3xl font-bold">Get in Touch</h2>

//         <p className="mt-3 text-slate-300">
//           Contact us for trusted pharmaceutical solutions.
//         </p>

//         <Link to="/contact">
//           <button className="mt-5 px-6 py-3 bg-green-400 text-black rounded-xl">
//             Contact Us
//           </button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaPills, FaSyringe, FaMedkit } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import OurMission from "../pages/OurMisssion";

// const AboutPage = () => {

//   const features = [
//     {
//       title: "Certified Quality",
//       icon: <FaMedkit size={28} className="text-green-600" />,
//       desc: "Batch-tested and professionally sourced products you can trust.",
//     },
//     {
//       title: "Wide Range",
//       icon: <FaPills size={28} className="text-emerald-600" />,
//       desc: "Human medicines, veterinary products, and agro solutions for multiple needs.",
//     },
//     {
//       title: "Reliable Supply",
//       icon: <FaSyringe size={28} className="text-lime-600" />,
//       desc: "Strong stock availability, dependable service, and smooth distribution support.",
//     },
//   ];

//   // ✅ Certificates (IMAGE PREVIEW STYLE)
//   const certificates = [
//     {
//       title: "COMMERCIAL LICENSE",
//       image: "/certificates/cert1.jpg",
//       file: "/certificates/cert1.pdf",
//     },
//     {
//       title: "CERTIFICATE OF INCORPORATION",
//       image: "/certificates/cert2.jpg",
//       file: "/certificates/cert2.pdf",
//     },
//     {
//       title: "BUSINESS PERMIT",
//       image: "/certificates/cert3.jpg",
//       file: "/certificates/cert3.pdf",
//     },
//   ];

//   return (
//     <div className="bg-slate-50 min-h-screen">

//       {/* HERO */}
//       <section className="relative w-full h-[34vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="/hero/About.jpg"
//           alt="About"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />

//         <h1 className="relative text-white text-3xl md:text-5xl font-bold">
//           About AL-Ain Pharmaceutical
//         </h1>
//       </section>

//       {/* WHY */}
//       <section className="py-14 px-6 md:px-16 bg-white">
//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -6 }}
//               className="bg-white p-7 rounded-2xl shadow border"
//             >
//               <div className="mb-4">{f.icon}</div>
//               <h3 className="font-bold text-lg">{f.title}</h3>
//               <p className="text-sm mt-2 text-gray-600">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* MISSION */}
//       <OurMission />

//       {/* STORY */}
//       <section className="py-14 px-6 md:px-16 text-center">
//         <h2 className="text-3xl font-bold text-slate-900">
//           Our Story
//         </h2>

//         <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-8">
//           AL-AIN Pharmaceutical Company is a partnership company engaged in the importation and distribution of high-quality medicines sourced from international markets, with the aim of meeting the healthcare needs of the Somali community.
//         </p>
//       </section>

//       {/* 🔥 CERTIFICATES (IMAGE STYLE) */}
//       <section className="py-16 px-6 md:px-16 bg-white">
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//             Our<span className="text-green-500"> Certificates</span>
//           </h2>

//           <p className="mt-3 text-slate-600">
//             Certified quality and international standards you can trust.
//           </p>

//           <div className="mt-10 grid md:grid-cols-3 gap-6">
//             {certificates.map((cert, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="overflow-hidden rounded-2xl shadow border bg-white"
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="w-full h-48 object-cover"
//                 />

//                 {/* CONTENT */}
//                 <div className="p-5 text-left">
//                   <h3 className="font-semibold text-slate-900">
//                     {cert.title}
//                   </h3>

//                   <a
//                     href={cert.file}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-3 inline-block text-green-600 font-medium hover:underline"
//                   >
//                     View Certificate →
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-14 text-center bg-slate-950 text-white">
//         <h2 className="text-3xl font-bold">
//           Get in Touch
//         </h2>

//         <p className="mt-3 text-slate-300">
//           Contact us for trusted pharmaceutical solutions.
//         </p>

//         <Link to="/contact">
//           <button className="mt-5 px-6 py-3 bg-green-400 text-black rounded-xl">
//             Contact Us
//           </button>
//         </Link>
//       </section>

//     </div>
//   );
// };

// export default AboutPage;


import React from "react";
import { motion } from "framer-motion";
import { FaPills, FaSyringe, FaMedkit } from "react-icons/fa";
import { Link } from "react-router-dom";
import OurMission from "../pages/OurMisssion";

const AboutPage = () => {
  const features = [
    {
      title: "Certified Quality",
      icon: <FaMedkit size={28} className="text-green-600" />,
      desc: "Batch-tested and professionally sourced products you can trust.",
    },
    {
      title: "Wide Range",
      icon: <FaPills size={28} className="text-emerald-600" />,
      desc: "Human medicines, veterinary products, and agro solutions for multiple needs.",
    },
    {
      title: "Reliable Supply",
      icon: <FaSyringe size={28} className="text-lime-600" />,
      desc: "Strong stock availability, dependable service, and smooth distribution support.",
    },
  ];

  const certificates = [
    {
      title: "COMMERCIAL LICENSE",
      image: "/certificates/cert1.jpg",
    },
    {
      title: "CERTIFICATE OF INCORPORATION",
      image: "/certificates/cert2.jpg",
    },
    {
      title: "BUSINESS PERMIT",
      image: "/certificates/cert3.jpg",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="relative w-full h-[34vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="/hero/About.jpg"
          alt="About"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative text-white text-3xl md:text-5xl font-bold">
          About AL-Ain Pharmaceutical
        </h1>
      </section>

      {/* WHY */}
      <section className="py-14 px-6 md:px-16 bg-white">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-7 rounded-2xl shadow border"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-sm mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <OurMission />

      {/* STORY */}
      <section className="py-14 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Our <span className="text-green-500">Story</span></h2>

        <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-8">
          AL-AIN Pharmaceutical Company is a partnership company engaged in the importation and distribution of high-quality medicines sourced from international markets, with the aim of meeting the healthcare needs of the Somali community. The company provides a wide range of products, including human, veterinary, and agricultural medicines. Founded in 2006, the company was established during a critical period following the collapse of central government institutions in Somalia, when access to quality medicines was severely limited. Its headquarters is located in Mogadishu.
  AL-AIN operates multiple branches in different cities across Somalia, as well as in South Sudan under the name Tawakal Pharmaceutical. The company continues to pursue strategic expansion across the region.
         .
        </p>
      </section>

      {/* CERTIFICATES */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            <span className="text-green-500"> Certificates</span>
          </h2>

          <p className="mt-3 text-slate-600">
            Certified quality and international standards you can trust.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-2xl shadow border bg-white"
              >
                {/* IMAGE - top part visible */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top"
                />

                <div className="p-5 text-left">
                  <h3 className="font-semibold text-slate-900">
                    {cert.title}
                  </h3>

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-green-600 font-medium hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center bg-slate-950 text-white">
        <h2 className="text-3xl font-bold">Get in Touch</h2>

        <p className="mt-3 text-slate-300">
          Contact us for trusted pharmaceutical solutions.
        </p>

        <Link to="/contact">
          <button className="mt-5 px-6 py-3 bg-green-400 text-black rounded-xl">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;