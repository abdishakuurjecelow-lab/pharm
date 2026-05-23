// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaFacebook,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const CONTACT = {
//   landline: "+655315",          // ✅ Landline
//   whatsapp: "+252615896669",           // ✅ WhatsApp number (no spaces)
//   email: "info@alainpharma.com",       // ✅ Email
//   facebook: "https://www.facebook.com/share/176wy4LsJ9/?mibextid=wwXIfr", // ✅ Facebook Page
//   mapQuery: "Mogadishu, Somalia",       // ✅ Location
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
//   }),
// };

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
//       {/* Header */}
//       <section className="text-center mb-12">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"
//         >
//           Contact Us
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="mt-3 text-gray-600"
//         >
//           Reach us directly — we’re here to support you 24/7.
//         </motion.p>
//       </section>

//       {/* Contact Cards */}
//       <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//         {[
//           {
//             title: "Landline",
//             value: CONTACT.landline,
//             icon: <FaPhoneAlt size={26} />,
//             link: `tel:${CONTACT.landline.replace(/\s/g, "")}`,
//           },
//           {
//             title: "WhatsApp",
//             value: CONTACT.whatsapp,
//             icon: <FaWhatsapp size={26} />,
//             link: `https://wa.me/${CONTACT.whatsapp.replace(/\s|\+/g, "")}`,
//           },
//           {
//             title: "Email",
//             value: CONTACT.email,
//             icon: <FaEnvelope size={26} />,
//             link: `mailto:${CONTACT.email}`,
//           },
//           {
//             title: "Facebook",
//             value: "Our Facebook Page",
//             icon: <FaFacebook size={26} />,
//             link: CONTACT.facebook,
//           },
//         ].map((item, i) => (
//           <motion.a
//             key={i}
//             href={item.link}
//             target={item.title === "Facebook" ? "_blank" : "_self"}
//             rel="noreferrer"
//             custom={i}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={cardVariants}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 
//                        bg-white p-6 shadow-md hover:shadow-2xl transition"
//           >
//             <div className="flex h-14 w-14 items-center justify-center rounded-xl 
//                             bg-gradient-to-r from-orange-500 to-blue-600 text-white mb-4 shadow-md">
//               {item.icon}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//             <p className="mt-2 text-sm text-gray-600 text-center break-words">
//               {item.value}
//             </p>
//           </motion.a>
//         ))}
//       </section>

//       {/* Map Section */}
//       <section className="max-w-6xl mx-auto px-4 pb-20">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200"
//         >
//           {/* Floating label */}
//           <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow">
//             <FaMapMarkerAlt className="text-orange-600" />
//             <span className="font-semibold text-gray-800">Our Location</span>
//           </div>

//           {/* Map itself */}
//           <iframe
//             title="map"
//             src={`https://www.google.com/maps?q=${encodeURIComponent(
//               CONTACT.mapQuery
//             )}&output=embed`}
//             className="w-full h-[400px]"
//             loading="lazy"
//             allowFullScreen
//           />
//         </motion.div>
//       </section>
//     </div>
//   );
// }



//new---------------------------


// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaFacebookF,
//   FaMapMarkerAlt,
//   FaClock,
// } from "react-icons/fa";

