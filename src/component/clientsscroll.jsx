import React from "react";

/* ================= IMPORT CLIENT LOGOS ================= */

import SharjahGov from "../asset/clientslogo/sharjah-gov.png";
import AjmanPolice from "../asset/clientslogo/ajman-police.png";
import Lulu from "../asset/clientslogo/lulu.png";
import AnsarMall from "../asset/clientslogo/ansar-mall.png";
import MPC from "../asset/clientslogo/mpc.png";
import Ramada from "../asset/clientslogo/ramada.png";
import Hilton from "../asset/clientslogo/hilton.png";
import UmmAlQuwain from "../asset/clientslogo/umm-al-quwain.png";
import EmiratesPark from "../asset/clientslogo/emirates-park.png";

// // New Client Imports (Ensure these files exist in your directory)
// import RetreatPalm from "../asset/clientslogo/retreat-palm.png";
// import Mercure from "../asset/clientslogo/mercure.png";
// import PanHome from "../asset/clientslogo/pan-home.png";

/* ================= LOGO ARRAY ================= */

const logos = [
  SharjahGov,
  AjmanPolice,
  Lulu,
  AnsarMall,
  MPC,
  Ramada,
  Hilton,
  UmmAlQuwain,
  EmiratesPark,
  // RetreatPalm,
  // Mercure,
  // PanHome,
];

export default function OurClienteles() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our Esteemed Clients
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by government bodies, hospitality leaders, and retail brands
          </p>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[130px]
                           bg-white/80 backdrop-blur
                           rounded-2xl border border-gray-200
                           shadow-sm flex items-center justify-center
                           hover:shadow-lg transition"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-16 max-w-[140px]
                             object-contain grayscale
                             hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FADE EDGES */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>

      {/* MARQUEE ANIMATION */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            width: max-content;
            animation: marquee 35s linear infinite;
          }
        `}
      </style>
    </section>
  );
}