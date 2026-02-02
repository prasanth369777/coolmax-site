import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  BoltIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,

  HomeIcon,
  AdjustmentsHorizontalIcon,
 
  ArrowsPointingOutIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroCube1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import AeroCube2 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp";
import AeroCube3 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/3.webp";
import AeroCube4 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/4.webp";

const AeroCubePage = () => {
  const [activeImg, setActiveImg] = useState(AeroCube1);
  const gallery = [AeroCube1, AeroCube2, AeroCube3, AeroCube4];

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <SparklesIcon className="w-4 h-4" /> Professional Small Space Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              AeroCube Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Compact and Efficient Desktop & Small Space Aroma Diffuser
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The AeroCube Diffuser is a compact and efficient desktop & small space aroma diffuser designed for controlled fragrance diffusion in professional and residential environments. With a 300 m³ coverage capacity, low-noise operation, and a clean, modern design, AeroCube is ideal for areas that require consistent scenting without visual clutter or complex installation.
            </p>
            <p className="text-slate-500 mb-10 italic border-l-4 border-blue-600 pl-6">
              Built for reliability and ease of use, this diffuser combines high-performance atomization, adjustable working cycles, and a built-in fan system to deliver even fragrance distribution across enclosed spaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Get The Right Solution <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="AeroCube Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="AeroCube variant" />
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
              AeroCube Diffuser is engineered to provide balanced and stable aroma diffusion for small to medium-sized areas. Its simple cube-style design allows it to blend seamlessly into different interiors while maintaining strong diffusion efficiency.
              The diffuser supports adjustable work and pause timing, fragrance concentration control, and easy maintenance, making it suitable for continuous daily operation in commercial settings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-24 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HomeIcon, text: "Compact desktop & wall-mounted aroma diffuser" },
              { icon: ArrowsPointingOutIcon, text: "Coverage up to 300 m³" },
              { icon: AdjustmentsHorizontalIcon, text: "Adjustable work / pause time & concentration" },
              { icon: BeakerIcon, text: "High-performance atomizer with low noise" },
              { icon: BoltIcon, text: "Built-in fan for faster and even diffusion" },
              { icon: WrenchScrewdriverIcon, text: "Plug-in atomizer for easy replacement" },
              { icon: SparklesIcon, text: "Minimalist design for multiple environments" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PREMIUM DESIGN & BUILD ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Premium Design & Build Quality</h2>
        
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Clean & Minimal Design</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                The AeroCube Diffuser features a beautiful, simple, and modern design that coordinates well with various interior styles. Its compact form makes it suitable for visible placement without disrupting the surrounding décor.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-white border border-slate-200" /> <span className="text-xs font-bold uppercase">White</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-black" /> <span className="text-xs font-bold uppercase">Black</span></div>
              </div>
              <p className="text-slate-400 text-sm italic">This flexibility allows it to blend effortlessly into both light and dark interiors.</p>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={AeroCube2} alt="AeroCube Minimal Design" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={AeroCube3} alt="Diffusion Control Interface" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Adjustable Diffusion Control</h3>
              <p className="text-slate-500 mb-6 font-light">AeroCube Diffuser allows users total authority over their environment:</p>
              <ul className="space-y-4 mb-8">
                 {["Set custom working and pause intervals", "Adjust fragrance concentration", "Maintain a balanced scent level"].map((li, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-700 font-bold text-xs uppercase tracking-widest">
                       <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0" /> {li}
                    </li>
                 ))}
              </ul>
              <p className="text-slate-400 text-sm italic border-l-4 border-slate-200 pl-4">This ensures fragrance output is consistent, effective, and never overpowering.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl">
               <BeakerIcon className="w-12 h-12 text-blue-400 mb-6" />
               <h3 className="text-2xl font-serif mb-4">High-Performance Atomization</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Equipped with a new high-performance atomizer ensuring fine even fragrance, low noise, and stable volume. The built-in fan accelerates distribution to every corner.</p>
               <div className="space-y-2 text-[10px] font-black uppercase text-blue-100 tracking-widest">
                  <p>• Fine Atomization</p>
                  <p>• Low Noise</p>
                  <p>• Built-in Fan Acceleration</p>
               </div>
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl shadow-blue-100">
               <WrenchScrewdriverIcon className="w-12 h-12 text-white mb-6" />
               <h3 className="text-2xl font-serif mb-4">Easy Maintenance & Operation</h3>
               <p className="text-blue-50 text-sm leading-relaxed mb-6 font-light italic">The plug-in atomizer design allows for quick replacement and easy cleaning, reducing downtime for busy commercial facilities.</p>
               <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest">Low-Maintenance Guaranteed</p>
               </div>
            </div>
          </div>

          <div className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center text-center">
             <SpeakerXMarkIcon className="w-16 h-16 text-blue-600 mb-8" />
             <h3 className="text-2xl md:text-4xl font-serif mb-6">Quiet & Reliable Performance</h3>
             <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mb-8">With a noise level of ≤36 dB, AeroCube Diffuser operates quietly, ensuring comfort without disturbance in sensitive professional settings.</p>
             <div className="flex flex-wrap justify-center gap-4">
                {["Offices", "Corridors", "Elevator lobbies", "Washrooms", "Meeting rooms"].map((place, i) => (
                  <span key={i} className="px-6 py-2 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">{place}</span>
                ))}
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
                  ["Product Name", "AeroCube Diffuser"],
                  ["Product Category", "Desktop & Small Space Aroma Diffusers"],
                  ["Fragrance Capacity", "200 ml"],
                  ["Coverage Area", "300 m³"],
                  ["Voltage / Power", "DC 12V / 6W"],
                  ["Oil Consumption", "0.79 ml/h ±5%"],
                  ["Noise Level", "≤36 dB"],
                  ["Net Weight", "0.71 kg"],
                  ["Dimensions", "W147 × D84 × H202 mm"],
                  ["Color Options", "White, Black"],
                  ["MOQ", "30 Units"],
                  ["Application Areas", "Room, Corridor, Elevator Hall, Toilet"]
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

      {/* ================= SECTION 5: IDEAL APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Office rooms", "Corridors & hallways", "Elevator halls", 
            "Washrooms", "Small commercial interiors"
          ].map((item, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-sm font-bold text-slate-700 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">Its compact size and strong diffusion capability make it a versatile solution across multiple environments.</p>
      </section>

      {/* ================= SECTION 6: WHY CHOOSE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img src={AeroCube4} alt="Close-up Detail" className="w-full h-96 object-contain rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <span className="text-3xl font-black italic">300m³</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Strong Coverage</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Why Choose AeroCube Diffuser</h2>
            <div className="space-y-4">
              {[
                "Compact design with professional performance",
                "Stable fragrance output for small and medium spaces",
                "Low noise operation",
                "Easy maintenance and atomizer replacement",
                "Suitable for commercial and residential use"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400 font-medium text-sm italic">AeroCube Diffuser is a dependable choice for businesses seeking a compact commercial scent diffuser with consistent performance.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: COLLECTION ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Desktop & Small Space Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            The AeroCube Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category — designed for controlled environments where precision and simplicity matter.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {["OpalMist Clock Diffuser", "AromaDesk Diffuser", "ZenBox Mini Diffuser", "LuxePanel Diffuser"].map((range, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500 cursor-pointer text-center">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: CTA ================= */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Create a Fresh & Welcoming Environment</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a compact aroma diffuser for offices, corridors, or washrooms? Our experts are ready to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Contact Cool Max for expert guidance</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Get the right solution for your space</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroCubePage;