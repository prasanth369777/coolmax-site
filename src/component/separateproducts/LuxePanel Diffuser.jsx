import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  BoltIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BeakerIcon,
  Battery100Icon,
  ShieldCheckIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  Square3Stack3DIcon,
  ArrowsPointingOutIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO OV-5 / OV-5 PRO ================= */
import LuxePanel1 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/1.webp";
import LuxePanel2 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/2.webp";
import LuxePanel3 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/3.webp";
import LuxePanel4 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/4.webp";

const LuxePanelPage = () => {
  const [activeImg, setActiveImg] = useState(LuxePanel1);
  const gallery = [LuxePanel1, LuxePanel2, LuxePanel3, LuxePanel4];

  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20LuxePanel%20Diffuser.`;
  const contactPath = "/contact";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      
      {/* ================= HERO SECTION (OPTIMIZED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Battery-Powered Lifestyle Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight text-slate-900">
              LuxePanel Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Battery-Powered Desktop & Small Space Aroma Diffuser
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light text-justify md:text-left">
              The LuxePanel Diffuser is a modern battery scent diffuser designed for small to medium commercial and residential spaces where flexibility, quiet operation, and controlled fragrance diffusion are essential. With both battery-powered and Type-C plug-in options, LuxePanel offers unmatched convenience for environments where power access may vary.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-blue-600 pl-6 font-light">
              Its slim, panel-style design, intelligent control system, and efficient cold air atomization technology make it an ideal solution for offices, washrooms, elevators, and enclosed spaces requiring consistent scent coverage.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg font-sans">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 font-sans">
                Contact Cool Max <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="LuxePanel Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="LuxePanel variant" />
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
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-justify md:text-center">
              LuxePanel Diffuser uses two-fluid cold air diffusion technology to atomize fragrance oil into ultra-fine particles, ensuring even scent distribution without heat or residue. Designed for long battery life and low power consumption, this diffuser delivers reliable performance with minimal maintenance.
              The forward spray atomizer and intelligent control interface allow precise adjustment of working time and fragrance intensity, giving users full control over their scent environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-center text-white">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Battery100Icon, text: "Battery-powered and Type-C plug-in dual operation" },
              { icon: BoltIcon, text: "Low power consumption with long battery life" },
              { icon: BeakerIcon, text: "Two-fluid cold air atomization technology" },
              { icon: SparklesIcon, text: "Plug-in forward atomization sprayer" },
              { icon: DevicePhoneMobileIcon, text: "Smart LCD display with Bluetooth remote control" },
              { icon: Square3Stack3DIcon, text: "Customizable 24-hour working time and scent intensity" },
              { icon: ArrowsPointingOutIcon, text: "Slim, wall-friendly panel design" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center flex flex-col items-center">
                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight">Premium Design & Build Quality</h2>
        
        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Dual Power Flexibility</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light text-justify md:text-left">
                LuxePanel Diffuser offers two power modes in one device, ensuring seamless use across different scenarios.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                   <Battery100Icon className="w-6 h-6 text-blue-600" />
                   <div>
                     <p className="font-bold text-[10px] uppercase tracking-widest text-slate-900">Battery operation</p>
                     <p className="text-slate-400 text-[10px] font-light">Cable-free installation for flexible locations</p>
                   </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                   <BoltIcon className="w-6 h-6 text-blue-600" />
                   <div>
                     <p className="font-bold text-[10px] uppercase tracking-widest text-slate-900">Type-C plug-in</p>
                     <p className="text-slate-400 text-[10px] font-light">Power for continuous operation in permanent setups</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center">
               <img src={LuxePanel2} alt="Hybrid Power System" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center order-1">
               <img src={LuxePanel3} alt="LCD Interface" className="w-full h-full object-contain" />
            </div>
            <div className="order-2 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900">Smart Control & Custom Scheduling</h3>
              <p className="text-sm text-slate-500 mb-4 font-light text-justify md:text-left">The diffuser features a smart LCD display combined with Bluetooth remote control, allowing managers to:</p>
              <ul className="space-y-2">
                 {["Monitor device status in real time", "Adjust fragrance intensity", "Customize working schedules", "Control operation at any time"].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest text-left">
                       <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                    </li>
                 ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
               <BeakerIcon className="w-10 h-10 text-blue-400 mb-4" />
               <h3 className="text-xl font-serif mb-2">Advanced Cold Air Diffusion</h3>
               <p className="text-slate-400 text-xs leading-relaxed mb-4 font-light">Using two-fluid cold air atomization, LuxePanel atomizes fragrance finely and diffuses scent evenly without oil residue or overheating. </p>
               <div className="flex gap-4 text-[9px] font-black uppercase text-blue-200 tracking-widest">
                  <p>• Fine Atomization</p>
                  <p>• Purity preservation</p>
               </div>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
               <SpeakerXMarkIcon className="w-10 h-10 text-blue-600 mb-4" />
               <h3 className="text-xl font-serif mb-2 text-slate-900">Quiet & Energy-Efficient</h3>
               <p className="text-slate-500 text-xs leading-relaxed mb-4 font-light italic text-justify md:text-left">With noise levels below 35 dB, LuxePanel operates quietly, making it ideal for environments where silence and comfort are essential.</p>
               <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 inline-block">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Noise Level: ≤35 dB</p>
               </div>
            </div>
          </div>

          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
             <ArrowsPointingOutIcon className="w-12 h-12 text-blue-600 mb-6" />
             <h3 className="text-xl md:text-3xl font-serif mb-4 text-slate-900">Compact & Minimalist Design</h3>
             <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed font-light text-justify md:text-center">LuxePanel Diffuser is designed with a slim, modern profile that blends effortlessly into professional interiors. Its compact size makes it suitable for wall-mounted or discreet placement without disrupting aesthetics.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6 text-left">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center tracking-tight text-slate-900">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
              <div className="bg-slate-900 p-4 text-white text-center">
                <h3 className="font-bold uppercase tracking-widest text-[10px]">Standard Version (OV-5)</h3>
              </div>
              <table className="w-full border-collapse text-left">
                <tbody className="text-xs">
                  {[
                    ["Dimensions", "245 × 167 × 44 mm"],
                    ["Power", "1W / 6V"],
                    ["Fragrance Capacity", "500 ml"],
                    ["Coverage", "300–500 m³"],
                    ["Noise", "≤35 dB"]
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-bold text-slate-400 uppercase tracking-widest text-[8px]">{row[0]}</td>
                      <td className="p-3 text-slate-700 font-medium">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
              <div className="bg-blue-600 p-4 text-white text-center">
                <h3 className="font-bold uppercase tracking-widest text-[10px]">Pro Version (OV-5 Pro)</h3>
              </div>
              <table className="w-full border-collapse text-left">
                <tbody className="text-xs">
                  {[
                    ["Dimensions", "245 × 167 × 44 mm"],
                    ["Power", "2.5W / 6V"],
                    ["Fragrance Capacity", "500 ml"],
                    ["Coverage", "500–800 m³"],
                    ["Weight", "0.56 kg"]
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-bold text-slate-400 uppercase tracking-widest text-[8px]">{row[0]}</td>
                      <td className="p-3 text-slate-700 font-medium">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-center text-slate-900">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { icon: BeakerIcon, label: "Offices" },
            { icon: HomeIcon, label: "Rooms" },
            { icon: ShieldCheckIcon, label: "Toilets" },
            { icon: Square3Stack3DIcon, label: "Elevators" },
            { icon: BeakerIcon, label: "Bathrooms" },
            { icon: ComputerDesktopIcon, label: "Commercial Interiors" }
          ].map((item, i) => (
            <div key={i} className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-3 min-w-[180px] justify-center">
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl">
          <div className="relative h-80">
             <img src={LuxePanel4} alt="LuxePanel Installation" className="w-full h-full object-contain rounded-[2rem] shadow-xl" />
             <div className="absolute -bottom-4 -right-4 p-6 bg-blue-600 text-white rounded-2xl shadow-xl">
                <span className="text-xl font-black italic uppercase">Hybrid Power</span>
                <p className="text-[8px] font-bold uppercase tracking-widest">Battery + Type-C</p>
             </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight leading-tight">Why Choose LuxePanel Diffuser</h2>
            <div className="space-y-3">
              {[
                "Dual power operation for flexible installation",
                "Fine and even fragrance diffusion",
                "Smart control with LCD and Bluetooth",
                "Low noise and low energy consumption",
                "Suitable for continuous daily use"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-400 font-medium text-[11px] italic">Dependable for businesses seeking a compact, battery-powered aroma diffuser.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: COLLECTION ================= */}
      <section className="py-16 bg-slate-50 px-6 text-center">
        <div className="max-w-[1200px] mx-auto border-t border-slate-100 pt-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">The Desktop & Small Space Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light text-center">
            LuxePanel Diffuser is part of Cool Max’s Desktop & Small Space Aroma Diffusers collection — designed for precision scenting where reliability, control, and aesthetics matter.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {["OpalMist Clock", "AromaDesk Diffuser", "ZenBox Mini"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer text-center">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: CTA ================= */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Enhance Small Spaces with Smart Scenting</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light text-center">
            Looking for a battery scent diffuser that delivers professional results with flexible installation?
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 font-sans">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
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

export default LuxePanelPage;