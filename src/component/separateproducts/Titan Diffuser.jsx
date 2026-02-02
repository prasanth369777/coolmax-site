import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  CubeIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,

  ShieldCheckIcon,
  LightBulbIcon,
  HomeIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import Titan1 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import Titan2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";
import Titan3 from "../../asset/productimg/CMwebpimg/Titan Diffuser/3.webp";
import Titan4 from "../../asset/productimg/CMwebpimg/Titan Diffuser/4.webp";

const TitanDiffuserPage = () => {
  const [activeImg, setActiveImg] = useState(Titan1);
  const gallery = [Titan1, Titan2, Titan3, Titan4];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Sculptural Floor-Standing Design
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Titan Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Premium Floor-Standing Aroma Diffuser for Modern Commercial & Lifestyle Spaces
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The Titan Diffuser is a refined floor-standing aroma diffuser designed for environments that value quiet operation, modern aesthetics, and controlled fragrance performance. With a sculptural desktop-pillar design and a durable aluminum alloy body, Titan Diffuser blends seamlessly into premium interiors while delivering consistent aroma diffusion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="Titan Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="Titan variant thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Product Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              Titan Diffuser combines elegant design with professional scent diffusion technology. Unlike traditional bulky fragrance machines, Titan Diffuser features a compact yet powerful floor-standing form that delivers smooth fragrance output with minimal noise.
              Its sealed internal chamber, efficient atomization system, and dual-tone lighting make it both a functional scent diffuser and a visual design element.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CubeIcon, text: "Premium floor-standing aroma diffuser with sculptural design" },
              { icon: BeakerIcon, text: "Covers up to 550 m³" },
              { icon: SparklesIcon, text: "Compact footprint with strong diffusion output" },
              { icon: SpeakerXMarkIcon, text: "Ultra-quiet sealed chamber operation" },
              { icon: ShieldCheckIcon, text: "Aluminum alloy body with sleek finish" },
              { icon: LightBulbIcon, text: "Dual-tone ambient lighting" },
              { icon: HomeIcon, text: "Suitable for home and light commercial spaces" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD QUALITY ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Design & Build Quality</h2>
        
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Sculptural Floor-Standing Form</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                Titan Diffuser stands out with its modern pillar-inspired silhouette, designed to complement contemporary interiors. The form allows placement on floors, side tables, counters, or low platforms without overpowering the surrounding décor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Boutique interiors", "Hotel lounges", "Reception desks", "Living rooms & designer homes", "Premium retail spaces"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={Titan2} alt="Titan Sculptural Design" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={Titan3} alt="Aluminum Construction" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Aluminum Alloy Construction</h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-light italic">
                The diffuser is built using a high-quality aluminum alloy casing, offering long-term durability, resistance to surface wear, and a premium metallic appearance. The solid construction also helps reduce vibration and operational noise.
              </p>
              
              <div className="bg-slate-900 text-white p-8 rounded-3xl">
                <h4 className="text-xl font-serif mb-4 text-blue-400">Advanced Diffusion Performance</h4>
                <p className="text-slate-400 text-sm mb-4 font-bold uppercase tracking-widest text-[10px]">Controlled Coverage for Medium Spaces</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed">Designed to cover up to 550 cubic meters, ensuring a balanced scent presence, comfortable indoor atmosphere, and efficient fragrance consumption.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <BeakerIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">High-Efficiency Atomization</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Uses cold-air technology to convert oil into ultra-fine particles. No heat damage, clean diffusion, and a long-lasting aroma effect.</p>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100">
              <SpeakerXMarkIcon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-serif mb-4">Ultra-Quiet Operation</h3>
              <p className="text-blue-50 text-sm leading-relaxed font-light italic">Noise levels remain below 38 dB thanks to an engineered sealed internal chamber, ensuring the diffuser operates discreetly in customer-facing areas.</p>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <LightBulbIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Dual-Tone Ambient Lighting</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">Built-in dual-color temperature lighting allows the unit to blend into decorative placements, ambient environments, and premium lifestyle spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center tracking-tight">Technical Specifications</h2>
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
                  ["Product Type", "Floor-Standing Aroma Diffuser"],
                  ["Coverage Area", "Up to 550 m³"],
                  ["Fragrance Capacity", "110 ml"],
                  ["Voltage", "DC 12V"],
                  ["Power Consumption", "12W"],
                  ["Weight", "Approx. 1.5 kg"],
                  ["Noise Level", "≤38 dB"],
                  ["Body Material", "Aluminum alloy"],
                  ["Lighting", "Dual-tone ambient lighting"],
                  ["Design", "Compact floor-standing form"]
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

      {/* ================= SECTION 5: APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Boutiques & designer stores", "Hotel lounges & corridors", 
            "Reception areas", "Living rooms & luxury homes", "Small commercial spaces"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic">It is best suited for environments where aesthetic design and quiet performance are as important as fragrance delivery.</p>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight tracking-tight">How Titan Diffuser Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              Titan Diffuser uses cold-air diffusion technology to atomize fragrance oil into microscopic particles, dispersing them evenly throughout the space.
            </p>
            <div className="space-y-4 font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Consistent fragrance output</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Safe operation without heating elements</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Efficient oil usage</p>
            </div>
            <p className="text-slate-500 mt-8 text-sm italic">The sealed chamber design further enhances performance stability and reduces noise.</p>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-8 tracking-tight">Cold-Air Diffusion Technology</h4>
             <img src={Titan4} alt="Internal Chamber View" className="w-full h-64 object-contain rounded-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Why Choose Titan Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Elegant, design-focused floor-standing diffuser",
            "Quiet operation for professional environments",
            "Balanced scent coverage for medium spaces",
            "Durable aluminum construction",
            "Low maintenance and simple operation",
            "Suitable for both commercial and residential use"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto italic">Titan Diffuser is an excellent choice for businesses and homeowners looking for a premium yet understated aroma diffuser.</p>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & SUPPORT ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 text-center lg:text-left">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-8 flex items-center justify-center lg:justify-start gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-blue-600" /> Maintenance
            </h4>
            <ul className="space-y-4 text-slate-500 font-medium">
               <li>• Simple fragrance refill process</li>
               <li>• Durable internal components</li>
               <li>• Stable long-term performance</li>
            </ul>
          </div>
          <div className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl shadow-blue-100 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-8 flex items-center justify-center lg:justify-start gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-white" /> Cool Max Support
            </h4>
            <ul className="space-y-4 text-blue-50 font-medium">
               <li>• Product guidance & consultation</li>
               <li>• Fragrance recommendations</li>
               <li>• Ongoing maintenance and refill support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Floor-Standing Aroma Diffusers Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Titan Diffuser is part of Cool Max’s Floor-Standing Aroma Diffusers range, developed for spaces that need visible yet refined scent solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["AeroPillar Diffuser", "AirPole Pro Diffuser", "NanoPillar Diffuser"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#FAF9F6] border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Speak to Our Scent Experts</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a premium floor-standing aroma diffuser that complements your space while delivering reliable fragrance performance?
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Get Expert Recommendations</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Contact Cool Max Today</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TitanDiffuserPage;