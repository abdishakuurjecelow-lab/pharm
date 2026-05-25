import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const cards = [
  {
    title: "Mission",
    icon: <FaBullseye className="text-green-600  text-2xl" />,
    desc: "To deliver safe, effective, and high-quality medicines that meet the needs of customers and stakeholders, while adhering to international standards and best practices.",
  },
  {
    title: "Vision",
    icon: <FaEye className="text-emerald-600 text-2xl" />,
    desc: "To be the trusted leader in providing high-quality healthcare for people, animals, and agriculture across East Africa and beyond.",
  },
  {
    title: "Values",
    icon: <FaHandshake className="text-lime-600 text-2xl" />,
    values: [
      "Ensure consistent supply of high-quality medicines compliant with international standards.",
      "Contribute to the improvement of public health in East Africa and beyond.",
      "Collaborate with government and healthcare organizations.",
      "Uphold Islamic values and Somali cultural principles.",
      "Support communities during emergencies and natural disasters.",
    ],
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
              {item.values ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                  {item.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-gray-600">{item.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
