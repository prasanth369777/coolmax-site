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
  LockClosedIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroBlackPro1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AeroBlackPro2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import AeroBlackPro3 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/3.webp";
import AeroBlackPro4 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp";

const AeroBlackProPage = () => {
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
              Industrial Grade HVAC System
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              AeroBlack Pro Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              High-Capacity Large Area & HVAC Aroma Diffuser for Commercial Spaces
            </p>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The AeroBlack Pro Diffuser is a professional large area aroma diffuser engineered for expansive commercial environments that demand powerful, stable, and intelligent scent diffusion. Designed specifically for HVAC scenting and large standalone applications, this system delivers consistent fragrance coverage across wide indoor areas without overpowering the space.
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              Built with advanced atomization technology and smart Bluetooth control, AeroBlack Pro Diffuser is an ideal scent air machine for airports, hotels, office buildings, cinemas, shopping malls, and high-traffic commercial venues.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Consult Our Scent Specialists <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="AeroBlack Pro Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
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
              AeroBlack Pro Diffuser is developed for businesses that require maximum scent coverage with precise control. With its large fragrance capacity and high-performance diffusion system, it ensures smooth, even scent distribution across areas up to 4,000 m³.
              The diffuser can operate as a standalone large-area scent machine or integrate directly with HVAC air-conditioning systems, allowing fragrance to travel naturally through existing airflow. Its sleek black design blends seamlessly into modern commercial interiors while delivering industrial-grade performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOfficeIcon, text: "Large area aroma scent diffuser" },
              { icon: BeakerIcon, text: "Covers up to 4,000 m³" },
              { icon: WrenchScrewdriverIcon, text: "HVAC scent diffuser compatible" },
              { icon: DevicePhoneMobileIcon, text: "Smart Bluetooth & touch screen control" },
              { icon: BoltIcon, text: "High-capacity fragrance reservoir" },
              { icon: LockClosedIcon, text: "Magnetic lock system for oil security" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation suitable for public spaces" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE FEATURES & ADVANTAGES ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center">Core Features & Advantages</h2>
        
        <div className="grid gap-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif mb-6">Large-Area Coverage Performance</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                AeroBlack Pro Diffuser is designed to scent large commercial spaces efficiently. Its powerful internal system ensures fragrance spreads evenly, making it suitable for open areas, multi-zone facilities, and high ceilings.
              </p>
              <p className="text-slate-500 font-medium italic border-l-4 border-blue-600 pl-4">
                This makes it an ideal commercial scent diffuser for businesses that prioritize consistent ambiance across wide spaces.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2">
               <img src={AeroBlackPro2} alt="Large Area Performance" className="w-full h-80 object-contain" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8">
               <img src={AeroBlackPro3} alt="Smart Control" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Smart Touch Screen & Bluetooth Control</h3>
              <p className="text-slate-500 mb-6">The diffuser is equipped with a touch screen interface and Bluetooth app control, allowing facility managers to:</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["Set operating schedules", "Adjust scent intensity", "Control working cycles", "Monitor usage easily"].map((li, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700 text-xs font-bold uppercase tracking-tight">{li}</span>
                   </div>
                ))}
              </div>
              <p className="text-slate-500 font-medium">These features make AeroBlack Pro Diffuser a reliable scent machine for business environments that require flexibility and control.</p>
            </div>
          </div>

          {/* Feature 3 & 4 Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] col-span-2">
              <h3 className="text-2xl font-serif mb-6">HVAC System Integration</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">AeroBlack Pro Diffuser supports direct HVAC connection, enabling fragrance to be distributed through central air-conditioning systems. This ensures uniform scent coverage and efficient fragrance usage.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {["Uniform coverage", "Efficient usage", "Seamless integration"].map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-center border border-white/10">{item}</div>
                 ))}
              </div>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] flex flex-col justify-center shadow-xl shadow-blue-200">
              <BoltIcon className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-serif mb-4">High-Capacity System</h3>
              <p className="text-blue-50 text-sm leading-relaxed">Large essential oil capacity reduces refilling frequency, ensuring uninterrupted diffusion and lower maintenance effort.</p>
            </div>
          </div>

          {/* Feature 5 & 6 */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                <LockClosedIcon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-2xl font-serif mb-4">Magnetic Lock & Secure Design</h3>
                <p className="text-slate-500 leading-relaxed text-sm">The built-in magnetic lock technology protects fragrance oil from tampering and unauthorized access. Especially useful in public spaces like malls and airports.</p>
             </div>
             <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                <SpeakerXMarkIcon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-2xl font-serif mb-4">Stable & Quiet Operation</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Operates with low noise output (≤42 dB), making it suitable for environments where comfort and silence matter — such as offices, cinemas, and premium retail.</p>
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
                    <td className="p-6 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{row[0]}</td>
                    <td className="p-6 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= IDEAL APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Airports & transportation hubs", "Hotels & hospitality spaces", 
            "Corporate office buildings", "Cinemas & theatres", 
            "Shopping malls & retail chains", "Bars, KTVs & entertainment venues", 
            "Convention centers & large halls"
          ].map((item, i) => (
            <span key={i} className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">How AeroBlack Pro Diffuser Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              The system uses cold-air atomization technology, converting fragrance oil into ultra-fine particles. These particles are dispersed either directly into the air or through HVAC airflow, ensuring the scent remains natural, balanced, and long-lasting.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-light italic">
              Because the process does not use heat or water, fragrance quality remains intact while equipment longevity is preserved.
            </p>
          </div>
          <div className="bg-blue-600/10 p-12 rounded-[3rem] border border-blue-500/20 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif mb-4">Cold-Air Atomization</h4>
             <p className="text-blue-100 leading-relaxed text-sm">Ultra-fine particles for uniform, residue-free scent distribution.</p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">Why Choose AeroBlack Pro Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Designed for large-scale scenting projects",
            "Supports HVAC and standalone installation",
            "Smart control for operational efficiency",
            "Reduced maintenance with large oil capacity",
            "Professional-grade performance for demanding environments",
            "Backed by Cool Max technical expertise"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 italic">This makes AeroBlack Pro Diffuser one of the most dependable large area scent machines for professional scent marketing.</p>
      </section>

      {/* ================= MAINTENANCE & SERVICE ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">Maintenance</h4>
            <ul className="space-y-4 text-slate-500">
               <li>• Simple oil replacement process</li>
               <li>• Durable internal components</li>
               <li>• Minimal routine servicing</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">Cool Max Service Support</h4>
            <ul className="space-y-4 text-blue-50">
               <li>• Installation guidance</li>
               <li>• Fragrance planning support</li>
               <li>• Maintenance & refill services</li>
               <li>• Long-term technical assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Part of Our Large Area & HVAC Range</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            AeroBlack Pro Diffuser belongs to our Large Area & HVAC Aroma Diffusers category, developed for businesses that need powerful and scalable scent solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Commercial Aroma Diffusers", "Floor-Standing Aroma Diffusers", "HVAC Scenting Solutions"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#FAF9F6] border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TALK TO EXPERTS ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed">
            Looking for a large area HVAC scent diffuser tailored to your space? 
            Our team will help you plan the right configuration and fragrance solution.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Get a Custom Quote</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Consult Our Scent Specialists</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroBlackProPage;