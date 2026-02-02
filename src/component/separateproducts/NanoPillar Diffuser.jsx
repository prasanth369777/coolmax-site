import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  DevicePhoneMobileIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  Battery100Icon,
  ShieldCheckIcon,
 
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import NanoPillar1 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/1.webp";
import NanoPillar2 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/2.webp";
import NanoPillar3 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/3.webp";
import NanoPillar4 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/4.webp";

const NanoPillarPage = () => {
  const [activeImg, setActiveImg] = useState(NanoPillar1);
  const gallery = [NanoPillar1, NanoPillar2, NanoPillar3, NanoPillar4];

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
              Boutique Floor-Standing System
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              NanoPillar Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Compact Floor-Standing Aroma Diffuser for Homes & Boutique Spaces
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The NanoPillar Diffuser is a compact, elegant floor-standing aroma diffuser designed for smaller commercial environments and premium residential interiors. With its slim pillar design and ultra-quiet operation, NanoPillar Diffuser delivers consistent fragrance diffusion without visual or acoustic disturbance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/5] bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="NanoPillar Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="NanoPillar variant thumb" />
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
              NanoPillar Diffuser combines minimalist aesthetics with professional aroma diffusion technology. Its slender, upright design allows it to blend effortlessly into modern interiors while providing reliable fragrance coverage for small to medium spaces.
              With optional lithium battery support, smart app control, and low noise operation, NanoPillar Diffuser offers flexibility for both residential and light commercial scenting needs.
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
              { icon: SparklesIcon, text: "Compact floor-standing aroma diffuser with slim pillar design" },
              { icon: BeakerIcon, text: "Covers up to 300 m³" },
              { icon: Battery100Icon, text: "Optional lithium battery version for flexible placement" },
              { icon: SpeakerXMarkIcon, text: "Ultra-silent operation" },
              { icon: DevicePhoneMobileIcon, text: "Bluetooth App control" },
              { icon: ShieldCheckIcon, text: "Suspended base design for visual elegance" },
              { icon: BeakerIcon, text: "Ideal for homes and boutique commercial spaces" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & AESTHETIC APPEAL ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Design & Aesthetic Appeal</h2>
        
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Slim Pillar Form Factor</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                NanoPillar Diffuser features a tall, cylindrical pillar design that occupies minimal floor space while maintaining a premium presence. Its clean vertical lines make it suitable for modern interiors without drawing unnecessary attention.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Living rooms", "Clothing & fashion stores", "Meeting rooms", "Home furnishing showrooms", "Health & wellness spaces"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={NanoPillar2} alt="NanoPillar Form" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={NanoPillar3} alt="Premium Finish" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Premium Metallic Finish</h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-light italic">
                Finished in a silvery metallic tone, the NanoPillar Diffuser complements contemporary interiors and luxury décor themes. Its elegant appearance allows it to function as both a fragrance device and a subtle design element.
              </p>
              
              <div className="bg-slate-900 text-white p-8 rounded-3xl">
                <h4 className="text-xl font-serif mb-4 text-blue-400 text-center">Smart Control & Operation</h4>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-100 mb-2">Bluetooth App Control</p>
                    <p className="text-slate-400 text-xs font-light">Manage fragrance intensity and working schedules conveniently.</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-100 mb-2">Manual Button Control</p>
                    <p className="text-slate-400 text-xs font-light">Quick on-device adjustments without accessing the app.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <Battery100Icon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Lithium Battery Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Optional 10,400mAh battery version for cordless operation up to one week. Perfect for events or spaces without nearby outlets.</p>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100">
              <SpeakerXMarkIcon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-serif mb-4">Ultra-Silent Mode</h3>
              <p className="text-blue-50 text-sm leading-relaxed font-light italic">Noise level ≤38 dB. Ideal for homes, meeting rooms, wellness centers, and reception areas where silence is important.</p>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
              <BeakerIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-serif mb-4">Efficient Consumption</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Controlled oil usage maintains fragrance balance while keeping operating costs low.</p>
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
                  ["Fragrance Capacity", "110 ml"],
                  ["Coverage Area", "Up to 300 m³"],
                  ["Voltage / Power", "Type-C, 5V-2A / 6W"],
                  ["Noise Level", "≤38 dBa"],
                  ["Weight", "Approx. 1.15 kg"],
                  ["Dimensions", "Ø125 mm × H412 mm"],
                  ["Control Options", "Button control & Bluetooth App"],
                  ["Battery Option", "Optional 10,400mAh lithium battery"],
                  ["Finish Color", "Silvery"]
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

      {/* ================= SECTION 5: RECOMMENDED APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Homes & living spaces", "Clothing and fashion stores", 
            "Meeting rooms", "Home furnishing halls", "Health & wellness centers"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic">It is designed for environments where soft fragrance diffusion and visual elegance are equally important.</p>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight tracking-tight">How NanoPillar Diffuser Works</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              NanoPillar Diffuser uses advanced cold-air atomization to convert fragrance oil into fine particles, allowing the scent to disperse evenly throughout the space.
            </p>
            <div className="space-y-4 font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Preserves fragrance quality</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Prevents residue buildup</p>
               <p className="flex items-center gap-3"><CheckCircleIcon className="w-4 h-4"/> Ensures smooth and consistent diffusion</p>
            </div>
            <p className="text-slate-500 mt-8 text-sm italic font-light">The suspended base design also helps maintain stable operation and balanced airflow.</p>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
             <BeakerIcon className="w-16 h-16 text-blue-500 mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-center mb-8 tracking-tight">Cold-Air Atomization Technology</h4>
             <img src={NanoPillar4} alt="Internal Atomizer" className="w-full h-64 object-contain rounded-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Why Choose NanoPillar Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Slim and elegant floor-standing design",
            "Suitable for homes and light commercial spaces",
            "Ultra-quiet operation",
            "Flexible power options with battery support",
            "Easy control via app or manual button",
            "Low maintenance and efficient performance"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto italic">NanoPillar Diffuser is an excellent choice for customers looking for a compact yet professional aroma diffuser that blends seamlessly into refined interiors.</p>
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
               <li>• Product consultation</li>
               <li>• Fragrance selection assistance</li>
               <li>• Maintenance and refill support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION RANGE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Floor-Standing Aroma Diffusers Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            NanoPillar Diffuser is part of Cool Max’s Floor-Standing Aroma Diffusers range, created to meet different space sizes and aesthetic requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["AeroPillar Diffuser", "AirPole Pro Diffuser", "Titan Diffuser"].map((range, i) => (
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
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a compact floor-standing aroma diffuser that fits perfectly into your space? Our specialists are here to guide you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Get Fragrance Recommendations</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Contact Cool Max Today</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NanoPillarPage;