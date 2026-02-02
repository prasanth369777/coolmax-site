import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  WifiIcon, 
  ClockIcon, 
  SunIcon, 
  CloudIcon, 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ShieldCheckIcon,
  HomeIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroCube1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp";
import AeroCube2 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp";
import AeroCube3 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/3.webp";
import AeroCube4 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/4.webp";

const OpalMistClockPage = () => {
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Smart Desktop & Lifestyle Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              OpalMist Clock Diffuser
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              Smart Desktop & Small Space Aroma Diffuser with Time, Temperature & Humidity Display
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              The OpalMist Clock Diffuser is a smart desktop aroma diffuser designed for homes, boutiques, bedrooms, and small commercial spaces where controlled fragrance diffusion and modern aesthetics matter. Combining cold atomization technology, WiFi & Bluetooth app control, and a built-in clock with temperature and humidity detection, this diffuser delivers both functionality and elegance in a compact form.
            </p>
            <p className="text-slate-500 mb-10 italic border-l-4 border-blue-600 pl-6">
              Perfect for users who want a home scent diffuser that blends seamlessly into everyday spaces, OpalMist Clock Diffuser creates a calm, soothing atmosphere without heat or water.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Get Expert Guidance <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center justify-center p-12 overflow-hidden">
              <img src={activeImg} alt="OpalMist Clock Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-16 h-20 rounded-xl border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="OpalMist variant thumb" />
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
              OpalMist Clock Diffuser is designed to enhance indoor ambiance through high-quality fragrance micro-droplets that disperse evenly across small spaces. Its intelligent system allows users to control scent intensity, spray intervals, and working time remotely, while the front digital display shows local time, temperature, and humidity for added convenience.
              This diffuser is ideal for users who want a smart home fragrance system that is quiet, efficient, and visually refined.
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
              { icon: HomeIcon, text: "Smart desktop & small space aroma diffuser" },
              { icon: WifiIcon, text: "WiFi & Bluetooth App Control" },
              { icon: ClockIcon, text: "Built-in digital clock display" },
              { icon: SunIcon, text: "Temperature & humidity detection" },
              { icon: Squares2X2Icon, text: "Infrared oil detection technology" },
              { icon: BeakerIcon, text: "Cold atomization (no heat, no water)" },
              { icon: ShieldCheckIcon, text: "Compact, modern aluminum design" },
              { icon: AdjustmentsHorizontalIcon, text: "Multiple scent intensity and timing options" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SMART CONTROL & CUSTOMIZATION ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-tight">Smart Control & Customization</h2>
        
        <div className="grid gap-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">WiFi & Bluetooth App Control</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">
                OpalMist Clock Diffuser can be controlled via mobile app, allowing users to:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Adjust intensity", "Set schedules", "Control intervals", "Manage remotely"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-400 font-medium text-sm italic">This makes it a convenient home diffuser machine for both personal and professional use.</p>
            </div>
            <div className="rounded-[2.5rem] bg-slate-100 p-8 order-1 md:order-2 flex justify-center">
               <img src={AeroCube2} alt="App Control Interface" className="w-full h-80 object-contain" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2.5rem] bg-slate-100 p-8 flex justify-center">
               <img src={AeroCube3} alt="OpalMist Multi-Function Display" className="w-full h-80 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Multiple Scent & Timing Options</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="p-6 bg-slate-900 text-white rounded-3xl text-center">
                    <span className="text-4xl font-black text-blue-400">7</span>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Intensity Levels</p>
                 </div>
                 <div className="p-6 bg-blue-600 text-white rounded-3xl text-center">
                    <span className="text-4xl font-black">9</span>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Timing Settings</p>
                 </div>
              </div>
              <p className="text-slate-500 font-light leading-relaxed">These options allow precise control over fragrance diffusion, ensuring the scent is never overpowering and always balanced.</p>
            </div>
          </div>

          {/* Feature 3: Cold Atomization */}
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 pointer-events-none" />
             <BeakerIcon className="w-16 h-16 text-blue-500 mx-auto mb-8" />
             <h3 className="text-2xl md:text-4xl font-serif mb-6">Advanced Cold Atomization Technology</h3>
             <h4 className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">Two-Fluid Cold Atomization</h4>
             <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8">The diffuser uses two-fluid cold atomization technology to break fragrance oil into fine micro-droplets. This process preserves fragrance quality, ensures even diffusion, and eliminates the need for heat or water.</p>
             <div className="flex flex-wrap justify-center gap-8">
                {["No Heat", "No Water", "Pure Essence"].map((tag, i) => (
                  <span key={i} className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest">{tag}</span>
                ))}
             </div>
          </div>

          {/* Feature 4: Environment Detection */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                <Squares2X2Icon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-2xl font-serif mb-4">Intelligent Oil Detection</h3>
                <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Infrared Oil Detection Technology</h4>
                <p className="text-slate-500 font-light leading-relaxed">The built-in infrared sensor monitors oil levels to ensure stable performance and prevent inefficient diffusion.</p>
             </div>
             <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                <CloudIcon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-2xl font-serif mb-4">Environment Detection</h3>
                <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Temperature & Humidity Detection</h4>
                <p className="text-slate-500 font-light leading-relaxed">OpalMist Clock Diffuser continuously detects room temperature and ambient humidity, making it a functional home scent system for daily living.</p>
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
                  ["Product Type", "Desktop & Small Space Aroma Diffuser"],
                  ["Fragrance Capacity", "200 ml"],
                  ["Voltage", "DC 12V"],
                  ["Power", "6W"],
                  ["Coverage Area", "200–300 m³"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "1.2 kg"],
                  ["Dimensions", "W158 × L87.7 × H171 mm"],
                  ["Material", "Aluminum"],
                  ["Atomization Technology", "Two-fluid cold atomization"]
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

      {/* ================= SECTION 5 & 6: QUIET & APPLICATIONS ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col justify-center">
             <SpeakerXMarkIcon className="w-12 h-12 text-blue-600 mb-8" />
             <h2 className="text-3xl font-serif mb-6">Quiet & Efficient Performance</h2>
             <p className="text-slate-500 mb-8 font-light">With a noise level of ≤40 dB, OpalMist Clock Diffuser operates quietly, providing consistent fragrance without disturbance.</p>
             <div className="grid grid-cols-2 gap-4">
                {["Bedrooms", "Study rooms", "Retail counters", "Reception desks"].map((item, i) => (
                  <span key={i} className="px-4 py-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600">{item}</span>
                ))}
             </div>
          </div>
          <div className="p-12 bg-slate-900 text-white rounded-[3rem] shadow-xl flex flex-col justify-center">
             <h2 className="text-3xl font-serif mb-8 text-blue-400">Ideal Applications</h2>
             <div className="space-y-4">
                {["Brand stores", "Bedrooms", "4S auto showrooms", "Hallways", "Small commercial areas", "Home interiors"].map((app, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-4">
                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                     <span className="text-slate-300 font-light">{app}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight">Why Choose OpalMist Clock Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Combines fragrance diffusion with time, temperature & humidity display",
            "Smart app control for modern lifestyles",
            "Cold atomization preserves fragrance quality",
            "Compact size with premium build",
            "Quiet and energy-efficient operation"
          ].map((text, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-colors">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-6 mx-auto" />
              <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-slate-400 font-medium italic">This diffuser is ideal for users seeking a best home fragrance system for small spaces.</p>
      </section>

      {/* ================= SECTION 8: MAINTENANCE ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-blue-600" /> Maintenance & Ease of Use
            </h4>
            <ul className="space-y-4 text-slate-500 font-medium">
               <li className="flex items-start gap-4"><CheckCircleIcon className="w-5 h-5 text-slate-300 shrink-0 mt-1"/> Easy fragrance oil replacement</li>
               <li className="flex items-start gap-4"><CheckCircleIcon className="w-5 h-5 text-slate-300 shrink-0 mt-1"/> Simple app-based operation</li>
               <li className="flex items-start gap-4"><CheckCircleIcon className="w-5 h-5 text-slate-300 shrink-0 mt-1"/> Minimal maintenance required</li>
               <li className="flex items-start gap-4"><CheckCircleIcon className="w-5 h-5 text-slate-300 shrink-0 mt-1"/> Durable aluminum construction for long-term use</li>
            </ul>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-8">Cool Max also provides guidance on fragrance selection and usage support when needed.</p>
          </div>
          <div className="relative">
             <img src={AeroCube4} alt="OpalMist Build Detail" className="w-full h-96 object-contain rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <span className="text-3xl font-black italic">Aviation</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Aluminum Material</p>
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto text-center border-t border-slate-100 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Part of Our Desktop & Small Space Collection</h2>
          <p className="text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            OpalMist Clock Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {["AromaDesk Diffuser", "ZenBox Mini Diffuser", "AeroCube Diffuser", "LuxePanel Diffuser"].map((range, i) => (
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
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 tracking-tight leading-tight">Create a Calm, Scented Space with OpalMist</h2>
          <p className="text-slate-400 text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for a smart desktop aroma diffuser that combines fragrance, function, and modern design?
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl">Contact Cool Max for product details</button>
            <button className="px-12 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all">Get expert guidance for your space</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OpalMistClockPage;