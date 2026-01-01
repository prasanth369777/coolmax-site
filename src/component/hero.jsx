import React, { useEffect, useState } from "react";

import Hero1 from "../../src/asset/hero/hero1.webp";
import Hero2 from "../../src/asset/hero/hero2.webp";
import Hero3 from "../../src/asset/hero/hero3.webp";

const heroImages = [Hero1, Hero2, Hero3];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 ">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl">
            Elevate Your Space <br />
            <span className="text-white  drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
              With Intelligent Scent Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
            Premium fragrance diffusion systems designed for hotels, offices,
            retail spaces, and luxury environments.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#products"
              className="inline-block px-8 py-4 rounded-full font-semibold bg-indigo-600 hover:bg-indigo-700 transition shadow-lg"
            >
              Explore Products
            </a>

            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full font-semibold border border-white/70 hover:bg-white hover:text-gray-900 transition shadow-lg"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