// const CONTACT = {
//   landline: "655315",
//   whatsapp: "+252615896669",
//   whatsappPlain: "252615896669",
//   email: "al-ainpharma@gmail.com",
//   facebook: "https://www.facebook.com/share/176wy4LsJ9/?mibextid=wwXIfr",
//   location: "Mogadishu, Somalia",
//   mapQuery: "Mogadishu, Somalia",
//   workingHours: "Saturday - Thursday | 8:00 AM - 5:00 PM",
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 26, scale: 0.96 },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.08,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function ContactPage() {
//   const cards = [
//     {
//       title: "Landline",
//       value: CONTACT.landline,
//       icon: <FaPhoneAlt size={22} />,
//       href: `tel:${CONTACT.landline}`,
//       bg: "bg-green-50",
//       iconBg: "bg-green-400",
//     },
//     {
//       title: "WhatsApp",
//       value: CONTACT.whatsapp,
//       icon: <FaWhatsapp size={22} />,
//       href: `https://wa.me/${CONTACT.whatsappPlain}`,
//       bg: "bg-emerald-50",
//       iconBg: "bg-emerald-400",
//     },
//     {
//       title: "Email",
//       value: CONTACT.email,
//       icon: <FaEnvelope size={22} />,
//       href: `mailto:${CONTACT.email}`,
//       bg: "bg-lime-50",
//       iconBg: "bg-lime-400",
//     },
//     {
//       title: "Facebook",
//       value: "Visit our page",
//       icon: <FaFacebookF size={22} />,
//       href: CONTACT.facebook,
//       bg: "bg-teal-50",
//       iconBg: "bg-teal-400",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0">
//           <img
//             src="/hero/hero2.jpg"
//             alt="Contact AL-Ain"
//             className="h-full w-full object-cover opacity-20"
//             onError={(e) => {
//               e.currentTarget.style.display = "none";
//             }}
//           />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-green-900/40" />
//         <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-green-400/10 blur-3xl" />
//         <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55 }}
//             className="max-w-3xl"
//           >
//             <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
//               Contact AL-Ain Pharmaceutical
//             </p>

//             <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
//               We’re here to support your business and product needs
//             </h1>

//             <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-200 leading-8">
//               Reach out to our team for product inquiries, bulk orders, distribution,
//               and general support across human, veterinary, and agro & bio chemical products.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* CONTACT CARDS */}
//       <section className="relative -mt-10 z-10 pb-8">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
//             {cards.map((item, i) => (
//               <motion.a
//                 key={item.title}
//                 href={item.href}
//                 target={item.title === "Facebook" || item.title === "WhatsApp" ? "_blank" : "_self"}
//                 rel="noreferrer"
//                 custom={i}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.2 }}
//                 variants={cardVariants}
//                 whileHover={{ y: -4 }}
//                 className={`rounded-3xl border border-slate-100 ${item.bg} p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition`}
//               >
//                 <div
//                   className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow ${item.iconBg}`}
//                 >
//                   {item.icon}
//                 </div>

//                 <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
//                 <p className="mt-2 text-sm text-slate-600 break-words">{item.value}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className="py-12 sm:py-16 lg:py-20">
//         <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
//           {/* LEFT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: -18 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
//                 Contact Information
//               </p>

//               <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
//                 Let’s connect
//               </h2>

//               <p className="mt-4 text-slate-600 leading-8">
//                 AL-Ain Pharmaceutical Company is committed to serving customers,
//                 partners, and distributors with dependable support and trusted
//                 communication channels.
//               </p>

//               <div className="mt-8 space-y-5">
//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 rounded-2xl bg-green-100 p-3 text-green-700">
//                     <FaMapMarkerAlt />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-slate-900">Location</h3>
//                     <p className="text-slate-600">{CONTACT.location}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 rounded-2xl bg-green-100 p-3 text-green-700">
//                     <FaClock />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-slate-900">Working Hours</h3>
//                     <p className="text-slate-600">{CONTACT.workingHours}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 rounded-2xl bg-green-100 p-3 text-green-700">
//                     <FaWhatsapp />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-slate-900">Quick WhatsApp</h3>
//                     <a
//                       href={`https://wa.me/${CONTACT.whatsappPlain}`}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-green-700 font-semibold hover:underline"
//                     >
//                       {CONTACT.whatsapp}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA BOX */}
//             <div className="rounded-[28px] bg-gradient-to-r from-green-400 to-emerald-400 p-8 text-white shadow-lg">
//               <h3 className="text-2xl font-extrabold">
//                 Need product details or bulk supply support?
//               </h3>
//               <p className="mt-3 text-white/90 leading-7">
//                 Our team is ready to help you with trusted product information,
//                 orders, and business inquiries.
//               </p>

//               <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//                 <a
//                   href={`https://wa.me/${CONTACT.whatsappPlain}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
//                 >
//                   WhatsApp Us
//                 </a>

//                 <a
//                   href={`mailto:${CONTACT.email}`}
//                   className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
//                 >
//                   Email Us
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT MAP */}
//           <motion.div
//             initial={{ opacity: 0, x: 18 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="rounded-[32px] overflow-hidden border border-slate-200 bg-white shadow-sm"
//           >
//             <div className="border-b border-slate-100 px-6 py-5">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
//                 Our Address
//               </p>
//               <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
//                 Find us on the map
//               </h2>
//             </div>

