import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What scenting solutions does Cool Max provide?",
    answer:
      "Cool Max offers a complete range of professional scenting solutions including car scent diffusers, lobby and large-area diffusers, wall-mounted units, HVAC-integrated systems, room atmosphere diffusers, and automatic aerosol dispensers.",
  },
  {
    question: "Can fragrances be customized for my brand or space?",
    answer:
      "Yes. We specialize in custom fragrance development tailored to your brand identity, environment, and customer experience goals. Our team helps you create a unique scent signature.",
  },
  {
    question: "Are Cool Max systems suitable for large commercial spaces?",
    answer:
      "Absolutely. Our HVAC and large-area scenting systems are designed to cover hotels, malls, offices, hospitals, retail chains, and other high-traffic commercial environments efficiently.",
  },
  {
    question: "Which regions does Cool Max operate in?",
    answer:
      "Cool Max currently operates across the UAE and Qatar, providing installation, maintenance, and ongoing scenting support for both public and private sector clients.",
  },
  {
    question: "Do you provide installation and maintenance services?",
    answer:
      "Yes. Our professional team handles complete installation, fragrance refills, system calibration, and routine maintenance to ensure consistent scent performance.",
  },
  {
    question: "How do I choose the right diffuser for my space?",
    answer:
      "Our experts assess your space size, airflow, and business requirements to recommend the most suitable scent diffuser and fragrance solution for optimal results.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-[1400px] mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Everything you need to know about Cool Max scenting solutions.  
          Still need assistance?{" "}
          <a href="#contact" className="text-indigo-600 font-medium underline">
            Talk to our experts
          </a>
          .
        </p>

        {/* FAQ LIST */}
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur rounded-2xl p-6
                         shadow-lg border border-gray-200
                         hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex justify-between items-center w-full text-left
                           text-gray-900 font-semibold text-lg"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-indigo-600" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-indigo-600" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need a tailored scenting solution?
          </h3>
          <p className="text-gray-600 mb-8">
            Our specialists will help you choose the perfect diffuser and fragrance
            to elevate your brand experience.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full font-semibold
                       text-black bg-white shadow-lg"
          >
            Talk to Our Expert
          </a>
        </div>
      </div>
    </section>
  );
}
