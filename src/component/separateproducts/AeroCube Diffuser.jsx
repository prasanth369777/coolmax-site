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
  ArrowsPointingOutIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO M41-B ================= */
import AeroCube1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import AeroCube2 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp";
import AeroCube3 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/3.webp";
import AeroCube4 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/4.webp";

const AeroCubePage = () => {
  const [activeImg, setActiveImg] = useState(AeroCube1);
  const gallery = [AeroCube1, AeroCube2, AeroCube3, AeroCube4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AeroCube%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      
      {/* ================= HERO SECTION (REDUCED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <SparklesIcon className="w-4 h-4" /> Professional Small Space Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              AeroCube Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Compact and Efficient Desktop & Small Space Aroma Diffuser
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light">
              The AeroCube Diffuser is a compact and efficient desktop & small space aroma diffuser designed for controlled fragrance diffusion in professional and residential environments. With a 300 m³ coverage capacity, low-noise operation, and a clean, modern design, AeroCube is ideal for areas that require consistent scenting without visual clutter or complex installation.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-blue-600 pl-6 font-light">
              Built for reliability and ease of use, this diffuser combines high-performance atomization, adjustable working cycles, and a built-in fan system to deliver even fragrance distribution across enclosed spaces.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to an Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Get Quote <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="AeroCube Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="AeroCube variant" />
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
              AeroCube Diffuser is engineered to provide balanced and stable aroma diffusion for small to medium-sized areas. Its simple cube-style design allows it to blend seamlessly into different interiors while maintaining strong diffusion efficiency.
              The diffuser supports adjustable work and pause timing, fragrance concentration control, and easy maintenance, making it suitable for continuous daily operation in commercial settings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, text: "Compact desktop & wall-mounted aroma diffuser" },
              { icon: ArrowsPointingOutIcon, text: "Coverage up to 300 m³" },
              { icon: AdjustmentsHorizontalIcon, text: "Adjustable work / pause time & concentration" },
              { icon: BeakerIcon, text: "High-performance atomizer with low noise" },
              { icon: BoltIcon, text: "Built-in fan for faster and even diffusion" },
              { icon: WrenchScrewdriverIcon, text: "Plug-in atomizer for easy replacement" },
              { icon: SparklesIcon, text: "Minimalist design for multiple environments" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Premium Design & Build Quality</h2>
        
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4">Clean & Minimal Design</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light">
                The AeroCube Diffuser features a beautiful, simple, and modern design that coordinates well with various interior styles. Its compact form makes it suitable for visible placement without disrupting the surrounding décor.
              </p>
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-white border border-slate-200" /> <span className="text-[10px] font-black uppercase">White</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-black" /> <span className="text-[10px] font-black uppercase">Black</span></div>
              </div>
              <p className="text-slate-400 text-xs italic">This flexibility allows it to blend effortlessly into both light and dark interiors.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={AeroCube2} alt="AeroCube Minimal Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center">
               <img src={AeroCube3} alt="Diffusion Control Interface" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4">Adjustable Diffusion Control</h3>
              <p className="text-sm text-slate-500 mb-4 font-light">AeroCube Diffuser allows users total authority over their environment:</p>
              <ul className="space-y-3 mb-6">
                 {["Set custom working and pause intervals", "Adjust fragrance concentration", "Maintain a balanced scent level"].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest text-left">
                       <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                    </li>
                 ))}
              </ul>
              <p className="text-slate-400 text-xs italic border-l-2 border-slate-200 pl-4">This ensures fragrance output is consistent, effective, and never overpowering.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl text-left">
               <BeakerIcon className="w-10 h-10 text-blue-400 mb-4" />
               <h3 className="text-xl font-serif mb-2">High-Performance Atomization</h3>
               <p className="text-slate-400 text-xs leading-relaxed mb-4 font-light">Equipped with a new high-performance atomizer ensuring fine even fragrance, low noise, and stable volume. The built-in fan accelerates distribution to every corner.</p>
               <div className="flex gap-4 text-[9px] font-black uppercase text-blue-100 tracking-widest">
                  <p>• Fine Atomization</p>
                  <p>• Low Noise</p>
                  <p>• Fan Acceleration</p>
               </div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl shadow-blue-100 text-left">
               <WrenchScrewdriverIcon className="w-10 h-10 text-white mb-4" />
               <h3 className="text-xl font-serif mb-2">Easy Maintenance</h3>
               <p className="text-blue-50 text-xs leading-relaxed mb-4 font-light italic">The plug-in atomizer design allows for quick replacement and easy cleaning, reducing downtime for busy commercial facilities.</p>
               <div className="p-3 bg-white/10 rounded-xl border border-white/10 inline-block">
                  <p className="text-[10px] font-bold uppercase tracking-widest">Low-Maintenance Guaranteed</p>
               </div>
            </div>
          </div>

          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
             <SpeakerXMarkIcon className="w-12 h-12 text-blue-600 mb-6" />
             <h3 className="text-xl md:text-3xl font-serif mb-4">Quiet & Reliable Performance</h3>
             <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed font-light mb-6">With a noise level of ≤36 dB, AeroCube Diffuser operates quietly, ensuring comfort without disturbance in sensitive professional settings.</p>
             <div className="flex flex-wrap justify-center gap-2">
                {["Offices", "Corridors", "Elevator lobbies", "Washrooms", "Meeting rooms"].map((place, i) => (
                  <span key={i} className="px-4 py-1.5 bg-slate-50 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400">{place}</span>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center tracking-tight">Technical Specifications</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Specification</th>
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px]">Details</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[
                  ["Product Name", "AeroCube Diffuser"],
                  ["Product Category", "Desktop & Small Space Series"],
                  ["Fragrance Capacity", "200 ml"],
                  ["Coverage Area", "300 m³"],
                  ["Voltage / Power", "DC 12V / 6W"],
                  ["Oil Consumption", "0.79 ml/h ±5%"],
                  ["Noise Level", "≤36 dB"],
                  ["Dimensions", "W147 × D84 × H202 mm"],
                  ["Application Areas", "Room, Corridor, Elevator Hall, Toilet"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-left">
                    <td className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[9px]">{row[0]}</td>
                    <td className="p-4 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 & 6: APPLICATIONS & WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Office rooms", "Corridors & hallways", "Elevator halls", "Washrooms", "Small commercial interiors"].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
          <div className="relative h-80">
             <img src={AeroCube4} alt="Close-up Detail" className="w-full h-full object-contain rounded-[2rem] shadow-xl" />
             <div className="absolute -bottom-4 -right-4 p-6 bg-blue-600 text-white rounded-2xl shadow-xl">
                <span className="text-2xl font-black italic">300m³</span>
                <p className="text-[8px] font-bold uppercase tracking-widest">Strong Coverage</p>
             </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight leading-tight">Why Choose AeroCube Diffuser</h2>
            <div className="space-y-3">
              {[
                "Compact design with professional performance",
                "Stable fragrance output for small and medium spaces",
                "Low noise operation",
                "Easy maintenance and atomizer replacement",
                "Suitable for commercial and residential use"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-400 font-medium text-[11px] italic">AeroCube Diffuser is a dependable choice for businesses seeking consistent performance.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: COLLECTION ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-100 pt-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight">The Desktop & Small Space Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            The AeroCube Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category — designed for controlled environments where precision and simplicity matter.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {["OpalMist Clock", "AromaDesk Diffuser", "ZenBox Mini", "LuxePanel Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Create a Fresh & Welcoming Environment</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light font-sans">
            Looking for a compact aroma diffuser for offices, corridors, or washrooms? Our experts are ready to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 font-sans">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AeroCubePage;