//             <div className="relative">
//               <div className="absolute left-5 top-5 z-10 rounded-2xl bg-white/90 px-4 py-2 shadow backdrop-blur">
//                 <span className="text-sm font-semibold text-slate-800">
//                   {CONTACT.location}
//                 </span>
//               </div>

//               <iframe
//                 title="AL-Ain Pharmaceutical Location"
//                 src={`https://www.google.com/maps?q=${encodeURIComponent(
//                   CONTACT.mapQuery
//                 )}&output=embed`}
//                 className="h-[520px] w-full"
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }




import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const CONTACT = {
  landline: "655315",
  whatsapp: "+252615896669",
  whatsappPlain: "252615896669",
  email: "info@alainpharma.com",
  facebook: "https://www.facebook.com/share/176wy4LsJ9/?mibextid=wwXIfr",
  location: "Mogadishu, Somalia",
  mapQuery: "Mogadishu, Somalia",
  workingHours: "Saturday - Thursday | 8:00 AM - 5:00 PM",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function ContactPage() {
  const cards = [
    {
      title: "Call Us",
      value: CONTACT.landline,
      icon: <FaPhoneAlt size={20} />,
      href: `tel:${CONTACT.landline}`,
    },
    {
      title: "WhatsApp",
      value: CONTACT.whatsapp,
      icon: <FaWhatsapp size={20} />,
      href: `https://wa.me/${CONTACT.whatsappPlain}`,
    },
    {
      title: "Email Address",
      value: CONTACT.email,
      icon: <FaEnvelope size={20} />,
      href: `mailto:${CONTACT.email}`,
    },
    {
      title: "Facebook Page",
      value: "Visit our page",
      icon: <FaFacebookF size={20} />,
      href: CONTACT.facebook,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 sm:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                Contact AL-Ain Pharmaceutical
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-slate-900">
                Let’s connect with confidence.
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-600">
                Reach our team for product inquiries, bulk orders, distribution support,
                and trusted communication across human, veterinary, and agro bio chemical services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${CONTACT.whatsappPlain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
                >
                  WhatsApp Us
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Email Us
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <img
                  src="/contact/contact-hero.jpg"
                  alt="Contact AL-Ain"
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      {CONTACT.location}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Working Hours
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Facebook Page" || item.title === "WhatsApp" ? "_blank" : "_self"}
                rel="noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 break-words">
                  {item.value}
                </p>

                <div className="mt-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all group-hover:w-24" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Contact Information
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                We’re ready to help
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                AL-Ain Pharmaceutical Company serves customers, partners, and distributors
                through dependable support, clear communication, and trusted service.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Location</h3>
                    <p className="text-slate-600">{CONTACT.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Working Hours</h3>
                    <p className="text-slate-600">{CONTACT.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Quick WhatsApp</h3>
                    <a
                      href={`https://wa.me/${CONTACT.whatsappPlain}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-emerald-700 hover:underline"
                    >
                      {CONTACT.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[30px] bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-8 text-white shadow-[0_16px_45px_rgba(16,185,129,0.25)]"
            >
              <h3 className="text-2xl font-extrabold">
                Need product details or bulk support?
              </h3>

              <p className="mt-3 leading-7 text-white/90">
                Our team is ready to help you with product information,
                business inquiries, and supply support.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${CONTACT.whatsappPlain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  WhatsApp Us
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)]"
          >
            <div className="border-b border-slate-100 px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Our Address
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                Find us on the map
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-5 z-10 rounded-2xl bg-white/90 px-4 py-2 shadow backdrop-blur">
                <span className="text-sm font-semibold text-slate-800">
                  {CONTACT.location}
                </span>
              </div>

              <iframe
                title="AL-Ain Pharmaceutical Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  CONTACT.mapQuery
                )}&output=embed`}
                className="h-[520px] w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}