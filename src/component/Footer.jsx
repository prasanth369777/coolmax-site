import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowLongRightIcon 
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-slate-300 pt-16 pb-8 overflow-hidden font-sans selection:bg-indigo-500 selection:text-white border-t border-white/5">

      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= 1. HEADER & NEWSLETTER ================= */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12 items-end">
          
          {/* Brand Statement */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter mb-4 leading-[0.9]">
              COOL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 italic">MAX</span>
            </h2>
            <p className="text-base text-slate-400 font-light leading-relaxed max-w-lg">
              Architects of atmosphere. Curating premium olfactory experiences for distinguished spaces.
            </p>
          </div>

          {/* Premium Newsletter Card (Compacted) */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/30 transition-all duration-500"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-serif text-white">Join our Journal</h3>
                <p className="text-slate-400 text-xs">Latest trends in scent marketing.</p>
              </div>
              
              <div className="relative flex-1 max-w-md">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-[#020617]/50 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all"
                />
                <button className="absolute right-1 top-1 bg-white text-[#020617] p-2 rounded-full hover:bg-indigo-50 transition-colors">
                  <ArrowLongRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. LINKS & LOCATIONS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-10 mb-10">
          
          {/* NAV LINKS */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Cool Max', 'Our Technology', 'Fragrance Innovation', 'Industries We Serve', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="/about" className="text-slate-400 hover:text-white transition-all font-medium flex items-center gap-2 group">
                    <span className="w-0 h-px bg-indigo-500 group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6">Collections</h4>
            <ul className="space-y-3 text-sm">
              {['Car Scent Diffusers', 'Lobby & HVAC Systems', 'Wall Mount Diffusers', 'Room Solutions', 'Automatic Dispensers'].map((item) => (
                <li key={item}>
                  <a href="/products" className="text-slate-400 hover:text-white transition-all font-medium flex items-center gap-2 group">
                    <span className="w-0 h-px bg-indigo-500 group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATIONS (Compacted) */}
          <div className="md:col-span-6 grid sm:grid-cols-2 gap-6">
            {/* UAE */}
            <div className="bg-[#0B0F19] rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400"><MapPinIcon className="w-4 h-4"/></div>
                <h4 className="text-sm font-bold text-white">UAE Headquarters</h4>
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                <p className="leading-relaxed">Waha Al Reem Office, Muweilah – Sharjah</p>
                <div className="h-px w-full bg-white/5"></div>
                <a href="mailto:secretary@coolmaxscent.com" className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  <EnvelopeIcon className="w-3 h-3"/> secretary@coolmaxscent.com
                </a>
                <a href="tel:+971522286401" className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  <PhoneIcon className="w-3 h-3"/> +971 52 228 6401
                </a>
              </div>
            </div>

            {/* QATAR */}
            <div className="bg-[#0B0F19] rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400"><MapPinIcon className="w-4 h-4"/></div>
                <h4 className="text-sm font-bold text-white">Qatar Branch</h4>
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                <p className="leading-relaxed">Doha, Qatar</p>
                <div className="h-px w-full bg-white/5"></div>
                <a href="mailto:salesqatar@coolmaxscent.com" className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  <EnvelopeIcon className="w-3 h-3"/> salesqatar@coolmaxscent.com
                </a>
                <a href="tel:+97466043446" className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  <PhoneIcon className="w-3 h-3"/> +974 66 043 446
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 3. FOOTER BOTTOM ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
          
          <div className="flex gap-3 mb-4 md:mb-0">
            {/* WHATSAPP */}
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://wa.me/971522286401" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaWhatsapp className="text-xs" />
            </motion.a>

            {/* INSTAGRAM */}
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://www.instagram.com/coolmaxscent/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaInstagram className="text-xs" />
            </motion.a>

            {/* LINKEDIN */}
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://www.linkedin.com/company/cool-max-scent/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaLinkedinIn className="text-xs" />
            </motion.a>

            {/* FACEBOOK */}
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://www.facebook.com/coolmaxscent" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaFacebookF className="text-xs" />
            </motion.a>

            {/* YOUTUBE */}
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://www.youtube.com/@coolmaxscent" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaYoutube className="text-xs" />
            </motion.a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mb-1">
              © {new Date().getFullYear()} Cool Max General Trading.
            </p>
            <div className="flex gap-4 justify-center md:justify-end text-[10px] text-slate-600 font-medium">
              <a href="/contact" className="hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="/contact" className="hover:text-indigo-400 transition-colors">Terms</a>
              <a href="/contact" className="hover:text-indigo-400 transition-colors">Sitemap</a>
            </div>
          </div>

        </div>

      </div>
      
      {/* Decorative Large Text (Reduced Size & Position) */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10vw] font-serif font-black text-white/[0.02] pointer-events-none whitespace-nowrap select-none z-0">
        COOL MAX
      </div>
    </footer>
  );
}