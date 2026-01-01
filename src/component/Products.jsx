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
    name: "Car Scent Diffuser",
    model: "M10",
    description: "Compact diffuser designed for vehicles.",
    subProducts: [
      { name: "Black", image: M10Black },
      { name: "White", image: M10White },
    ],
  },
  {
    id: 2,
    name: "Lobby Scent Diffuser",
    model: "Q500",
    description: "High-performance diffuser for large areas.",
    subProducts: [
      { name: "Black", image: Q500Black },
      { name: "White", image: Q500White },
    ],
  },
  {
    id: 3,
    name: "Wall Mount Diffuser",
    model: "M45",
    description: "Wall-mounted scenting solution.",
    subProducts: [
      { name: "Black", image: M45Black },
      { name: "White", image: M45White },
    ],
  },
  {
    id: 4,
    name: "Wall Mount / HVAC Diffuser",
    model: "M41-B",
    description: "Professional HVAC-compatible diffuser.",
    subProducts: [
      { name: "Black", image: M41BBlack },
      { name: "White", image: M41BWhite },
    ],
  },
  {
    id: 5,
    name: "Commercial Scent Diffuser",
    model: "D100",
    description: "Powerful scenting for commercial spaces.",
    subProducts: [
      { name: "Black", image: D100Black },
      { name: "White", image: D100White },
    ],
  },
  {
    id: 6,
    name: "Advanced Scent Diffuser",
    model: "H11-A-2026",
    description: "Next-generation scenting technology.",
    subProducts: [
      { name: "Black", image: H11Black },
      { name: "White", image: H11White },
    ],
  },
  {
    id: 7,
    name: "Aroma Diffuser",
    model: "A500",
    description: "Balanced diffuser for indoor environments.",
    subProducts: [
      { name: "Black", image: A500Black },
      { name: "White", image: A500White },
    ],
  },
  {
    id: 8,
    name: "Industrial Diffuser",
    model: "VS160",
    description: "Heavy-duty diffuser for large installations.",
    subProducts: [
      { name: "Black", image: VS160Black },
      { name: "White", image: VS160White },
    ],
  },
  {
    id: 9,
    name: "High Capacity Diffuser",
    model: "DSQ1010-1",
    description: "Maximum coverage scenting solution.",
    subProducts: [
      { name: "Black", image: DSQBlack },
      { name: "White", image: DSQWhite },
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
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition ${
                    activeProduct.id === product.id
                      ? "bg-indigo-50 border-indigo-500"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img
                      src={product.subProducts[0].image}
                      alt={product.name}
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.model}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT DETAILS */}
          <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-10 shadow-sm flex items-center justify-center">
              <img
                src={activeSub.image}
                alt={activeSub.name}
                className="h-[420px] object-contain"
              />
            </div>

            <div>
              <h1 className="text-3xl font-semibold">{activeProduct.name}</h1>
              <p className="text-sm text-gray-500 mb-4">
                Model: {activeProduct.model}
              </p>

              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-500">
                  Trusted by leading brands
                </span>
              </div>

              <p className="text-gray-600 mb-10">
                {activeProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {activeProduct.subProducts.map((sub) => (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSub(sub)}
                    className={`border rounded-xl p-4 ${
                      activeSub.name === sub.name
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                  >
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="h-20 mx-auto mb-2 object-contain"
                    />
                    <p className="text-sm font-medium">{sub.name}</p>
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-indigo-600 text-white py-4 rounded-full font-semibold hover:bg-indigo-700">
                  Request Demo
                </button>
                <button className="flex-1 border py-4 rounded-full font-semibold hover:bg-gray-50">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
