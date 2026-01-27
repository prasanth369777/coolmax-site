import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

/* ================= IMAGE IMPORTS ================= */

/* M10 */
import M10Black from "../asset/productimg/Model M10/M10 - 1.jpeg";
import M10White from "../asset/productimg/Model M10/M10 - 2.jpeg";

/* Q500 */
import Q500Black from "../asset/productimg/Model Q500/Model Q500 - 1.jpeg";
import Q500White from "../asset/productimg/Model Q500/Model Q500 - 2.jpeg";

/* M45 */
import M45Black from "../asset/productimg/Model M45/Model M45 1.jpeg";
import M45White from "../asset/productimg/Model M45/Model M45 2.jpeg";

/* M41-B */
import M41BBlack from "../asset/productimg/Model M41-B/Model M41-B - 1.jpeg";
import M41BWhite from "../asset/productimg/Model M41-B/Model M41-B - 2.jpeg";

/* D100 */
import D100Black from "../asset/productimg/Model D100/Model D100 - 1.jpeg";
import D100White from "../asset/productimg/Model D100/Model D100 - 2.jpeg";

/* H11-A-2026 */
import H11Black from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg";
import H11White from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 10.jpeg";

/* A500 */
import A500Black from "../asset/productimg/Model D100/Model D100 - 11.jpeg";
import A500White from "../asset/productimg/Model D100/Model D100 - 13.jpeg";

/* VS160 */
import VS160Black from "../asset/productimg/Model VS160/Model VS160 - 2.jpeg";
import VS160White from "../asset/productimg/Model VS160/Model VS160 - 1.jpeg";

/* DSQ1010-1 */
import DSQBlack from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (1).jpeg";
import DSQWhite from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (2).jpeg";

/* ================= PRODUCT DATA ================= */

const products = [
  {
    id: 1,
    name: "Car Aroma Diffusers",
    model: "M10",
    description: "Compact and portable scent solutions designed specifically for vehicles, ensuring a fresh commute.",
    subProducts: [
      { name: "Black", image: M10Black },
      { name: "White", image: M10White },
    ],
  },
  {
    id: 2,
    name: "Desktop & Small Space Diffusers",
    model: "A500",
    description: "Perfect for desks, washrooms, and intimate spaces. Quiet operation with elegant design.",
    subProducts: [
      { name: "Black", image: A500Black },
      { name: "White", image: A500White },
    ],
  },
  {
    id: 3,
    name: "Wall-Mounted & Ceiling Diffusers",
    model: "M45",
    description: "Space-saving designs that mount easily to walls or ceilings for seamless fragrance distribution.",
    subProducts: [
      { name: "Black", image: M45Black },
      { name: "White", image: M45White },
    ],
  },
  {
    id: 4,
    name: "Commercial Aroma Diffusers",
    model: "D100",
    description: "Powerful standalone units built for retail stores, hotel lobbies, and high-traffic commercial zones.",
    subProducts: [
      { name: "Black", image: D100Black },
      { name: "White", image: D100White },
    ],
  },
  {
    id: 5,
    name: "Large Area & HVAC Diffusers",
    model: "M41-B",
    description: "Connects directly to HVAC systems for invisible, uniform scent coverage across expansive facilities.",
    subProducts: [
      { name: "Black", image: M41BBlack },
      { name: "White", image: M41BWhite },
    ],
  },
  {
    id: 6,
    name: "Floor-Standing Aroma Diffusers",
    model: "VS160",
    description: "Statement pieces designed to stand on the floor, delivering powerful scent diffusion with style.",
    subProducts: [
      { name: "Black", image: VS160Black },
      { name: "White", image: VS160White },
    ],
  },
  {
    id: 7,
    name: "Passive / No-Power Diffusers",
    model: "Q500", // Using Q500 as visual placeholder for this category
    description: "Eco-friendly, silent diffusion solutions that require no electricity. Ideal for quiet zones.",
    subProducts: [
      { name: "Black", image: Q500Black },
      { name: "White", image: Q500White },
    ],
  },
  // Kept extra models below to ensure all imported images are available if needed
  {
    id: 8,
    name: "High Capacity Industrial",
    model: "DSQ1010-1",
    description: "Maximum output diffusers for industrial spaces, event halls, and very large volumes.",
    subProducts: [
      { name: "Black", image: DSQBlack },
      { name: "White", image: DSQWhite },
    ],
  },
  {
    id: 9,
    name: "Advanced Tech Series",
    model: "H11-A-2026",
    description: "Next-generation smart diffusers with programmable controls and high efficiency.",
    subProducts: [
      { name: "Black", image: H11Black },
      { name: "White", image: H11White },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function ProductDetail() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeSub, setActiveSub] = useState(products[0].subProducts[0]);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Our Products
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT LIST */}
          <aside className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6">
              Explore Our Full Range
            </h3>

            <div className="space-y-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    setActiveProduct(product);
                    setActiveSub(product.subProducts[0]);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition text-left ${
                    activeProduct.id === product.id
                      ? "bg-indigo-50 border-indigo-500 shadow-sm"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src={product.subProducts[0].image}
                      alt={product.name}
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <div>
                    <p className={`font-semibold ${activeProduct.id === product.id ? "text-indigo-900" : "text-gray-800"}`}>
                        {product.name}
                    </p>
                    <p className="text-xs text-gray-500">Model: {product.model}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT DETAILS */}
          <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image Stage */}
            <div className="bg-white rounded-3xl p-10 shadow-sm flex items-center justify-center border border-gray-100">
              <img
                src={activeSub.image}
                alt={activeSub.name}
                className="h-[420px] object-contain drop-shadow-xl"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase mb-4 w-fit">
                Professional Series
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{activeProduct.name}</h1>
              <p className="text-sm text-gray-500 mb-6 font-medium">
                Model: <span className="text-gray-900">{activeProduct.model}</span>
              </p>

              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  Top Choice for Business
                </span>
              </div>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Color/Variation Selection */}
              <div className="mb-10">
                <p className="text-sm font-semibold text-gray-900 mb-3">Select Variation:</p>
                <div className="grid grid-cols-2 gap-4">
                    {activeProduct.subProducts.map((sub) => (
                    <button
                        key={sub.name}
                        onClick={() => setActiveSub(sub)}
                        className={`group relative flex items-center gap-3 border rounded-xl p-3 transition-all ${
                        activeSub.name === sub.name
                            ? "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                    >
                        <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center border border-gray-100">
                            <img
                            src={sub.image}
                            alt={sub.name}
                            className="h-full object-contain"
                            />
                        </div>
                        <span className={`font-medium ${activeSub.name === sub.name ? "text-indigo-900" : "text-gray-700"}`}>
                            {sub.name}
                        </span>
                    </button>
                    ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 mt-auto">
                <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg shadow-gray-200">
                  Request Quote
                </button>
                <button className="flex-1 border-2 border-gray-200 py-4 rounded-xl font-bold hover:border-gray-900 hover:text-gray-900 transition text-gray-600">
                  Download Spec Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}