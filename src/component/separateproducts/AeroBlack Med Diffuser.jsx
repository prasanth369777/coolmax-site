import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  CpuChipIcon, 
  WifiIcon, 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroBlackPro1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroBlackPro2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import AeroBlackPro3 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/3.webp";
import AeroBlackPro4 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp";

const AeroBlackMedPage = () => {
  const [activeImg, setActiveImg] = useState(AeroBlackPro1);
  const gallery = [AeroBlackPro1, AeroBlackPro2, AeroBlackPro3, AeroBlackPro4];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Professional Commercial Aroma Diffuser
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              AeroBlack Med Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Professional Commercial Aroma Diffuser for Medium & Large Spaces
            </p>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The AeroBlack Med Diffuser is a high-performance commercial aroma diffuser designed for businesses that need reliable, consistent, and controlled fragrance diffusion across medium to large indoor areas. Built for professional use, this scent diffuser machine combines smart control, secure design, and efficient atomization to deliver a premium fragrance experience without noise or disruption.
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              Ideal for offices, retail spaces, clinics, showrooms, hotels, and hospitality environments, AeroBlack Med Diffuser helps create a welcoming atmosphere while supporting brand experience and comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3">
                Talk to a Scent Expert <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="AeroBlack Med" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="gallery-thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Product Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              The AeroBlack Med Diffuser is engineered to meet the daily scenting demands of commercial environments. With its powerful diffusion capacity, Bluetooth app control, and HVAC compatibility, this commercial scent diffuser offers flexibility for different installation needs — whether placed on a desktop, mounted on a wall, used as a floor-standing unit, or connected to a central air conditioning system.
              Its sleek black design blends effortlessly into modern interiors, while its low-noise operation ensures uninterrupted use in professional spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheckIcon, text: "Commercial-grade aroma scent diffuser" },
              { icon: CpuChipIcon, text: "Covers up to 600 m³ efficiently" },
              { icon: WifiIcon, text: "Smart Bluetooth & touch control" },
              { icon: WrenchScrewdriverIcon, text: "Compatible with HVAC scenting systems" },
              { icon: ShieldCheckIcon, text: "Secure magnetic lock system for oil protection" },
              { icon: SpeakerXMarkIcon, text: "Ultra-quiet operation for professional environments" },
              { icon: BeakerIcon, text: "Leak-proof design for safe, long-term use" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <item.icon className="w-10 h-10 text-blue-500 mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: KEY FEATURES & BENEFITS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center">Key Features & Benefits</h2>
        
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif mb-6">Advanced Magnetic Lock Technology</h3>
              <p className="text-slate-500 leading-relaxed">
                The AeroBlack Med Diffuser is equipped with a black technology magnetic lock, providing secure protection for essential oils. This feature is especially valuable in shared or public commercial spaces where equipment safety and oil security matter.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2">
               <img src={AeroBlackPro2} alt="Security" className="w-full h-72 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8">
               <img src={AeroBlackPro3} alt="Smart Control" className="w-full h-72 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Smart Touch & Bluetooth App Control</h3>
              <p className="text-slate-500 mb-6">This scent diffuser machine supports touch panel control and Bluetooth app connectivity, allowing users to:</p>
              <ul className="space-y-3">
                {["Set working schedules", "Adjust fragrance intensity", "Customize diffusion cycles", "Manage operating time remotely"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" /> {li}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 mt-6 leading-relaxed">This makes it ideal for businesses that require controlled and consistent scenting without manual intervention.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm col-span-2">
              <h3 className="text-2xl font-serif mb-6">HVAC & Flexible Installation Support</h3>
              <p className="text-slate-500 mb-8">The AeroBlack Med Diffuser can be used as a standalone unit, mounted on a wall, placed on the floor, or connected directly to an HVAC scent diffuser system.</p>
              <div className="grid grid-cols-2 gap-4">
                 {["Used as a standalone unit", "Mounted on a wall", "Placed on the floor", "Connected directly to an HVAC"].map((item, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl text-xs font-black uppercase tracking-widest text-slate-500">{item}</div>
                 ))}
              </div>
            </div>
            <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white flex flex-col justify-center">
               <h3 className="text-2xl font-serif mb-6">Efficient & Even Fragrance Diffusion</h3>
               <p className="text-blue-100 text-sm mb-6">Built-in fan ensures even scent distribution and faster fragrance spread with no residue.</p>
               <div className="w-full h-px bg-blue-500 my-4" />
               <p className="text-xs font-black tracking-widest uppercase italic opacity-70">≤38 dB Quiet Operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center">Technical Specifications</h2>
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Specification</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Details</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Product Type", "Commercial Aroma Diffuser"],
                  ["Fragrance Capacity", "250 ml"],
                  ["Coverage Area", "Up to 600 m³"],
                  ["Power Supply", "DC 12V / 6W"],
                  ["Noise Level", "≤38 dB"],
                  ["Oil Consumption", "Approx. 2 g/hour"],
                  ["Installation Options", "Desktop, Wall-Mounted, Floor-Standing, HVAC"],
                  ["Control Options", "Touch Panel & Bluetooth App"],
                  ["Net Weight", "1.7 kg"],
                  ["Color", "Black"],
                  ["Design", "Leak-proof & commercial-grade"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{row[0]}</td>
                    <td className="p-6 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 & 6: BEST WORK & HOW IT WORKS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-serif mb-8">Where the AeroBlack Med Diffuser Works Best</h2>
            <div className="space-y-4">
              {[
                "Corporate offices & business centers", "Clinics & medical facilities", 
                "Retail stores & showrooms", "Hotels & serviced apartments", 
                "Meeting rooms & conference halls", "Banks & customer service areas", 
                "Gyms, spas & wellness centers"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-serif mb-8">How the AeroBlack Med Diffuser Works</h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              The AeroBlack Med Diffuser uses cold-air atomization technology to break fragrance oil into ultra-fine particles. These particles are dispersed evenly into the air without heat, water, or residue.
            </p>
            <p className="text-slate-500 leading-relaxed">
              When connected to an HVAC system, the diffuser integrates seamlessly with existing airflow, ensuring uniform scent coverage throughout the space. For standalone use, the internal fan distributes fragrance efficiently across open areas.
            </p>
            <div className="mt-10 p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-200">
               <BeakerIcon className="w-12 h-12 mb-6" />
               <h4 className="text-xl font-bold mb-2">Cold-Air Atomization</h4>
               <p className="text-blue-100 text-sm">Ultra-fine particles for a cleaner, longer-lasting scent experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Why Choose AeroBlack Med Diffuser for Your Business</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Designed specifically for commercial scenting needs",
              "Easy to control, install, and maintain",
              "Supports business branding through scent marketing",
              "Reduces odor complaints without overpowering fragrance",
              "Scalable solution for growing spaces",
              "Backed by professional support from Cool Max"
            ].map((text, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 mb-4" />
                <p className="text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-blue-400 font-medium italic">This makes it a dependable scent machine for business environments that require long-term performance.</p>
        </div>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & SUPPORT ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16">Maintenance & Support</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3"><WrenchScrewdriverIcon className="w-6 h-6 text-blue-600" /> Low Maintenance Design</h4>
            <ul className="space-y-4 text-slate-500">
               <li>• Easy oil refilling with leak-proof design</li>
               <li>• Simple cleaning process</li>
               <li>• Long-lasting components</li>
            </ul>
          </div>
          <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-blue-600"><ShieldCheckIcon className="w-6 h-6" /> Cool Max Provides:</h4>
            <ul className="space-y-4 text-slate-500">
               <li>• Refill guidance</li>
               <li>• Installation support</li>
               <li>• Maintenance assistance</li>
               <li>• Ongoing service options for commercial clients</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto border-t border-slate-100 pt-24 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Part of Our Commercial Aroma Diffuser Range</h2>
          <p className="text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed">
            The AeroBlack Med Diffuser is part of Cool Max’s Commercial Aroma Diffusers category, developed for businesses seeking reliable and professional scent solutions. It works perfectly as a standalone unit or as part of a larger scent marketing system.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Large Area & HVAC Diffusers", "Floor-Standing Aroma Diffusers", "Desktop & Small Space Diffusers"].map((range, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed">
            Looking for a commercial scent diffuser that fits your space perfectly? 
            Our team will help you choose the right placement, fragrance type, and diffusion settings.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all">Talk to a Scent Expert</button>
            <button className="px-12 py-5 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all border border-white/10">Get a Custom Quote</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroBlackMedPage;