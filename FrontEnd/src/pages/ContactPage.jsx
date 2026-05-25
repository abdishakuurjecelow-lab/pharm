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
  landline: "+252655315 / +252655320",
  whatsapp: "+252615896669",
  whatsappPlain: "252615896669",
  email: "aphco655315@gmail.com",
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
