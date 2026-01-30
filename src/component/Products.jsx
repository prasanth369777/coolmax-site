  import React, { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import {
    StarIcon,
    ArrowRightIcon,
    BeakerIcon,
    CubeTransparentIcon,
    CheckCircleIcon,
  } from "@heroicons/react/24/outline";

  /* ================= IMAGE IMPORTS ================= */
  import M10Black from "../asset/productimg/Model M10/M10 - 1.jpeg";
  import M10White from "../asset/productimg/Model M10/M10 - 2.jpeg";
  import Q500Black from "../asset/productimg/Model Q500/Model Q500 - 1.jpeg";
  import Q500White from "../asset/productimg/Model Q500/Model Q500 - 2.jpeg";
  import M45Black from "../asset/productimg/Model M45/Model M45 1.jpeg";
  import M45White from "../asset/productimg/Model M45/Model M45 2.jpeg";
  import M41BBlack from "../asset/productimg/Model M41-B/Model M41-B - 1.jpeg";
  import M41BWhite from "../asset/productimg/Model M41-B/Model M41-B - 2.jpeg";
  import D100Black from "../asset/productimg/Model D100/Model D100 - 1.jpeg";
  import D100White from "../asset/productimg/Model D100/Model D100 - 2.jpeg";
  import H11Black from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg";
  import H11White from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 10.jpeg";
  import A500Black from "../asset/productimg/Model D100/Model D100 - 11.jpeg";
  import A500White from "../asset/productimg/Model D100/Model D100 - 13.jpeg";
  import VS160Black from "../asset/productimg/Model VS160/Model VS160 - 2.jpeg";
  import VS160White from "../asset/productimg/Model VS160/Model VS160 - 1.jpeg";
  import DSQBlack from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (1).jpeg";
  import DSQWhite from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (2).jpeg";

  /* ================= PRODUCT DATA ================= */
  const baseProducts = [
    { id: 1, name: "Car Aroma Diffuser", model: "M10", desc: "Compact and portable scent solutions designed specifically for vehicles.", type: "Portable", imgs: [M10Black, M10White] },
    { id: 2, name: "Desktop Smart Diffuser", model: "A500", desc: "Perfect for desks and washrooms. Quiet operation with elegant design.", type: "Tabletop", imgs: [A500Black, A500White] },
    { id: 3, name: "Wall-Mount Pro", model: "M45", desc: "Space-saving designs that mount easily to walls or ceilings.", type: "Wall", imgs: [M45Black, M45White] },
    { id: 4, name: "Commercial Tower", model: "D100", desc: "Powerful standalone units built for retail stores and lobbies.", type: "Floor", imgs: [D100Black, D100White] },
    { id: 5, name: "HVAC Integrated System", model: "M41-B", desc: "Connects directly to HVAC systems for invisible scent coverage.", type: "HVAC", imgs: [M41BBlack, M41BWhite] },
    { id: 6, name: "Luxury Floor Stand", model: "VS160", desc: "Statement pieces designed to stand on the floor with style.", type: "Floor", imgs: [VS160Black, VS160White] },
    { id: 7, name: "Eco-Passive Diffuser", model: "Q500", desc: "Eco-friendly, silent diffusion solutions that require no electricity.", type: "Passive", imgs: [Q500Black, Q500White] },
    { id: 8, name: "Industrial Power Unit", model: "DSQ1010", desc: "Maximum output diffusers for industrial spaces and event halls.", type: "HVAC", imgs: [DSQBlack, DSQWhite] },
    { id: 9, name: "Smart Tech Series", model: "H11-A", desc: "Next-generation smart diffusers with programmable controls.", type: "Smart", imgs: [H11Black, H11White] },
  ];

  const expandedProducts = [
    ...baseProducts,
    { id: 10, name: "Compact Office Plus", model: "A500-Pro", desc: "Enhanced output for meeting rooms.", type: "Tabletop", imgs: [A500White, A500Black] },
    { id: 11, name: "Lobby Master X", model: "D100-X", desc: "Extended battery life version.", type: "Floor", imgs: [D100White, D100Black] },
    { id: 12, name: "HVAC Enterprise", model: "M41-Pro", desc: "Dual-nozzle HVAC system.", type: "HVAC", imgs: [M41BWhite, M41BBlack] },
    { id: 13, name: "Vertical Slim", model: "VS160-S", desc: "Slim profile for corridors.", type: "Floor", imgs: [VS160White, VS160Black] },
    { id: 14, name: "Travel Scent Pod", model: "M10-Go", desc: "Pocket-sized for travelers.", type: "Portable", imgs: [M10White, M10Black] },
    { id: 15, name: "Ceiling Cloud", model: "M45-C", desc: "Recessed ceiling mount unit.", type: "Ceiling", imgs: [M45White, M45Black] },
    { id: 16, name: "Event Scent Cannon", model: "DSQ-Max", desc: "Rapid diffusion for events.", type: "Portable", imgs: [DSQWhite, DSQBlack] },
    { id: 17, name: "Spa Serenity", model: "Q500-Zen", desc: "Whisper-quiet for spas.", type: "Tabletop", imgs: [Q500White, Q500Black] },
    { id: 18, name: "Retail Omni", model: "D100-R", desc: "Designed for retail shelves.", type: "Tabletop", imgs: [D100Black, D100White] },
    { id: 19, name: "Smart Home Hub", model: "H11-IoT", desc: "Connects to Google/Alexa.", type: "Smart", imgs: [H11White, H11Black] },
    { id: 20, name: "Signature Grand", model: "VS-Gold", desc: "Our flagship floor unit.", type: "Floor", imgs: [VS160Black, VS160White] },
  ];

  export default function ProductDetail() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const activeProduct = expandedProducts[selectedIndex];

    return (
      <section className="relative py-16 lg:py-24 bg-[#F8FAFC] min-h-screen mt-16">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

          {/* HEADER */}
          <div className="mb-10 border-b border-slate-200 pb-6 flex justify-between items-end">
            <div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs block mb-2">
                Cool Max Collection
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
                Product Catalogue
              </h2>
            </div>
            <p className="hidden md:block text-sm text-slate-500">
              Displaying 20 Models
            </p>
          </div>

          {/* LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* LEFT MENU (Mobile: Bottom, Desktop: Left) 
              - Changed flex-nowrap to flex-col for mobile vertical stacking
              - Removed overflow-x-auto
            */}
            <div
              className="
                order-2 lg:order-1
                lg:col-span-4
                flex flex-col lg:block
                gap-4
                lg:overflow-y-auto
                lg:h-[calc(100vh-200px)]
                pb-4 lg:pb-0
                pr-0 lg:pr-4
                custom-scrollbar
              "
            >
              {expandedProducts.map((product, idx) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedIndex(idx)}
                  /* Changed w-[280px] to w-full for mobile vertical layout */
                  className={`w-full p-4 lg:p-5 rounded-xl border text-left transition-all duration-300 ${
                    selectedIndex === idx
                      ? "bg-white border-indigo-500 ring-1 ring-indigo-500 shadow-lg scale-[1.01] lg:scale-[1.02]"
                      : "bg-white border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      selectedIndex === idx ? "text-indigo-600" : "text-slate-400"
                    }`}>
                      Model {product.model}
                    </span>
                    {selectedIndex === idx && (
                      <CheckCircleIcon className="w-5 h-5 text-indigo-500" />
                    )}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {product.type} Series
                  </p>
                </button>
              ))}
            </div>

            {/* RIGHT PREVIEW (Mobile: Top, Desktop: Right) 
            */}
            <div className="order-1 lg:order-2 lg:col-span-8">
              <div className="relative lg:sticky lg:top-10 bg-white rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 border border-slate-200 shadow-2xl min-h-[500px]">

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                  {/* TEXT */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase rounded-full">
                        In Stock
                      </span>
                      <span className="flex text-yellow-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </span>
                    </div>

                    <motion.h1
                      key={activeProduct.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-5"
                    >
                      {activeProduct.name}
                    </motion.h1>

                    <motion.p
                      key={activeProduct.desc}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-base sm:text-lg text-slate-500 mb-8"
                    >
                      {activeProduct.desc}
                    </motion.p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <CubeTransparentIcon className="w-6 h-6 text-indigo-600" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-400">
                            Coverage
                          </p>
                          <p className="font-bold">Up to 300m²</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <BeakerIcon className="w-6 h-6 text-indigo-600" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-400">
                            Technology
                          </p>
                          <p className="font-bold">Cold Diffusion</p>
                        </div>
                      </div>
                    </div>

                    <button className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold uppercase text-sm shadow-lg hover:bg-indigo-700 transition-colors">
                      Request Quote <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* IMAGE */}
                  <div className="flex justify-center items-center min-h-[220px] sm:min-h-[300px] xl:min-h-[450px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeProduct.id}
                        src={activeProduct.imgs[0]}
                        alt={activeProduct.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="object-contain drop-shadow-2xl max-h-[300px] lg:max-h-full"
                      />
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* SCROLLBAR */}
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 4px;
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
          }
        `}</style>
      </section>
    );
  }