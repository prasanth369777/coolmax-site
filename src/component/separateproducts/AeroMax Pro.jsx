import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  CloudIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  ScaleIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO AEROBLACK PRO ================= */
import AeroBlack1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroBlack2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import AeroBlack3 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/3.webp";
import AeroBlack4 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp";

const AeroBlackProPage = () => {
  const [activeImg, setActiveImg] = useState(AeroBlack1);
  const gallery = [AeroBlack1, AeroBlack2, AeroBlack3, AeroBlack4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AeroBlack%20Pro%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <SparklesIcon className="w-4 h-4" /> Large Area & HVAC Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AeroBlack Pro Diffuser
            </h1>
            <h2 className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              High-Capacity Large Area & HVAC Aroma Diffuser for Commercial Spaces
            </h2>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light">
              The AeroBlack Pro Diffuser is a professional large area aroma diffuser engineered for expansive commercial environments that demand powerful, stable, and intelligent scent diffusion. Designed specifically for HVAC scenting and large standalone applications, this system delivers consistent fragrance coverage across wide indoor areas without overpowering the space.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-blue-600 pl-6 font-light">
              Built with advanced atomization technology and smart Bluetooth control, AeroBlack Pro Diffuser is an ideal scent air machine for airports, hotels, office buildings, cinemas, shopping malls, and high-traffic commercial venues.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to Our Scent Experts <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 font-sans">
                Get a Custom Quote <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="AeroBlack Pro Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="AeroBlack Pro variant" />
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
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              AeroBlack Pro Diffuser is developed for businesses that require maximum scent coverage with precise control. With its large fragrance capacity and high-performance diffusion system, it ensures smooth, even scent distribution across areas up to 4,000 m³.
              The diffuser can operate as a standalone large-area scent machine or integrate directly with HVAC air-conditioning systems, allowing fragrance to travel naturally through existing airflow. Its sleek black design blends seamlessly into modern commercial interiors while delivering industrial-grade performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: GlobeAltIcon, text: "Large area aroma scent diffuser" },
              { icon: ScaleIcon, text: "Covers up to 4,000 m³" },
              { icon: CloudIcon, text: "HVAC scent diffuser compatible" },
              { icon: DevicePhoneMobileIcon, text: "Smart Bluetooth & touch screen control" },
              { icon: BeakerIcon, text: "High-capacity fragrance reservoir" },
              { icon: LockClosedIcon, text: "Magnetic lock system for oil security" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation suitable for public spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE FEATURES & ADVANTAGES ================= */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-16 text-center tracking-tight uppercase">Core Features & Advantages</h2>
        
        <div className="grid gap-20">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-2xl font-serif mb-4">Large-Area Coverage Performance</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                AeroBlack Pro Diffuser is designed to scent large commercial spaces efficiently. Its powerful internal system ensures fragrance spreads evenly, making it suitable for open areas, multi-zone facilities, and high ceilings. This makes it an ideal commercial scent diffuser for businesses that prioritize consistent ambiance across wide spaces.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8 order-1 md:order-2 h-72 flex items-center justify-center">
               <img src={AeroBlack2} alt="Large Area Coverage" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-8 h-72 flex items-center justify-center">
               <img src={AeroBlack3} alt="Smart Controls" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-serif mb-4">Smart Touch Screen & Bluetooth Control</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">The diffuser is equipped with a touch screen interface and Bluetooth app control. This allows facility managers to:</p>
              <ul className="grid grid-cols-2 gap-3 mb-6 font-sans">
                  {["Set operating schedules", "Adjust scent intensity", "Control working cycles", "Monitor usage easily"].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest text-left">
                       <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                    </li>
                  ))}
              </ul>
              <p className="text-slate-400 text-xs italic">These features make AeroBlack Pro Diffuser a reliable scent machine for business environments that require flexibility and control.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-2xl font-serif mb-4">HVAC System Integration</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                AeroBlack Pro Diffuser supports direct HVAC connection, enabling fragrance to be distributed through central air-conditioning systems. This ensures:
              </p>
              <div className="space-y-3 mb-6">
                 {["Uniform scent coverage", "Efficient fragrance usage", "Seamless integration into existing infrastructure"].map((li, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest">
                       <CloudIcon className="w-5 h-5 text-blue-600" /> {li}
                    </div>
                  ))}
              </div>
              <p className="text-slate-400 text-xs italic">As an HVAC scent diffuser, it is ideal for large buildings where centralized scenting is essential.</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 order-1 md:order-2 h-72 flex items-center justify-center">
               <img src={AeroBlack4} alt="HVAC Integration" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-left">
               <BeakerIcon className="w-10 h-10 text-blue-600 mb-4" />
               <h3 className="text-xl font-serif mb-2">High-Capacity Fragrance System</h3>
               <p className="text-slate-500 text-xs leading-relaxed font-light italic">With a large essential oil capacity, AeroBlack Pro Diffuser reduces the need for frequent refilling. This ensures uninterrupted scent diffusion and lower maintenance effort.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-left">
               <LockClosedIcon className="w-10 h-10 text-blue-600 mb-4" />
               <h3 className="text-xl font-serif mb-2">Magnetic Lock & Secure Design</h3>
               <p className="text-slate-500 text-xs leading-relaxed font-light italic">The built-in magnetic lock technology protects fragrance oil from tampering. Especially useful in public spaces such as malls, airports, and hotels.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-left">
               <SpeakerXMarkIcon className="w-10 h-10 text-blue-600 mb-4" />
               <h3 className="text-xl font-serif mb-2">Stable & Quiet Operation</h3>
               <p className="text-slate-500 text-xs leading-relaxed font-light italic">Despite its high performance, it operates with noise level ≤42 dB, making it suitable for offices, cinemas, hospitals, and premium retail spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-20 bg-slate-100 px-6 font-sans">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center tracking-tight uppercase">Technical Specifications</h2>
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Specification</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Details</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Product Type", "Large Area & HVAC Aroma Diffuser"],
                  ["Fragrance Capacity", "1000 ml"],
                  ["Coverage Area", "Up to 4,000 m³"],
                  ["Power Supply", "DC 12V / 15W"],
                  ["Noise Level", "≤42 dB"],
                  ["Control System", "Touch Screen & Bluetooth App"],
                  ["Installation Options", "Standalone or HVAC Connection"],
                  ["Design", "Commercial-grade, anti-corrosive"],
                  ["Color", "Black"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{row[0]}</td>
                    <td className="p-5 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: IDEAL APPLICATIONS ================= */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-12 tracking-tight uppercase">Ideal Applications</h2>
        <p className="text-slate-500 mb-12 font-light max-w-2xl mx-auto">The AeroBlack Pro Diffuser is designed for large commercial and public environments, including:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Airports & Hubs", "Hotels & Hospitality", "Office Buildings", "Cinemas & Theatres", "Malls & Retail", "Bars & Entertainment", "Convention Centers", "Large Halls"].map((item, i) => (
            <span key={i} className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest flex items-center justify-center">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-20 bg-white px-6 lg:px-12 font-sans">
         <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight uppercase">How AeroBlack Pro Diffuser Works</h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
                        The system uses cold-air atomization technology, converting fragrance oil into ultra-fine particles. These particles are dispersed either directly into the air or through HVAC airflow, ensuring the scent remains natural, balanced, and long-lasting.
                    </p>
                    <p className="text-slate-500 text-base font-light italic">
                        Because the process does not use heat or water, fragrance quality is preserved and equipment durability is enhanced.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                   {[
                       { title: "Cold-Air Atomization", desc: "Industrial-grade particle refinement" },
                       { title: "Preserved Fragrance", desc: "No heat or water used in the process" },
                       { title: "HVAC Dispersal", desc: "Utilizes existing airflow for total coverage" }
                   ].map((item, i) => (
                       <div key={i} className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
                           <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">{item.title}</h4>
                           <p className="text-slate-500 text-sm font-light">{item.desc}</p>
                       </div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-20 bg-slate-950 text-white px-6">
         <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight uppercase">Why Choose AeroBlack Pro Diffuser</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left font-sans">
               {[
                   "Designed for large-scale scenting projects",
                   "Supports HVAC and standalone installation",
                   "Smart control for operational efficiency",
                   "Reduced maintenance with large oil capacity",
                   "Professional-grade performance for demanding environments",
                   "Backed by Cool Max technical expertise"
               ].map((text, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                       <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0" />
                       <span className="text-sm font-light leading-relaxed">{text}</span>
                   </div>
               ))}
            </div>
            <p className="mt-16 text-slate-400 font-serif text-lg italic max-w-3xl mx-auto">
                This makes AeroBlack Pro Diffuser one of the most dependable large area scent machines for professional scent marketing.
            </p>
         </div>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & SERVICE ================= */}
      <section className="py-20 bg-white px-6">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
              <div className="p-10 bg-slate-50 rounded-[3rem] text-left border border-slate-100">
                  <h3 className="text-2xl font-serif mb-8 uppercase tracking-tight">Maintenance & Service Support</h3>
                  <p className="text-slate-600 mb-6 font-light">AeroBlack Pro Diffuser is designed for easy operation and maintenance:</p>
                  <ul className="space-y-4 font-sans">
                      {["Simple oil replacement process", "Durable internal components", "Minimal routine servicing"].map((li, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase text-slate-700 tracking-widest">
                           <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600" /> {li}
                        </li>
                      ))}
                  </ul>
              </div>
              <div className="p-10 bg-blue-600 rounded-[3rem] text-left text-white shadow-xl shadow-blue-100">
                  <h3 className="text-2xl font-serif mb-8 uppercase tracking-tight">Cool Max Technical Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                      {["Installation guidance", "Fragrance planning support", "Maintenance & refill services", "Long-term assistance"].map((li, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                           <ShieldCheckIcon className="w-5 h-5 text-blue-200" /> {li}
                        </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* ================= SECTION 9: RELATED COLLECTION ================= */}
      <section className="py-16 bg-slate-50 px-6 font-sans">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-200 pt-16 text-left">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 tracking-tight uppercase text-center">Part of Our Large Area & HVAC Aroma Diffusers Range</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light text-center">
            AeroBlack Pro Diffuser belongs to our Large Area & HVAC Aroma Diffusers category, developed for businesses that need powerful and scalable scent solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-4 font-sans">
            {["Commercial Aroma Diffusers", "Floor-Standing Aroma Diffusers", "HVAC Scenting Solutions"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer flex items-center justify-center gap-2">
                Explore {range} <ArrowRightIcon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA ================= */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight uppercase">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light font-sans">
            Looking for a large area HVAC scent diffuser tailored to your space? Our team will help you plan the right configuration and fragrance solution.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3">
               <ChatBubbleLeftRightIcon className="w-6 h-6" /> Consult Specialists
            </a>
            <a href={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3">
              Get a Custom Quote <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroBlackProPage;