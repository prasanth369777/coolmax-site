import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function TalkToExpert() {
  return (
    <section
      id="contact"
      className="relative bg-black overflow-hidden py-32 px-6"
    >
      {/* ================= CONTAINED GREEN GLOW ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[420px] h-[420px]
            bg-blue-500/20
            rounded-full
            blur-[160px]
          "
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          relative max-w-[1600px] mx-auto
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-14 md:p-20
        "
      >
        {/* ================= HEADING ================= */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Get in touch with Cool Max for premium scenting solutions across UAE & Qatar.
          </p>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT : OFFICES ================= */}
          <div className="space-y-12">

            {/* UAE */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <h3 className="text-2xl font-semibold text-white mb-6">
                UAE Office
              </h3>

              <div className="space-y-4 text-gray-300">
                <div className="flex gap-3">
                  <MapPinIcon className="w-5 h-5 text-blue-400" />
                  <span>
                    Waha Al Reem Office,<br />
                    Muweilah – Sharjah
                  </span>
                </div>
                <div className="flex gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                  <span>secretary@coolmaxscent.com</span>
                </div>
                <div className="flex gap-3">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <span>
                    +971 52 228 6401<br />
                    +971 65 229 234
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <img src="/flags/uae.png" alt="UAE" className="h-7 opacity-90" />
              </div>
            </div>

            {/* Qatar */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Qatar Office
              </h3>

              <div className="space-y-4 text-gray-300">
                <div className="flex gap-3">
                  <MapPinIcon className="w-5 h-5 text-blue-400" />
                  <span>Doha, Qatar</span>
                </div>
                <div className="flex gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                  <span>salesqatar@coolmaxscent.com</span>
                </div>
                <div className="flex gap-3">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <span>+974 66 043 446</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <img src="/flags/qatar.png" alt="Qatar" className="h-7 opacity-90" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT : FORM ================= */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <h3 className="text-3xl font-semibold text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-400 mb-8">
              Fill out the form and our team will get back to you shortly.
            </p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                required
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 resize-none"
              />

              <button
                type="submit"
                className="
                  w-full mt-4
                  bg-gradient-to-r from-blue-700 to-blue-500
                  hover:from-blue-500 hover:to-blue-700
                  text-white font-medium
                  py-3 rounded-full
                  transition duration-300
                "
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
