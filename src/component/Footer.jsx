import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-10 px-6 lg:px-12 overflow-hidden border-t border-white/5">

      {/* ================= BACKGROUND TEXTURE ================= */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* ================= TOP SECTION: BRAND & NEWSLETTER ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Block */}
          <div className="max-w-md">
            <h2 className="text-4xl font-serif font-bold tracking-tight text-white mb-6">
              COOL <span className="text-blue-500">MAX</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Architects of atmosphere. We curate premium olfactory experiences for the world's most distinguished spaces.
            </p>
          </div>

          {/* Newsletter Input */}
          <div className="w-full lg:w-auto min-w-[350px]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Subscribe to our journal</h3>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-white/20 py-3 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 hover:text-white transition-colors">
                <HiArrowLongRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= MIDDLE SECTION: LINKS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* COLUMN 1: NAVIGATION */}
          <div>
            <h3 className="text-lg font-serif italic text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Cool Max', 'Our Technology', 'Fragrance Innovation', 'Industries We Serve', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-blue-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: PRODUCTS */}
          <div>
            <h3 className="text-lg font-serif italic text-white mb-6">Collections</h3>
            <ul className="space-y-4">
              {['Car Scent Diffusers', 'Lobby & HVAC Systems', 'Wall Mount Diffusers', 'Room Atmosphere Solutions', 'Automatic Dispensers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2 group">
                     <span className="w-0 group-hover:w-2 h-[1px] bg-blue-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: UAE OFFICE */}
          <div>
            <h3 className="text-lg font-serif italic text-white mb-6">UAE Headquarters</h3>
            <div className="space-y-4 text-gray-400 font-light">
              <p className="leading-relaxed">
                Waha Al Reem Office,<br />
                Muweilah – Sharjah,<br />
                United Arab Emirates
              </p>
              <div className="pt-2 space-y-2">
                <a href="mailto:secretary@coolmaxscent.com" className="block hover:text-blue-500 transition-colors">secretary@coolmaxscent.com</a>
                <a href="tel:+971522286401" className="block hover:text-blue-500 transition-colors">+971 52 228 6401</a>
              </div>
            </div>
          </div>

          {/* COLUMN 4: QATAR OFFICE */}
          <div>
            <h3 className="text-lg font-serif italic text-white mb-6">Qatar Branch</h3>
            <div className="space-y-4 text-gray-400 font-light">
              <p className="leading-relaxed">
                Doha, Qatar
              </p>
              <div className="pt-2 space-y-2">
                <a href="mailto:salesqatar@coolmaxscent.com" className="block hover:text-blue-500 transition-colors">salesqatar@coolmaxscent.com</a>
                <a href="tel:+97466043446" className="block hover:text-blue-500 transition-colors">+974 66 043 446</a>
              </div>
            </div>
            
            {/* Social Icons (Moved here for better balance) */}
            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-blue-500 hover:border-blue-500 transition-all duration-300">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ================= BOTTOM: COPYRIGHT ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Cool Max Scent Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
      
      {/* Decorative Large Text Background */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap select-none font-serif">
        COOL MAX
      </div>
    </footer>
  );
}