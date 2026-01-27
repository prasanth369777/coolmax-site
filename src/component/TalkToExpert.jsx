import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowLongRightIcon
} from "@heroicons/react/24/outline";

export default function TalkToExpert() {
  return (
    <section id="contact" className="relative bg-[#050505] py-24 lg:py-32 overflow-hidden">
      
      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Golden ambient glow */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
         
         {/* Subtle Noise Texture */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* ================= LEFT: HEADINGS & INFO ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-bold tracking-widest uppercase mb-6">
                Get in Touch
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
                Let's Scent Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-600">Brand Identity.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                Ready to transform your environment? Our scent architects in Dubai and Doha are ready to design your signature atmosphere.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-6">
              {/* UAE CARD */}
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-white">United Arab Emirates</h3>
                  <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="h-5 opacity-80 grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="space-y-3 text-sm text-gray-400">
                   <div className="flex gap-3 items-start">
                      <MapPinIcon className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>Waha Al Reem Office, Muweilah – Sharjah</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <PhoneIcon className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="group-hover:text-white transition-colors">+971 52 228 6401</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <EnvelopeIcon className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="group-hover:text-white transition-colors">secretary@coolmaxscent.com</span>
                   </div>
                </div>
              </div>

              {/* QATAR CARD */}
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-white">Qatar</h3>
                  <img src="https://flagcdn.com/w40/qa.png" alt="Qatar" className="h-5 opacity-80 grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="space-y-3 text-sm text-gray-400">
                   <div className="flex gap-3 items-start">
                      <MapPinIcon className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>Doha, Qatar</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <PhoneIcon className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="group-hover:text-white transition-colors">+974 66 043 446</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <EnvelopeIcon className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="group-hover:text-white transition-colors">salesqatar@coolmaxscent.com</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: MINIMALIST FORM ================= */}
          <div className="lg:col-span-7 bg-[#111] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative">
            {/* Decorative Line */}
            <div className="absolute top-0 left-12 w-20 h-1 bg-blue-500 rounded-b-full"></div>

            <h3 className="text-3xl font-serif text-white mb-8">Send an Enquiry</h3>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-blue-500 transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-blue-500 transition-colors">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-blue-500 transition-colors">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="group">
                <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-blue-500 transition-colors">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your space..."
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full md:w-auto px-10 py-4 bg-blue-500 hover:bg-white text-black font-bold uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-4 group">
                  Submit Request
                  <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}