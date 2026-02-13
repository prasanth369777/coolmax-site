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
  BeakerIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO Q500 ================= */
import AeroBlackMed1 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp";
import AeroBlackMed2 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/2.webp";
import AeroBlackMed3 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/3.webp";
import AeroBlackMed4 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/4.webp";
import AeroBlackMed5 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/5.webp";

const AeroBlackMedPage = () => {
  const [activeImg, setActiveImg] = useState(AeroBlackMed1);
  const gallery = [AeroBlackMed1, AeroBlackMed2, AeroBlackMed3, AeroBlackMed4, AeroBlackMed5];
  
  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AeroBlack%20Med%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= HERO SECTION (REDUCED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Professional Commercial Aroma Diffuser
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AeroBlack Med Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Professional Commercial Aroma Diffuser for Medium & Large Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              The AeroBlack Med Diffuser is a high-performance commercial aroma diffuser designed for businesses that need reliable, consistent, and controlled fragrance diffusion across medium to large indoor areas. Built for professional use, this scent diffuser machine combines smart control, secure design, and efficient atomization to deliver a premium fragrance experience without noise or disruption.
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              Ideal for offices, retail spaces, clinics, showrooms, hotels, and hospitality environments, AeroBlack Med Diffuser helps create a welcoming atmosphere while supporting brand experience and comfort.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to a Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Request Details <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="AeroBlack Med" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="gallery-thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-4xl font-serif mb-6">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto">
              The AeroBlack Med Diffuser is engineered to meet the daily scenting demands of commercial environments. With its powerful diffusion capacity, Bluetooth app control, and HVAC compatibility, this commercial scent diffuser offers flexibility for different installation needs — whether placed on a desktop, mounted on a wall, used as a floor-standing unit, or connected to a central air conditioning system.
              Its sleek black design blends effortlessly into modern interiors, while its low-noise operation ensures uninterrupted use in professional spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheckIcon, text: "Commercial-grade aroma scent diffuser" },
              { icon: CpuChipIcon, text: "Covers up to 600 m³ efficiently" },
              { icon: WifiIcon, text: "Smart Bluetooth & touch control" },
              { icon: WrenchScrewdriverIcon, text: "Compatible with HVAC scenting systems" },
              { icon: ShieldCheckIcon, text: "Secure magnetic lock system for oil protection" },
              { icon: SpeakerXMarkIcon, text: "Ultra-quiet operation for professional environments" },
              { icon: BeakerIcon, text: "Leak-proof design for safe, long-term use" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: KEY FEATURES & BENEFITS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center">Key Features & Benefits</h2>
        <div className="grid gap-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-serif mb-4">Advanced Magnetic Lock Technology</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                The AeroBlack Med Diffuser is equipped with a black technology magnetic lock, providing secure protection for essential oils. This feature is especially valuable in shared or public commercial spaces where equipment safety and oil security matter.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={AeroBlackMed2} alt="Security" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={AeroBlackMed3} alt="Smart Control" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Smart Touch & Bluetooth App Control</h3>
              <p className="text-sm text-slate-500 mb-4">This scent diffuser machine supports touch panel control and Bluetooth app connectivity, allowing users to:</p>
              <ul className="space-y-2">
                {["Set working schedules", "Adjust fragrance intensity", "Customize diffusion cycles", "Manage operating time remotely"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm col-span-2">
              <h3 className="text-xl font-serif mb-4">HVAC & Flexible Installation Support</h3>
              <p className="text-sm text-slate-500 mb-6">The AeroBlack Med Diffuser can be used as a standalone unit, mounted on a wall, placed on the floor, or connected directly to an HVAC scent diffuser system.</p>
              <div className="grid grid-cols-2 gap-3">
                 {["Standalone unit", "Wall-Mounted", "Floor-Standing", "Connected to HVAC"].map((item, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-500 border border-slate-100">{item}</div>
                 ))}
              </div>
            </div>
            <div className="bg-blue-600 p-8 rounded-[2rem] text-white flex flex-col justify-center">
               <h3 className="text-lg font-serif mb-4 leading-tight">Efficient & Even Diffusion</h3>
               <p className="text-blue-100 text-[11px] mb-4 font-light">Built-in fan ensures even scent distribution and faster spread with no residue.</p>
               <div className="w-full h-px bg-blue-500 my-2" />
               <p className="text-[10px] font-black tracking-widest uppercase italic opacity-70">≤38 dB Quiet Operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center">Technical Specifications</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm text-left">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Specification</th>
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Details</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[
                  ["Product Type", "Commercial Aroma Diffuser"],
                  ["Fragrance Capacity", "250 ml"],
                  ["Coverage Area", "Up to 600 m³"],
                  ["Noise Level", "≤38 dB"],
                  ["Oil Consumption", "Approx. 2 g/hour"],
                  ["Installation", "Desktop, Wall, Floor, HVAC"],
                  ["Control Options", "Touch Panel & Bluetooth App"],
                  ["Net Weight", "1.7 kg"],
                  ["Design", "Leak-proof & commercial-grade"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[9px]">{row[0]}</td>
                    <td className="p-4 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: WHERE IT WORKS BEST ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-serif mb-6 leading-tight">Where AeroBlack Med Works Best</h2>
            <div className="grid gap-2">
              {[
                "Corporate offices & business centers", "Clinics & medical facilities", 
                "Retail stores & showrooms", "Hotels & serviced apartments", 
                "Meeting rooms & conference halls", "Banks & customer service areas", 
                "Gyms, spas & wellness centers"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-slate-700 text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-serif mb-6 leading-tight">How it Works</h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              The AeroBlack Med Diffuser uses cold-air atomization technology to break fragrance oil into ultra-fine particles. These particles are dispersed evenly into the air without heat, water, or residue.
            </p>
            <div className="p-6 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-100">
               <BeakerIcon className="w-10 h-10 mb-4" />
               <h4 className="text-lg font-bold mb-1">Cold-Air Atomization</h4>
               <p className="text-blue-100 text-xs font-light leading-relaxed">Ultra-fine particles for a cleaner, longer-lasting scent experience throughout large commercial spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 bg-slate-900 text-white px-6 text-left">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center">Why Choose AeroBlack Med for Your Business</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Designed specifically for commercial scenting needs",
              "Easy to control, install, and maintain",
              "Supports business branding through scent marketing",
              "Reduces odor complaints without overpowering fragrance",
              "Scalable solution for growing spaces",
              "Backed by professional support from Cool Max"
            ].map((text, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 mb-3" />
                <p className="text-[11px] font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-blue-400 text-sm font-medium italic text-center">This makes it a dependable scent machine for business environments.</p>
        </div>
      </section>

      {/* ================= SECTION 8: MAINTENANCE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center">Maintenance & Support</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-3"><WrenchScrewdriverIcon className="w-5 h-5 text-blue-600" /> Low Maintenance</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Easy oil refilling with leak-proof design</li>
               <li>• Simple cleaning process</li>
               <li>• Long-lasting components</li>
            </ul>
          </div>
          <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-3 text-blue-600"><ShieldCheckIcon className="w-5 h-5" /> Professional Service</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light">
               <li>• Installation support & Refill guidance</li>
               <li>• Ongoing maintenance assistance</li>
               <li>• Service options for commercial clients</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed">
            Looking for a commercial scent diffuser that fits your space perfectly? 
            Our team will help you choose the right placement, fragrance type, and diffusion settings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
            </a>
            <a href={contactPath} className="px-8 py-4 bg-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
              Talk to an Expert <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroBlackMedPage;