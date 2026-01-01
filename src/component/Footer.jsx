import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-300 pt-24 pb-12 px-6 lg:px-24 overflow-hidden">

      {/* ================= SUBTLE GRADIENT ================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-black" />

      {/* ================= TOP ================= */}
      <div className="max-w-[1600px] mx-auto border-b border-slate-800 pb-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            COOL MAX
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-md">
            Premium scenting solutions delivering unforgettable brand
            experiences across commercial and luxury spaces.
          </p>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-5 text-gray-400 text-lg">
          <FaFacebookF className="hover:text-white transition cursor-pointer" />
          <FaInstagram className="hover:text-white transition cursor-pointer" />
          <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
          <FaTwitter className="hover:text-white transition cursor-pointer" />
        </div>
      </div>

      {/* ================= FOOTER GRID ================= */}
      <div className="max-w-[1600px] mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-sm">

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-5">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li>About Cool Max</li>
            <li>Our Technology</li>
            <li>Fragrance Innovation</li>
            <li>Industries We Serve</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-white font-semibold mb-5">Products</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Car Scent Diffusers</li>
            <li>Lobby & HVAC Systems</li>
            <li>Wall Mount Diffusers</li>
            <li>Room Atmosphere Solutions</li>
            <li>Automatic Aerosol Dispensers</li>
          </ul>
        </div>

        {/* UAE */}
        <div>
          <h3 className="text-white font-semibold mb-5">UAE Office</h3>
          <p className="text-gray-400 leading-relaxed">
            Waha Al Reem Office<br />
            Muweilah – Sharjah<br />
            United Arab Emirates
          </p>
          <p className="mt-3 text-gray-400">
            📧 secretary@coolmaxscent.com
          </p>
          <p className="text-gray-400">
            📞 +971 52 228 6401
          </p>
        </div>

        {/* QATAR */}
        <div>
          <h3 className="text-white font-semibold mb-5">Qatar Office</h3>
          <p className="text-gray-400 leading-relaxed">
            Doha, Qatar
          </p>
          <p className="mt-3 text-gray-400">
            📧 salesqatar@coolmaxscent.com
          </p>
          <p className="text-gray-400">
            📞 +974 66 043 446
          </p>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs text-gray-500">
        <p className="mb-2">
          Terms & Conditions · Privacy Policy · Cookie Policy
        </p>
        <p>
          © {new Date().getFullYear()} Cool Max Scent Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
