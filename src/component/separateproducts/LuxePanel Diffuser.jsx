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
  ComputerDesktopIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import LuxePanel1 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/1.webp";
import LuxePanel2 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/2.webp";
import LuxePanel3 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/3.webp";
import LuxePanel4 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser/4.webp";

const LuxePanelPage = () => {
  const [activeImg, setActiveImg] = useState(LuxePanel1);
  const gallery = [LuxePanel1, LuxePanel2, LuxePanel3, LuxePanel4];

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
              Battery-Powered Lifestyle Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              LuxePanel Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Battery-Powered Desktop & Small Space Aroma Diffuser
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The LuxePanel Diffuser is a modern battery scent diffuser designed for small to medium commercial and residential spaces where flexibility, quiet operation, and controlled fragrance diffusion are essential. With both battery-powered and Type-C plug-in options, LuxePanel offers unmatched convenience for environments where power access may vary.
            </p>
            <p className="text-slate-500 mb-10 italic border-l-4 border-blue-600 pl-6">
              Its slim, panel-style design, intelligent control system, and efficient cold air atomization technology make it an ideal solution for offices, washrooms, elevators, and enclosed spaces requiring consistent scent coverage.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Experience Controlled Diffusion <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="LuxePanel Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="LuxePanel variant thumb" />
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
              LuxePanel Diffuser uses two-fluid cold air diffusion technology to atomize fragrance oil into ultra-fine particles, ensuring even scent distribution without heat or residue. Designed for long battery life and low power consumption, this diffuser delivers reliable performance with minimal maintenance.
              The forward spray atomizer and intelligent control interface allow precise adjustment of working time and fragrance intensity, giving users full control over their scent environment.
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
              { icon: Battery100Icon, text: "Battery-powered and Type-C plug-in dual operation" },
              { icon: BoltIcon, text: "Low power consumption with long battery life" },
              { icon: BeakerIcon, text: "Two-fluid cold air atomization technology" },
              { icon: SparklesIcon, text: "Plug-in forward atomization sprayer" },
              { icon: DevicePhoneMobileIcon, text: "Smart LCD display with Bluetooth remote control" },
              { icon: Square3Stack3DIcon, text: "Customizable 24-hour working time and scent intensity" },
              { icon: ArrowsPointingOutIcon, text: "Slim, wall-friendly panel design" }
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
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Dual Power Flexibility</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                LuxePanel Diffuser offers two power modes in one device, ensuring seamless use across different scenarios.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                   <Battery100Icon className="w-8 h-8 text-blue-600" />
                   <div>
                     <p className="font-bold text-xs uppercase tracking-widest text-slate-900">Battery operation</p>
                     <p className="text-slate-400 text-xs font-light">Cable-free installation for flexible locations</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                   <BoltIcon className="w-8 h-8 text-blue-600" />
                   <div>
                     <p className="font-bold text-xs uppercase tracking-widest text-slate-900">Type-C plug-in</p>
                     <p className="text-slate-400 text-xs font-light">Power for continuous operation in permanent setups</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={LuxePanel2} alt="Dual Power Flexibility" className="w-full h-80 object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={LuxePanel3} alt="Smart Control Interface" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Smart Control & Custom Scheduling</h3>
              <p className="text-slate-500 mb-6 font-light">The diffuser features a smart LCD display combined with Bluetooth remote control, allowing facility managers to:</p>
              <ul className="space-y-4 mb-8">
                 {["Monitor device status in real time", "Adjust fragrance intensity", "Customize working schedules", "Control operation at any time"].map((li, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-700 font-bold text-xs uppercase tracking-widest">
                       <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0" /> {li}
                    </li>
                 ))}
              </ul>
              <p className="text-slate-400 text-sm italic">Ensures precise scent management throughout the day.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl">
               <BeakerIcon className="w-12 h-12 text-blue-400 mb-6" />
               <h3 className="text-2xl font-serif mb-4">Advanced Cold Air Diffusion</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Using two-fluid cold air atomization, LuxePanel atomizes fragrance finely and diffuses scent evenly without oil residue or overheating. </p>
               <div className="space-y-2 text-[10px] font-black uppercase text-blue-100 tracking-widest">
                  <p>• Fine Atomization</p>
                  <p>• Even Diffusion</p>
                  <p>• Preserves Quality</p>
               </div>
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
               <SpeakerXMarkIcon className="w-12 h-12 text-blue-600 mb-6" />
               <h3 className="text-2xl font-serif mb-4">Quiet & Energy-Efficient</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light italic">With noise levels below 35 dB, LuxePanel operates quietly, making it ideal for environments where silence and comfort are essential.</p>
               <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Low Noise Level: ≤35 dB</p>
               </div>
            </div>
          </div>

          <div className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center text-center">
             <ArrowsPointingOutIcon className="w-16 h-16 text-blue-600 mb-8" />
             <h3 className="text-2xl md:text-4xl font-serif mb-6">Compact & Minimalist Design</h3>
             <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">LuxePanel Diffuser is designed with a slim, modern profile that blends effortlessly into professional interiors. Its compact size makes it suitable for wall-mounted or discreet placement without disrupting aesthetics.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
             {/* Standard Version */}
             <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm">
                <div className="bg-slate-900 p-6 text-white text-center">
                   <h3 className="font-bold uppercase tracking-widest text-sm">LuxePanel – Standard Version</h3>
                </div>
                <table className="w-full text-left border-collapse">
                  <tbody className="text-sm">
                    {[
                      ["Product Name", "LuxePanel Diffuser"],
                      ["Product Category", "Desktop & Small Space Aroma Diffusers"],
                      ["Model Reference", "OV-5"],
                      ["Dimensions", "245 × 167 × 44 mm"],
                      ["Voltage", "6V"],
                      ["Power", "1W"],
                      ["Fragrance Capacity", "500 ml"],
                      ["Net Weight", "0.52 kg"],
                      ["Coverage Area", "300–500 m³"],
                      ["Noise Level", "≤35 dB"]
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[9px]">{row[0]}</td>
                        <td className="p-4 text-slate-700 font-medium">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
             {/* Pro Version */}
             <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm">
                <div className="bg-blue-600 p-6 text-white text-center">
                   <h3 className="font-bold uppercase tracking-widest text-sm">LuxePanel – Pro Version</h3>
                </div>
                <table className="w-full text-left border-collapse">
                  <tbody className="text-sm">
                    {[
                      ["Product Name", "LuxePanel Diffuser Pro"],
                      ["Product Category", "Desktop & Small Space Aroma Diffusers"],
                      ["Model Reference", "OV-5 Pro"],
                      ["Dimensions", "245 × 167 × 44 mm"],
                      ["Voltage", "6V"],
                      ["Power", "2.5W"],
                      ["Fragrance Capacity", "500 ml"],
                      ["Net Weight", "0.56 kg"],
                      ["Coverage Area", "500–800 m³"],
                      ["Noise Level", "≤35 dB"]
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
        </div>
      </section>

      {/* ================= SECTION 5: IDEAL APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: BeakerIcon, label: "Offices" },
            { icon: HomeIcon, label: "Rooms" },
            { icon: ShieldCheckIcon, label: "Toilets" },
            { icon: Square3Stack3DIcon, label: "Elevators" },
            { icon: BeakerIcon, label: "Bathrooms" },
            { icon: ComputerDesktopIcon, label: "Small commercial interiors" }
          ].map((item, i) => (
            <div key={i} className="px-8 py-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col items-center gap-4 min-w-[200px]">
                <item.icon className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">Its flexible power options and compact design make it adaptable to a wide range of enclosed spaces.</p>
      </section>

      {/* ================= SECTION 6: WHY CHOOSE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img src={LuxePanel4} alt="LuxePanel Installation" className="w-full h-96 object-contain rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <span className="text-3xl font-black italic">Hybrid</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Power Source</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Why Choose LuxePanel Diffuser</h2>
            <div className="space-y-4">
              {[
                "Dual power operation for flexible installation",
                "Fine and even fragrance diffusion",
                "Smart control with LCD and Bluetooth",
                "Low noise and low energy consumption",
                "Suitable for continuous daily use"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400 font-medium text-sm italic">LuxePanel Diffuser is a dependable solution for businesses and facilities seeking a compact, battery-powered aroma diffuser with professional performance.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: COLLECTION ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Desktop & Small Space Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            LuxePanel Diffuser is part of Cool Max’s Desktop & Small Space Aroma Diffusers collection — designed for precision scenting where reliability, control, and aesthetics matter.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["OpalMist Clock Diffuser", "AromaDesk Diffuser", "ZenBox Mini Diffuser"].map((range, i) => (
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
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Enhance Small Spaces with Smart Scenting</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a battery scent diffuser that delivers professional results with flexible installation?
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Contact Cool Max for expert recommendations</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Experience controlled and elegant aroma diffusion</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LuxePanelPage;