import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BoltIcon, 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroBlackPro1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroBlackPro2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import AeroBlackPro3 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/3.webp";
import AeroBlackPro4 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp";

const AeroBlackProPage = () => {
  const [activeImg, setActiveImg] = useState(AeroBlackPro1);
  const gallery = [AeroBlackPro1, AeroBlackPro2, AeroBlackPro3, AeroBlackPro4];

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
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= HERO SECTION (REDUCED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Industrial Grade HVAC System
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AeroBlack Pro Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              High-Capacity Large Area & HVAC Aroma Diffuser for Commercial Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              The AeroBlack Pro Diffuser is a professional large area aroma diffuser engineered for expansive commercial environments that demand powerful, stable, and intelligent scent diffusion. Designed specifically for HVAC scenting and large standalone applications, this system delivers consistent fragrance coverage across wide indoor areas without overpowering the space.
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              Built with advanced atomization technology and smart Bluetooth control, AeroBlack Pro Diffuser is an ideal scent air machine for airports, hotels, office buildings, cinemas, shopping malls, and high-traffic commercial venues.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Talk to Scent Specialists <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Request Details <ArrowRightIcon className="w-3 h-3" />
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
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
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
            <h2 className="text-2xl md:text-4xl font-serif mb-6 text-slate-900">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              AeroBlack Pro Diffuser is developed for businesses that require maximum scent coverage with precise control. With its large fragrance capacity and high-performance diffusion system, it ensures smooth, even scent distribution across areas up to 4,000 m³.
              The diffuser can operate as a standalone large-area scent machine or integrate directly with HVAC air-conditioning systems, allowing fragrance to travel naturally through existing airflow. Its sleek black design blends seamlessly into modern commercial interiors while delivering industrial-grade performance.
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
              { icon: BuildingOfficeIcon, text: "Large area aroma scent diffuser" },
              { icon: BeakerIcon, text: "Covers up to 4,000 m³" },
              { icon: WrenchScrewdriverIcon, text: "HVAC scent diffuser compatible" },
              { icon: DevicePhoneMobileIcon, text: "Smart Bluetooth & touch screen control" },
              { icon: BoltIcon, text: "High-capacity fragrance reservoir" },
              { icon: LockClosedIcon, text: "Magnetic lock system for oil security" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation for public spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE FEATURES ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-16 text-center">Core Features & Advantages</h2>
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4">Large-Area Coverage Performance</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                AeroBlack Pro Diffuser is designed to scent large commercial spaces efficiently. Its powerful internal system ensures fragrance spreads evenly, making it suitable for open areas, multi-zone facilities, and high ceilings.
              </p>
              <p className="text-xs text-blue-600 font-bold italic border-l-2 border-blue-600 pl-4">
                This makes it an ideal commercial scent diffuser for businesses that prioritize consistent ambiance across wide spaces.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={AeroBlackPro2} alt="Large Area Performance" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={AeroBlackPro3} alt="Smart Control" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4">Smart Touch Screen & Bluetooth Control</h3>
              <p className="text-sm text-slate-500 mb-4">The diffuser is equipped with a touch screen interface and Bluetooth app control, allowing facility managers to:</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {["Set working schedules", "Adjust scent intensity", "Control working cycles", "Monitor usage easily"].map((li, i) => (
                   <div key={i} className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700 text-[10px] font-bold uppercase tracking-tight">{li}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] col-span-2 text-left">
              <h3 className="text-xl font-serif mb-4">HVAC System Integration</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">AeroBlack Pro Diffuser supports direct HVAC connection, enabling fragrance to be distributed through central air-conditioning systems for uniform coverage.</p>
              <div className="grid grid-cols-3 gap-3">
                 {["Uniform coverage", "Efficient usage", "Seamless integration"].map((item, i) => (
                    <div key={i} className="p-3 bg-white/5 rounded-lg text-[9px] font-black uppercase tracking-widest text-center border border-white/10">{item}</div>
                 ))}
              </div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] flex flex-col justify-center text-left">
              <BoltIcon className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-serif mb-2 leading-tight">High-Capacity System</h3>
              <p className="text-blue-50 text-[11px] font-light leading-relaxed">Large essential oil capacity reduces refilling frequency, ensuring uninterrupted diffusion and lower maintenance effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center">Technical Specifications</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-left">
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Specification</th>
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Details</th>
                </tr>
              </thead>
              <tbody className="text-xs text-left">
                {[
                  ["Product Type", "Large Area & HVAC Aroma Diffuser"],
                  ["Fragrance Capacity", "1000 ml"],
                  ["Coverage Area", "Up to 4,000 m³"],
                  ["Power Supply", "DC 12V / 15W"],
                  ["Noise Level", "≤42 dB"],
                  ["Control System", "Touch Screen & Bluetooth App"],
                  ["Installation", "Standalone or HVAC Connection"],
                  ["Design", "Commercial-grade, anti-corrosive"]
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

      {/* ================= IDEAL APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-10 leading-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "Airports & transportation hubs", "Hotels & hospitality spaces", 
            "Corporate office buildings", "Cinemas & theatres", 
            "Shopping malls & retail chains", "Bars, KTVs & entertainment venues", 
            "Convention centers & large halls"
          ].map((item, i) => (
            <span key={i} className="px-5 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-xs font-bold text-slate-700 uppercase tracking-tight">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-16 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12">Why Choose AeroBlack Pro?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Designed for large-scale scenting projects",
              "Supports HVAC and standalone installation",
              "Smart control for operational efficiency",
              "Reduced maintenance with large capacity",
              "Professional performance for demanding venues",
              "Backed by Cool Max technical expertise"
            ].map((text, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 mb-3" />
                <p className="text-xs leading-relaxed font-light">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-blue-400 text-sm font-medium italic font-serif">Dependable large area scent machines for professional marketing.</p>
        </div>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 text-left">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-3">Maintenance</h4>
            <ul className="space-y-3 text-xs text-slate-500 font-light">
               <li>• Simple oil replacement process</li>
               <li>• Durable internal components</li>
               <li>• Minimal routine servicing</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-xl text-left">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-3">Technical Support</h4>
            <ul className="space-y-3 text-xs text-blue-50 font-light">
               <li>• HVAC Installation & Planning</li>
               <li>• Custom Fragrance Strategy</li>
               <li>• Refill & Maintenance Contracts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a large area HVAC scent diffuser tailored to your space? 
            Our team will help you plan the right configuration and fragrance solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2">
              Talk to an Expert <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroBlackProPage;