import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../src/asset/about/about1.png";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-white via-gray-150 to-gray-100 py-28 px-6 overflow-hidden"
    >
      {/* ================= BACKGROUND DESIGN ================= */}

      {/* Soft Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gray-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-gray-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gray-200/30 rounded-full blur-3xl" />

      {/* Vector Line Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 40" stroke="#9CA3AF" strokeWidth="8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-[1400px] mx-auto">

        {/* ABOUT SECTION */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-center"
        >
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-400 rounded-full"></span>
            </h2>

            <p className="mt-8 text-gray-700 leading-relaxed text-lg max-w-xl">
              Cool Max is committed to providing innovative hygiene products and
              washroom solutions across the world’s best companies, ensuring cleaner
              and healthier spaces for homeowners, business, and industry.
              <br /><br />
              With deep market understanding across the UAE & Qatar since 2020, our
              professional team delivers first-class service to public & private
              hospitals, schools, large enterprises, international food chains, and
              commercial facilities.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="px-8 py-3 rounded-full font-semibold text-white
                                 bg-gradient-to-r from-gray-800 to-gray-600
                                 hover:from-gray-900 hover:to-gray-700
                                 transition shadow-lg">
                Learn More
              </button>

              <button className="relative px-8 py-3 rounded-full font-semibold
                                 text-gray-800 bg-white/70 backdrop-blur
                                 border border-transparent hover:text-gray-900 transition">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-gray-700 to-gray-400">
                  <span className="block w-full h-full rounded-full bg-white"></span>
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
              <img
                src={AboutImg}
                alt="About Cool Max"
                className="w-full h-[420px] object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-14 mb-24">
          {[
            {
              title: "Our Vision",
              text:
                "To excel as the world’s leading manufacturer and air freshener service provider across GCC countries.",
            },
            {
              title: "Our Mission",
              text:
                "To develop premium fragrances with unique formulas, deliver high service standards at value pricing, and build long-term partnerships through innovation and trust.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* VALUES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28 text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Our Values
          </h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Innovative Thinking",
              "Partnership",
              "Reliable Delivery",
              "Operational Efficiency",
              "Environmental Responsibility",
            ].map((value, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full text-sm font-medium
                           bg-gray-100 text-gray-700
                           hover:bg-gray-200 transition"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>

        {/* WHY SCENT */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h3 className="text-4xl font-semibold text-gray-900 mb-8">
            Why Scent
          </h3>

          <div className="space-y-6 max-w-4xl text-gray-700 leading-relaxed text-lg">
            <p>
              In today’s competitive world, scent marketing plays a crucial role
              in building emotional connections and memorable brand experiences.
            </p>
            <p>
              Smell is the most powerful of all senses. Strategic scenting enables
              brands to connect with consumers on a deeper emotional level.
            </p>
            <p>
              Effective scenting attracts new customers, increases sales,
              strengthens brand recognition, and enhances customer satisfaction.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
